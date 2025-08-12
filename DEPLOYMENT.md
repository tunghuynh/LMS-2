# LMS Deployment Guide

## Configuration for Different Environments

The LMS application supports deployment to different environments and subdirectories through the `config.js` file.

### Configuration File

The `config.js` file in the root directory contains environment-specific settings:

```javascript
window.LMS_CONFIG = {
  // Context path for deployment
  contextPath: '',  // Change this based on your deployment
  
  // Other settings...
  environment: 'development',
  debug: true
}
```

### Deployment Scenarios

#### 1. Local Development (Default)
```javascript
contextPath: ''  // Empty string for local development
```
Access: `http://localhost/main.html`

#### 2. Root Domain Deployment
```javascript
contextPath: ''  // Empty string for root deployment
```
Access: `https://yourdomain.com/main.html`

#### 3. Subdirectory Deployment
```javascript
contextPath: '/LMS'  // No trailing slash
```
Access: `https://yourdomain.com/LMS/main.html`

#### 4. Nested Subdirectory Deployment
```javascript
contextPath: '/apps/LMS'  // No trailing slash
```
Access: `https://yourdomain.com/apps/LMS/main.html`

### Deployment Steps

1. **Edit config.js** before deployment:
   ```javascript
   window.LMS_CONFIG = {
     contextPath: '/LMS',  // Set your deployment path
     environment: 'production',
     debug: false
   }
   ```

2. **Upload all files** maintaining the directory structure:
   ```
   /LMS/
   ├── config.js
   ├── main.html
   ├── index.html
   ├── assets/
   ├── components/
   ├── pages/
   └── data/
   ```

3. **Access the application** at: `https://yourdomain.com/LMS/main.html`

### Important Notes

- **No trailing slash** in contextPath (use `/LMS` not `/LMS/`)
- All internal links and resource loading will automatically adjust based on contextPath
- The configuration affects:
  - JSON data file loading
  - Image and asset loading
  - Page navigation in iframes
  - Translation file loading

### Testing Different Deployments

You can test different deployment scenarios locally:

1. Create a subdirectory in your web server root (e.g., `htdocs/LMS/`)
2. Copy all files to this directory
3. Update `config.js` with `contextPath: '/LMS'`
4. Access via `http://localhost/LMS/main.html`

### Troubleshooting

If resources fail to load after deployment:

1. Check browser console for 404 errors
2. Verify contextPath matches your deployment directory
3. Ensure all files were uploaded with correct directory structure
4. Clear browser cache after configuration changes

### Environment-Specific Configurations

You can maintain multiple configuration files:

- `config.dev.js` - Development settings
- `config.staging.js` - Staging settings  
- `config.prod.js` - Production settings

Before deployment, rename the appropriate file to `config.js`.
