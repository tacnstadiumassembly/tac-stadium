### Phase 21: Members Portal & Ministry Resources

- Created `pages/members.html` with hero, intro, and glass-card grid for ministry resources.
- Added resource cards for:
  - Bible Study Guides
  - Workers Manuals
  - Choir Materials
  - Youth Study Resources
  - Convention Materials
- Implemented category filter buttons (All, Bible Study, Workers, Choir, Youth, Conventions) with JavaScript filtering (like sermons/events).
- Added a glass notice card: "Restricted Access Notice" for members-only resources.
- Each card includes title, description, and a download button (placeholder link).
- Clicking a card opens a modal preview (title, description, download button) with fade-up animation.
- Modal accessibility: `role="dialog"`, `aria-expanded`, focus trap, ESC closes, click outside closes.
- Cards animate in with fade-up stagger; modal slides from bottom.
- Navigation updated: "Members Portal" link in header and footer of all relevant pages.
- All color, gradient, readability, glass, and animation rules strictly enforced.
- Resource data is placeholder (can be moved to JSON later).
# TACN Stadium Branch Website

A clean, static HTML/CSS website for The Apostolic Church Nigeria (TACN), Stadium Branch. This project prioritizes clarity, accessibility, and simplicity — making it easy to maintain and beginner-friendly to understand.

---

## Project Overview

This website serves as the official online presence for TACN Stadium Branch. It provides essential information about the church, including service times, ministries, sermons, events, and contact details.

The project was intentionally built without frameworks or complex tooling. Every line of code is written to be readable and educational, with detailed comments explaining what each section does and why.

---

## Tech Stack

| Technology    | Purpose                           |
| ------------- | --------------------------------- |
| HTML5         | Semantic page structure           |
| CSS3          | Styling and responsive layout     |
| JavaScript    | Progressive enhancement (vanilla) |
| Google Fonts  | Lora (headings) + Inter (body)    |
| No CMS        | WordPress was completely removed  |
| No Frameworks | Pure HTML/CSS/JS for simplicity   |

---

## Project Structure

```text
tac-stadium/
├── index.html                 # Homepage
├── README.md                  # Project documentation
├── pages/
│   ├── about.html             # About the church
│   ├── sermons.html           # Sermons and messages
│   ├── events.html            # Upcoming events
│   ├── giving.html            # Giving and donations
│   ├── plan-a-visit.html      # First-time visitor info
│   └── contact.html           # Contact information
├── assets/
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── images/
│   │   ├── hero-worship.jpg   # Hero background image
│   │   ├── favicon.png        # Browser tab icon
│   │   ├── favicon.ico        # Legacy favicon
│   │   └── favicon.svg        # Source favicon
│   ├── js/
│   │   └── main.js            # Progressive enhancement JS
│   └── fonts/                 # Custom fonts (empty, using Google Fonts)
├── components/                # Reusable HTML snippets (planned)
├── data/                      # JSON data files (planned)
└── docs/                      # Project documentation
```

---

## Completed Phases

### Phase 1: Content Planning and Semantic HTML Structure

Established the foundation for the entire website.

- Created content map and project blueprint
- Built semantic HTML structure for all 6 pages
- Added detailed code comments for beginners
- Set up folder structure for assets and components

### Phase 2: Multi-Page Site Setup, Favicon, and Hero Section

Built the visual identity and navigation system.

- Implemented consistent header and footer across all pages
- Created dark hero section with background image overlay
- Added TACN favicon (PNG, ICO, SVG formats)
- Applied favicon consistently to all pages
- Hero section includes dual call-to-action buttons

### Phase 3: Ministries, Service Times, and Structured Homepage

Added structured content sections with responsive layouts.

- Welcome/Intro section with centered text
- Ministries section with 4 responsive cards (Worship, Youth, Women, Men)
- Service Times and Location section with dark styling
- SVG icons for ministry cards
- Mobile-responsive grid layouts
- Hover effects on interactive elements

### Phase 4: Sermons and Media Layout

Built sermon display system with responsive grids.

- Created reusable sermon card component
- Built responsive sermon grid (3 columns → 2 → 1)
- Added sermon preview section to homepage (3 cards)
- Expanded sermons.html with full sermon listing (9 cards)
- Added category filter UI buttons (All, Sunday Messages, Special Programs)
- Implemented thumbnail aspect-ratio boxes
- Styled buttons consistently with hero section

### Phase 5: Events and Programs Layout

Created event display system with visual date badges.

