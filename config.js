/* ==========================================================================
   Configuration File - Environment Settings
   ========================================================================== */

window.LMS_CONFIG = {
  // Context path for deployment
  // For local development: ''
  // For subdirectory deployment: '/LMS' (no trailing slash)
  // For root deployment: ''
  contextPath: '',
  
  // API endpoints (if needed in future)
  apiBaseUrl: '',
  
  // Other environment-specific settings
  environment: 'development', // 'development', 'staging', 'production'
  
  // Debug mode
  debug: true,
  
  // Get absolute path for resources
  getResourcePath: function(relativePath) {
    // Remove leading slash if present
    if (relativePath.startsWith('/')) {
      relativePath = relativePath.substring(1);
    }
    
    // Return full path with context
    return this.contextPath + '/' + relativePath;
  },
  
  // Get base URL considering current page location
  getBasePath: function() {
    const path = window.location.pathname;
    
    // Check if we're in a subdirectory (pages/, components/, etc.)
    if (path.includes('/pages/') || path.includes('/components/')) {
      return this.contextPath || '..';
    }
    
    return this.contextPath || '.';
  }
};
