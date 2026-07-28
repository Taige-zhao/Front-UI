# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** desktop hero/header region
- **Interaction model:** hover-driven dropdowns + scroll-driven blue overlay + click mobile menu

## Computed Styles
### Container (`header`)
- padding: 40px 0 30px
- background: linear-gradient(0deg, rgba(15,3,60,0), rgba(15,3,60,0.6))
- position: relative; z-index: 10
- height: 92px

### Logo
- 97×21px; background image `/images/logo.svg`

### Nav links
- font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #fff

### Talk to us
- `li::before` blue `#002dff` ~108×110px centered behind label

### Blue overlay
- `.blue-header-background` absolute full size; opacity 0 → 0.8 on scroll

## States & Behaviors
- Hover parent nav item → submenu opacity 0→1 (0.3s)
- Scroll > ~40px → blue overlay show
- Mobile <768 → hamburger Menu / Close fullscreen

## Text Content
Solutions, Insights, About us, Careers, Talk to us (+ submenu items Discover/Simulate/Reason, News/Use Cases/Model Garden/Research, Patents/Brand)

## Responsive
- Desktop: horizontal menu
- Mobile: fullscreen blue menu
