# Introduction / Brandstory Behaviors

## Interaction model

**Wheel / gesture driven** WebGL canvas (`Main-Canvas`). Document does not scroll (`overflow: hidden`, `position: fixed`). Advancing scenes updates canvas animation class (`anim1` …) and toggles `.message.show` / `.hide` plus `.scroll-indicator` variants.

## Copy transitions

- Default message: `opacity: 0`
- `.show`: `opacity: 1; transition: opacity 0.5s 2s; pointer-events: all`
- `.hide`: `opacity: 0; transition: opacity 0.5s`
- Blue-tint scenes: `.dot2`, `.circle`, `.dataVis1`, `.dataVis2` → `color: #002dff`

## Scroll indicator

- Fixed bottom center; shown with `.show`
- Arrow `assets/img/arrow.png` (blue scenes use `arrow-blue.png`)
- Keyframes `animate-scroll-indicator`: translateY 0→60px with opacity pulse, 2s infinite

## Exit

- CLOSE / Back to site: `target="_parent"` → `/` (returns to site shell)
- Age of Simulation: demo clone disables external navigation (`href="#"`)

## Responsive

- Messages: `24px` desktop; `20px` at `max-width: 1000px`
- Canvas resizes to viewport
