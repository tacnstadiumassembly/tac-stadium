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

### Phase 4: Sermons and Media Layout

- Create reusable sermon card component
- Build responsive sermon grid (3 columns to 1 column)
- Add sermon preview section to homepage (3 cards)
- Expand sermons.html with full sermon listing (6-9 cards)
- Add category filter UI placeholders (All, Sunday Messages, Special Programs)
- Implement thumbnail aspect-ratio boxes
- Style buttons consistently with hero section

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
