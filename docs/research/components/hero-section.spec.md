# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** time-driven (video + frame animation) + hover (info) + scroll (parallax, fade-in)

## Structure
- `.parallax-container` with desktop/mobile background images
- Desktop video `/videos/hero-datavis.mp4` muted autoplay loop, positioned right ~70% width
- Logo animation frames in `/images/hero/logoanim/`
- `.video-info` with `i` icon + Nasdaq tooltip
- Content: Reality / spacer / Re-engineered, H1, Enter button

## Computed Styles
- Hero height ~690px; display flex; align-items center; overflow hidden
- H1: 72px / 72px line-height / letter-spacing -2px / color #fff
- Enter button: bg #002dff; padding 12px 24px; radius 4px; 11px uppercase

## Assets
- `/images/hero/background.jpg`, `background-mobile.jpg`
- `/videos/hero-datavis.mp4`
- logoanim frames

## Text
- Reality — Re-engineered
- Welcome to the Age of Simulation
- Enter
- A visualization based on real stock market data from Nasdaq
