# Essential Style Guide & Development Standards

## 🎯 Mục tiêu
Đảm bảo **Foundation-first approach**, **Component reusability**, **Zero duplication**, **Complete TODO roadmap**

---

## 🚀 QUY TRÌNH BẮT BUỘC

### Phase 0: Foundation (KHÔNG ĐƯỢC BỎ QUA)
1. **Project structure** → 2. **Base components** → 3. **Theme system** → 4. **Translation system** → 5. **Main layout** → 6. **Validation**

### Phase 1+: Business Logic
**CHỈ sử dụng existing components** + **Load data từ JSON** + **Translation keys** + **Test responsive/theme**

---

## 📁 CẤU TRÚC PROJECT

```
project/
├── main.html                     # Main layout với iframe
├── assets/
│   ├── css/
│   │   ├── global.css           # KHÔNG ĐƯỢC SỬA
│   │   ├── components.css       # KHÔNG ĐƯỢC SỬA  
│   │   ├── layout.css          # KHÔNG ĐƯỢC SỬA
│   │   └── themes.css          # Theme variables
│   └── js/                      # global.js, components.js, auth.js, api.js
├── components/base/             # button, input, table, modal, card, dropdown
├── pages/                       # Business logic pages (iframe content)
└── data/
    ├── mock-*.json             # All business data
    └── translations/           # en.json, vi.json
```

---

## 🔗 DEPENDENCIES

```
CSS Variables → Theme System → All Components → Pages
Translation System → All Text → Pages  
Base Components → Composite Components → Pages
Layout + Iframe → All Pages
```

**RULE:** Không được tạo page thiếu base components

---

## 🎨 DESIGN SYSTEM

### Colors (CSS Variables)
- **Primary**: #2C6EAA, #4A8BC2 (hover), #1E4F78 (active)
- **Status**: #10B981 (success), #F59E0B (warning), #EF4444 (error)
- **Theme vars**: `--bg-primary`, `--text-primary`, `--border-color` (auto dark/light)

### Typography & Spacing
- **Fonts**: Inter/Roboto, 12px→36px scale
- **Spacing**: 4px→80px scale (8px base)
- **Radius**: 4px→16px, **Shadows**: 5 levels

---

## 🌍 INTERNATIONALIZATION

### Structure
```
data/translations/
├── en.json    # Default
└── vi.json    # Vietnamese
```

### Rules
- **ALL text**: `t('section.key')` format
- **NO hardcoded text**
- **Fallback**: English nếu missing
- **Header**: Language switcher với flags

---

## 📊 DATA MANAGEMENT

### JSON Schema
```json
{
  "meta": { "version": "1.0", "totalCount": 100 },
  "data": [...],
  "filters": {...},
  "pagination": {...}
}
```

### Rules
- **ALL data**: Load từ JSON files
- **Async**: Promise-based với delays
- **localStorage**: CHỈ user preferences (theme, language)
- **NO business data** trong localStorage

---

## 🧩 BASE COMPONENTS (PHẢI CÓ TRƯỚC)

### Required Components
- **Button**: Primary/Secondary/Ghost + Small/Large + Loading/Disabled
- **Input**: Text/Email/Password + Validation + Labels/Errors
- **Table**: Sortable + Pagination + Responsive
- **Modal**: Header/Body/Footer + Sizes
- **Card**: Image/Header/Body/Footer
- **Dropdown**: Select + Multi-select

### Component Rules
- **Theme support**: Dark/light modes
- **i18n support**: Translation keys
- **Responsive**: Mobile/tablet/desktop
- **BEM naming**: block__element--modifier

---

## 📋 BUSINESS PATTERNS

### CRUD Template
1. **List page**: Table + search + filter + pagination
2. **Create/Edit**: Modal forms với validation
3. **Delete**: Confirmation với impact warning

### Page Structure
```html
<div class="page-container">
  <div class="page-header"><!-- Title + actions --></div>
  <div class="page-content"><!-- Main content --></div>
  <div class="page-footer"><!-- Pagination --></div>
</div>
```

---

## 📱 RESPONSIVE

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Behaviors
- **Tables**: Horizontal scroll mobile
- **Navigation**: Hamburger menu mobile
- **Grids**: 1/2-3/3-4 columns

---

## 🚫 QUY TẮC NGHIÊM CẤM

```
🚫 Tạo CSS mới trong pages
🚫 Hardcode text (phải dùng t('key'))
🚫 Hardcode colors (phải dùng CSS variables)
🚫 Store business data trong localStorage
🚫 Sửa global.css, components.css, layout.css
🚫 OS commands trong development
🚫 Tạo component mới không thảo luận
```

---

## ✅ QUY TẮC BẮT BUỘC

```
✅ Sử dụng existing components
✅ Load data từ JSON files
✅ Support dark/light theme
✅ Support multi-language  
✅ Responsive all breakpoints
✅ Iframe structure cho pages
✅ BEM naming convention
```

---

## 🧪 TESTING CHECKLIST

### Phase 0 Foundation
```
□ All base components created và tested
□ Theme switching works on ALL components  
□ Translation system functional
□ Main layout với iframe working
□ Mock data schema validated
```

### Per Page
```
□ Uses ONLY existing components
□ ALL text translated (t('key'))
□ Data từ appropriate JSON file
□ Works both dark/light themes
□ Responsive mobile/tablet/desktop
□ No console errors
```

---

## 🚀 CURSOR PROMPTS

### Foundation Setup
```
Create [COMPONENT] foundation:
- Theme support (dark/light CSS variables)
- i18n support (translation keys)
- Responsive (mobile/tablet/desktop) 
- All states (hover/focus/disabled/loading)
- BEM naming, add to components.css only
CONSTRAINTS: No custom CSS, use existing variables, test independently
```

### Business Logic
```
Create [PAGE] using existing components:
- Load data from [JSON_FILE]
- All text via t('page.section.key')
- Page-container structure for iframe
- Support both themes/languages
- Responsive all breakpoints
CONSTRAINTS: Zero new CSS, zero hardcoded text, zero localStorage for data
```

---

## 🎯 SUCCESS CRITERIA

### Foundation Quality
- **100%** component reusability
- **Zero** CSS duplication
- **Complete** theme/i18n coverage

### Business Logic Quality  
- **Zero** new CSS files
- **100%** translation key usage
- **All** data từ JSON files

### Integration Quality
- **Seamless** navigation
- **Consistent** user experience
- **Performance** targets met

---

**📌 CRITICAL RULE:**
Phase 0 foundation PHẢI hoàn thành 100% trước khi bắt đầu business logic. Điều này ngăn chặn architectural debt và đảm bảo consistency toàn bộ project.