# Complete Enhanced Style Guide & Development Standards

## 🎯 Mục tiêu Style Guide
Style Guide này được thiết kế để tạo TODO list hoàn chỉnh và đảm bảo:
- **Tính nhất quán**: Tất cả màn hình có giao diện đồng nhất
- **Foundation-first approach**: Xây dựng nền tảng trước business logic
- **Component reusability**: Không duplicate code
- **Business pattern consistency**: Chuẩn hóa các pattern nghiệp vụ
- **Complete development roadmap**: Từ setup đến production

---

## 🚀 QUY TRÌNH PHÁT TRIỂN BẮT BUỘC

### Phase 0: Foundation Setup (KHÔNG ĐƯỢC BỎ QUA)
**Thứ tự thực hiện:**
1. Setup project structure theo đúng folder hierarchy
2. Tạo ALL base components và test independently
3. Implement theme system với full testing
4. Implement translation system với fallback
5. Create main layout với iframe integration
6. Validation checklist completion trước khi chuyển Phase 1

### Phase 1-3: Business Logic Implementation  
**Quy tắc thực hiện:**
1. CHỈ sử dụng existing components (NO new CSS)
2. Load ALL data từ JSON files (NO localStorage for business data)
3. Implement theo standardized page templates
4. Test responsive behavior trên tất cả breakpoints
5. Validate theme/language support cho mọi feature

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
    ├── mock-quizzes.json
    └── translations/
        ├── en.json
        └── vi.json
```

---

## 🔗 COMPONENT DEPENDENCY MATRIX

### Critical Path Dependencies:
```
Foundation Layer:
├── CSS Variables (global.css) → Theme System → All Components
├── Translation System (i18n) → All Text Content
└── Layout System (iframe) → All Pages

