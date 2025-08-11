# Comprehensive Style Guide & Development Standards

## 🎯 Mục tiêu Style Guide
Style Guide này được thiết kế để đảm bảo:
- **Tính nhất quán**: Tất cả màn hình có giao diện đồng nhất
- **Khả năng mở rộng**: Dễ dàng thêm chức năng mới
- **Tái sử dụng**: Component và style có thể dùng lại
- **Maintainability**: Dễ bảo trì và cập nhật

---

## 📁 1. CẤU TRÚC PROJECT CHUẨN

### 1.1 Cấu trúc thư mục
```
project/
├── index.html                    # Landing page
├── main.html                     # Main layout với iframe
├── assets/
│   ├── css/
│   │   ├── global.css           # Global styles (KHÔNG ĐƯỢC SỬA)
│   │   ├── components.css       # Component styles (KHÔNG ĐƯỢC SỬA)
│   │   ├── layout.css          # Layout styles (KHÔNG ĐƯỢC SỬA)
│   │   └── themes.css          # Theme variables
│   ├── js/
│   │   ├── global.js           # Global utilities
│   │   ├── components.js       # Component logic
│   │   ├── auth.js            # Authentication
│   │   └── api.js             # API utilities
│   ├── images/
│   └── icons/
├── components/                   # Reusable components
│   ├── header.html
│   ├── sidebar.html
│   ├── footer.html
│   └── base/                    # Base components
│       ├── button.html
│       ├── input.html
│       ├── table.html
│       ├── modal.html
│       ├── datepicker.html
│       └── combobox.html
├── pages/                       # Business logic pages (chỉ content)
│   ├── user/
│   ├── course/
│   ├── quiz/
│   └── dashboard/
└── data/                        # Mock data
    ├── mock-users.json
    ├── mock-courses.json
    └── mock-quizzes.json
```

---

## 🎨 2. DESIGN SYSTEM SPECIFICATIONS

### 2.1 Theme System Architecture
**Theme Support:** System PHẢI hỗ trợ Dark/Light mode switching
- Theme toggle button ở header
- Theme preference lưu trong localStorage
- Automatic OS theme detection
- Smooth transition animations giữa themes

### 2.2 Color Palette (CSS Variables)
**Primary Colors:**
- Primary Blue: #2C6EAA (buttons, headers, links)
- Primary Blue Light: #4A8BC2 (hover states)  
- Primary Blue Dark: #1E4F78 (active states)

**Secondary Colors:**
- Accent Green: #4CAF50 (success, progress bars)
- Accent Orange: #FF9800 (warnings)
- Accent Red: #F44336 (errors, danger)

**Theme Variables (CSS Custom Properties):**
- `--bg-primary`: White (light) / Gray 900 (dark)
- `--bg-secondary`: Gray 50 (light) / Gray 800 (dark)
- `--text-primary`: Gray 900 (light) / White (dark)
- `--text-secondary`: Gray 600 (light) / Gray 300 (dark)
- `--border-color`: Gray 200 (light) / Gray 700 (dark)

**Status Colors:**
- Success: #10B981
- Warning: #F59E0B  
- Error: #EF4444
- Info: #3B82F6

**Theme Implementation:**
- All colors PHẢI sử dụng CSS variables
- Theme switching qua `[data-theme="dark/light"]` attribute
- NO hardcoded colors trong components

### 2.3 Typography System
**Font Family:**
- Primary: 'Inter', 'Roboto', sans-serif
- Monospace: 'Fira Code', 'Consolas', monospace

**Font Sizes:**
- XS: 12px, SM: 14px, Base: 16px, LG: 18px, XL: 20px, 2XL: 24px, 3XL: 30px, 4XL: 36px

**Font Weights:**
- Light: 300, Normal: 400, Medium: 500, Semibold: 600, Bold: 700

### 2.4 Spacing System
**Space Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px

**Border Radius:** 4px (small), 6px (default), 8px (medium), 12px (large), 16px (xl), full (pills)

