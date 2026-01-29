# TACN Stadium Branch Website

A clean, static HTML/CSS website for The Apostolic Church Nigeria (TACN), Stadium Branch. This project prioritizes clarity, accessibility, and simplicity — making it easy to maintain and beginner-friendly to understand.

---

## Project Overview

This website serves as the official online presence for TACN Stadium Branch. It provides essential information about the church, including service times, ministries, sermons, events, and contact details.

The project was intentionally built without frameworks or complex tooling. Every line of code is written to be readable and educational, with detailed comments explaining what each section does and why.

---

## Tech Stack

| Technology    | Purpose                          |
| ------------- | -------------------------------- |
| HTML5         | Semantic page structure          |
| CSS3          | Styling and responsive layout    |
| No JavaScript | Planned for future phases        |
| No CMS        | WordPress was completely removed |
| No Frameworks | Pure HTML/CSS for simplicity     |

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
│   ├── js/                    # JavaScript (empty, planned)
│   └── fonts/                 # Custom fonts (empty, planned)
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

| Aspect         | Status                       |
| -------------- | ---------------------------- |
| Project        | Active                       |
| HTML Structure | Complete                     |
| CSS Styling    | In Progress                  |
| JavaScript     | Planned                      |
| Content        | Placeholder content in place |

---

## Next Phase

### Phase 7: Giving and Donations Page

- Create donation information section
- Add bank account details layout
- Build giving form UI (if applicable)
- Add testimonials or impact section

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

Last Updated: January 29, 2026