Component Layer:
├── Button → Form → Modal → All Interactive Pages
├── Input → Search/Filter → All Data Pages  
├── Table → Pagination → All List Pages
├── Card → Grid → Dashboard/Course Pages
├── Dropdown → Navigation → All Selection Features
└── Toast → Feedback → All CRUD Operations
```

### Dependency Rules:
- **KHÔNG ĐƯỢC tạo page nào thiếu base components**
- **PHẢI test component trước khi integrate vào page**
- **Component PHẢI support theme + i18n trước khi release**

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

### 4.2 Mock Data Schema Standards

#### Standardized File Structure:
```json
{
  "meta": {
    "version": "1.0",
    "lastUpdated": "2025-01-XX",
    "totalCount": 100,
    "pageSize": 20
  },
  "data": [...],
  "filters": {
    "status": ["active", "inactive", "pending"],
    "categories": [...],
    "dateRange": {...}
  },
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### Required Data Fields:
- **ID fields**: Always string format với consistent naming
- **Dates**: ISO 8601 format (2025-01-15T10:30:00Z)
- **Status**: Enum values với translation keys
- **Relations**: Reference IDs, không embed full objects
- **Pagination**: Support offset/limit pattern

#### Data Relationships:
```
Users → Classes (many-to-many)
Users → Courses (enrollments)
Courses → Categories (belongs-to)
Courses → Lessons (one-to-many)
Quizzes → Courses (belongs-to)
Results → Users + Quizzes (junction)
```

### 4.3 Data Loading Standards
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

### 4.4 State Management
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

## 🏗️ BUSINESS LOGIC INTEGRATION PATTERNS

### Page Creation Standards:
**Mọi page PHẢI follow:**
1. **Structure**: `page-container` → `page-header` → `page-content` → `page-footer`
2. **Text**: ALL content qua `t('page.section.key')` function
3. **Data**: Async load từ appropriate JSON file
4. **States**: Loading, error, empty states cho mọi data operation
5. **Validation**: Form validation với real-time feedback

### Component Usage Rules:
```html
<!-- Search Pattern -->
<div class="search-container">
  <input class="form-input" placeholder="t('common.search')" />
  <select class="form-select">...</select>
</div>

<!-- Table Pattern -->
<div class="table-container">
  <table class="table">...</table>
  <div class="pagination">...</div>
</div>

<!-- Action Pattern -->
<div class="action-group">
  <button class="btn btn-primary">t('common.add')</button>
  <button class="btn btn-secondary">t('common.export')</button>
</div>

<!-- Filter Pattern -->
<div class="filter-bar">
  <select class="dropdown">...</select>
  <input class="date-picker" />
</div>
```

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

## 📋 STANDARDIZED FEATURE TEMPLATES

### CRUD Operations Template:
**Required pages cho mọi entity:**
1. **List page**: Table + search + filter + pagination
2. **Detail page**: View information + related data
3. **Create modal**: Form validation + success feedback
4. **Edit modal**: Pre-filled form + update confirmation
5. **Delete confirmation**: Impact warning + cascade info

### Dashboard Template:
**Required sections:**
1. **Welcome card**: User-specific greeting + role indicator
2. **Statistics cards**: Key metrics với progress indicators
3. **Recent activities**: Timeline với action links
4. **Quick actions**: Primary workflows accessible
5. **Navigation shortcuts**: Deep links to main features

### Form Page Template:
**Required structure:**
1. **Page header**: Title + breadcrumbs + help link
2. **Form sections**: Logical grouping với fieldsets
3. **Validation**: Real-time feedback + error summary
4. **Actions**: Save/Cancel/Reset với loading states
5. **Auto-save**: Draft functionality cho long forms

---

## 🎯 BUSINESS PATTERNS LIBRARY

### User Management Pattern:
```
Standard Flow:
1. Users list với role-based filtering
2. User detail modal với progress display
3. Add user với role assignment
4. Edit user với permission validation
5. Delete user với dependency check
6. Activity logging for all operations
```

### Course Management Pattern:
```
Standard Flow:
1. Course grid với category filtering
2. Course detail với lesson progression
3. Enrollment management với approval workflow
4. Progress tracking với analytics
5. Certificate generation when completed
6. Instructor feedback collection
```

### Quiz Management Pattern:
```
Standard Flow:
1. Quiz list với attempt status
2. Quiz builder với question templates
3. Quiz attempt với timer và auto-save
4. Results display với detailed breakdown
5. Grade export với multiple formats
6. Analytics dashboard for instructors
```

### Dashboard Pattern:
```
Role-specific layouts:
Student: Progress + enrolled courses + upcoming quizzes
Teacher: Teaching stats + student progress + course management
Admin: System overview + user management + system logs
```

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

## 🎨 10. VISUAL HIERARCHY

### 10.1 Content Hierarchy
**Page Titles:** Largest heading, clear and descriptive
**Section Titles:** Consistent sizing and spacing
**Body Text:** Optimal line height and contrast
**Captions:** Smaller, secondary color

### 10.2 Action Hierarchy
**Primary CTA:** Most prominent, single per section
**Secondary Actions:** Less prominent but accessible
**Utility Actions:** Minimal styling, contextual placement

---

## 🔧 11. DEVELOPMENT WORKFLOW

### 11.1 Component-First Approach
1. **Define component specifications**
2. **Create reusable components**
3. **Test components independently**
4. **Document component usage**
5. **Implement pages using components**

### 11.2 Page Development Process
1. **Use iframe structure for all pages**
2. **Start with page template**
3. **Add business logic using existing components**
4. **Test functionality within iframe**
5. **Validate responsive behavior**

### 11.3 Cursor Prompt Strategy:
**Phase 0 Prompts:**
```
PHASE 0: Foundation Setup
Task: Create [COMPONENT_TYPE] foundation
Requirements: 
- Follow exact Style Guide structure
- Include theme variables for dark/light modes
- Include translation key placeholders
- Test independently before integration
CONSTRAINTS: No business logic, focus on reusability, full documentation
```

**Business Logic Prompts:**
```
BUSINESS LOGIC: Create [PAGE_NAME]
Requirements:
- Use ONLY existing components from Phase 0
- Load data from [SPECIFIC_JSON_FILE]
- All text via t('page.section.key') pattern
- Include loading/error/empty states
- Support both themes và languages
CONSTRAINTS: Zero new CSS, zero hardcoded text, zero localStorage for data
```

### 11.4 Quality Gates:
**Gate 1 (Phase 0)**: All components tested independently
**Gate 2 (Per Page)**: Component integration validated
**Gate 3 (Module)**: Cross-page navigation tested
**Gate 4 (System)**: Full integration testing

---

## 📚 12. NAMING CONVENTIONS

### 12.1 File Naming
- **HTML files:** kebab-case (user-management.html)
- **CSS classes:** BEM methodology (block__element--modifier)
- **JavaScript:** camelCase (getUserData)
- **Data files:** snake_case (mock_users.json)

### 12.2 Class Naming Structure
**Block:** Component name (.card, .button, .form)
**Element:** Part of component (.card__header, .button__icon)
**Modifier:** Variation (.card--large, .button--primary)

---

## 🧪 13. COMPREHENSIVE TESTING FRAMEWORK

### 13.1 Pre-Development Checklist (Phase 0):
```
□ Project structure matches Style Guide exactly
□ All CSS files created với correct variables
□ All base components created và tested independently
□ Theme switching works on ALL components
□ Translation system implemented với fallback logic
□ Mock data files created với correct schema
□ Main layout với iframe functional và responsive
□ Component dependency matrix validated
```

### 13.2 Per-Page Development Checklist:
```
□ Uses ONLY existing components (zero new CSS)
□ ALL text content translated (zero hardcoded strings)
□ Data loaded from appropriate JSON file
□ Async operations với proper error handling
□ Loading states implemented for all data fetching
□ Form validation với comprehensive error messages
□ Responsive design tested on mobile/tablet/desktop
□ Works perfectly in both dark/light themes
□ Works correctly with both EN/VI languages
□ Role-based access control implemented
□ No console errors or warnings
```

### 13.3 Integration Testing Requirements:
```
□ Navigation between all pages functional
□ Theme persistence across entire application
□ Language persistence across all pages
□ Data consistency và relationship integrity
□ Role-based menu rendering correctly
□ Session management working properly
□ Performance acceptable on all devices
□ Cross-browser compatibility verified
```

### 13.4 Component Validation
```
□ Theme support: Works trong both dark/light modes
□ Responsive: Functions trên mobile/tablet/desktop  
□ i18n ready: No hardcoded text, uses translation keys
□ CSS variables: No hardcoded colors or spacing
□ BEM naming: Follows block__element--modifier convention
□ States: All interactive states implemented
□ Accessibility: WCAG 2.1 AA compliant
```

### 13.5 Page Validation  
```
□ Iframe structure: Uses page-container layout
□ Data loading: Async từ JSON files với error handling
□ Theme aware: All styling supports dark/light modes
□ Translated: All user-facing text uses t() function
□ Responsive: Layout adapts to all screen sizes
□ Role-based: Access control implemented correctly
□ Performance: No console errors, fast loading
```

### 13.6 System Integration
```
□ Theme switching: Instant change without reload
□ Language switching: Instant change without reload  
□ Data persistence: User preferences saved correctly
□ Component reuse: No duplicate styling across pages
□ Global consistency: All pages follow same patterns
□ Browser support: Works across target browsers
```

---

## 🧪 14. QUALITY STANDARDS

### 14.1 Browser Support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### 14.2 Performance Standards
- First Contentful Paint < 2s
- No console errors
- Responsive on all target devices

### 14.3 Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper contrast ratios

---

## 📖 15. DOCUMENTATION REQUIREMENTS

### 15.1 Component Documentation
**Mỗi component cần:**
- Description và purpose
- Usage examples
- Available variants
- Props/parameters
- Browser compatibility notes

### 15.2 Page Documentation
**Mỗi page cần:**
- Route information
- Access permissions
- Components used
- Business logic description
- Last updated date

---

## 🚀 16. PROMPT TEMPLATES CHO CURSOR

### 16.1 Setup Project Foundation
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

### 16.2 Tạo Component
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

### 16.3 Tạo Page
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

### 16.4 Setup Theme System
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

### 16.5 Setup Translation System
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

### 16.6 Setup Data Management
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

### 16.7 Fix Issues với Requirements
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

## 🚨 17. COMMON PITFALLS & PREVENTION

### 17.1 Cursor AI Typical Mistakes:
1. **Creating duplicate CSS**: Prevent với strict component-only rule
2. **Hardcoding text**: Prevent với translation-key validation
3. **OS commands**: Prevent với explicit constraint messaging
4. **Inconsistent styling**: Prevent với component library enforcement
5. **localStorage misuse**: Prevent với clear data layer rules

### 17.2 Prevention Strategies:
- **Explicit constraints** trong every prompt
- **Component validation** before page creation
- **Regular checkpoint** reviews
- **Rollback procedures** for violations

---

## 📊 18. SUCCESS METRICS

### 18.1 Foundation Quality (Phase 0):
- 100% component reusability across pages
- Zero CSS duplication
- Complete theme coverage
- Full translation coverage

### 18.2 Business Logic Quality (Phase 1-3):
- Zero new CSS files created
- 100% translation key usage
- All data từ JSON files
- Cross-browser compatibility

### 18.3 Integration Quality:
- Seamless navigation
- Consistent user experience
- Performance targets met
- Accessibility compliance

---

## 📞 19. SUPPORT & ESCALATION

### 19.1 Approval Required cho Changes
- Color palette modifications
- New component creation
- Layout structure changes  
- Translation key structure changes
- Theme system modifications
- Data schema changes
- Breakpoint additions
- New interaction patterns

### 19.2 Auto-Approved Tasks
- Bug fixes using existing components
- New pages using existing components
- Translation additions to existing keys
- Data additions to existing JSON structure
- Responsive improvements within guidelines
- Accessibility enhancements
- Performance optimizations

---

## 📈 20. PROGRESSIVE ENHANCEMENT STRATEGY

### 20.1 MVP Features (Phase 1):
- Basic CRUD operations
- Simple theming
- Essential translations
- Core responsive design

### 20.2 Enhanced Features (Phase 2):
- Advanced filtering
- Bulk operations
- Rich text editing
- Advanced charts

### 20.3 Advanced Features (Phase 3):
- Real-time updates
- Advanced permissions
- Export/import functionality
- Performance optimizations

---

**📌 CRITICAL SUCCESS FACTOR:**
Phase 0 foundation PHẢI hoàn thành 100% trước khi bắt đầu business logic. Điều này đảm bảo consistency và prevents architectural debt trong development process.

---

## 🎯 21. COMPLETE TODO DEVELOPMENT STRATEGY

### 21.1 TODO Structure Requirements
**Mọi TODO list PHẢI có structure:**
```
## Phase 0: Foundation Setup (BẮT BUỘC)
- [ ] Project Structure Setup
- [ ] CSS Foundation (global.css, components.css, layout.css, themes.css)
- [ ] Base Components Creation & Testing
- [ ] Theme System Implementation & Testing
- [ ] Translation System Implementation & Testing
- [ ] Main Layout với Iframe Integration
- [ ] Mock Data Schema Setup
- [ ] Foundation Validation Checklist

## Phase 1-N: Business Logic Modules
- [ ] Module-specific Mock Data
- [ ] Page Creation using ONLY existing components
- [ ] Feature Implementation with proper patterns
- [ ] Module Testing & Integration
- [ ] Cross-module Integration Testing
```

### 21.2 Task Granularity Standards
**Foundation Tasks:**
- Component-level granularity (1 task = 1 component)
- Include testing requirements
- Include documentation requirements
- Include integration validation

**Business Logic Tasks:**
- Page-level granularity (1 task = 1 complete page)
- Include all CRUD operations
- Include responsive testing
- Include theme/language testing

### 21.3 Dependency Tracking
**Required Task Dependencies:**
```
CSS Variables → Theme System → All Components → Pages
Translation System → All Text Content → Pages
Layout System → Iframe Integration → All Pages
Base Components → Composite Components → Pages
Mock Data Schema → Data Loading → Business Logic
```

---

## 🔄 22. ITERATIVE DEVELOPMENT PROCESS

### 22.1 Development Cycles
**Cycle 1: Foundation (Week 1)**
- Day 1-2: Project setup + CSS foundation
- Day 3-4: Base components creation
- Day 5-6: Theme + translation systems
- Day 7: Foundation testing + validation

**Cycle 2-N: Business Modules (Week 2+)**
- Day 1: Mock data + page templates
- Day 2-3: Core functionality implementation
- Day 4: Advanced features + integrations
- Day 5: Testing + bug fixes

### 22.2 Quality Checkpoints
**Daily Checkpoints:**
- Component functionality verification
- Theme switching validation
- Translation completeness check
- Responsive behavior testing

**Weekly Checkpoints:**
- Cross-browser compatibility
- Performance optimization
- Accessibility compliance
- Code quality review

---

## 🛠️ 23. MAINTENANCE & UPDATES

### 23.1 Style Guide Evolution
**Version Control:**
- Major version: Fundamental changes (color palette, architecture)
- Minor version: New components, features
- Patch version: Bug fixes, clarifications

**Update Process:**
1. Propose changes với rationale
2. Impact assessment on existing components
3. Backwards compatibility analysis
4. Implementation plan with migration guide
5. Team approval before implementation

### 23.2 Component Library Maintenance
**Regular Reviews:**
- Component usage analytics
- Performance optimization opportunities
- Accessibility compliance updates
- Browser compatibility updates

**Deprecation Process:**
1. Mark component as deprecated
2. Provide migration path
3. Update documentation
4. Remove after grace period

---

## 📋 24. PROJECT SUCCESS CRITERIA

### 24.1 Technical Success Metrics
```
Foundation Quality:
□ 100% component reusability
□ Zero CSS duplication across pages
□ All components theme-compatible
□ All text content translatable
□ Responsive design validated

Business Logic Quality:
□ All pages use existing components only
□ All data loaded from JSON files
□ All text uses translation keys
□ All features accessible via keyboard
□ All browsers supported

Integration Quality:
□ Seamless navigation between pages
□ Consistent user experience
□ Theme persistence across sessions
□ Language persistence across sessions
□ Performance targets achieved
```

### 24.2 User Experience Success Metrics
```
Usability:
□ Intuitive navigation patterns
□ Consistent interaction behaviors
□ Clear feedback for all actions
□ Accessible to users with disabilities
□ Fast loading times

Visual Design:
□ Cohesive design language
□ Appropriate visual hierarchy
□ Readable typography at all sizes
□ Sufficient color contrast
□ Professional appearance
```

### 24.3 Development Success Metrics
```
Code Quality:
□ Clean, maintainable code structure
□ Comprehensive component documentation
□ No code duplication
□ Consistent naming conventions
□ Proper error handling

Team Efficiency:
□ Reduced development time per feature
□ Fewer bugs in production
□ Easier onboarding for new developers
□ Consistent development practices
□ Effective collaboration workflows
```

---

## 🚀 25. FUTURE-PROOFING STRATEGIES

### 25.1 Scalability Considerations
**Component Scalability:**
- Design for extensibility
- Plan for new variants
- Consider performance implications
- Maintain backwards compatibility

**Data Scalability:**
- Design for larger datasets
- Plan for real API integration
- Consider caching strategies
- Optimize loading patterns

### 25.2 Technology Evolution
**Framework Migration Readiness:**
- Clean separation of concerns
- Minimal framework dependencies
- Standardized component interfaces
- Comprehensive documentation

**Modern Web Standards:**
- Progressive web app capabilities
- Advanced accessibility features
- Performance optimization techniques
- Security best practices

---

## 📖 26. COMPREHENSIVE DOCUMENTATION STRATEGY

### 26.1 Documentation Hierarchy
```
1. Style Guide (This Document)
   - Architecture decisions
   - Design principles
   - Development standards

2. Component Library Documentation
   - Individual component specs
   - Usage examples
   - API documentation

3. Page Documentation
   - Business logic description
   - User workflows
   - Integration points

4. Setup & Deployment Guide
   - Environment setup
   - Build processes
   - Deployment procedures
```

### 26.2 Documentation Maintenance
**Regular Updates:**
- Component changes documentation
- New feature additions
- Bug fix documentation
- Performance optimization notes

**Review Process:**
- Monthly documentation review
- Accuracy verification
- Completeness assessment
- User feedback incorporation

---

## 🎓 27. TEAM TRAINING & ONBOARDING

### 27.1 Developer Onboarding Checklist
```
□ Style Guide review and understanding
□ Development environment setup
□ Component library familiarization
□ Code review process training
□ Quality standards training
□ Accessibility guidelines training
```

### 27.2 Continuous Learning
**Regular Training Topics:**
- New web standards and best practices
- Accessibility improvements
- Performance optimization techniques
- Security considerations
- User experience principles

---

## 🔍 28. MONITORING & ANALYTICS

### 28.1 Component Usage Analytics
**Track:**
- Most/least used components
- Performance bottlenecks
- Error rates by component
- User interaction patterns

**Optimize:**
- Remove unused components
- Improve poorly performing components
- Fix high-error components
- Enhance popular components

### 28.2 User Experience Monitoring
**Monitor:**
- Page load times
- User task completion rates
- Error frequency
- Accessibility compliance

**Improve:**
- Performance optimization
- User flow simplification
- Error reduction strategies
- Accessibility enhancements

---

**📌 FINAL NOTE:**
This comprehensive Style Guide serves as the single source of truth for all development activities. Adherence to these standards ensures consistent, maintainable, and scalable applications that provide excellent user experiences across all devices and user capabilities. Regular review and updates of this guide ensure it remains relevant and effective as technology and user needs evolve.