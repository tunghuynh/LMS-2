
# 🎓 Learning Management System (LMS) - Comprehensive Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Kiến trúc tổng quan](#kiến-trúc-tổng-quan)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Kiến trúc nghiệp vụ](#kiến-trúc-nghiệp-vụ-business-architecture)
6. [Getting Started](#getting-started)
7. [User Roles & Credentials](#user-roles--credentials)
8. [Project Structure](#project-structure)
9. [Core Features Documentation](#core-features-documentation)
10. [Design System](#design-system)
11. [Development Guidelines](#development-guidelines)
12. [Testing & Quality Assurance](#testing--quality-assurance)
13. [Deployment](#deployment)
14. [Contributing](#contributing)
15. [License](#license)

## 🌟 Overview

### Giới thiệu
Learning Management System (LMS) là một hệ thống quản lý học tập toàn diện được xây dựng với công nghệ web thuần túy (Vanilla JavaScript), không phụ thuộc vào bất kỳ framework nào. Hệ thống được thiết kế để phục vụ nhu cầu đào tạo và học tập trực tuyến cho các tổ chức giáo dục, doanh nghiệp với quy mô từ nhỏ đến lớn.

### Tầm nhìn và Sứ mệnh
- **Tầm nhìn**: Trở thành giải pháp LMS hàng đầu với khả năng triển khai nhanh chóng, dễ dàng tùy biến và không yêu cầu kiến thức lập trình phức tạp
- **Sứ mệnh**: Dân chủ hóa giáo dục trực tuyến bằng cách cung cấp công cụ mạnh mẽ, dễ sử dụng và chi phí thấp

### Đặc điểm nổi bật
- 🚀 **No Backend Required** - Chạy hoàn toàn trên trình duyệt với dữ liệu JSON
- 🎯 **100% Frontend** - Không cần server, database hay hosting phức tạp
- 🌓 **Dark/Light Theme** - Hỗ trợ chuyển đổi theme linh hoạt
- 🌍 **Đa ngôn ngữ** - Tiếng Anh và Tiếng Việt (có thể mở rộng)
- 📱 **Responsive Design** - Hoạt động mượt mà trên mọi thiết bị
- ♿ **Accessibility First** - Tuân thủ WCAG 2.1 AA
- 📊 **Analytics Dashboard** - Báo cáo chi tiết và trực quan
- 🔒 **Bảo mật** - Xác thực và phân quyền đa cấp độ
- ⚡ **Hiệu suất cao** - Tối ưu hóa tải trang và trải nghiệm người dùng
- 🔧 **Dễ tùy biến** - Kiến trúc modular, dễ mở rộng

### Lợi ích khi sử dụng
1. **Tiết kiệm chi phí**: Không cần đầu tư server, database
2. **Triển khai nhanh**: Chỉ cần upload lên web hosting tĩnh
3. **Bảo trì đơn giản**: Không có backend phức tạp
4. **Tùy biến linh hoạt**: Mã nguồn mở, dễ chỉnh sửa
5. **Hiệu suất tối ưu**: Load nhanh, không phụ thuộc server

## 🏗️ Kiến trúc tổng quan

### Architecture Overview
```
┌─────────────────────────────────────────────────────────────────┐
│                        User Interface Layer                      │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Landing    │  │    Login     │  │   Main App   │         │
│  │    Page      │  │    Pages     │  │   (iframe)   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
├─────────────────────────────────────────────────────────────────┤
│                    Component System Layer                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │     Base     │  │   Complex    │  │   Custom     │         │
│  │  Components  │  │  Components  │  │  Components  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
├─────────────────────────────────────────────────────────────────┤
│                      Application Logic Layer                     │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │     Auth     │  │  Navigation  │  │   Business   │         │
│  │   Manager    │  │   Manager    │  │    Logic     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
├─────────────────────────────────────────────────────────────────┤
│                         Data Layer                               │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Mock API   │  │ Local Storage│  │     JSON     │         │
│  │    Layer     │  │   Manager    │  │    Files     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

### Các thành phần chính

#### 1. **User Interface Layer**
- **Landing Page**: Trang giới thiệu với role selection
- **Login Pages**: Xác thực theo từng vai trò
- **Main Application**: SPA với iframe-based navigation

#### 2. **Component System Layer**
- **Base Components**: Button, Input, Table, Modal, etc.
- **Complex Components**: Tree View, Datepicker, File Upload
- **Custom Components**: Course Card, Quiz Builder, Certificate

#### 3. **Application Logic Layer**
- **Auth Manager**: Xử lý đăng nhập, phân quyền, session
- **Navigation Manager**: Quản lý menu, routing, breadcrumbs
- **Business Logic**: Course, Quiz, User management logic

#### 4. **Data Layer**
- **Mock API**: Simulate backend responses với delay
- **Local Storage**: Lưu theme, language, session
- **JSON Files**: Mock data cho users, courses, quizzes

### Design Patterns được sử dụng

1. **Module Pattern**
```javascript
const LMS = (function() {
  // Private variables and functions
  let config = {};
  
  // Public API
  return {
    init: function() {},
    API: {},
    Auth: {},
    UI: {}
  };
})();
```

2. **Observer Pattern**
```javascript
// Event-driven architecture
document.addEventListener('themeChanged', updateTheme);
document.addEventListener('languageChanged', updateLanguage);
```

3. **Singleton Pattern**
```javascript
// Global configuration and state management
const Config = {
  getInstance: function() {
    if (!this.instance) {
      this.instance = new ConfigManager();
    }
    return this.instance;
  }
};
```

4. **Factory Pattern**
```javascript
// Component creation
const ComponentFactory = {
  create: function(type, props) {
    switch(type) {
      case 'button': return new Button(props);
      case 'modal': return new Modal(props);
    }
  }
};
```

## 💡 Features

### 👥 User Management System
- **Multi-role Support**: Student, Teacher, Administrator
- **Profile Management**: Customizable profiles with avatar support
- **Permission System**: Granular role-based access control
- **Activity Logging**: Complete audit trail for admin users
- **Class Management**: Organize students into classes
- **Attendance Tracking**: Monitor student attendance

### 📚 Learning System
- **Course Management**
  - Create and organize courses with categories
  - Course preview system
  - Prerequisites and dependencies
  - Course analytics and insights
  
- **Lesson Builder**
  - Multiple content types: Video (YouTube), PDF, Markdown
  - Interactive lesson viewer with navigation
  - Lesson analytics and effectiveness tracking
  - Bookmarks and notes functionality
  
- **Progress Tracking**
  - Detailed progress dashboard
  - Learning path recommendations
  - Achievement badges and streaks
  - Social sharing capabilities

- **Certificate System**
  - Automatic certificate generation
  - Custom templates and themes
  - Verification system with QR codes
  - LinkedIn integration

### 📝 Assessment System
- **Quiz Builder**
  - Multiple question types (MCQ, True/False, Text, Matching)
  - Question bank with categorization
  - Import/Export (Excel, JSON, QTI)
  - Question randomization
  
- **Quiz Analytics**
  - Performance metrics dashboard
  - Difficulty analysis
  - Question effectiveness tracking
  - Automated scheduling
  
- **Security Features**
  - Anti-cheating measures
  - Real-time monitoring
  - Browser lockdown mode
  - Time limits and restrictions

### 💬 Communication System
- **Messaging Platform**
  - Individual and group messaging
  - Message templates
  - Scheduled messages
  - Read receipts and tracking
  
- **Announcements**
  - Course-wide announcements
  - Priority flagging
  - Email integration

## 🛠️ Technology Stack

### Core Technologies

#### 1. **HTML5 - Semantic & Modern**
```html
<!-- Sử dụng các tính năng HTML5 tiên tiến -->
- Semantic Elements: <header>, <nav>, <main>, <article>, <section>
- Web Storage API: localStorage, sessionStorage
- Data Attributes: data-translate, data-role, data-id
- Form Validation: required, pattern, type="email"
- Media Elements: <video>, <audio> controls
- Accessibility: ARIA labels, roles, descriptions
```

#### 2. **CSS3 - Modern Styling**
```css
/* Công nghệ CSS3 được sử dụng */
- CSS Custom Properties (Variables): --color-primary, --spacing-*
- CSS Grid & Flexbox: Responsive layouts
- CSS Animations & Transitions: Smooth interactions
- CSS Transforms: 3D effects, rotations
- Media Queries: Responsive breakpoints
- CSS Modules: BEM methodology
- Dark Mode: CSS variables + data-theme
```

#### 3. **JavaScript ES6+ - Pure Vanilla**
```javascript
// Features ES6+ được sử dụng
- Arrow Functions: const func = () => {}
- Template Literals: `Hello ${name}`
- Destructuring: const {id, name} = user
- Spread/Rest: {...obj}, [...arr]
- Async/Await: Modern asynchronous code
- Modules: import/export (simulated)
- Classes: class Component {}
- Optional Chaining: obj?.property
- Nullish Coalescing: value ?? defaultValue
```

### External Libraries

| Library | Version | Purpose | Size |
|---------|---------|---------|------|
| **Font Awesome** | 6.5.1 | Icons & UI elements | 1.2MB |
| **Chart.js** | 3.9.1 | Data visualization | 284KB |
| **PDF.js** | 2.16.105 | PDF rendering | 2.1MB |
| **SheetJS** | 0.19.3 | Excel import/export | 447KB |
| **QRCode.js** | 1.5.3 | QR code generation | 12KB |
| **Marked.js** | 4.3.0 | Markdown parsing | 39KB |

### Development Tools

#### Code Quality
- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Stylelint**: CSS linting
- **HTMLHint**: HTML validation

#### Build & Deploy
- **Git**: Version control
- **GitHub Actions**: CI/CD pipeline
- **Webpack**: Bundle optimization (optional)
- **PostCSS**: CSS processing (optional)

### Browser APIs được sử dụng

```javascript
// Modern Browser APIs
- Fetch API: Network requests
- LocalStorage API: Persistent storage
- SessionStorage API: Session data
- History API: Navigation management
- Intersection Observer: Lazy loading
- ResizeObserver: Responsive components
- MutationObserver: DOM changes
- Clipboard API: Copy functionality
- File API: File uploads
- Drag & Drop API: Interactive UI
```

### Performance Optimizations

1. **Code Splitting**
   - Lazy loading modules
   - Dynamic imports
   - Route-based splitting

2. **Asset Optimization**
   - Image lazy loading
   - SVG optimization
   - Font subsetting
   - CSS minification

3. **Caching Strategy**
   - Browser caching
   - Service Worker (PWA ready)
   - LocalStorage caching
   - CDN utilization

### Security Measures

```javascript
// Security implementations
- Input Sanitization: XSS prevention
- CSRF Protection: Token validation
- Content Security Policy: CSP headers
- Secure Storage: Encrypted localStorage
- Session Management: Timeout & validation
- Role-Based Access: Permission matrix
```

## 📊 Kiến trúc nghiệp vụ (Business Architecture)

### Business Process Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Registration  │────▶│  Authentication │────▶│   Role-based    │
│                 │     │                 │     │   Dashboard     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         ▼                                               ▼
┌─────────────────┐                            ┌─────────────────┐
│  User Profile   │                            │ Course Catalog  │
│   Management    │                            │    & Enrollment │
└─────────────────┘                            └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ Learning Process│
                                               │  - Lessons      │
                                               │  - Quizzes      │
                                               │  - Assignments  │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │Progress Tracking│
                                               │  & Analytics    │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  Certification  │
                                               │   & Completion  │
                                               └─────────────────┘
```

### Domain Model

#### 1. **User Domain**
```javascript
User {
  - id: string
  - username: string
  - role: 'student' | 'teacher' | 'admin'
  - profile: UserProfile
  - permissions: Permission[]
  - enrollments: Enrollment[]
  - activities: Activity[]
}
```

#### 2. **Course Domain**
```javascript
Course {
  - id: string
  - title: string
  - category: Category
  - teacher: User
  - lessons: Lesson[]
  - enrollments: Enrollment[]
  - prerequisites: Course[]
  - analytics: CourseAnalytics
}
```

#### 3. **Assessment Domain**
```javascript
Quiz {
  - id: string
  - title: string
  - questions: Question[]
  - settings: QuizSettings
  - attempts: QuizAttempt[]
  - analytics: QuizAnalytics
}
```

#### 4. **Learning Domain**
```javascript
Lesson {
  - id: string
  - title: string
  - content: Content
  - duration: number
  - progress: Progress[]
  - analytics: LessonAnalytics
}
```

### Business Rules

#### Enrollment Rules
1. **Prerequisites Check**: Student must complete prerequisites
2. **Capacity Limit**: Classes have maximum enrollment
3. **Time Constraints**: Enrollment periods are defined
4. **Payment Status**: For paid courses (future feature)

#### Assessment Rules
1. **Attempt Limits**: Configurable per quiz
2. **Time Limits**: Enforced during quiz
3. **Passing Score**: Minimum score required
4. **Retake Policy**: Cooldown period between attempts

#### Certification Rules
1. **Completion Criteria**: All lessons + passing quiz scores
2. **Validity Period**: Certificates can expire
3. **Verification**: QR code + unique ID
4. **Revocation**: Admin can revoke certificates

### User Journey Maps

#### Student Journey
```
1. Discovery → 2. Registration → 3. Profile Setup → 4. Browse Courses
     ↓              ↓                  ↓                    ↓
5. Enroll → 6. Learn → 7. Practice → 8. Assessment → 9. Certification
     ↓          ↓           ↓             ↓                 ↓
10. Share → 11. Continue Learning → 12. Career Advancement
```

#### Teacher Journey
```
1. Onboarding → 2. Course Creation → 3. Content Development
       ↓               ↓                      ↓
4. Student Management → 5. Teaching → 6. Assessment Creation
       ↓                     ↓               ↓
7. Progress Monitoring → 8. Feedback → 9. Analytics Review
```

#### Administrator Journey
```
1. System Setup → 2. User Management → 3. Permission Control
       ↓                ↓                     ↓
4. Content Moderation → 5. System Monitoring → 6. Analytics
       ↓                      ↓                      ↓
7. Report Generation → 8. System Optimization → 9. Support
```

### Integration Points

1. **Future Backend Integration**
   - RESTful API ready structure
   - GraphQL compatible data model
   - WebSocket for real-time features

2. **Third-party Services**
   - OAuth providers (Google, Facebook)
   - Payment gateways (Stripe, PayPal)
   - Email services (SendGrid, AWS SES)
   - Cloud storage (S3, CloudFlare)

3. **Analytics Platforms**
   - Google Analytics
   - Mixpanel
   - Custom analytics dashboard

### Scalability Considerations

1. **Data Architecture**
   - Pagination for large datasets
   - Lazy loading for performance
   - Indexed search capabilities
   - Caching strategies

2. **Performance Metrics**
   - Page load time < 2s
   - Time to interactive < 3s
   - 60 FPS animations
   - < 100ms response time

3. **Growth Projections**
   - 10K+ users
   - 1K+ courses
   - 100K+ quiz attempts
   - 1M+ page views/month

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Local web server for development
- Git for version control

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/LMS-2.git
cd LMS-2
```

2. **Start Local Server**

**Option A - VS Code Live Server (Recommended)**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

**Option B - Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option C - Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

3. **Access the Application**
```
http://localhost:8000
```

## 🔐 User Roles & Credentials

### Default Login Credentials

#### 👨‍🎓 Students
```
Username: john_doe      Password: password123
Username: jane_smith    Password: password123
Username: bob_johnson   Password: password123
```

#### 👨‍🏫 Teachers
```
Username: prof_wilson   Password: password123
Username: dr_brown      Password: password123
Username: mrs_davis     Password: password123
```

#### 👨‍💼 Administrators
```
Username: admin         Password: admin123
Username: admin2        Password: admin123
```

### Role Capabilities

| Feature | Student | Teacher | Admin |
|---------|---------|---------|-------|
| View Courses | ✅ | ✅ | ✅ |
| Enroll in Courses | ✅ | ❌ | ❌ |
| Create Courses | ❌ | ✅ | ✅ |
| Take Quizzes | ✅ | ✅ | ✅ |
| Create Quizzes | ❌ | ✅ | ✅ |
| View Analytics | Limited | Course-specific | Full |
| Manage Users | ❌ | ❌ | ✅ |
| System Settings | ❌ | ❌ | ✅ |

## 📁 Project Structure

```
LMS-2/
├── 📄 index.html              # Landing page with role selection
├── 📄 main.html               # Main application shell (iframe-based)
├── 📄 config.js               # Application configuration
│
├── 📁 assets/                 # Static assets
│   ├── 📁 css/               # Stylesheets
│   │   ├── global.css        # Global styles and CSS variables
│   │   ├── themes.css        # Theme definitions (dark/light)
│   │   ├── layout.css        # Layout structures
│   │   ├── components.css    # Component styles (BEM)
│   │   └── utilities.css     # Utility classes
│   │
│   ├── 📁 js/                # JavaScript modules
│   │   ├── global.js         # Global utilities
│   │   ├── auth.js           # Authentication system
│   │   ├── api.js            # Mock API layer
│   │   └── navigation.js     # Navigation management
│   │
│   └── 📁 images/            # Image assets
│       └── flags/            # Language flags
│
├── 📁 components/             # Reusable UI components
│   ├── 📁 base/              # Base components
│   │   ├── button.html       # Button component
│   │   ├── input.html        # Input fields
│   │   ├── table.html        # Data tables
│   │   ├── modal.html        # Modal dialogs
│   │   ├── card.html         # Card layouts
│   │   ├── dropdown.html     # Dropdown menus
│   │   ├── datepicker.html   # Date picker
│   │   ├── tag.html          # Tags/badges
│   │   ├── radio.html        # Radio groups
│   │   ├── checkbox.html     # Checkboxes
│   │   └── upload.html       # File upload
│   │
│   ├── showcase.html         # Component showcase
│   └── tree-view.html        # Tree view component
│
├── 📁 data/                   # Data and configurations
│   ├── 📁 translations/      # i18n files
│   │   ├── en.json          # English translations
│   │   └── vi.json          # Vietnamese translations
│   │
│   ├── mock-users.json       # User data
│   ├── mock-courses.json     # Course data
│   ├── mock-lessons.json     # Lesson data
│   ├── mock-classes.json     # Class data
│   ├── mock-enrollments.json # Enrollment data
│   ├── mock-categories.json  # Category data
│   └── permissions.json      # Permission matrix
│
├── 📁 pages/                  # Application pages
│   ├── dashboard-*.html      # Role-specific dashboards
│   ├── login-*.html          # Role-specific login pages
│   ├── profile-*.html        # Profile management
│   ├── courses.html          # Course listing
│   ├── course-detail.html    # Course details
│   ├── lesson*.html          # Lesson pages
│   ├── quiz*.html            # Quiz pages
│   ├── users.html            # User management
│   ├── permissions.html      # Permission management
│   ├── classes.html          # Class management
│   ├── enrollments.html      # Enrollment management
│   ├── certificates.html     # Certificate viewer
│   ├── messaging.html        # Messaging system
│   └── logs.html             # Activity logs
│
└── 📁 docs/                   # Documentation
    ├── Style Guide.md        # Coding standards
    ├── Master Plan.md        # Project roadmap
    ├── Phase *.md            # Phase documentation
    └── todo-list-*.md        # Development tracking
```

## 📚 Core Features Documentation

### 🎓 Course Management
- **Course Creation**: Rich editor with multimedia support
- **Category System**: Hierarchical organization with tree view
- **Prerequisites**: Define course dependencies
- **Analytics**: Enrollment trends, completion rates
- **Preview System**: Allow preview before enrollment

### 📖 Lesson System
- **Content Types**:
  - Video lessons (YouTube integration)
  - PDF documents (with viewer)
  - Markdown content (WYSIWYG editor)
- **Interactive Features**:
  - Progress tracking
  - Bookmarks and notes
  - Discussion forums
  - Speed controls for videos

### 📊 Analytics Dashboard
- **Student Analytics**:
  - Progress tracking
  - Time spent analysis
  - Performance trends
  - Learning recommendations
  
- **Teacher Analytics**:
  - Class performance
  - Question effectiveness
  - Student engagement
  - Course insights
  
- **Admin Analytics**:
  - System-wide metrics
  - User activity patterns
  - Resource utilization
  - Performance monitoring

### 📝 Quiz System
- **Question Types**:
  - Multiple Choice (single answer)
  - Multiple Select (multiple answers)
  - True/False
  - Text Input
  - Matching pairs
  
- **Advanced Features**:
  - Question banks
  - Randomization
  - Time limits
  - Auto-grading
  - Detailed feedback

### 🏆 Certificate System
- **Features**:
  - Auto-generation on completion
  - Custom templates
  - QR code verification
  - PDF download
  - Social sharing

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--color-primary: #2C6EAA;      /* Main brand color */
--color-primary-light: #4A8BC2;
--color-primary-dark: #1E4F78;

/* Status Colors */
--color-success: #10B981;      /* Green */
--color-warning: #F59E0B;      /* Amber */
--color-danger: #EF4444;       /* Red */
--color-info: #3B82F6;         /* Blue */
```

### Typography
```css
/* Font Stack */
font-family: 'Inter', 'Roboto', system-ui, sans-serif;

/* Font Sizes */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-size-3xl: 30px;
```

### Spacing System
```css
/* 8px base unit */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
```

### Responsive Breakpoints
```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large screens */
```

## 🔧 Development Guidelines

### Code Standards

#### HTML Guidelines
```html
<!-- Use semantic HTML5 elements -->
<article class="course-card">
  <header class="course-card__header">
    <h2 class="course-card__title" data-translate="course.title">
      Course Title
    </h2>
  </header>
  <div class="course-card__body">
    <!-- Content -->
  </div>
</article>
```

#### CSS Guidelines (BEM)
```css
/* Block */
.course-card { }

/* Element */
.course-card__header { }
.course-card__title { }

/* Modifier */
.course-card--featured { }
.course-card--disabled { }
```

#### JavaScript Guidelines
```javascript
// Use ES6+ features
const loadCourses = async () => {
  try {
    const data = await LMS.API.loadJSON('mock-courses.json');
    return data.courses;
  } catch (error) {
    console.error('Failed to load courses:', error);
    LMS.showToast('Error loading courses', 'error');
  }
};

// Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.course-card')) {
    handleCourseClick(e.target);
  }
});
```

### Component Development Rules

1. **Theme Support**: All components MUST work in both themes
2. **Translation Ready**: No hardcoded text, use `data-translate`
3. **Responsive**: Test on all breakpoints
4. **Accessible**: ARIA labels, keyboard navigation
5. **Reusable**: No page-specific logic in components

### Git Workflow
```bash
# Feature branch
git checkout -b feature/quiz-analytics

# Commit with conventional commits
git add .
git commit -m "feat(quiz): add analytics dashboard"
git commit -m "fix(auth): resolve login redirect issue"
git commit -m "docs: update README with new features"

# Push and create PR
git push origin feature/quiz-analytics
```

## 🧪 Testing & Quality Assurance

### Testing Checklist

#### Component Testing
- [ ] Works in light theme
- [ ] Works in dark theme
- [ ] All text translatable
- [ ] Responsive on mobile
- [ ] Keyboard accessible
- [ ] Screen reader compatible

#### Page Testing
- [ ] Authentication required
- [ ] Role permissions correct
- [ ] Data loads properly
- [ ] Error states handled
- [ ] Loading states shown
- [ ] Empty states designed

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Chrome Android

### Performance Standards
- Page Load: < 2 seconds
- Time to Interactive: < 3 seconds
- Lighthouse Score: > 90
- No console errors
- Smooth animations (60 FPS)

## 🚢 Deployment

### Build Process
1. No build step required (vanilla JS)
2. Minify CSS/JS for production
3. Optimize images
4. Enable gzip compression

### Hosting Options

#### Static Hosting (Recommended)
- **GitHub Pages**
```bash
# Deploy to GitHub Pages
git checkout -b gh-pages
git push origin gh-pages
```

- **Netlify**
```bash
# Deploy with Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

- **Vercel**
```bash
# Deploy with Vercel CLI
npm install -g vercel
vercel --prod
```

#### Traditional Hosting
- Upload all files to web root
- Ensure .htaccess for clean URLs
- Configure CORS if needed

### Environment Configuration
```javascript
// config.js
const CONFIG = {
  APP_NAME: 'LMS System',
  APP_VERSION: '1.0.0',
  API_DELAY: 300, // Mock API delay
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  LANGUAGES: ['en', 'vi'],
  DEFAULT_LANGUAGE: 'en',
  DEFAULT_THEME: 'light'
};
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit Changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request**

### Contribution Guidelines
- Follow the Style Guide
- Add unit tests for new features
- Update documentation
- Ensure all tests pass
- Add translation keys
- Test in both themes
- Check responsive design
- Verify accessibility

### Code Review Process
1. Automated checks (linting, tests)
2. Peer review by maintainers
3. Feedback and iterations
4. Merge when approved

## 📄 License

Copyright © 2025 LMS Development Team. All rights reserved.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Libraries**: Font Awesome, Chart.js, PDF.js, SheetJS
- **Design Inspiration**: Modern EdTech platforms
- **Contributors**: All developers and testers
- **Community**: Open source community for feedback

## 📞 Support & Contact

### Getting Help
- 📖 Check the [documentation](docs/)
- 🐛 Report bugs via [GitHub Issues](https://github.com/yourusername/LMS-2/issues)
- 💬 Join our [Discord community](#)
- 📧 Email: support@lms-system.com

### Resources
- [Style Guide](docs/Style%20Guide.md)
- [API Documentation](docs/api.md)
- [Component Library](components/showcase.html)
- [Video Tutorials](#)

---

<p align="center">
  Made with ❤️ by the LMS Development Team
</p>

<p align="center">
  <a href="#overview">Back to Top ↑</a>
</p>