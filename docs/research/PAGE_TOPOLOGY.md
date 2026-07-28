# Simudyne Homepage — Page Topology

Target: https://simudyne.com/  
Viewport reference: 1440×900 (desktop), 390×844 (mobile)

## Global
- **Background:** `#0f033c` (`rgb(15, 3, 60)`)
- **Font:** `PxGroteskRegular` (Optimo)
- **Accent:** `#002dff`
- **Scroll animations:** `.scroll-animation.fade-in` → `opacity 0` + `translateY(40px)` → `.scroll-show` restores; 1s transition. Hero uses `straight-fade-in` (opacity only).
- **Smooth scroll libs:** none (native)
- **Max content width:** 1440px; 24-column grid with 18px gaps

## Sections (top → bottom)

| # | Name | Selector / class | Interaction | Sticky? |
|---|------|------------------|-------------|---------|
| 0 | SiteHeader | `header` | Hover dropdowns (Solutions/Insights/About); Talk to us blue ::before; mobile menu | relative (scrolls away); blue overlay opacity on scroll via JS |
| 1 | Hero | `.page-header.home` | Video autoplay; video-info hover; parallax container; logo frame animation | no |
| 2 | SoftwareIntro | `.three-quarters-wide` | scroll fade-in | no |
| 3 | FeatureColumns | `.three-columns` | scroll fade-in | no |
| 4 | Calibrate | `.two-columns` (1st) | scroll fade-in | no |
| 5 | UnderstandImpact | `.two-columns` (2nd) | scroll fade-in | no |
| 6 | GatherInsights | `.row-with-background-and-list` | scroll fade-in | no |
| 7 | Partners | `.partner-row` | static | no |
| 8 | SiteFooter | `footer` | link hovers | no |

## Dependencies
- Header overlays hero (z-index 10), gradient fade into page bg
- Hero video only on desktop (>768)
- Gather insights uses layered background image + right column text
