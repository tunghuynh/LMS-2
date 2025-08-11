/* ==========================================================================
   Authentication System - Session Management and Role-based Access
   ========================================================================== */

// Auth namespace
window.LMS = window.LMS || {};

LMS.Auth = {
  // Configuration
  SESSION_KEY: 'lms-session',
  TOKEN_KEY: 'lms-token',
  
  // User roles
  ROLES: {
    STUDENT: 'student',
    TEACHER: 'teacher',
    ADMIN: 'admin'
  },
  
  // Current session
  currentUser: null,
  currentToken: null,
  
  // Initialize auth system
  init() {
    this.loadSession();
    this.bindEvents();
  },
  
  // Load session from localStorage
  loadSession() {
    try {
      const session = localStorage.getItem(this.SESSION_KEY);
      const token = localStorage.getItem(this.TOKEN_KEY);
      
      if (session && token) {
        this.currentUser = JSON.parse(session);
        this.currentToken = token;
        this.updateAuthUI();
        return true;
      }
    } catch (error) {
      console.error('Error loading session:', error);
      this.clearSession();
    }
    return false;
  },
  
  // Save session to localStorage
  saveSession(user, token) {
    try {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
      localStorage.setItem(this.TOKEN_KEY, token);
      this.currentUser = user;
      this.currentToken = token;
      this.updateAuthUI();
    } catch (error) {
      console.error('Error saving session:', error);
    }
  },
  
  // Clear session
  clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser = null;
    this.currentToken = null;
    this.updateAuthUI();
  },
  
  // Login
  async login(username, password, role) {
    try {
      const response = await LMS.API.login(username, password, role);
      
      if (response.success) {
        this.saveSession(response.data.user, response.data.token);
        
        // Dispatch login event
        window.dispatchEvent(new CustomEvent('userLoggedIn', {
          detail: { user: response.data.user }
        }));
        
        // Redirect based on role
        this.redirectAfterLogin(response.data.user.role);
        
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error occurred' };
    }
  },
  
  // Logout
  logout() {
    this.clearSession();
    
    // Dispatch logout event
    window.dispatchEvent(new CustomEvent('userLoggedOut'));
    
    // Redirect to landing page
    if (window.location.pathname !== '/index.html') {
      window.location.href = '/index.html';
    }
  },
  
  // Register
  async register(userData) {
    try {
      const response = await LMS.API.register(userData);
      
      if (response.success) {
        // Auto-login after successful registration
        return await this.login(userData.username, userData.password, userData.role);
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Network error occurred' };
    }
  },
  
  // Check if user is authenticated
  isAuthenticated() {
    return !!this.currentUser && !!this.currentToken;
  },
  
  // Check if user has specific role
  hasRole(role) {
    return this.isAuthenticated() && this.currentUser.role === role;
  },
  
  // Check if user has any of the specified roles
  hasAnyRole(roles) {
    return this.isAuthenticated() && roles.includes(this.currentUser.role);
  },
  
  // Get current user
  getUser() {
    return this.currentUser;
  },
  
  // Get current token
  getToken() {
    return this.currentToken;
  },
  
  // Redirect based on role after login
  redirectAfterLogin(role) {
    const redirectMap = {
      [this.ROLES.STUDENT]: '/main.html',
      [this.ROLES.TEACHER]: '/main.html',
      [this.ROLES.ADMIN]: '/main.html'
    };
    
    const redirectUrl = redirectMap[role] || '/main.html';
    
    // If already on main page, just reload to update navigation
    if (window.location.pathname === '/main.html') {
      window.location.reload();
    } else {
      window.location.href = redirectUrl;
    }
  },
  
  // Update UI based on auth state
  updateAuthUI() {
    // Update user name display
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
      userNameElement.textContent = this.currentUser ? this.currentUser.fullName : '';
    }
    
    // Show/hide auth-related elements
    document.querySelectorAll('[data-auth-required]').forEach(element => {
      element.style.display = this.isAuthenticated() ? '' : 'none';
    });
    
    document.querySelectorAll('[data-auth-guest]').forEach(element => {
      element.style.display = !this.isAuthenticated() ? '' : 'none';
    });
    
    // Show/hide role-specific elements
    Object.values(this.ROLES).forEach(role => {
      document.querySelectorAll(`[data-role="${role}"]`).forEach(element => {
        element.style.display = this.hasRole(role) ? '' : 'none';
      });
    });
  },
  
  // Check page access permissions
  checkPageAccess(requiredRoles = []) {
    // If no roles specified, page is public
    if (requiredRoles.length === 0) return true;
    
    // Check if user is authenticated
    if (!this.isAuthenticated()) {
      this.redirectToLogin();
      return false;
    }
    
    // Check if user has required role
    if (!this.hasAnyRole(requiredRoles)) {
      this.showAccessDenied();
      return false;
    }
    
    return true;
  },
  
  // Redirect to login page
  redirectToLogin() {
    // Save current URL for redirect after login
    sessionStorage.setItem('redirectAfterLogin', window.location.href);
    window.location.href = '/index.html';
  },
  
  // Show access denied message
  showAccessDenied() {
    alert(t('auth.accessDenied'));
    window.history.back();
  },
  
  // Handle login form submission
  async handleLogin(formData) {
    const { username, password, role } = formData;
    
    // Validate inputs
    if (!username || !password || !role) {
      return { success: false, error: t('auth.fillAllFields') };
    }
    
    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add('loading');
    }
    
    // Attempt login
    const result = await this.login(username, password, role);
    
    // Reset button state
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.classList.remove('loading');
    }
    
    return result;
  },
  
  // Handle registration form submission
  async handleRegister(formData) {
    const { username, email, password, confirmPassword, role } = formData;
    
    // Validate inputs
    if (!username || !email || !password || !confirmPassword || !role) {
      return { success: false, error: t('auth.fillAllFields') };
    }
    
    if (password !== confirmPassword) {
      return { success: false, error: t('auth.passwordsDoNotMatch') };
    }
    
    if (password.length < 6) {
      return { success: false, error: t('auth.passwordTooShort') };
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: t('auth.invalidEmail') };
    }
    
    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add('loading');
    }
    
    // Attempt registration
    const result = await this.register({
      username,
      email,
      password,
      role,
      fullName: username, // Default to username, can be updated later
      createdAt: new Date().toISOString()
    });
    
    // Reset button state
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.classList.remove('loading');
    }
    
    return result;
  },
  
  // Bind events
  bindEvents() {
    // Logout button
    document.addEventListener('click', (e) => {
      if (e.target.matches('.logout-btn') || e.target.closest('.logout-btn')) {
        e.preventDefault();
        this.logout();
      }
    });
    
    // Check session on page visibility change
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.loadSession();
      }
    });
  }
};

// Initialize auth on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  LMS.Auth.init();
});

// Export Auth
window.LMS.Auth = LMS.Auth;
