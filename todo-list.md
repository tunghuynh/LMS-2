# 📋 LMS Development Todo List

## 🎯 Project Overview
Xây dựng hệ thống LMS (Learning Management System) với 3 module chính trong Phase I:
- User Management
- Learning System  
- Testing System

### 🔑 Key Requirements
- ✅ Dark/Light theme support
- ✅ Multi-language support (EN/VI)
- ✅ Responsive design (Mobile/Tablet/Desktop)
- ✅ Mock data từ JSON files
- ✅ 3 user roles: Student, Teacher, Admin
- ✅ Theo đúng Style Guide standards

---

## 📁 Phase 0: Project Foundation Setup

### 0.1 Folder Structure Creation
- [ ] Create project root directory
- [ ] Create `assets/` directory structure
  - [ ] `assets/css/` - Global styles
  - [ ] `assets/js/` - JavaScript files
  - [ ] `assets/images/` - Images
  - [ ] `assets/icons/` - Icon files
- [ ] Create `components/` directory
  - [ ] `components/base/` - Base components
- [ ] Create `pages/` directory structure
  - [ ] `pages/user/`
  - [ ] `pages/course/`
  - [ ] `pages/quiz/`
  - [ ] `pages/dashboard/`
- [ ] Create `data/` directory for mock JSON files

### 0.2 Global CSS System
- [ ] Create `assets/css/global.css`
  - [ ] CSS variables for colors (light theme)
  - [ ] CSS variables for colors (dark theme)
  - [ ] Typography system
  - [ ] Spacing system
  - [ ] Border radius & shadows
- [ ] Create `assets/css/components.css`
  - [ ] Button styles (all variants)
  - [ ] Form components
  - [ ] Table styles
  - [ ] Card styles
  - [ ] Modal styles
- [ ] Create `assets/css/layout.css`
  - [ ] Main layout grid
  - [ ] Header styles
  - [ ] Sidebar styles
  - [ ] Footer styles
  - [ ] Responsive breakpoints
- [ ] Create `assets/css/themes.css`
  - [ ] Theme switching logic
  - [ ] Theme-specific overrides

### 0.3 JavaScript Foundation
- [ ] Create `assets/js/global.js`
  - [ ] Theme switching functionality
  - [ ] Language switching functionality
  - [ ] LocalStorage utilities
  - [ ] Common helper functions
- [ ] Create `assets/js/components.js`
  - [ ] Modal component logic
  - [ ] Dropdown component logic
  - [ ] Toast notification logic
  - [ ] Form validation helpers
- [ ] Create `assets/js/auth.js`
  - [ ] Login/logout functions
  - [ ] Session management
  - [ ] Role-based access control
- [ ] Create `assets/js/api.js`
  - [ ] Mock API functions (async/Promise-based)
  - [ ] Data loading from JSON
  - [ ] Error handling
  - [ ] Loading states

### 0.4 Translation System Setup
- [ ] Create `data/translations/en.json`
  - [ ] Common labels
  - [ ] Navigation items
  - [ ] Form labels
  - [ ] Error messages
  - [ ] Success messages
- [ ] Create `data/translations/vi.json`
  - [ ] Vietnamese translations
- [ ] Implement `t()` translation function
- [ ] Language switcher component

### 0.5 Base Components
- [ ] Create `components/header.html`
  - [ ] Logo & app title
  - [ ] Theme toggle button
  - [ ] Language switcher
  - [ ] User profile menu
- [ ] Create `components/sidebar.html`
  - [ ] Navigation menu
  - [ ] Role-based menu items
  - [ ] Collapsible on mobile
- [ ] Create `components/footer.html`
  - [ ] Copyright info
  - [ ] Version info
- [ ] Create base components:
  - [ ] `components/base/button.html`
  - [ ] `components/base/input.html`
  - [ ] `components/base/table.html`
  - [ ] `components/base/modal.html`
  - [ ] `components/base/card.html`
  - [ ] `components/base/dropdown.html`

### 0.6 Main Layout Setup
- [ ] Create `index.html` - Landing page
- [ ] Create `main.html` - Main layout with iframe
  - [ ] Header integration
  - [ ] Sidebar integration
  - [ ] Iframe container
  - [ ] Footer integration
  - [ ] Theme & language persistence

