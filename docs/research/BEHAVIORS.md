# Simudyne Homepage — Behaviors

## Scroll
- **Fade-in sections:** `.scroll-animation.fade-in` starts at `opacity: 0; transform: translateY(40px)`. When in viewport, JS adds `.scroll-show` → `opacity: 1; transform: none`. Transition: `opacity 1s, transform 1s`.
- **Hero:** `.straight-fade-in` opacity-only fade (1s).
- **Header blue overlay:** `.blue-header-background` absolute full header, `#002dff`, opacity 0 → `.show` opacity 0.8, transition 0.5s (triggered near top scroll in theme scripts).
- **Parallax:** `.parallax-container` `data-parallax-speed=".4"` translates on scroll.

## Hover
- **Nav dropdowns:** `.sub-menu` children start `opacity: 0`; parent hover reveals (opacity 0.3s).
- **Buttons `.button`:** bg `#002dff` → hover `#0420c4`, transition 0.2s ease-in-out. Ripple class present.
- **Video info:** `.info-icon` hover shows `.info-text-container` opacity 0→1 (0.5s); blue rounded background.
- **Footer / social links:** underline / border-bottom accent links.

## Click
- Nav links navigate (clone: use `<a href>`).
- ENTER → `/introduction/`
- GET IN TOUCH / Talk to us → `/contact/`
- Mobile: Menu / Close toggles `.mobile-menu`

## Responsive
- **1440:** full desktop layout, video visible, 3-col features, 2-col calibrate/impact
- **768:** stack columns; hide desktop video; show mobile backgrounds
- **390:** mobile menu; partners wrap; gather insights mobile bg image

## Time-driven
- Hero `<video>` muted autoplay loop
- Logo dimensional frame sequence (theme cycles PNG frames in `.logo-animation`)