**Shadows:** 5 levels từ subtle đến prominent cho depth hierarchy

---

## 🌍 3. INTERNATIONALIZATION (i18n) SYSTEM

### 3.1 Multi-language Architecture
**Language Support:** System PHẢI hỗ trợ đa ngôn ngữ
- Default: English (en)
- Support: Vietnamese (vi), thêm ngôn ngữ khác theo yêu cầu
- Language switcher ở header
- Language preference lưu trong localStorage

### 3.2 Translation File Structure
```
data/
├── translations/
│   ├── en.json          # English translations
│   ├── vi.json          # Vietnamese translations
│   └── ...              # Other languages
```

### 3.3 Translation Implementation Rules
**Text Content:**
- ALL user-facing text PHẢI sử dụng translation keys
- NO hardcoded text trong HTML/JS
- Format: `t('section.subsection.key')`
- Fallback to English nếu translation missing

**Date/Number Formatting:**
- Theo locale standards
- Date format theo preference user
- Number separators theo locale

**RTL Support Preparation:**
- CSS layout PHẢI support direction changes
- Use logical properties (margin-inline, padding-block)

---

## 📊 4. DATA MANAGEMENT SYSTEM

### 4.1 Mock Data Architecture
**All data PHẢI load từ JSON files:**
```
data/
├── mock-users.json      # User data, profiles, roles
├── mock-courses.json    # Courses, lessons, categories
├── mock-quizzes.json    # Quizzes, questions, results
├── mock-classes.json    # Class information, enrollments
├── mock-logs.json       # Activity logs, audit trails
├── mock-settings.json   # System settings, configurations
└── translations/        # Language files
    ├── en.json
    └── vi.json
```

### 4.2 Data Loading Standards
**API Simulation:**
- All data operations PHẢI async (Promise-based)
- Simulate API response delays (100-500ms)
- Error handling for failed requests
- Pagination support trong data structure

**Local Storage Usage:**
- User preferences (theme, language, layout)
- Session data (authentication, current user)
- Form drafts và temporary data
- NO business data storage (chỉ mock từ JSON)

**Data Structure Standards:**
- Consistent naming conventions
- Standardized date formats (ISO 8601)
- Normalized relationships (ID references)
- Versioning support cho data changes

### 4.3 State Management
**Client-side State:**
- Current user session
- UI state (theme, language, sidebar collapse)
- Form validation states
- Loading và error states

**Data Persistence Rules:**
- Session data: sessionStorage
- User preferences: localStorage  
- Business data: Always reload từ JSON
- Cache strategy cho performance

---

## 🏗️ 5. LAYOUT SYSTEM

### 5.1 Main Layout Architecture
**Structure:** Header + Sidebar + Main Content (iframe) + Footer

**Header Components:**
- Logo và app title
- Theme toggle (dark/light mode)
- Language switcher dropdown  
- User avatar và profile menu
- Logout action

**Grid Layout:**
- Desktop: 280px sidebar + flexible main area
- Tablet: Collapsible sidebar
- Mobile: Hidden sidebar với hamburger menu

**Header:** 64px height, logo + theme toggle + language switcher + user info + actions
**Sidebar:** Navigation menu với role-based items, theme-aware styling
**Main Content:** Iframe container cho page content
**Footer:** 48px height, copyright info với translation support

### 5.2 Page Structure Standards
**Mọi page phải tuân theo cấu trúc:**
```
Page Container
├── Page Header (title + actions) - Translated titles
├── Page Content (main business logic) - All text translated
└── Page Footer (pagination/actions) - Translated labels
```

**Content Areas:**
- Search/Filter area at top (với translated placeholders)
- Data display area (table/cards với translated headers)
- Action buttons (translated labels, contextual placement)
- Pagination at bottom (translated navigation)

---

## 🧩 6. BASE COMPONENTS SPECIFICATION

