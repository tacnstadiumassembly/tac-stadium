# FOLDER STRUCTURE — EXPLAINED

> **What is this document?**
> A simple guide that explains what each folder and file is for.
> Written for beginners. No technical jargon.

---

## THE FOLDER TREE

```
tac-stadium/
│
├── index.html                 ← Home page (will be created later)
│
├── pages/                     ← Other public pages
│   ├── about.html
│   ├── sermons.html
│   ├── events.html
│   ├── plan-a-visit.html
│   └── contact.html
│
├── assets/                    ← Supporting files (not pages)
│   ├── css/                   ← Stylesheets (colors, fonts, layout)
│   ├── js/                    ← JavaScript (interactive features)
│   ├── images/                ← Pictures and graphics
│   │   ├── icons/             ← Small icons (social media, etc.)
│   │   └── hero/              ← Large banner images
│   └── fonts/                 ← Custom fonts (if needed)
│
├── components/                ← Reusable pieces (header, footer)
│
├── data/                      ← Content files (sermons, events — future)
│
└── docs/                      ← Project documentation
    ├── PROJECT_BLUEPRINT.md
    ├── PHASE_1_FOUNDATION.md
    └── FOLDER_STRUCTURE.md    ← This file
```

---

## FOLDER EXPLANATIONS

### `tac-stadium/` (Root Folder)

This is the main project folder. Everything lives inside here.

**What goes here:**

- The home page (`index.html`) — this MUST be in the root folder
- All other folders

---

### `pages/`

**Purpose:** Holds all the public pages visitors can see (except the home page).

**What goes here:**

| File                | What It's For                                               |
| ------------------- | ----------------------------------------------------------- |
| `about.html`        | Information about the church (mission, beliefs, leadership) |
| `sermons.html`      | List of recorded sermons with video links                   |
| `events.html`       | Upcoming church events and programs                         |
| `plan-a-visit.html` | Information for first-time visitors                         |
| `contact.html`      | Church address, phone, email, and contact form              |

**Why not put `index.html` here?**
Web browsers automatically look for `index.html` in the root folder when someone visits a website. It must stay in the main folder.

---

### `assets/`

**Purpose:** Holds files that support the pages but are not pages themselves.

Think of this as the "toolbox" — it contains the things that make pages look good and work well.

---

### `assets/css/`

**Purpose:** Holds stylesheet files that control how the website looks.

**What goes here:**

- Colors
- Fonts and text sizes
- Spacing between elements
- Layout (how things are arranged)

**Example file:** `style.css`

---

### `assets/js/`

**Purpose:** Holds JavaScript files that add interactive features.

**What goes here:**

- Mobile menu (hamburger button)
- Form validation (checking if fields are filled)
- Smooth scrolling

**Example file:** `main.js`

**Note:** We will use very little JavaScript. Only what's truly needed.

---

### `assets/images/`

**Purpose:** Holds all pictures and graphics used on the website.

**Subfolders:**

| Folder   | What Goes There                                                |
| -------- | -------------------------------------------------------------- |
| `icons/` | Small images like social media logos, phone icons, email icons |
| `hero/`  | Large banner images for page headers                           |

**Other images** (like the church logo) can go directly in the `images/` folder.

---

### `assets/fonts/`

**Purpose:** Holds custom font files (if we use any).

**Note:** We may not need this folder. Standard web fonts (like Google Fonts) can be loaded from the internet. But this folder is here in case we want to use a special font that isn't available online.

---

### `components/`

**Purpose:** Holds reusable pieces of the website that appear on every page.

**What goes here:**

- `header.html` — The top navigation bar (logo + menu)
- `footer.html` — The bottom section (address, social links, copyright)

**Why is this useful?**
Instead of copying the same header code into every page, we write it once and reuse it. This makes updates easier — change it in one place, and it updates everywhere.

**Note:** For now, we will manually copy these into each page. Later, we can automate this.

---

### `data/`

**Purpose:** Will hold content that changes frequently (sermons, events, etc.).

**What will go here (later):**

- `sermons.json` — List of all sermons with titles, dates, and video links
- `events.json` — List of upcoming events

**Why not now?**
For version 1, we'll put content directly in the HTML files. This folder is a placeholder for when we're ready to separate content from design.

---

### `docs/`

**Purpose:** Holds project documentation and planning files.

**What goes here:**

| File                    | What It Contains                               |
| ----------------------- | ---------------------------------------------- |
| `PROJECT_BLUEPRINT.md`  | The full project plan (features, users, data)  |
| `PHASE_1_FOUNDATION.md` | Setup decisions (technology, folder structure) |
| `FOLDER_STRUCTURE.md`   | This file — explains what each folder is for   |

---

## FILES TO BE CREATED (LATER)

These files don't exist yet. They will be created when we start building.

| File                | Location       | Purpose                 |
| ------------------- | -------------- | ----------------------- |
| `index.html`        | Root           | Home page               |
| `about.html`        | `/pages/`      | About the church        |
| `sermons.html`      | `/pages/`      | Sermon archive          |
| `events.html`       | `/pages/`      | Upcoming events         |
| `plan-a-visit.html` | `/pages/`      | First-time visitor info |
| `contact.html`      | `/pages/`      | Contact information     |
| `style.css`         | `/assets/css/` | Main stylesheet         |
| `main.js`           | `/assets/js/`  | Simple JavaScript       |
| `header.html`       | `/components/` | Navigation bar          |
| `footer.html`       | `/components/` | Footer section          |

---

## WHAT ABOUT THE `.gitkeep` FILES?

You may see small files called `.gitkeep` in empty folders.

**What are they?**
These are placeholder files. They exist only to keep the folder visible in version control systems like Git.

**Do they affect the website?**
No. They are invisible and do nothing. You can delete them once real files are added to the folder.

---

## CONFIRMATION CHECKLIST

Before moving to the next phase, confirm:

- [ ] The folder structure exists as shown above
- [ ] All folders are empty (except for `.gitkeep` placeholders)
- [ ] No code has been written yet
- [ ] Documentation is in the `/docs/` folder
- [ ] The old WordPress files have been removed (or moved elsewhere)

---

## WHAT'S NEXT?

Once this structure is confirmed:

1. **Write the content** — Create a document with the actual text for each page
2. **Build the Home page** — Start with `index.html`
3. **Create reusable components** — Build header and footer
4. **Build remaining pages** — One at a time, in order of importance

---

_Document created: January 29, 2026_
_Status: Structure Ready_