---

## 👤 Phase I.1: User Management Module

### 1.1 Mock Data Preparation
- [ ] Create `data/mock-users.json`
  - [ ] Sample students
  - [ ] Sample teachers
  - [ ] Sample admin
  - [ ] User profiles with goals & progress
- [ ] Create `data/mock-classes.json`
  - [ ] Class structure
  - [ ] Teacher assignments
  - [ ] Student enrollments
- [ ] Create `data/mock-logs.json`
  - [ ] Login/logout logs
  - [ ] Activity logs

### 1.2 Authentication Pages
- [ ] Create `pages/user/login-student.html`
  - [ ] Login form
  - [ ] Remember me checkbox
  - [ ] Forgot password link
  - [ ] Register link
  - [ ] Form validation
  - [ ] Mock authentication
- [ ] Create `pages/user/login-teacher.html`
  - [ ] Same as student login
  - [ ] Teacher-specific styling
- [ ] Create `pages/user/login-admin.html`
  - [ ] Same as above
  - [ ] Admin-specific styling
- [ ] Create `pages/user/register.html`
  - [ ] Registration form
  - [ ] Role selection
  - [ ] Password confirmation
  - [ ] Form validation
  - [ ] Save to localStorage
- [ ] Create forgot password modal
  - [ ] Email input
  - [ ] Reset simulation

### 1.3 Dashboard Pages
- [ ] Create `pages/dashboard/dashboard-student.html`
  - [ ] Welcome message
  - [ ] Course progress cards
  - [ ] Recent activities
  - [ ] Quick actions
- [ ] Create `pages/dashboard/dashboard-teacher.html`
  - [ ] Teaching statistics
  - [ ] Recent student activities
  - [ ] Course management shortcuts
- [ ] Create `pages/dashboard/dashboard-admin.html`
  - [ ] System statistics
  - [ ] User count cards
  - [ ] Recent logs preview

### 1.4 Profile Management
- [ ] Create `pages/user/profile.html`
  - [ ] Profile information display
  - [ ] Avatar upload preview
  - [ ] Learning goals textarea
  - [ ] Progress tables
  - [ ] Edit mode toggle
  - [ ] Save functionality

### 1.5 User Management (Admin)
- [ ] Create `pages/user/users.html`
  - [ ] User list table
  - [ ] Search/filter functionality
  - [ ] Pagination (client-side)
  - [ ] Add user modal
  - [ ] Edit user modal
  - [ ] Delete confirmation

### 1.6 Class Management
- [ ] Create `pages/user/classes.html`
  - [ ] Class dropdown selector
  - [ ] Member list table
  - [ ] Add student modal
  - [ ] Remove student functionality
  - [ ] Class statistics

### 1.7 Activity Logs (Admin)
- [ ] Create `pages/user/logs.html`
  - [ ] Activity log table
  - [ ] Date range filter
  - [ ] User filter
  - [ ] Action type filter
  - [ ] Export functionality (mock)

---

## 📚 Phase I.2: Learning System Module

### 2.1 Mock Data Preparation
- [ ] Create `data/mock-courses.json`
  - [ ] Course structure
  - [ ] Categories
  - [ ] Lesson lists
  - [ ] Thumbnails paths
- [ ] Create `data/mock-enrollments.json`
  - [ ] Student enrollments
  - [ ] Approval status
  - [ ] Enrollment dates
- [ ] Create `data/mock-categories.json`
  - [ ] Course categories

### 2.2 Course Management
- [ ] Create `pages/course/courses.html`
  - [ ] Course card grid
  - [ ] Category filter
  - [ ] Search functionality
  - [ ] Add course modal (Teacher)
  - [ ] Enrollment button (Student)
  - [ ] Progress display
- [ ] Create `pages/course/course-detail.html`
  - [ ] Course information
  - [ ] Lesson list tab
  - [ ] Progress tab (Student)
  - [ ] Enrollment tab (Teacher)
  - [ ] Course actions

### 2.3 Lesson Management
- [ ] Create `pages/course/lesson.html`
  - [ ] Video player (YouTube embed)
  - [ ] PDF viewer (iframe)
  - [ ] Markdown renderer
  - [ ] Lesson navigation
  - [ ] Progress tracking
  - [ ] Mark complete button
