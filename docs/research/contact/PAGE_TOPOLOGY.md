# Contact Page Topology

Source: https://simudyne.com/contact/

## Sections (top → bottom)

1. **SiteHeader** — shared (Talk to us active / navigates here)
2. **ContactHero** — two-column:
   - Left (`col-2-offset col-8`): decorative dots-symbol logo anim + H1 + intro copy + address/email
   - Right (`col-2-offset col-10`): white `.contact-form` card
3. **SiteFooter** — shared Let's Chat + legal

## Interaction model

- Form: local demo only (no CF7 / captcha submit)
- Links (maps, mailto, social): DeadLink / prevent external
- Talk to us / Get in touch / Contact Us → internal `/contact`
- Logo → `/`

## Layout

- Desktop: flex content-row, left ~col-8, right ~col-10 with extra offset
- Mobile: stack; form full width