- Built event card component with date badge design
- Created responsive event grid layout
- Added events preview section to homepage (3 cards)
- Expanded events.html with full event listing (8 cards)
- Added filter buttons (All, Upcoming, Past, Special)
- Implemented dark CTA section for events page
- Date badges with month, day, and year display

### Phase 6: Visitor and Contact Forms (UI Only)

Added accessible forms for visitor planning and contact.

- Created visitor form on plan-a-visit.html
  - Fields: Full Name, Phone, Email, Visiting With dropdown, First Time (radio buttons), Message
  - Submit button: "Notify the Church"
  - Privacy reassurance text
- Created contact form on contact.html
  - Fields: Full Name, Email, Subject, Message
  - Submit button: "Send Message"
  - Contact info cards (Address, Phone, Email, WhatsApp)
- Form styling with focus states for accessibility
- Fully responsive form layouts
- UI only - no backend functionality yet

### Phase 7: Giving and Donations (UI Only)

Added giving/donations education and UI without payment integration.

- Created giving preview section on homepage with 3 cards (Tithes, Offerings, Special Donations)
- Created dedicated giving.html page with:
  - Biblical encouragement section
  - 4 "Ways to Give" cards (Tithes, Offerings, Missions, Special Projects)
  - Bank information section (placeholder details)
  - Important disclaimer about verifying payment details
  - Contact CTA section
- Added "Giving" link to navigation menu on all pages
- SVG icons for each giving category
- Responsive card-based design (4 → 2 → 1 columns)
- Calm, trustworthy styling consistent with site design
- UI only - no payment integration

### Phase 8: JavaScript UI Enhancements

Added lightweight, progressive enhancement JavaScript.

- Created main.js with modular, well-commented code
- Sermon filter functionality:
  - Filter buttons (All, Sunday Messages, Special Programs)
  - data-category attributes on sermon cards
  - Smooth hide/show with CSS classes
- Event filter functionality:
  - Filter buttons (All Events, Sunday Services, Special Programs, Conventions)
  - data-category attributes on event cards
  - Active button styling
- Form client-side validation:
  - Contact form: required fields, email format validation
  - Visitor form: required field validation
  - Inline error messages with styling
  - Success message placeholder (auto-clears after 5s)
- Mobile navigation toggle:
  - Hamburger menu button
  - Animated hamburger-to-X transition
  - Slide-down menu on mobile
- UX improvements:
  - Smooth scroll for anchor links
  - Double-submit prevention
  - Disabled button styling
- Added JS enhancement CSS styles:
  - .hidden, .error-message, .success-message
  - .mobile-menu-toggle, .hamburger-line
  - .input-error, button:disabled
- JavaScript linked to all 7 pages
- Site fully works without JS (progressive enhancement)

### Phase 9: Advanced UI & Visual Refinement

Upgraded visual polish with modern, church-appropriate aesthetics.

- Typography improvements:
  - Added Lora (serif) for headings - elegant, reverent feel
  - Added Inter (sans-serif) for body text - clean readability
  - Google Fonts with preconnect optimization
  - Improved letter-spacing and line-height
- Readability & contrast fixes:
  - Increased dark overlay opacity (0.88)
  - Improved text contrast on dark backgrounds
  - Added text-shadow for better legibility
  - Enhanced hero overlay gradient
- Controlled glassmorphism accents:
  - Subtle frosted-glass effect on cards
  - Semi-transparent backgrounds with backdrop blur
  - Applied to: sermon, event, ministry, giving, contact cards
  - Glass effect on forms, service time cards, bank details
- Unified card system:
  - Consistent border-radius across all cards
  - Unified hover states and transitions
  - Smooth elevation on hover
  - Box-shadow refinements
- Hero & section polish:
  - Improved gradient overlays
  - Clamp() for responsive heading sizes
  - Soft section transitions
- Mobile UI improvements:
  - Larger touch targets (min 48px)
  - Glass effect on mobile menu
  - Improved form field spacing
  - Better card stacking
- Graceful degradation:
  - @supports fallback for browsers without backdrop-filter
  - Solid backgrounds for unsupported browsers

### Phase 10: Brand UI, Motion & Page Transitions

Comprehensive brand-aligned UI overhaul with animations.