### 6.1 Button System
**Variants:** Primary, Secondary, Outline, Ghost, Link
**Sizes:** Small, Default, Large
**States:** Default, Hover, Active, Disabled, Loading
**Icons:** Support for leading/trailing icons
**Theme Support:** All variants PHẢI có dark/light mode styling
**i18n Support:** Button text qua translation keys

### 6.2 Form Components
**Input Types:** Text, Email, Password, Number, Textarea, Select
**States:** Default, Focus, Error, Disabled, Readonly
**Features:** Labels, help text, error messages, validation
**Addons:** Icons, buttons, dropdowns
**Theme Support:** Form styling cho both themes
**i18n Support:** Labels, placeholders, error messages translated

### 6.3 Data Display Components
**Table:** Sortable headers, row selection, pagination, responsive
- Column headers translated
- Action tooltips translated  
- Empty state messages translated
- Theme-aware styling

**Cards:** Content cards với image, header, body, footer
- All text content translated
- Theme-aware styling
- RTL-ready layout

**Lists:** Simple lists, definition lists, menu lists
- List item text translated
- Theme-aware styling

### 6.4 Feedback Components
**Modal:** Various sizes, header/body/footer structure
- Modal titles và content translated
- Action buttons translated
- Theme-aware styling

**Toast:** Success, warning, error, info notifications
- Message text translated
- Theme-aware colors và styling

**Alerts:** Inline alerts với dismiss option
- Alert text translated
- Theme-aware styling

**Loading:** Spinners, skeleton screens, progress bars
- Loading text translated
- Theme-aware styling

### 6.5 Navigation Components
**Breadcrumbs:** Hierarchical navigation
- Breadcrumb labels translated
- Theme-aware styling

**Pagination:** Number-based và prev/next
- Navigation labels translated (Previous, Next, Page X of Y)
- Theme-aware styling

**Tabs:** Horizontal tabs với active states
- Tab labels translated
- Theme-aware styling

**Menu:** Dropdown menus, context menus
- Menu item text translated
- Theme-aware styling

---

## 📱 7. RESPONSIVE DESIGN STANDARDS

### 7.1 Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

### 7.2 Responsive Behaviors
**Tables:** Horizontal scroll on mobile, card layout option
**Forms:** Stack on mobile, side-by-side on desktop
**Navigation:** Hamburger menu on mobile
**Grids:** 1 column mobile, 2-3 columns tablet, 3-4 columns desktop
**Theme Toggle:** Accessible trên tất cả screen sizes
**Language Switcher:** Responsive dropdown, icon-only trên mobile

---

## 📋 8. COMPONENT USAGE RULES

### 8.1 QUY TẮC NGHIÊM CẤM
```
🚫 KHÔNG tạo style inline trong HTML
🚫 KHÔNG tạo CSS custom trong file page  
🚫 KHÔNG sửa đổi global.css, components.css, layout.css
🚫 KHÔNG sử dụng !important (trừ trường hợp đặc biệt)
🚫 KHÔNG tạo component mới mà không thảo luận
🚫 KHÔNG sử dụng OS commands trong development
🚫 KHÔNG hardcode text - PHẢI dùng translation keys
🚫 KHÔNG hardcode colors - PHẢI dùng CSS variables
🚫 KHÔNG store business data trong localStorage
```

### 8.2 QUY TẮC BẮT BUỘC
```
✅ PHẢI sử dụng CSS variables cho all colors
✅ PHẢI sử dụng translation keys cho all text
✅ PHẢI load data từ JSON files
✅ PHẢI support dark/light theme
✅ PHẢI support multi-language
✅ PHẢI sử dụng class names từ component system
✅ PHẢI tuân thủ BEM naming convention
✅ PHẢI sử dụng iframe cho page content
✅ PHẢI validate HTML trước khi hoàn thành
✅ PHẢI test responsive trên tất cả breakpoints
✅ PHẢI test both dark/light themes
✅ PHẢI test với multiple languages
```

