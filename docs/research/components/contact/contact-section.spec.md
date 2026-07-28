# ContactSection Specification

## Overview
- **Target files:** `src/components/ContactSection.tsx`, `src/components/ContactForm.tsx`
- **Route:** `src/app/contact/page.tsx`
- **Interaction model:** static layout + form inputs (demo submit prevented)

## DOM Structure

```
section.contact-page
  .content-row (flex)
    .col-offset-2.col-8 (left)
      .dots-symbol > logo anim 70x70
      h1 Contact us
      p × 3 intro
      .address.small-type
        h5 Our address + address + View On Google Maps
        h5 Email us + support@simudyne.com
    .col-offset-2.col-10 (right)  [or ml on desktop]
      .contact-form (white card)
        labels + inputs + Send
```

## Computed Styles

### h1
- fontSize: 48px; lineHeight: 56px; letterSpacing: -1.2px; color: #fff; margin: ~32px 0; fontWeight: 400

### Intro paragraphs
- fontSize: 17px; color: rgb(159, 154, 177); margin: 17px 0

### .address.small-type
- marginTop: 110px; fontSize: 12px; color: rgb(183, 179, 196); lineHeight: 18px

### h5 (address labels)
- fontSize: 10px; letterSpacing: 1px; uppercase; color: rgb(183, 179, 196)
- borderBottom: 1px dotted rgba(255,255,255,0.4); display: inline-block; width ~50%

### Links (maps / email)
- color: #fff; uppercase; borderBottom: 1px dotted rgba(255,255,255,0.4)

### .contact-form
- background: #fff; padding: 45px; borderRadius: 4px; color: #0f033c

### Labels
- fontSize: 11px; letterSpacing: 0.5px; uppercase; color: #0f033c; marginBottom: 10px; display: block

### Inputs / textarea
- background: #ecebee; border: 1px solid #ecebee; borderRadius: 2px; padding: 10px
- fontSize: 13px; letterSpacing: -0.3px; color: #0f033c; width: 100%; marginTop: 10px
- textarea height: 212px

### Send button
- background: #002dff; color: #fff; padding: 12px 24px; borderRadius: 4px
- fontSize: 13px; uppercase; letterSpacing: -0.3px

### Logo anim (.logo-animation.intelligent)
- 70×70 absolute near top-left of content (dots-symbol)

## Text Content (verbatim)
See live site / PAGE_TOPOLOGY.

## Responsive
- Desktop 1440: two columns
- Mobile 390: stack; h1 smaller; form full bleed padding reduced
