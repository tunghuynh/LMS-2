/* ==========================================================================
   Global JavaScript - Core Utilities and Functions
   ========================================================================== */

// Global namespace
window.LMS = window.LMS || {};

/* ==========================================================================
   Theme Management
   ========================================================================== */

LMS.ThemeManager = {
  STORAGE_KEY: 'lms-theme',
  THEMES: ['light', 'dark'],
  
  init() {
    this.loadTheme();
    this.bindEvents();
  },
  
  loadTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    if (savedTheme && this.THEMES.includes(savedTheme)) {
      this.setTheme(savedTheme);
      return;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  },
  
  setTheme(theme) {
    if (!this.THEMES.includes(theme)) return;
    
    // Add transitioning flag to prevent flash
    document.documentElement.setAttribute('data-theme-switching', '');
    
    // Set theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    
    // Remove transitioning flag after a short delay
    setTimeout(() => {
      document.documentElement.removeAttribute('data-theme-switching');
    }, 50);
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  },
  
  bindEvents() {
    // Theme toggle buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('#themeToggle') || e.target.closest('#themeToggle')) {
        this.toggleTheme();
      }
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
};

/* ==========================================================================
   Language Management
   ========================================================================== */

LMS.LanguageManager = {
  STORAGE_KEY: 'lms-language',
  LANGUAGES: ['en', 'vi'],
  DEFAULT_LANGUAGE: 'en',
  translations: {},
  currentLanguage: null,
  // Fallback translations
  fallbackTranslations: {
    'app.title': 'LMS',
    'common.logout': 'Logout',
    'common.login': 'Login',
    'theme.toggle': 'Theme',
    'nav.dashboard': 'Dashboard',
    'dashboard.welcome': 'Welcome back!',
    'dashboard.overview': 'Overview',
    'footer.copyright': '© 2024 LMS. All rights reserved.'
  },
  
  async init() {
    await this.loadLanguage();
    this.bindEvents();
    this.updateUI();
  },
  
  async loadLanguage() {
    // Get saved language or default
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY);
    const language = savedLanguage && this.LANGUAGES.includes(savedLanguage) 
      ? savedLanguage 
      : this.DEFAULT_LANGUAGE;
    
    await this.setLanguage(language);
  },
  
  async setLanguage(language) {
    if (!this.LANGUAGES.includes(language)) return;
    
    try {
      // Load translation file - use relative path
      const basePath = window.location.pathname.includes('/pages/') || window.location.pathname.includes('/components/') 
        ? '../' 
        : '';
      const response = await fetch(`${basePath}data/translations/${language}.json`);
      if (!response.ok) throw new Error('Translation file not found');
      
      this.translations = await response.json();
      this.currentLanguage = language;
      localStorage.setItem(this.STORAGE_KEY, language);
      
      // Update HTML lang attribute
      document.documentElement.lang = language;
      
      // Update all translated elements
      this.updateUI();
      
      // Dispatch event
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language, translations: this.translations } 
      }));
    } catch (error) {
      console.error('Error loading language:', error);
      // Fallback to English if error
      if (language !== this.DEFAULT_LANGUAGE) {
        await this.setLanguage(this.DEFAULT_LANGUAGE);
      }
    }
  },
  
  updateUI() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.t(key);
      if (translation) {
        element.textContent = translation;
      }
    });
    
    // Update language toggle
    this.updateLanguageToggle();
  },
  
  t(key, params = {}) {
    // Support dot notation
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Try fallback translations
        value = this.fallbackTranslations[key];
        if (!value) {
          console.warn(`Translation key not found: ${key}`);
          return key; // Return key as fallback
        }
        break;
      }
    }
    
    // Replace parameters if any
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      Object.entries(params).forEach(([param, val]) => {
        value = value.replace(`{${param}}`, val);
      });
    }
    
    return value;
  },
  
  bindEvents() {
    // Language toggle button
    document.addEventListener('click', (e) => {
      if (e.target.matches('#languageToggle') || e.target.closest('#languageToggle')) {
        const currentLang = this.currentLanguage || 'en';
        const newLang = currentLang === 'en' ? 'vi' : 'en';
        this.setLanguage(newLang);
      }
    });
  },
  
  updateLanguageToggle() {
    const flagIcon = document.getElementById('flagIcon');
    const langCode = document.getElementById('langCode');
    
    if (flagIcon && langCode) {
      const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
      flagIcon.src = `${basePath}assets/images/flags/${this.currentLanguage}.svg`;
      flagIcon.alt = this.currentLanguage === 'en' ? 'English' : 'Tiếng Việt';
      langCode.textContent = this.currentLanguage.toUpperCase();
    }
  }
};

