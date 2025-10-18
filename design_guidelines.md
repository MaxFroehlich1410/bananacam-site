# BananaCam Landing Page Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern app marketing pages like Instagram, FaceApp, and Lensa AI, with BananaCam's unique playful personality. Focus on showcasing the AI transformation magic while driving immediate downloads.

## Core Design Elements

### A. Color Palette
**Dark Mode Foundation** (primary interface):
- Background: 26 17% 14% (dark navy #1a2332)
- Surface: 26 17% 18% (slightly lighter navy for cards)
- Text Primary: 0 0% 98% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Brand & Accent Colors**:
- Banana Yellow: 44 88% 60% (#f4b740) - primary CTA, highlights, logo
- Banana Bright: 48 95% 65% (lighter yellow for hover states)
- Success Green: 142 71% 45% (for transformation success states)

### B. Typography
**Fonts** (via Google Fonts CDN):
- Display: 'Outfit' - bold, modern for headlines (weights: 700, 800)
- Body: 'Inter' - clean readability for descriptions (weights: 400, 500, 600)

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-4xl md:text-5xl font-bold
- Feature Titles: text-2xl md:text-3xl font-semibold
- Body Text: text-base md:text-lg
- CTA Buttons: text-lg font-semibold

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section Padding: py-20 md:py-32
- Container Max Width: max-w-7xl
- Component Gaps: gap-8 md:gap-12
- Card Padding: p-6 md:p-8

**Grid System**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns for galleries (lg:grid-cols-3 xl:grid-cols-4)

### D. Component Library

**Navigation**:
- Fixed header with blur backdrop (backdrop-blur-xl bg-navy/80)
- Logo with banana icon on left
- Download CTA buttons on right (App Store + Google Play)
- Mobile: Hamburger menu

**Hero Section** (100vh):
- Split layout: Left = messaging, Right = phone mockup with transformation animation
- Headline: "Unleash Your Inner Banana!" in huge display font
- Subheadline: "Transform your photos with 100+ AI-powered styles. Photorealistic. Instant. Insane."
- Dual CTA: Large yellow buttons for App Store/Google Play with store icons
- Animated phone mockup showing filter transformations cycling every 2s

**Before/After Showcase**:
- Large interactive slider component showing dramatic transformations
- 3-4 example transformations in horizontal scroll/grid
- Subtle animation on scroll reveal
- Labels: "Upload" → "Transform" with arrow

**Style Gallery**:
- Masonry-style grid of transformation cards
- Each card: Circular avatar showing result, style name below, hover reveals "Try it now"
- Featured styles: Bald Hair, Holding Puppy, Huge Head, Long Hair, 90s Cam, Professional Headshot, Retro Style, Supermodel, etc.
- "100+ More Styles" teaser card

**Features Section**:
- 4-column grid (mobile: 2-column)
- Icons: Camera, Sparkles, Zap, Share (Heroicons)
- Features: "Photorealistic AI", "100+ Styles", "Instant Results", "Easy Sharing"
- Each with icon, title, and 2-line description

**App Screenshots**:
- Horizontal scrolling carousel of iPhone mockups
- Show: Home screen, style selector, editing interface, sharing options
- Navy background with yellow progress indicators

**Social Proof**:
- Download counter: "Join 500K+ users transforming their photos"
- 5-star ratings display
- Simple, bold stats in yellow accent

**Final CTA Section**:
- Full-width with gradient overlay (navy to black)
- Centered: "Ready to Transform?" headline
- App store buttons (larger than header)
- Small text: "Available on iOS & Android"

**Footer**:
- Dark navy background
- Links: Privacy, Terms, Support, Contact
- Social media icons
- Newsletter signup: "Get transformation tips"

### E. Interactive Elements

**Buttons**:
- Primary CTA (Yellow): Solid banana yellow with subtle shadow, hover lifts slightly
- Secondary: Outline variant with banana yellow border on navy
- Download buttons: Include App Store/Google Play branding, rounded-xl, px-8 py-4

**Cards**:
- Rounded-2xl borders
- Subtle border (1px yellow at 20% opacity)
- Hover: Lift effect (translateY -2px) + glow (yellow shadow)
- Background: Slightly lighter navy surface

**Animations** (minimal, purposeful):
- Hero phone mockup: Auto-cycle transformations every 2s
- Scroll reveals: Fade up on section entry (once)
- Card hovers: Lift + glow
- NO parallax, NO continuous animations

## Images

**Hero Section**:
- Right side: iPhone mockup (portrait orientation) displaying app interface with cycling transformation examples
- Use iPhone frame template with BananaCam app UI inside
- Show filter being applied in real-time effect

**Before/After Gallery**:
- 6-8 high-quality transformation pairs showing:
  - Professional headshot transformation
  - 90s retro filter
  - Bald transformation
  - Long hair transformation
  - Holding puppy scene
  - Huge head comic effect
- All examples should look photorealistic and impressive

**Style Preview Grid**:
- Circular thumbnails (150x150px) showing individual transformation results
- Minimum 12 visible style examples
- Each clearly demonstrates the specific style

**App Screenshots**:
- 5-6 iPhone screen captures showing:
  - Onboarding/home screen
  - Style gallery/selector interface
  - Before/after comparison view
  - Editing controls
  - Sharing options screen

## Conversion Optimization

**CTA Placement**:
- Hero: Immediate download buttons (above fold)
- Sticky header: Always-visible download access
- Mid-page: After features section
- Footer: Final conversion opportunity

**Trust Signals**:
- Download count prominently displayed
- "As Seen On" media logos if applicable
- App store ratings (5 stars)
- "Powered by Advanced AI" badge

**Mobile-First**:
- All CTAs thumb-friendly (min 44px touch targets)
- Single-column layouts on mobile
- Optimized image loading for mobile data
- Reduced animations on mobile for performance

This design balances playful brand personality with professional execution, making the AI transformation capabilities feel magical while maintaining clear, conversion-focused user flows.