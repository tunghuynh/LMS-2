/* ==========================================================================
   Navigation System - Sidebar and Iframe Navigation Management
   ========================================================================== */

// Navigation namespace
window.LMS = window.LMS || {};

LMS.Navigation = {
  // Configuration
  SIDEBAR_STATE_KEY: 'lms-sidebar-state',
  
  // Navigation structure based on user roles
  navStructure: {
    student: [
      {
        id: 'dashboard',
        icon: 'fa-chart-line',
        label: 'nav.dashboard',
        href: 'pages/dashboard-student.html'
      },
      {
        section: 'nav.sections.learning',
        items: [
          {
            id: 'courses',
            icon: 'fa-book',
            label: 'nav.courses',
            href: 'pages/courses.html'
          },
          {
            id: 'my-courses',
            icon: 'fa-book-open',
            label: 'nav.myCourses',
            href: 'pages/courses.html'
          },
          {
            id: 'progress',
            icon: 'fa-chart-bar',
            label: 'nav.progress',
            href: 'pages/progress.html'
          }
        ]
      },
      {
        section: 'nav.sections.assessment',
        items: [
          {
            id: 'quizzes',
            icon: 'fa-file-alt',
            label: 'nav.quizzes',
            href: 'pages/student-quizzes.html'
          },
          {
            id: 'results',
            icon: 'fa-trophy',
            label: 'nav.results',
            href: 'pages/quiz-results.html'
          }
        ]
      },
      {
        section: 'nav.sections.account',
        items: [
          {
            id: 'certificates',
            icon: 'fa-certificate',
            label: 'nav.certificates',
            href: 'pages/certificates.html'
          },
          {
            id: 'messaging',
            icon: 'fa-comments',
            label: 'nav.messaging',
            href: 'pages/messaging.html'
          },
          {
            id: 'profile',
            icon: 'fa-user',
            label: 'nav.profile',
            href: 'pages/profile-student.html'
          }
        ]
      }
    ],
    
    teacher: [
      {
        id: 'dashboard',
        icon: 'fa-chart-line',
        label: 'nav.dashboard',
        href: 'pages/dashboard-teacher.html'
      },
      {
        section: 'nav.sections.courseManagement',
        items: [
          {
            id: 'courses',
            icon: 'fa-book',
            label: 'nav.courses',
            href: 'pages/courses.html'
          },
          {
            id: 'lesson-builder',
            icon: 'fa-chalkboard',
            label: 'nav.lessonBuilder',
            href: 'pages/lesson-builder.html'
          },
          {
            id: 'lesson-analytics',
            icon: 'fa-chart-line',
            label: 'nav.lessonAnalytics',
            href: 'pages/lesson-analytics.html'
          },
          {
            id: 'categories',
            icon: 'fa-folder',
            label: 'nav.categories',
            href: 'pages/categories.html'
          }
        ]
      },
      {
        section: 'nav.sections.students',
        items: [
          {
            id: 'students',
            icon: 'fa-users',
            label: 'nav.students',
            href: 'pages/students.html'
          },
          {
            id: 'enrollment',
            icon: 'fa-clipboard-list',
            label: 'nav.enrollment',
            href: 'pages/enrollments.html'
          },
          {
            id: 'attendance',
            icon: 'fa-calendar-check',
            label: 'nav.attendance',
            href: 'pages/class-attendance.html'
          }
        ]
      },
      {
        section: 'nav.sections.assessment',
        items: [
          {
            id: 'quiz-builder',
            icon: 'fa-hammer',
            label: 'nav.quizBuilder',
            href: 'pages/quiz-builder.html'
          },
          {
            id: 'quiz-results',
            icon: 'fa-chart-line',
            label: 'nav.quizResults',
            href: 'pages/teacher-quiz-results.html'
          },
          {
            id: 'quiz-templates',
            icon: 'fa-clipboard-check',
            label: 'nav.quizTemplates',
            href: 'pages/quiz-templates.html'
          },
          {
            id: 'quiz-analytics',
            icon: 'fa-chart-bar',
            label: 'nav.quizAnalytics',
            href: 'pages/quiz-analytics.html'
          },
          {
            id: 'quiz-analytics',
            icon: 'fa-chart-bar',
            label: 'nav.quizAnalytics',
            href: 'pages/quiz-analytics.html'
          },
          {
            id: 'quiz-monitoring',
            icon: 'fa-desktop',
            label: 'nav.quizMonitoring',
            href: 'pages/quiz-monitoring.html'
          },
          {
            id: 'integration-tests',
            icon: 'fa-vial',
            label: 'nav.integrationTests',
            href: 'pages/integration-tests.html'
          }
        ]
      },
      {
        section: 'nav.sections.account',
        items: [
          {
            id: 'messaging',
            icon: 'fa-comments',
            label: 'nav.messaging',
            href: 'pages/messaging.html'
          },
          {
            id: 'profile',
            icon: 'fa-user',
            label: 'nav.profile',
            href: 'pages/profile-teacher.html'
          }
        ]
      }
    ],
    
    admin: [
      {
        id: 'dashboard',
        icon: 'fa-chart-line',
        label: 'nav.dashboard',
        href: 'pages/dashboard-admin.html'
      },
      {
        section: 'nav.sections.userManagement',
        items: [
          {
            id: 'users',
            icon: 'fa-users',
            label: 'nav.users',
            href: 'pages/users.html'
          },
          {
            id: 'permissions',
            icon: 'fa-user-shield',
            label: 'nav.permissions',
            href: 'pages/permissions.html'
          },
          {
            id: 'classes',
            icon: 'fa-school',
            label: 'nav.classes',
            href: 'pages/classes.html'
          },
          {
            id: 'activity-logs',
            icon: 'fa-clipboard-list',
            label: 'nav.activityLogs',
            href: 'pages/logs.html'
          },
          {
            id: 'integration-tests',
            icon: 'fa-vial',
            label: 'nav.integrationTests',
            href: 'pages/integration-tests.html'
          }
        ]
      },
      {
        section: 'nav.sections.courseManagement',
        items: [
          {
            id: 'courses',
            icon: 'fa-book',
            label: 'nav.courses',
            href: 'pages/courses.html'
          },
          {
            id: 'lesson-builder',
            icon: 'fa-chalkboard',
            label: 'nav.lessonBuilder',
            href: 'pages/lesson-builder.html'
          },
          {
            id: 'lesson-analytics',
            icon: 'fa-chart-line',
            label: 'nav.lessonAnalytics',
            href: 'pages/lesson-analytics.html'
          },
          {
            id: 'categories',
            icon: 'fa-folder',
            label: 'nav.categories',
            href: 'pages/categories.html'
          },
          {
            id: 'enrollments',
            icon: 'fa-clipboard-list',
            label: 'nav.enrollment',
            href: 'pages/enrollments.html'
          },
          {
            id: 'attendance',
            icon: 'fa-calendar-check',
            label: 'nav.attendance',
            href: 'pages/class-attendance.html'
          }
        ]
      },
      {
        section: 'nav.sections.learning',
        items: [
          {
            id: 'progress',
            icon: 'fa-chart-bar',
            label: 'nav.progress',
            href: 'pages/progress.html'
          },
          {
            id: 'certificates',
            icon: 'fa-certificate',
            label: 'nav.certificates',
            href: 'pages/certificates.html'
          }
        ]
      },
      {
        section: 'nav.sections.assessment',
        items: [
          {
            id: 'quiz-builder',
            icon: 'fa-hammer',
            label: 'nav.quizBuilder',
            href: 'pages/quiz-builder.html'
          },
          {
            id: 'quizzes',
            icon: 'fa-file-alt',
            label: 'nav.quizzes',
            href: 'pages/quizzes.html'
          },
          {
            id: 'quiz-results',
            icon: 'fa-chart-line',
            label: 'nav.quizResults',
            href: 'pages/quiz-results.html'
          },
          {
            id: 'quiz-templates',
            icon: 'fa-clipboard-check',
            label: 'nav.quizTemplates',
            href: 'pages/quiz-templates.html'
          },
          {
            id: 'quiz-analytics',
            icon: 'fa-chart-bar',
            label: 'nav.quizAnalytics',
            href: 'pages/quiz-analytics.html'
          },
          {
            id: 'quiz-analytics',
            icon: 'fa-analytics',
            label: 'nav.quizAnalytics',
            href: 'pages/quiz-analytics.html'
          },
          {
            id: 'quiz-monitoring',
            icon: 'fa-desktop',
            label: 'nav.quizMonitoring',
            href: 'pages/quiz-monitoring.html'
          }
        ]
      },
      {
        section: 'nav.sections.system',
        items: [
          {
            id: 'settings',
            icon: 'fa-cogs',
            label: 'nav.settings',
            href: 'pages/settings.html'
          },
          {
            id: 'reports',
            icon: 'fa-chart-bar',
            label: 'nav.reports',
            href: 'pages/reports.html'
          }
        ]
      },
      {
        section: 'nav.sections.account',
        items: [
          {
            id: 'messaging',
            icon: 'fa-comments',
            label: 'nav.messaging',
            href: 'pages/messaging.html'
          },
          {
            id: 'profile',
            icon: 'fa-user',
            label: 'nav.profile',
            href: 'pages/profile-admin.html'
          }
        ]
      }
    ]
  },
  
  // Current state
  currentPage: null,
  sidebarExpanded: true,
  
  // Initialize navigation
  init() {
    this.loadSidebarState();
    this.buildNavigation();
    this.bindEvents();
    this.handleInitialNavigation();
  },
  
  // Load sidebar state from localStorage
  loadSidebarState() {
    const savedState = LMS.Storage.get(this.SIDEBAR_STATE_KEY);
    if (savedState !== null) {
      this.sidebarExpanded = savedState;
      this.updateSidebarState();
    }
  },
  
  // Save sidebar state to localStorage
  saveSidebarState() {
    LMS.Storage.set(this.SIDEBAR_STATE_KEY, this.sidebarExpanded);
  },
  
  // Build navigation based on user role
  buildNavigation() {
    const user = LMS.Auth.getUser();
    if (!user) return;
    
    const navList = document.getElementById('navList');
    if (!navList) return;
    
    const navItems = this.navStructure[user.role] || [];
    navList.innerHTML = '';
    
    navItems.forEach(item => {
      if (item.section) {
        // Section header
        const section = document.createElement('li');
        section.className = 'nav-section';
        section.innerHTML = `<div class="nav-section-title" data-translate="${item.section}"></div>`;
        navList.appendChild(section);
        
        // Section items
        item.items.forEach(subItem => {
          navList.appendChild(this.createNavItem(subItem));
        });
      } else {
        // Direct item
        navList.appendChild(this.createNavItem(item));
      }
    });
    
    // Update translations
    if (LMS.LanguageManager) {
      LMS.LanguageManager.updateUI();
    }
  },
  
  // Create navigation item
  createNavItem(item) {
    const li = document.createElement('li');
    li.className = 'nav-item';
    
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = '#';
    a.setAttribute('data-page', item.id);
    a.setAttribute('data-href', item.href);
    
    a.innerHTML = `
      <span class="nav-icon"><i class="fas ${item.icon}"></i></span>
      <span class="nav-text" data-translate="${item.label}"></span>
    `;
    
    li.appendChild(a);
    return li;
  },
  
  // Navigate to page
  navigateTo(href, pageId = null) {
    const iframe = document.getElementById('contentFrame');
    if (!iframe) return;
    
    // Use relative path directly
    iframe.src = href;
    
    // Update current page
    this.currentPage = pageId;
    
    // Update active state
    this.updateActiveState();
    
    // Update breadcrumb
    this.updateBreadcrumb(pageId);
    
    // Update URL hash for browser navigation
    if (pageId) {
      window.location.hash = pageId;
    }
  },
  
  // Update active navigation state
  updateActiveState() {
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPageId = link.getAttribute('data-page');
      link.classList.toggle('active', linkPageId === this.currentPage);
    });
  },
  
  // Update breadcrumb
  updateBreadcrumb(pageId) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    // Find the current page in navigation structure
    const user = LMS.Auth.getUser();
    if (!user) return;
    
    const navItems = this.navStructure[user.role] || [];
    let currentItem = null;
    let currentSection = null;
    
    for (const item of navItems) {
      if (item.id === pageId) {
        currentItem = item;
        break;
      } else if (item.items) {
        const found = item.items.find(subItem => subItem.id === pageId);
        if (found) {
          currentItem = found;
          currentSection = item.section;
          break;
        }
      }
    }
    
    // Build breadcrumb
    let breadcrumbHTML = '<a href="#" class="breadcrumb-item" data-translate="nav.home">Home</a>';
    
    if (currentSection) {
      breadcrumbHTML += ' <span class="breadcrumb-separator">›</span> ';
      breadcrumbHTML += `<span class="breadcrumb-item" data-translate="${currentSection}"></span>`;
    }
    
    if (currentItem) {
      breadcrumbHTML += ' <span class="breadcrumb-separator">›</span> ';
      breadcrumbHTML += `<span class="breadcrumb-current" data-translate="${currentItem.label}"></span>`;
    }
    
    breadcrumb.innerHTML = breadcrumbHTML;
    
    // Update translations
    if (LMS.LanguageManager) {
      LMS.LanguageManager.updateUI();
    }
  },
  
  // Toggle sidebar
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    this.sidebarExpanded = !this.sidebarExpanded;
    this.updateSidebarState();
    this.saveSidebarState();
  },
  
  // Update sidebar state
  updateSidebarState() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    // For desktop
    if (window.innerWidth > 1024) {
      sidebar.classList.toggle('collapsed', !this.sidebarExpanded);
    } 
    // For tablet
    else if (window.innerWidth > 767) {
      sidebar.classList.toggle('expanded', this.sidebarExpanded);
    }
    // For mobile, handled differently with overlay
    else {
      sidebar.classList.toggle('active', this.sidebarExpanded);
      this.updateMobileBackdrop();
    }
  },
  
  // Update mobile backdrop
  updateMobileBackdrop() {
    let backdrop = document.querySelector('.sidebar-backdrop');
    
    if (this.sidebarExpanded && window.innerWidth <= 767) {
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'sidebar-backdrop';
        document.body.appendChild(backdrop);
      }
      
      // Force reflow before adding active class
      backdrop.offsetHeight;
      backdrop.classList.add('active');
    } else if (backdrop) {
      backdrop.classList.remove('active');
      setTimeout(() => {
        if (!backdrop.classList.contains('active')) {
          backdrop.remove();
        }
      }, 300);
    }
  },
  
  // Handle initial navigation
  handleInitialNavigation() {
    // Check URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      const link = document.querySelector(`[data-page="${hash}"]`);
      if (link) {
        const href = link.getAttribute('data-href');
        this.navigateTo(href, hash);
        return;
      }
    }
    
    // Default to dashboard
    const defaultLink = document.querySelector('[data-page="dashboard"]');
    if (defaultLink) {
      const href = defaultLink.getAttribute('data-href');
      this.navigateTo(href, 'dashboard');
    }
  },
  
  // Bind events
  bindEvents() {
    // Sidebar toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('#sidebarToggle') || e.target.closest('#sidebarToggle')) {
        e.preventDefault();
        this.toggleSidebar();
      }
    });
    
    // Navigation links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('data-href');
        const pageId = link.getAttribute('data-page');
        if (href) {
          this.navigateTo(href, pageId);
        }
      }
    });
    
    // Mobile backdrop click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('sidebar-backdrop')) {
        this.sidebarExpanded = false;
        this.updateSidebarState();
      }
    });
    
    // Browser back/forward
    window.addEventListener('popstate', () => {
      this.handleInitialNavigation();
    });
    
    // Window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.updateSidebarState();
      }, 250);
    });
    
    // Listen for auth changes
    window.addEventListener('userLoggedIn', () => {
      this.buildNavigation();
    });
    
    window.addEventListener('userLoggedOut', () => {
      this.buildNavigation();
    });
    
    // Listen for language changes
    window.addEventListener('languageChanged', () => {
      this.updateBreadcrumb(this.currentPage);
    });
  }
};

// Initialize navigation on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if on main page
  if (document.getElementById('navList')) {
    LMS.Navigation.init();
  }
});

// Export Navigation
window.LMS.Navigation = LMS.Navigation;