- **Apostolic Color System (Red, Blue, White)**:
  - Primary Blue: Deep royal blue (#1a365d) - authority & faith
  - Apostolic Red: (#b91c1c) - emphasis, CTAs, active states
  - White: Clean backgrounds and text contrast
  - Red used ONLY for buttons, highlights, and important accents
  - Updated all CSS variables to new brand colors
- **Full Text Readability Audit**:
  - Crystal-clear text on all backgrounds
  - Enhanced hero overlay (0.92 opacity with gradient)
  - Text-shadow on hero and dark section text
  - High contrast (0.95) for muted text
  - Elderly-friendly readability across all pages
- **Enhanced Glassmorphism**:
  - Increased glass opacity (0.92) for better readability
  - Added inner border highlights for depth
  - Stronger blur effects (16-20px)
  - Maintained graceful degradation
- **Micro-Animations**:
  - Card fade-up on scroll with stagger effect
  - Section headings slide-up animation
  - Button hover lift and glow effects
  - Smooth form input focus transitions
  - Intersection Observer for scroll reveals
- **Page Transitions**:
  - Gentle page enter animation (translateY + opacity)
  - Page exit fade for navigation
  - Content "gracefully arrives" effect
  - No blocking overlays or spinners
- **Mobile & Touch Refinement**:
  - Enhanced mobile nav slide animation
  - Tap feedback with highlight color
  - Improved touch targets (48px minimum)
  - Card spacing optimization
  - Accidental tap prevention (touch-action: manipulation)
  - Animated hamburger-to-X menu button
- **Accessibility**:
  - Full `prefers-reduced-motion` support
  - All animations disabled for motion-sensitive users
  - Maintained keyboard navigation
- **CSS Organization**:
  - Section 13: Phase 10 styles with 17 subsections
  - Reusable animation classes
  - Clean, documented code structure

### Phase 10.1: High-Readability Apostolic UI Refinement

Refined color system for maximum text visibility and calm aesthetics.

- **New Apostolic Color Direction**:
  - Soft Royal Blue (#2d4a6f) - calmer, lighter, NOT heavy navy
  - Muted Wine Red (#a63d3d) - not aggressive, calm emphasis
  - Charcoal/Slate text (#2c3e50) - NOT pure black
  - Near-white text on blue (0.97 opacity)
- **Text Readability Priority #1**:
  - WCAG-friendly contrast ratios throughout
  - Lightened dark backgrounds for better text visibility
  - Reduced overlay opacity for hero sections
  - Removed text floating directly on blurred backgrounds
  - Elderly-friendly - readable without squinting
- **Safe Glassmorphism**:
  - Very high opacity (0.96) for card backgrounds
  - Reduced blur (10px) behind text areas
  - Clear inner borders for definition
  - Glass only on cards, forms, navigation - NOT paragraphs
- **Softer Animations**:
  - Slower, gentler motion (0.6-0.8s duration)
  - Smaller translate distances (12-20px)
  - Spiritual, calm easing curves
  - No aggressive or dramatic effects
- **Refined Page Transitions**:
  - Smaller translateY (-12px) - like turning a book page
  - Slower, gentler easing
  - Subtle fade-in effect
- **Mobile Readability Boost**:
  - Larger hero text on small screens
  - Increased line-height (1.7)
  - Better font sizing at 480px breakpoint
  - High-contrast mobile navigation
- **Code Cleanup**:
  - Removed unused color variables from Phase 10
  - Clear comments explaining color choices
  - Consistent naming conventions

### Phase 10.3: Gradient Apostolic UI & Readability HARD RESET

**🔒 FINAL LOCKED COLOR SYSTEM - UI / BRAND / UX: COMPLETE**

Complete visual identity overhaul with LOCKED color definitions.

- **🔵 LOCKED Color System**:
  | Color Name | Hex | Usage |
  |------------|-----|-------|
  | Faith Blue | #1f3c88 | Headers, footers, navigation, gradients |
  | Soft Sky Blue | #4f7cff | Gradients and highlights |
  | Apostolic Red | #9b1c1c | CTAs, buttons, active states ONLY |
  | Deep Charcoal | #1f2933 | ALL body text |
  | Soft Gray | #4b5563 | Secondary text only |
  | Pure White | #ffffff | Light backgrounds |

- **🌈 Gradient Direction**:
  - Top → Bottom: Faith Blue (#1f3c88) → Soft Sky Blue (#4f7cff) → White (#ffffff)
  - Used for: Hero, Header, Footer, CTA sections
  - Calm, spiritual, premium feel
- **📖 Absolute Text Readability**:
  - ⚠️ NO text directly on raw gradients
  - All text on semi-solid overlay (0.92) or high-opacity glass (0.97)
  - Deep Charcoal (#1f2933) for ALL body text - NO gray body text
  - Pure white (#ffffff) on dark/gradient areas
  - Elderly-friendly - readable without squinting
- **✨ Safe Glassmorphism**:
  - Very high opacity (0.97 minimum) for cards
  - Low blur (6-8px MAX) for clarity
  - Strong inner borders for definition
  - Never paragraphs directly on blur
- **🎬 Calm Spiritual Animations**:
  - Gentle fade-up on scroll (0.6-0.8s)
  - Soft slide-up for headings
  - Subtle card hover lift
  - Button hover glow (very subtle)
  - No bounce, no aggressive motion
- **📱 Mobile & Elderly Readability**:
  - Line height >= 1.6 everywhere
  - Larger fonts on small screens
  - High contrast for sunlight viewing
  - Clear form labels and buttons
- **🔧 Code Quality**:
  - All colors centralized in :root with LOCKED comments
  - Gradient variables for reuse
  - Overlay variables for text areas
  - Clear comments explaining color rules

### Phase 10.4: UI Application & Readability Enforcement

**✅ FULL UI APPLICATION COMPLETE**

Applied the locked color system across all components with readability enforcement.

- **🎨 Gradient System Fully Applied**:
  - Hero sections: Faith Blue → Soft Sky Blue gradient with solid overlay
  - Header: Faith Blue gradient (#1f3c88 → #2a4a9e)
  - Footer: Faith Blue gradient (reversed)
  - CTA sections: Faith Blue background with Apostolic Red buttons
  - Page headers: Gradient with 0.88 opacity overlay for text readability
- **📖 Text Contrast Audit Completed**:
  - All body text: Deep Charcoal (#1f2933) - NO gray body text
  - All secondary text: Soft Gray (#4b5563) - metadata only
  - Dark background text: Pure White (#ffffff) - no muted text
  - Headings on light: Faith Blue (#1f3c88)
  - Headings on dark: Pure White with text-shadow
  - Line-height: >= 1.6 everywhere
  - Font-weight: >= 400 for all body text
- **✨ Glassmorphism Finalized**:
  - Card backgrounds: rgba(255, 255, 255, 0.97)
  - Blur: 6-8px maximum
  - Visible borders with inner highlight
  - No glass behind long paragraphs
  - Graceful degradation for unsupported browsers
- **🎞️ Motion & Page Transitions Polished**:
  - Page enter: translateY(-14px), 0.7s duration
  - Card hover: translateY(-5px) lift
  - Buttons: translateY(-2px) on hover
  - Apostolic Red glow on CTA hover
  - Timing: 0.6-0.8s ease-out (no bounce)
  - prefers-reduced-motion fully respected
- **📱 Mobile & Accessibility Pass**:
  - Touch targets: >= 48px minimum
  - Mobile font sizes increased
  - High contrast in nav & footer
  - Form inputs: 16px font (prevents iOS zoom)
  - Hamburger menu animation polished
  - Tap feedback with subtle highlight

### Phase 11: SEO, Accessibility & Performance Audit

**✅ PRODUCTION-READY HARDENING COMPLETE**

Made the site discoverable, accessible, and fast without any visual changes.

- **🔍 SEO Implementation (All 7 Pages)**:
  - Unique, keyword-rich `<title>` tags per page
  - Meta descriptions optimized for search engines
  - Canonical URLs pointing to live domain
  - Open Graph tags for Facebook/LinkedIn sharing
  - Twitter Card meta tags for Twitter/X sharing
  - Theme-color meta tag (#1f3c88) for mobile browsers
  - Preconnect hints for Google Fonts

- **♿ Accessibility (WCAG 2.1 AA Compliance)**:
  - Skip-to-main-content link on all pages
  - Landmark roles: `role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`
  - `aria-label` attributes on navigation and sections
  - `aria-current="page"` on active navigation links
  - Semantic `<address>` tags for location info
  - Semantic `<small>` tags for copyright text
  - Form labels properly connected to inputs
  - Focus-visible styles for keyboard navigation

- **⚡ Performance Optimization**:
  - JavaScript loaded with `defer` attribute
  - Preconnect to fonts.googleapis.com and fonts.gstatic.com
  - No render-blocking scripts
  - CSS already optimized (single stylesheet)

- **📄 Pages Updated**:
  - index.html ✅
  - pages/about.html ✅
  - pages/sermons.html ✅
  - pages/events.html ✅
  - pages/giving.html ✅
  - pages/plan-a-visit.html ✅
  - pages/contact.html ✅

- **🎨 Skip-Link CSS**:
  - Hidden by default (top: -50px)
  - Appears on focus (keyboard Tab)
  - Faith Blue background with white text
  - Accessible focus outline

### Phase 12: Content Population & Liturgical Enhancement

**✅ REAL CONTENT & REVERENT EMOJI SYSTEM COMPLETE**

Populated all pages with authentic church content and added tasteful, church-appropriate emojis.

- **📝 Content Population (All 7 Pages)**:
  - Home: Enhanced welcome message, mission statement, service details
  - About: Rich history, expanded beliefs, leadership information
  - Plan a Visit: Clear expectations, service times, practical visitor info
  - Sermons: Scripture-centered descriptions, inspiring introduction
  - Events: Welcoming event descriptions, fellowship focus
  - Giving: Biblical encouragement (2 Cor 9:7), transparent stewardship
  - Contact: Warm, inviting tone with clear location details

- **✝️ Reverent Emoji Usage (Standardized)**:
  - Allowed emojis: ✝️ 🙏 🕊️ 📖 📅 🎶 ❤️ 📍 📞 ⛪ ✉️ 🌐 🏦
  - Used ONLY in section headings (never in paragraphs)
  - Maximum 1 emoji per heading
  - All decorative emojis wrapped in `aria-hidden="true"` for accessibility
  - Tone: reverent, welcoming, church-appropriate
  - NO playful, casual, or excessive emojis

- **📍 Specific Content Updates**:
  - Pastor name: Pastor Bode Akinyemi
  - Location: Stadium Road, Ogbomosho, Oyo State
  - Service times: Sunday School 8AM, Main Service 9AM-12PM, Midweek Wed 5PM
  - Enhanced mission/vision/beliefs statements
  - Scripture reference added to Giving page

- **♿ Accessibility Preserved**:
  - All emojis use `aria-hidden="true"` for screen readers
  - Heading hierarchy maintained
  - Text meaning never relies on emojis alone
  - SEO structure unchanged

### Phase 13: Social Media Integration & Engagement UI

**✅ SOCIAL PRESENCE & OUTREACH COMPLETE**

Integrated official social media platforms with elegant, non-intrusive design.

- **🌐 Social Media Platforms Integrated**:
  - YouTube: `https://www.youtube.com/@tacn.stadium`
  - Facebook: `https://web.facebook.com/people/The-Apostolic-Church-Nigeria-Stadium-Assembly/61587235559564/`

- **🎨 Header Social Icons (Desktop Only)**:
  - SVG icons for YouTube and Facebook
  - Positioned after navigation menu
  - Hidden on mobile (< 769px) for clean mobile nav
  - Subtle glassmorphism hover effect
  - Hover color change to Apostolic Red

- **🦶 Footer Social Icons (All Devices)**:
  - Same SVG icons as header
  - Centered placement after quick links
  - Visible on all screen sizes
  - Consistent hover styling

- **❤️ Stay Connected Section (Homepage)**:
  - Gradient background matching site design
  - Two social link cards with glassmorphism effect
  - "Watch Sermons & Services" (YouTube link)
  - "Join Our Church Community" (Facebook link)
  - Heart emoji with aria-hidden for accessibility

- **📖 YouTube CTA Section (Sermons Page)**:
  - Dedicated call-to-action block after sermon grid
  - Gradient background with overlay
  - Apostolic Red CTA button
  - Scripture emoji with aria-hidden

- **📍 Contact Page Social Links Updated**:
  - Replaced "(coming soon)" placeholders with real links
  - Facebook and YouTube links now active
  - Clean, accessible link formatting

- **🎨 New CSS Styles Added (Section 14)**:
  - `.social-icons` - Flexbox container with 8px gap
  - `.social-icon` - 36px round icons with transitions
  - `.header-social` - Desktop-only visibility
  - `.footer-social` - Centered, all-device display
  - `.section-social-connect` - Gradient section styling
  - `.social-link-card` - Glassmorphism social cards
  - `.section-youtube-cta` - YouTube CTA block styling

- **♿ Accessibility Features**:
  - All social links have `aria-label` descriptions
  - `target="_blank"` with `rel="noopener noreferrer"` for security
  - Icons use inline SVG (no external dependencies)
  - Decorative emojis wrapped in `aria-hidden="true"`

- **🎯 Design Philosophy**:
  - "Invitation, not noise" approach
  - No embedded widgets (performance-first)
  - Icons only, elegant and minimal
  - Consistent with established brand colors
  - Respects existing color system (LOCKED)

- **📄 Pages Updated**:
  - index.html ✅ (header, footer, Stay Connected section)
  - pages/about.html ✅ (header, footer)
  - pages/sermons.html ✅ (header, footer, YouTube CTA)
  - pages/events.html ✅ (header, footer)
  - pages/giving.html ✅ (header, footer)
  - pages/plan-a-visit.html ✅ (header, footer)
  - pages/contact.html ✅ (header, footer, social links section)
  - assets/css/styles.css ✅ (Section 14 added)

### Phase 13B: Media & Ministry Features

**✅ YOUTUBE EMBEDS, LIVESTREAM & SERMON UPGRADES COMPLETE**

Extended media integration with video embeds, livestream section, and enhanced sermon cards.

- **🎬 YouTube Embed Sections**:
  - Homepage: "Watch Our Services" section with responsive 16:9 iframe embed
  - Sermons page: "Featured Sermon" section with video embed and description
  - Subscribe CTA button linking to channel with sub_confirmation
  - Accessible iframe with title attribute for screen readers
  - Lazy loading for performance optimization

- **📡 Livestream Ready Section (Homepage)**:
  - "Join Live Service" section with gradient background
  - Livestream status indicator (online/offline states)
  - Countdown placeholder for next service
  - Pulse animation for live indicator
  - Direct link to YouTube live stream
  - Reusable component structure

- **📺 Sermon Media Card Upgrades**:
  - All 9 sermon cards upgraded with dual media buttons
  - "Watch" button (Apostolic Red) - links to YouTube
  - "Listen" button (Faith Blue) - placeholder for audio
  - SVG media icons (play and music note)
  - Accessible aria-labels on all buttons
  - Hover animations and transitions

- **👥 Facebook Integration Enhanced**:
  - Homepage footer: Share buttons (Facebook, Twitter/X)
  - Contact page footer: Facebook follow card with CTA
  - Social sharing URLs configured for site
  - Glassmorphism styling on follow cards

- **🙏 Testimony & Highlights Section (Homepage)**:
  - 3 member testimony cards with quotes
  - Avatar initials with gradient background
  - Quote styling with decorative quotation mark
  - Ministry highlights grid (4 stats cards)
  - Stats: 50+ Years, 200+ Members, 5 Ministry Groups, Weekly Streaming

- **🎨 New CSS Styles Added (Section 15)**:
  - `.section-media-highlight` - YouTube embed section
  - `.video-embed-container`, `.video-embed-wrapper` - Responsive video
  - `.btn-youtube`, `.btn-facebook` - Platform-branded buttons
  - `.section-livestream` - Livestream section with animations
  - `.livestream-status`, `.livestream-indicator` - Status badges
  - `.countdown-placeholder` - Countdown display
  - `.sermon-media-buttons`, `.btn-media` - Watch/Listen buttons
  - `.section-testimonies`, `.testimony-card` - Testimony layout
  - `.testimony-quote`, `.testimony-author` - Quote styling
  - `.highlights-grid`, `.highlight-card` - Stats cards
  - `.section-featured-sermon` - Featured sermon embed
  - `.footer-facebook-block`, `.share-buttons` - Share UI
  - Full responsive adjustments at 768px and 480px

- **♿ Accessibility Features**:
  - All iframes have descriptive `title` attributes
  - All media buttons have `aria-label` descriptions
  - Keyboard-focusable media CTAs
  - `target="_blank"` with `rel="noopener noreferrer"`
  - Decorative emojis wrapped in `aria-hidden="true"`

- **✨ Glassmorphism Rules Applied**:
  - Card backgrounds: rgba(255, 255, 255, 0.97)
  - Blur: 6px (within 8px limit)
  - Text always on solid overlay layer
  - Visible borders with subtle shadows

- **🎞️ Animation Rules Followed**:
  - Used existing scroll reveal system
  - Gentle slide-up for new sections
  - Pulse animation for live indicator
  - No spinner loaders
  - Page transitions remain coming-from-top

- **📄 Pages Updated**:
  - index.html ✅ (YouTube embed, Livestream, Testimonies, Share buttons)
  - pages/sermons.html ✅ (Featured sermon embed, upgraded sermon cards)
  - pages/contact.html ✅ (Facebook follow card in footer)
  - assets/css/styles.css ✅ (Section 15 added)

---

## Design Principles

### Semantic HTML

Every element uses the appropriate HTML tag for its purpose. Headings follow a logical hierarchy, sections are clearly labeled, and accessibility is considered throughout.

### Mobile-First Responsive CSS

The stylesheet includes breakpoints for tablets (768px) and mobile phones (480px). Layouts adapt gracefully from desktop to mobile.

### Reusable Components

CSS classes are designed to be reused across pages. Common patterns like `.section-dark`, `.btn-primary`, and `.ministry-card` maintain consistency.

### Beginner-Friendly Code Comments

The codebase includes extensive comments explaining:

- What each section does
- Why certain CSS techniques are used
- How overlays and positioning work
- Tips for future modifications

---

## Current Status

| Aspect            | Status                            |
| ----------------- | --------------------------------- |
| Project           | Active                            |
| HTML Structure    | Complete                          |
| CSS Styling       | Complete                          |
| JavaScript        | Complete (progressive)            |
| UI/UX/Brand       | ✅ COMPLETE & STABLE (Phase 10.4) |
| SEO               | ✅ COMPLETE (Phase 11)            |
| Accessibility     | ✅ WCAG 2.1 AA (Phase 11)         |
| Performance       | ✅ OPTIMIZED (Phase 11)           |
| Content           | ✅ COMPLETE (Phase 12)            |
| Emoji System      | ✅ APPROVED (Phase 12)            |
| Media Integration | ✅ COMPLETE (Phase 13B)           |

---

## Phase 14 — Readability Enforcement Patch

**✅ GLOBAL TEXT READABILITY PATCH APPLIED**

Strict, production-wide enforcement of text color rules for maximum readability and accessibility. No UI redesign, only text color and contrast fixes.

- **Glass & Card Text Fixes:**
  - All glass, card, and form backgrounds now force #1f2933 (Deep Charcoal) text for body, paragraph, and labels.
  - Text-shadow removed from all card/glass components for clarity.
  - No more white/inherit text on light or glass backgrounds.

- **Heading Contrast Rules:**
  - Headings (h1–h4) in light sections: Faith Blue (`#1f3c88`)
  - Headings in dark/hero/footer: pure white (`#ffffff`)
  - `.white-heading` class for white headings in dark sections only.

- **White Text Restriction:**
  - White text (`#fff`/`white`/`inherit`) is now allowed ONLY in hero, header, footer, and dark sections.
  - All other areas (cards, glass, forms, light backgrounds) use #1f2933 for text.

- **Button & Form Field Enforcement:**
  - Primary buttons: white text on red/blue background
  - Secondary buttons: Faith Blue text on white background
  - Form fields: #1f2933 text, #fff background

- **No Layout or Palette Changes:**
  - No redesign, no color palette changes, no UI shifts. Strictly readability and accessibility.

---

## Next Phase

### Phase 15: Backend Integration & Optimization

- Add real photos of the church and congregation
- Optimize images (WebP format, lazy loading)
- Add structured data (JSON-LD) for search engines
- Connect contact/visitor forms to backend
- Final Lighthouse audit and score improvements
- Instagram integration (when available)

---

## Browser Support

This website is built to work on all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

This project is maintained by the TACN Stadium Branch media team. For suggestions or contributions, please contact the church office.

---

## License

This project is for The Apostolic Church Nigeria, Stadium Branch. All rights reserved.

---

---

## Phase 16 — Sermon Media Integration + Social Embeds

**✅ YOUTUBE EMBEDS, LATEST SERMON, LIVESTREAM, SOCIAL STRIP COMPLETE**

Major media and social engagement upgrade for the church website. No UI redesign or color changes—purely functional and accessible enhancements.

- **YouTube Sermon Embeds:**
  - All sermon cards on `pages/sermons.html` now feature embedded YouTube videos in a responsive container.
  - Each iframe uses `.sermon-video` class and has `title="Sermon video player"` for accessibility.

- **Latest Sermon Section (Homepage):**
  - Added a "Latest Sermon" section to `index.html` with a featured YouTube embed and a button to view all sermons.

- **Live Stream Preview (Homepage):**
  - Added a "Join Us Live" section with a button linking to the YouTube live stream.

- **Social Media Strip:**
  - New "Follow Us & Stay Connected" strip above the footer on all major pages (including homepage and contact page).
  - Prominent YouTube and Facebook buttons, styled for accessibility and contrast.

- **Responsive Video CSS:**
  - `.sermon-video` and `.sermon-video iframe` classes added to `assets/css/styles.css` for fully responsive video containers.

- **Accessibility:**
  - All embedded iframes have descriptive `title` attributes.
  - Social and media buttons use `aria-label` and proper contrast.

- **README & Documentation:**
  - This section documents all Phase 16 changes for future reference.

- **No Visual Redesign:**
  - Maintains glassmorphism, color, and contrast system from previous phases.

---

---

## Phase 17 — Admin Editable Content System

**✅ JSON-DRIVEN SERMONS, EVENTS, SERVICE TIMES, CONTACT INFO COMPLETE**

- **JSON Data Layer:**
  - All sermons, events, service times, and contact info are now loaded from editable JSON files in `/assets/data/`.
  - No-code content updates: church workers can update content by editing JSON, no HTML changes needed.

- **Dynamic JS Rendering:**
  - `main.js` loads and renders all sermon and event cards, service times, and contact info from JSON.
  - Template functions (`renderSermonCard`, `renderEventCard`) generate accessible, styled cards.
  - Loading state animation (slide-down fade) shown while content loads.

- **Accessibility:**
  - All JS-rendered content includes aria-labels, semantic headings, and readable text colors.

- **No UI Redesign:**
  - Maintains all color, glassmorphism, contrast, and animation rules from previous phases.

---

## Phase 19 — Notice Board & Announcements

**✅ JSON-DRIVEN CHURCH NOTICES, PRIORITY ALERT BANNER, ACCESSIBLE NOTICE BOARD COMPLETE**

- **Announcements Data File:**
  - All church notices and announcements are now loaded from editable JSON file `/assets/data/announcements.json`.
  - Priority, type, and message fields allow flexible updates.

- **Notice Board Section:**
  - Homepage displays up to 5 latest notices below the hero section.
  - Cards use glassmorphism, deep charcoal text, and fade-up animation.
  - Notices sorted by priority and date (newest first, high priority pinned).

- **Top Alert Banner:**
  - High priority notices show a dismissible alert banner at the top of the homepage.
  - Banner uses slide-down animation and remembers dismissal with localStorage.
  - Accessible: role="alert" and keyboard dismiss.

- **Accessibility:**
  - All notices use semantic article elements and <time> tags for dates.
  - Alert banner uses role="alert" and is keyboard accessible.

- **Performance:**
  - Uses JSON fetch only, no libraries, and reuses existing animation classes.

- **No UI Redesign:**
  - Maintains all color, glassmorphism, contrast, and animation rules from previous phases.

---

Last Updated: January 30, 2026 (Phase 19 Complete)

- **Sermon Search System:**
  - Search input and category dropdown added to sermons page.
  - Live search and filter by title or preacher, powered by JSON data.
  - Results update instantly with smooth fade-in animation.
  - Accessible: search field labeled, results in aria-live region.

- **Event Calendar System:**
  - Month-view calendar grid on events page, keyboard accessible.
  - Event badges on dates with events.
  - Click or press Enter/Space on a date to show events for that day below.
  - Slide-down reveal animation for calendar and event list.

- **Accessibility:**
  - All controls and results are keyboard accessible.
  - aria-labels and aria-live regions used throughout.

- **Performance:**
  - Uses existing JSON data only, no new libraries.

- **No UI Redesign:**
  - Maintains all color, glassmorphism, contrast, and animation rules from previous phases.

---

Last Updated: January 30, 2026 (Phase 18 Complete)

---

## Phase 20 — Prayer & Testimony Submission System

**✅ PRAYER REQUEST & TESTIMONY SUBMISSION SYSTEM COMPLETE**

- **Prayer Request Page:**
  - New page for submitting prayer requests with category, urgency, and consent fields.
  - Accessible form, required fields marked, and aria-live success message.

- **Testimony Submission Page:**
  - New page for sharing testimonies with permission to publish.
  - Accessible, required fields, and aria-live feedback.

- **Local Queue System:**
  - Submissions are stored in localStorage queues (`prayerQueue[]`, `testimonyQueue[]`) for admin review.
  - Placeholder `submissions.json` structure included.

- **Success Feedback Animations:**
  - Form cards fade-up on scroll.
  - Success messages slide in and auto-dismiss.

- **No UI Redesign:**
  - All color, glassmorphism, contrast, and animation rules strictly maintained.

---

Last Updated: January 30, 2026 (Phase 20 Complete)

**✅ GLOBAL TEXT CONTRAST ENFORCEMENT APPLIED**

Strict, global override to guarantee text readability on all backgrounds. No UI redesign or palette change—readability only.

- **Global Text Color Enforcement:**
  - All body, paragraph, card, form, and label text is now forced to #1f2933 (Deep Charcoal) everywhere except dark/hero/header/footer.
  - Headings (h1–h4) in all sections use Faith Blue (`var(--faith-blue)`).
  - White text (`#fff`/`white`/`inherit`) is allowed ONLY in hero, header, footer, and dark sections.

- **Card & Glass Readability Fix:**
  - All glass, card, and form containers force #1f2933 text and remove text-shadow for clarity.
  - No more white/inherit text on light or glass backgrounds.

- **Button & Form Field Enforcement:**
  - Primary buttons: white text on red/blue background
  - Secondary buttons: Faith Blue text on white background
  - Form fields: #1f2933 text, #fff background

- **No Layout or Palette Changes:**
  - No redesign, no color palette changes, no UI shifts. Strictly readability and accessibility.

---
