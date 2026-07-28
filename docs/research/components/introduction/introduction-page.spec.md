# IntroductionPage Specification

## Overview
- **Target file:** `src/app/introduction/page.tsx`
- **Embedded experience:** `public/brandstory/index.html` (+ assets)
- **Screenshot:** (viewport of live brandstory)
- **Interaction model:** iframe shell (static) + wheel-driven WebGL (brandstory)

## DOM Structure

```
.intro-page (fixed, inset-0, z-200)
  iframe[src=/brandstory/]
```

Brandstory body:
```
.container > canvas.Main-Canvas
.copy-container
  .message.opening|sphere|constellation|brain|dot2|circle|dataVis1|dataVis2|final
  a.close.button
  .scroll-indicator > .inner
```

## Computed Styles

### .intro-page / iframe
- position: fixed / absolute
- left/top: 0; width/height: 100%; border: none; z-index: 200

### body (brandstory)
- background: #0f033c
- position: fixed; overflow: hidden; width/height: 100%

### .message
- bottom: 10%; width: calc(100% - 60px); text-align: center
- font-size: 24px; font-family: PxGroteskRegular; color: #fff
- padding: 30px; opacity: 0

### .close.button
- position: absolute; top: 20px; right: 40px
- background: #fff; color: #0f033c; font-size: 11px
- padding: 4px 12px; border-radius: 4px; letter-spacing: 0.92px; text-transform: uppercase

## Assets
- `public/brandstory/assets/js/app.js` (WebGL bundle)
- `public/brandstory/assets/obj/brain.obj`
- `public/brandstory/assets/img/{arrow,arrow-blue,Simudyne,simudyne-animation}.*`
- Font CSS with embedded WOFF

## Text Content (verbatim)
See PAGE_TOPOLOGY.md scene list.

## Responsive Behavior
- Desktop/tablet/mobile: full-bleed iframe; message font 24→20px under 1000px (handled inside brandstory CSS injected by app)
