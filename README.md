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

| Aspect         | Status                                    |
| -------------- | ----------------------------------------- |
| Project        | Active                                    |
| HTML Structure | Complete                                  |
| CSS Styling    | Complete                                  |
| JavaScript     | Complete (progressive)                    |
| UI/UX/Brand    | ✅ COMPLETE & STABLE (Phase 10.4 Applied) |
| Content        | Placeholder content in place              |

---

## Next Phase

### Phase 11: SEO, Accessibility & Performance Audit

- Add meta tags for social sharing (Open Graph, Twitter Cards)
- Improve accessibility (ARIA labels, keyboard navigation audit)
- Optimize images for faster loading (WebP, lazy loading)
- Add structured data (JSON-LD) for search engines
- Performance audit and optimizations
- Lighthouse score improvements
- Alt text review for all images

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

Last Updated: January 30, 2026