---

## 🎛️ 9. INTERACTION PATTERNS

### 9.1 Theme Switching
**Theme Toggle Behavior:**
- Toggle button ở header (moon/sun icons)
- Instant theme switching without page reload
- Smooth CSS transitions
- Persist preference trong localStorage
- Auto-detect system preference on first visit

### 9.2 Language Switching  
**Language Switcher Behavior:**
- Dropdown ở header với flag icons
- Instant language switching without page reload
- Persist preference trong localStorage
- Auto-detect browser language on first visit
- Fallback to English for missing translations

### 9.3 Data Loading Patterns
**Async Data Operations:**
- Loading states cho all data fetching
- Error handling với user-friendly messages
- Retry mechanisms cho failed requests
- Skeleton screens cho better UX
- Progress indicators cho long operations

### 9.4 User Actions
**Primary Actions:** Prominent placement, primary button style
**Secondary Actions:** Less prominent, secondary button style  
**Destructive Actions:** Red color, confirmation modal required
**All action labels:** Translated and theme-aware

---

## 🎨 8. VISUAL HIERARCHY

### 8.1 Content Hierarchy
**Page Titles:** Largest heading, clear and descriptive
**Section Titles:** Consistent sizing and spacing
**Body Text:** Optimal line height and contrast
**Captions:** Smaller, secondary color

### 8.2 Action Hierarchy
**Primary CTA:** Most prominent, single per section
**Secondary Actions:** Less prominent but accessible
**Utility Actions:** Minimal styling, contextual placement

---

## 🔧 9. DEVELOPMENT WORKFLOW

### 9.1 Component-First Approach
1. **Define component specifications**
2. **Create reusable components**
3. **Test components independently**
4. **Document component usage**
5. **Implement pages using components**

### 9.2 Page Development Process
1. **Use iframe structure for all pages**
2. **Start with page template**
3. **Add business logic using existing components**
4. **Test functionality within iframe**
5. **Validate responsive behavior**

---

## 📚 10. NAMING CONVENTIONS

### 10.1 File Naming
- **HTML files:** kebab-case (user-management.html)
- **CSS classes:** BEM methodology (block__element--modifier)
- **JavaScript:** camelCase (getUserData)
- **Data files:** snake_case (mock_users.json)

### 10.2 Class Naming Structure
**Block:** Component name (.card, .button, .form)
**Element:** Part of component (.card__header, .button__icon)
**Modifier:** Variation (.card--large, .button--primary)

---

## 🧪 11. QUALITY STANDARDS

### 11.1 Browser Support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### 11.2 Performance Standards
- First Contentful Paint < 2s
- No console errors
- Responsive on all target devices

### 11.3 Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper contrast ratios

---

## 📖 12. DOCUMENTATION REQUIREMENTS

### 12.1 Component Documentation
**Mỗi component cần:**
- Description và purpose
- Usage examples
- Available variants
- Props/parameters
- Browser compatibility notes

### 12.2 Page Documentation
**Mỗi page cần:**
- Route information
- Access permissions
- Components used
- Business logic description
- Last updated date

---

## 🚀 15. PROMPT TEMPLATES CHO CURSOR

### 15.1 Setup Project Foundation
```
Setup complete project foundation with:
- Folder structure theo Style Guide specifications
- Global CSS với theme variables (dark/light support)
- Component CSS với all base components  
- Translation system (en.json, vi.json)
- Main layout với theme toggle và language switcher
- Mock data structure cho all entities
CONSTRAINTS: Follow exact folder structure, use CSS variables only, no hardcoded values
```

### 15.2 Tạo Component
```
Create [COMPONENT_NAME] component following requirements:
- Theme support: Both dark/light modes using CSS variables
- i18n support: All text qua translation keys  
- Responsive: Mobile/tablet/desktop breakpoints
- States: Default, hover, focus, disabled, loading
- Follow BEM naming convention
- Add to components.css only
CONSTRAINTS: No custom CSS, use existing variables, provide usage examples
```

