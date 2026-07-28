# Introduction Page Topology

Source: https://simudyne.com/introduction/

## Structure

1. **Page shell** (`intro-page`) — fixed full-viewport overlay (`z-index: 200`), body `content-locked`
2. **iframe** → `/brandstory/` — full-bleed WebGL brand story

## Brandstory scenes (scroll/wheel-driven)

INTERACTION MODEL: wheel/scroll-driven canvas animation (not page scroll; `body` is `position: fixed; overflow: hidden`)

Scene messages (bottom copy, fade in/out):
1. opening — “We’re on a mission to reframe how we all see the world.” (white)
2. sphere — “Using simulation, we’re building more understanding” (white)
3. constellation — “Enabling better decision making…” (white)
4. brain — “By augmenting human intelligence” (white)
5. dot2 — “We’re bringing tomorrow closer to today.” (blue `#002dff`)
6. circle — “Imagine if you could make a decision” (blue)
7. dataVis1 — “Understand its consequences” (blue)
8. dataVis2 — “And re-engineer with zero risk” (blue)
9. final — “Welcome to the Age of Simulation” + Back to site

UI chrome:
- CLOSE button (top-right) → parent `/`
- Scroll indicator (bottom center, animated arrow)

## Clone mapping

- Route: `src/app/introduction/page.tsx`
- Static experience: `public/brandstory/`