- [ ] Create `pages/course/lesson-builder.html` (Teacher)
  - [ ] Lesson form
  - [ ] Content type selector
  - [ ] WYSIWYG editor integration
  - [ ] Preview functionality

### 2.4 Enrollment Management
- [ ] Create `pages/course/enrollments.html`
  - [ ] Enrollment requests table
  - [ ] Approve/Deny buttons
  - [ ] Filter by course
  - [ ] Filter by status
  - [ ] Batch actions

### 2.5 Progress Tracking
- [ ] Create `pages/course/progress.html`
  - [ ] Progress dashboard
  - [ ] Course completion charts
  - [ ] Detailed lesson progress
  - [ ] Time tracking display
  - [ ] Export progress report

---

## 🎯 Phase I.3: Testing System Module

### 3.1 Mock Data Preparation
- [ ] Create `data/mock-quizzes.json`
  - [ ] Quiz structure
  - [ ] Question types
  - [ ] Answer keys
  - [ ] Time limits
- [ ] Create `data/mock-quiz-results.json`
  - [ ] Student attempts
  - [ ] Scores
  - [ ] Timestamps
- [ ] Create `data/mock-quiz-templates.json`
  - [ ] Reusable templates

### 3.2 Quiz Management
- [ ] Create `pages/quiz/quizzes.html`
  - [ ] Quiz list table
  - [ ] Filter by course
  - [ ] Registration status
  - [ ] Create quiz button (Teacher)
  - [ ] Register button (Student)
- [ ] Create `pages/quiz/quiz-builder.html`
  - [ ] Quiz information form
  - [ ] Question builder
  - [ ] Question type selector
  - [ ] Import from Excel (mock)
  - [ ] Preview modal
  - [ ] Save as template

### 3.3 Quiz Taking
- [ ] Create `pages/quiz/quiz-attempt.html`
  - [ ] Question display
  - [ ] Answer inputs
  - [ ] Timer display
  - [ ] Navigation (Next/Prev)
  - [ ] Submit confirmation
  - [ ] Auto-save progress

### 3.4 Quiz Results
- [ ] Create `pages/quiz/quiz-results.html`
  - [ ] Score display
  - [ ] Correct/incorrect breakdown
  - [ ] Answer review (Student)
  - [ ] Class results table (Teacher)
  - [ ] Export results (CSV mock)

### 3.5 Quiz Templates
- [ ] Create `pages/quiz/quiz-templates.html`
  - [ ] Template list
  - [ ] Preview functionality
  - [ ] Apply template
  - [ ] Edit template
  - [ ] Delete template

---

## 🧪 Testing & Validation

### 4.1 Theme Testing
- [ ] Test dark theme on all pages
- [ ] Test light theme on all pages
- [ ] Test theme switching persistence
- [ ] Test theme transitions

### 4.2 Language Testing
- [ ] Test English translations
- [ ] Test Vietnamese translations
- [ ] Test language switching
- [ ] Test missing translation fallbacks

### 4.3 Responsive Testing
- [ ] Test mobile layout (<768px)
- [ ] Test tablet layout (768-1024px)
- [ ] Test desktop layout (>1024px)
- [ ] Test component behaviors on each breakpoint

### 4.4 Data Loading Testing
- [ ] Test all JSON data loading
- [ ] Test error states
- [ ] Test loading states
- [ ] Test empty states

### 4.5 Cross-browser Testing
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

---

## 📊 Progress Tracking

### Completion Status Key:
- [ ] Not started
- [🔄] In progress
- [✅] Completed
- [🔍] Under review
- [❌] Blocked/Issue

### Overall Progress:
- Phase 0: 0% Complete
- Phase I.1: 0% Complete
- Phase I.2: 0% Complete
- Phase I.3: 0% Complete
- Testing: 0% Complete

### Daily Updates:
_[Add daily progress notes here]_

---

## 🚨 Known Issues & Blockers
_[Track any issues or blockers here]_

---

## 📝 Notes & Decisions
_[Document important decisions and notes here]_

---

**Last Updated:** [Current Date]
**Next Review:** [Next Review Date]
