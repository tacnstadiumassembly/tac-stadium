# PHASE 1 — FOUNDATION SETUP

> **What is this document?**
> This document explains how the church website will be built from the ground up.
> It covers the tools we will use, how files will be organized, and where to start.

---

## SECTION 1 — TECHNOLOGY CHOICE

### What We Will Use

| Tool                   | What It Does                       | Why We Chose It                                              |
| ---------------------- | ---------------------------------- | ------------------------------------------------------------ |
| **HTML**               | Creates the structure of web pages | Every website uses HTML. It's the foundation.                |
| **CSS**                | Makes pages look beautiful         | Controls colors, fonts, spacing, and layout.                 |
| **JavaScript** (light) | Adds small interactive features    | Only for simple things like mobile menus or form validation. |

### What We Will NOT Use (For Now)

| Tool                     | Why Not                                                    |
| ------------------------ | ---------------------------------------------------------- |
| WordPress                | Removed. Too complex for this project.                     |
| React, Vue, Angular      | These are advanced frameworks. Not needed.                 |
| Laravel, Django, Node.js | Backend frameworks. We'll add backend later if needed.     |
| Databases                | Not yet. We'll start with static pages first.              |
| Bootstrap, Tailwind      | CSS frameworks. We'll write simple CSS ourselves to learn. |

### The Philosophy

> **Start simple. Add complexity only when truly needed.**

A beginner should be able to open any file in this project and understand what it does within 30 seconds.

---

## SECTION 2 — FOLDER STRUCTURE

Here is how the project files will be organized:

```
tac-stadium/
│
├── index.html              ← The home page (what visitors see first)
│
├── pages/                  ← All other public pages
│   ├── about.html
│   ├── plan-your-visit.html
│   ├── sermons.html
│   ├── events.html
│   ├── watch-live.html
│   ├── give.html
│   ├── contact.html
│   └── prayer-request.html
│
├── assets/                 ← All supporting files (not pages)
│   ├── css/
│   │   ├── style.css       ← Main styles for the whole site
│   │   └── pages/          ← Page-specific styles (if needed)
│   │
│   ├── js/
│   │   └── main.js         ← Simple JavaScript (menus, forms)
│   │
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero/           ← Large banner images
│   │   ├── icons/          ← Small icons (social media, etc.)
│   │   └── placeholders/   ← Temporary images during development
│   │
│   └── fonts/              ← Custom fonts (if any)
│
├── components/             ← Reusable pieces (header, footer)
│   ├── header.html         ← Navigation bar (copy into pages)
│   └── footer.html         ← Footer content (copy into pages)
│
├── admin/                  ← Admin section (built later)
│   └── README.md           ← Placeholder explaining future plans
│
├── data/                   ← Content that changes (built later)
│   └── README.md           ← Placeholder for sermons, events, etc.
│
└── docs/                   ← Project documentation
    ├── PROJECT_BLUEPRINT.md
    ├── PHASE_1_FOUNDATION.md  ← This file
    └── CONTENT.md          ← Actual text content for pages
```

---

## SECTION 3 — FOLDER EXPLANATIONS

### Root Folder (`tac-stadium/`)

This is the main project folder. Everything lives here.

**`index.html`** — The home page. When someone visits the website, this is the first thing they see. It must be in the root folder (not inside `/pages/`).

---

### `/pages/` — Public Pages

This folder contains all the pages visitors can see.

| File                   | Purpose                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `about.html`           | Who we are, our mission, beliefs, and leadership                |
| `plan-your-visit.html` | Information for first-time visitors + form to notify the church |
| `sermons.html`         | List of recorded sermons with video links                       |
| `events.html`          | Upcoming church events                                          |
| `watch-live.html`      | Live stream embed or "next service" message                     |
| `give.html`            | Bank details and online giving options                          |
| `contact.html`         | Church address, phone, email, and contact form                  |
| `prayer-request.html`  | Form for submitting prayer requests                             |

---

### `/assets/` — Supporting Files

These are not pages — they help pages look and work better.

#### `/assets/css/`

- **`style.css`** — The main stylesheet. Controls colors, fonts, spacing, and layout for the entire site.
- **`/pages/`** — Optional folder for page-specific styles (e.g., `sermons.css` if the sermons page needs unique styling).

#### `/assets/js/`

- **`main.js`** — Simple JavaScript for:
  - Mobile menu toggle (hamburger menu)
  - Basic form validation (check if required fields are filled)
  - Smooth scrolling (optional)

#### `/assets/images/`