// Global translation function
window.t = (key, params) => LMS.LanguageManager.t(key, params);

/* ==========================================================================
   LocalStorage Utilities
   ========================================================================== */

LMS.Storage = {
  // Only store user preferences, NOT business data
  ALLOWED_KEYS: ['lms-theme', 'lms-language', 'lms-sidebar-state'],
  
  get(key) {
    if (!this.ALLOWED_KEYS.includes(key)) {
      console.warn(`Storage key "${key}" not allowed`);
      return null;
    }
    
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return localStorage.getItem(key);
    }
  },
  
  set(key, value) {
    if (!this.ALLOWED_KEYS.includes(key)) {
      console.warn(`Storage key "${key}" not allowed`);
      return false;
    }
    
    try {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, stringValue);
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  },
  
  remove(key) {
    if (!this.ALLOWED_KEYS.includes(key)) {
      console.warn(`Storage key "${key}" not allowed`);
      return false;
    }
    
    localStorage.removeItem(key);
    return true;
  },
  
  clear() {
    // Only clear allowed keys
    this.ALLOWED_KEYS.forEach(key => {
      localStorage.removeItem(key);
    });
  }
};

/* ==========================================================================
   Common Utility Functions
   ========================================================================== */

LMS.Utils = {
  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Format date
  formatDate(date, format = 'default') {
    const d = new Date(date);
    const lang = LMS.LanguageManager.currentLanguage || 'en';
    
    switch (format) {
      case 'short':
        return d.toLocaleDateString(lang);
      case 'long':
        return d.toLocaleDateString(lang, { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      case 'time':
        return d.toLocaleTimeString(lang);
      case 'datetime':
        return d.toLocaleString(lang);
      default:
        return d.toLocaleDateString(lang);
    }
  },
  
  // Generate unique ID
  generateId(prefix = 'lms') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Deep clone object
  deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => this.deepClone(item));
    if (obj instanceof Object) {
      const clonedObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = this.deepClone(obj[key]);
        }
      }
      return clonedObj;
    }
  },
  
  // Format file size
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },
  
  // Escape HTML
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
};

/* ==========================================================================
   Event Delegation Setup
   ========================================================================== */

LMS.Events = {
  init() {
    // Global click handler
    document.addEventListener('click', this.handleClick.bind(this), true);
    
    // Global form submit handler
    document.addEventListener('submit', this.handleSubmit.bind(this), true);
    
    // Global input handler
    document.addEventListener('input', this.handleInput.bind(this), true);
  },
  
  handleClick(e) {
    // Handle various click events
    const target = e.target;
    
    // Close dropdowns when clicking outside
    if (!target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
    
    // Close modals when clicking backdrop
    if (target.classList.contains('modal-backdrop')) {
      const modal = target.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
      }
    }
  },
  
  handleSubmit(e) {
    // Prevent default form submission for AJAX forms
    if (e.target.hasAttribute('data-ajax')) {
      e.preventDefault();
      // Form will be handled by specific component
    }
  },
  
  handleInput(e) {
    // Clear validation errors on input
    if (e.target.classList.contains('input--error')) {
      e.target.classList.remove('input--error');
      const errorMsg = e.target.parentElement.querySelector('.input__error');
      if (errorMsg) {
        errorMsg.textContent = '';
      }
    }
  }
};

/* ==========================================================================
   Initialization
   ========================================================================== */

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize theme (sync)
  LMS.ThemeManager.init();
  
  // Initialize language (async)
  await LMS.LanguageManager.init();
  
  // Initialize event delegation
  LMS.Events.init();
  
  // Dispatch ready event
  window.dispatchEvent(new CustomEvent('lmsReady'));
});

// Export for use in other modules
window.LMS = LMS;