### 15.3 Tạo Page
```
Create [PAGE_NAME] page with specifications:
- Iframe structure: page-container layout
- Components: [LIST_COMPONENTS] 
- Data source: Load từ [JSON_FILE]
- Translations: All text qua t('page.section.key')
- Theme: Support dark/light mode styling
- Role access: [PERMISSIONS]
- Responsive: All breakpoints
CONSTRAINTS: No new CSS, use existing components, async data loading, translation keys mandatory
```

### 15.4 Setup Theme System
```
Implement theme switching system:
- CSS variables cho dark/light themes
- Theme toggle button trong header
- localStorage persistence  
- Smooth transitions between themes
- System preference detection
- Theme-aware component styling
CONSTRAINTS: Use CSS custom properties, no hardcoded colors, support all components
```

### 15.5 Setup Translation System
```
Implement multi-language system:
- Translation files: en.json, vi.json structure
- Language switcher trong header với flags
- t() function cho text rendering
- localStorage language persistence
- Browser language detection
- Fallback to English cho missing keys
CONSTRAINTS: No hardcoded text, translation keys mandatory, support all UI text
```

### 15.6 Setup Data Management
```
Create data management system:
- JSON file structure cho [ENTITY_TYPE]
- Async loading functions với error handling
- Mock API simulation với delays
- Local storage cho user preferences only
- Data validation và error states
- Pagination support trong data structure
CONSTRAINTS: All business data từ JSON, no localStorage for data, Promise-based loading
```

### 15.7 Fix Issues với Requirements
```
Fix [SPECIFIC_ISSUE] in [FILE]:
- Current: [DESCRIBE_CURRENT_STATE]
- Required: [DESCRIBE_EXPECTED_STATE]  
- Theme: Must work trong both dark/light modes
- i18n: All text phải translated
- Data: Load từ appropriate JSON file
- Responsive: Test all breakpoints
CONSTRAINTS: No global CSS changes, use existing components, maintain theme/i18n support
```

---

## 🔍 16. VALIDATION CHECKLIST

### 16.1 Component Validation
```
□ Theme support: Works trong both dark/light modes
□ Responsive: Functions trên mobile/tablet/desktop  
□ i18n ready: No hardcoded text, uses translation keys
□ CSS variables: No hardcoded colors or spacing
□ BEM naming: Follows block__element--modifier convention
□ States: All interactive states implemented
□ Accessibility: WCAG 2.1 AA compliant
```

### 16.2 Page Validation  
```
□ Iframe structure: Uses page-container layout
□ Data loading: Async từ JSON files với error handling
□ Theme aware: All styling supports dark/light modes
□ Translated: All user-facing text uses t() function
□ Responsive: Layout adapts to all screen sizes
□ Role-based: Access control implemented correctly
□ Performance: No console errors, fast loading
```

### 16.3 System Integration
```
□ Theme switching: Instant change without reload
□ Language switching: Instant change without reload  
□ Data persistence: User preferences saved correctly
□ Component reuse: No duplicate styling across pages
□ Global consistency: All pages follow same patterns
□ Browser support: Works across target browsers
```

---

## 📞 17. SUPPORT & ESCALATION

### 17.1 Approval Required cho Changes
- Color palette modifications
- New component creation
- Layout structure changes  
- Translation key structure changes
- Theme system modifications
- Data schema changes
- Breakpoint additions
- New interaction patterns

### 17.2 Auto-Approved Tasks
- Bug fixes using existing components
- New pages using existing components
- Translation additions to existing keys
- Data additions to existing JSON structure
- Responsive improvements within guidelines
- Accessibility enhancements
- Performance optimizations

---

**📌 LƯU Ý QUAN TRỌNG:**
Style Guide này là foundation cho tất cả development. Mọi thay đổi phải được approve và cập nhật document này để đảm bảo consistency across team.