- **`logo.png`** — The church logo
- **`/hero/`** — Large images for page headers and banners
- **`/icons/`** — Small icons (social media, phone, email, etc.)
- **`/placeholders/`** — Temporary images used during development (replace later)

#### `/assets/fonts/`

- Custom fonts if we use any. Otherwise, we'll use standard web fonts.

---

### `/components/` — Reusable Pieces

These are HTML snippets that repeat on every page.

| File          | What It Contains                                      |
| ------------- | ----------------------------------------------------- |
| `header.html` | The top navigation bar (logo + menu links)            |
| `footer.html` | The bottom section (address, social links, copyright) |

**How to use them:**
Since we're using plain HTML (no backend), you will copy the header and footer code into each page manually. Later, if we add a backend or build tool, we can automate this.

---

### `/admin/` — Admin Dashboard (Future)

This folder is a placeholder. The admin section will be built later.

For now, it contains a `README.md` explaining:

- What the admin section will do
- Why it's not built yet
- When it will be added

---

### `/data/` — Dynamic Content (Future)

This folder is a placeholder for content that changes frequently:

- Sermon details (title, preacher, date, video link)
- Event details
- Church information

For version 1, this content will be written directly in the HTML files. Later, we can move it to JSON files or a database.

---

### `/docs/` — Documentation

Project planning and reference documents.

| File                    | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| `PROJECT_BLUEPRINT.md`  | Full project plan (features, user roles, data types) |
| `PHASE_1_FOUNDATION.md` | This file — explains the setup                       |
| `CONTENT.md`            | The actual text that will appear on each page        |

---

## SECTION 4 — WHICH PAGE TO BUILD FIRST

### Answer: The Home Page (`index.html`)

### Why?

1. **It's the first thing visitors see.**
   If someone finds the church online, they land on the home page first.

2. **It sets the tone for the whole website.**
   The home page establishes the design, colors, and feeling.

3. **It forces us to build reusable pieces.**
   We need to create the header and footer for the home page. Once done, we can reuse them on all other pages.

4. **It contains the most important message.**
   "Welcome. Here's when we meet. Plan your visit."

---

### What the Home Page Must Include

| Section            | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| **Header**         | Logo + navigation menu                         |
| **Hero Section**   | Big welcome message + "Plan Your Visit" button |
| **Service Times**  | When services happen                           |
| **What to Expect** | Brief description of the church experience     |
| **Watch Online**   | Link to live stream page                       |
| **Upcoming Event** | One featured event (optional)                  |
| **Footer**         | Address, phone, social links, copyright        |

---

## SECTION 5 — BUILD ORDER (AFTER HOME PAGE)

Once the home page is complete, we build pages in this order:

| Order | Page                | Reason                               |
| ----- | ------------------- | ------------------------------------ |
| 1     | **Home**            | First impression, establishes design |
| 2     | **Plan Your Visit** | Primary goal of the website          |
| 3     | **Contact**         | People need to reach the church      |
| 4     | **About**           | Builds trust and identity            |
| 5     | **Watch Live**      | Online viewing option                |
| 6     | **Sermons**         | Past recordings                      |
| 7     | **Events**          | Upcoming programs                    |
| 8     | **Give**            | Donation information                 |
| 9     | **Prayer Request**  | Form submission                      |

---

## SECTION 6 — WHAT HAPPENS NEXT

### Immediate Next Steps

1. **Create the folder structure**
   Set up all the folders exactly as described above.

2. **Create placeholder files**
   Add empty HTML files for each page with basic structure.

3. **Write the page content**
   Create `CONTENT.md` with the actual text for each page.

4. **Build the Home Page**
   Design and code `index.html` with header, hero, and footer.

5. **Extract reusable components**
   Save header and footer as separate files in `/components/`.

### Future Steps (Not Now)

- Add JavaScript for mobile menu
- Build remaining pages
- Add forms (Plan Your Visit, Contact, Prayer Request)
- Connect forms to email or database (requires backend)
- Build admin dashboard

---

## SUMMARY

| Decision            | Choice                                                 |
| ------------------- | ------------------------------------------------------ |
| Technology          | Plain HTML + CSS + light JavaScript                    |
| Framework           | None (keeping it simple)                               |
| First page to build | Home page (`index.html`)                               |
| Folder structure    | Organized by purpose (pages, assets, components, docs) |
| Approach            | Calm, step-by-step, beginner-friendly                  |

---

## REMINDER

> **Do not rush.**
> Build one piece at a time.
> Make sure each piece works before moving to the next.
> A simple, working website is better than a complex, broken one.

---

_Document created: January 29, 2026_
_Status: Ready for Implementation_
