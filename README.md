# LMS - Learning Management System

A modern, responsive Learning Management System built with vanilla JavaScript, HTML5, and CSS3.

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (e.g., Live Server for VS Code, Python HTTP server, or any static file server)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd LMS
```

2. Start a local web server:

**Option 1 - Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2 - Node.js (if installed):**
```bash
npx http-server -p 8000
```

**Option 3 - VS Code Live Server:**
- Install the Live Server extension
- Right-click on `index.html` and select "Open with Live Server"

3. Open your browser and navigate to:
```
http://localhost:8000
```

## 📁 Project Structure

```
LMS/
├── index.html          # Landing page with role selection
├── main.html           # Main application layout with iframe
├── assets/
│   ├── css/           # Stylesheets
│   │   ├── global.css     # Global styles and CSS variables
│   │   ├── themes.css     # Theme definitions (light/dark)
│   │   ├── layout.css     # Layout styles for main structure
│   │   └── components.css # Reusable component styles
│   ├── js/            # JavaScript files
│   │   ├── global.js      # Global utilities and theme handling
│   │   ├── auth.js        # Authentication logic
│   │   ├── api.js         # Mock API layer
│   │   └── components.js  # Component behaviors
│   └── images/        # Image assets
├── components/        # Reusable HTML components
│   └── base/         # Base component library
├── pages/            # Application pages (loaded in iframe)
└── data/             # Mock data and translations
    ├── translations/ # i18n files (en.json, vi.json)
    └── mock-*.json   # Mock data files
```

## 🎨 Design System

### Color Palette
- **Primary**: #2C6EAA (Blue)
- **Success**: #10B981 (Green)
- **Warning**: #F59E0B (Amber)
- **Error**: #EF4444 (Red)

### Themes
- Light Theme (default)
- Dark Theme (toggle available)

### Languages
- English (en)
- Vietnamese (vi)

## 👥 User Roles

1. **Student**
   - Access courses and learning materials
   - Track progress
   - Take quizzes and assessments

2. **Teacher**
   - Create and manage courses
   - Monitor student progress
   - Create quizzes and assignments

3. **Administrator**
   - Manage users and classes
   - System configuration
   - View activity logs

## 🔧 Development Guidelines

### CSS Architecture
- Use BEM naming convention
- All custom properties in `global.css`
- Component styles in `components.css`
- No inline styles or page-specific CSS

### JavaScript Patterns
- ES6+ features
- Promise-based async operations
- Event delegation for dynamic content
- LocalStorage for user preferences only

### Data Management
- All business data loaded from JSON files
- Mock API with simulated delays
- No business data in LocalStorage

### Internationalization
- All text via translation keys: `t('section.key')`
- No hardcoded text in HTML/JS
- Language switcher in header

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Testing

1. Component Testing:
   - Test all components in both themes
   - Verify responsive behavior
   - Check translation coverage

2. Browser Testing:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

## 📄 License

Copyright © 2024 LMS. All rights reserved.

## 🤝 Contributing

Please follow the Style Guide and ensure all components are reusable and theme-aware.
