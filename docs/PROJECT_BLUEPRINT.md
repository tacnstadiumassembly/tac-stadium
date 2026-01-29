# TAC STADIUM CHURCH WEBSITE — CLEAN BLUEPRINT

> **Purpose of This Document:**
> This is a calm, clear, beginner-friendly guide that describes what the church website should do.
> No code. No technical jargon. Just ideas written in plain English.

---

## SECTION 1 — PROJECT PURPOSE

### What is this website for?

This website is the online presence for **The Apostolic Church Nigeria – Stadium Assembly**, a church located in Ogbomosho, Oyo State, Nigeria.

### The Main Goal

**Get new people to visit the church in person.**

Everything on this website should guide a visitor toward one action: coming to a Sunday service.

### Secondary Goals

- Let people watch services online if they cannot attend physically
- Help members stay informed about church activities
- Allow people to give offerings and donations
- Provide a way for people to request prayer
- Build trust with first-time visitors before they arrive

### The Feeling We Want

When someone visits this website, they should feel:

- Welcome and at ease
- Informed (not confused)
- Invited (not pressured)
- Confident about what to expect when they visit

---

## SECTION 2 — USER ROLES

These are the types of people who will use the website:

### 1. Visitor (Public User)

- Someone who found the church online
- They have never been to the church before
- They want to learn about the church and possibly visit
- They do NOT log in or have an account

### 2. Returning Member

- Someone who already attends the church
- They want to check service times, watch past sermons, or see upcoming events
- They do NOT need to log in for basic features

### 3. Admin (Church Staff)

- Someone who manages the website content
- They can add new sermons, events, and announcements
- They can view form submissions (prayer requests, visitor forms)
- They need to log in to a private dashboard

### 4. Pastor / Leadership (Future Role)

- May need special access to view private prayer requests
- May want to publish messages or devotionals
- **Not needed for version 1**

### 5. Media Team (Future Role)

- Responsible for uploading sermon videos
- May manage the live stream settings
- **Not needed for version 1** — Admin can handle this initially

---

## SECTION 3 — CORE FEATURES

These are the essential features the website must have to work properly.

### For Visitors

#### Viewing Information

- Visitors can see the church name and location
- Visitors can see what days and times services happen
- Visitors can learn what to expect when they visit (dress code, parking, children's ministry)
- Visitors can read about the church's beliefs, mission, and leadership

#### Planning a Visit

- Visitors can fill out a simple form to let the church know they are coming
- The form asks for: name, phone number, email (optional), planned visit date, and a message (optional)
- When submitted, the church receives a notification

#### Watching Services

- Visitors can watch the live service when it is streaming
- If no live stream is happening, visitors see a message saying when the next service will be
- Visitors can watch past sermons that have been recorded

#### Getting in Touch

- Visitors can see the church's phone number, email, and physical address
- Visitors can send a message using a contact form
- Visitors can click a button to chat on WhatsApp

#### Requesting Prayer

- Visitors can submit a prayer request through a form
- They can choose to remain anonymous
- They can mark the request as private (only leadership sees it)

#### Giving

- Visitors can see how to give financially to the church
- They can see bank transfer details
- They can click a link to give online (through a third-party service)

#### Staying Informed

- Visitors can see upcoming church events
- Visitors can read announcements (e.g., special programs, conventions)

---

### For Admins

#### Managing Sermons

- Admins can add a new sermon with: title, preacher name, date, scripture reference, video link
- Admins can edit or remove existing sermons
- Sermons appear on the public website automatically

#### Managing Events

- Admins can add a new event with: title, date, time, location, description
- Admins can mark an event as "featured" (shows prominently)
- Admins can edit or remove existing events
- Past events automatically stop showing (or move to an archive)

#### Managing Live Stream

- Admins can turn the live stream on or off
- Admins can paste a YouTube or Facebook Live video link
- When turned on, visitors see the live video
- When turned off, visitors see a "next service" message

#### Managing Announcements

- Admins can display a banner at the top of the website
- The banner can have a short message and a link
- Admins can turn the banner on or off

#### Viewing Submissions

- Admins can see a list of all prayer requests that have been submitted
- Admins can see a list of all "Plan Your Visit" form submissions
- Admins can see a list of all contact form messages

#### Editing Church Information

- Admins can change the church name, address, phone number, and email
- Admins can update service times
- Admins can update social media links
- Admins can update bank account details for giving

---

## SECTION 4 — OPTIONAL / FUTURE FEATURES

These features are nice to have but are NOT essential for the first version.

### For Visitors

- Visitors can search sermons by topic, preacher, or date
- Visitors can download sermon audio files
- Visitors can share a sermon on social media
- Visitors can add an event to their personal calendar (Google Calendar, etc.)
- Visitors can subscribe to a newsletter for updates
- Visitors can read daily devotionals or blog posts

### For Members

- Members can create an account and log in
- Members can save their favorite sermons
- Members can track their giving history
- Members can register for events online
- Members can join a small group or ministry through the website

### For Admins

- Admins can see analytics (how many visitors, which pages are popular)
- Admins can schedule content to publish at a future date
- Admins can manage multiple admin users with different permissions
- Admins can send email notifications to subscribers
- Admins can manage testimonies submitted by members
- Admins can manage ministry/department pages

### Technical Enhancements

- The website sends automatic confirmation emails when forms are submitted
- The website works offline (basic information still visible)
- The website supports multiple languages

---

## SECTION 5 — DATA TYPES

These are the kinds of information the website will store and display.

### Church Information

- Church name
- Church address
- Phone number(s)
- Email address
- WhatsApp number
- Service times (text, can be multiple lines)
- Social media links (Facebook, Instagram, YouTube, Twitter)
- Bank account details (bank name, account number, account name)
- Online giving link

### Sermon

- Title
- Preacher name
- Date
- Scripture reference (e.g., "John 3:16")
- Video link (YouTube URL)
- Audio link (optional, for future)
- Thumbnail image (optional — can be pulled from YouTube)
- Series name (optional — for grouping sermons)
- Topic tags (optional — for searching)

### Event

- Title
- Description
- Start date
- End date (optional, for multi-day events)
- Start time
- End time (optional)
- Location
- Featured (yes or no)
- Registration link (optional)

### Prayer Request (Submitted by Visitors)

- Requester name (optional — can be anonymous)
- Requester email (optional)
- Prayer request text
- Private (yes or no)
- Date submitted

### Plan Your Visit Submission

- Visitor name
- Phone number
- Email (optional)
- Planned visit date
- Message (optional)
- Date submitted

### Contact Form Submission

- Sender name
- Email
- Phone (optional)
- Subject (optional)
- Message
- Date submitted

### Announcement (Banner)

- Message text
- Link (optional)
- Active (yes or no)

### Ministry (Future)

- Ministry name
- Description
- Leader name
- Meeting time
- Image (optional)

### Testimony (Future)

- Author name
- Testimony text
- Date
- Approved (yes or no)

---

## SECTION 6 — WHAT TO DELETE

The following items from the current project should be completely removed. They are WordPress-specific and will not be used in the new version.

### WordPress Core Files (DELETE ALL)

- `wp-admin/` folder — WordPress admin panel
- `wp-includes/` folder — WordPress core functions
- `wp-content/themes/` — WordPress themes (twentytwentythree, etc.)
- `wp-content/plugins/akismet/` — WordPress spam plugin
- `wp-content/plugins/hello.php` — Default WordPress plugin
- All files starting with `wp-` in the root folder:
  - `wp-config.php`
  - `wp-load.php`
  - `wp-login.php`
  - `wp-settings.php`
  - `wp-activate.php`
  - `wp-blog-header.php`
  - `wp-comments-post.php`
  - `wp-cron.php`
  - `wp-links-opml.php`
  - `wp-mail.php`
  - `wp-signup.php`
  - `wp-trackback.php`
  - `index.php`
  - `xmlrpc.php`
  - `license.txt`
  - `readme.html`
  - `wp-config-sample.php`

### Custom WordPress Plugin (DELETE)

- `wp-content/plugins/tac-stadium-core/` — This was the custom functionality
- The code inside is useful for understanding features, but the implementation is WordPress-specific

### Setup Scripts (DELETE)

- `setup_church.php` — One-time WordPress setup script
- `seed_sermons.php` — WordPress sermon seeder

### Keep for Reference (THEN DELETE)

- `church_website.md` — Contains useful content and planning
- This file (`PROJECT_BLUEPRINT.md`) replaces it

### Keep (For Now)

- `wp-content/uploads/` — May contain media files worth saving
- `docs/` folder — New documentation home

---

## SUMMARY

This document describes a church website that:

1. **Welcomes visitors** and makes them feel comfortable visiting in person
2. **Shares services** through live streaming and recorded sermons
3. **Informs the community** about events and announcements
4. **Receives communication** through forms (prayer requests, contact, visit planning)
5. **Accepts donations** through bank transfer and online giving links
6. **Is managed by admins** through a simple, private dashboard

The previous WordPress version tried to do all of this but became complicated.

The new version will be:

- **Simple** — Easy to understand and maintain
- **Beginner-friendly** — Clear code, clear structure
- **Focused** — Only essential features for version 1
- **Calm** — Built with patience, not rushed

---

## NEXT STEPS

Once this blueprint is approved, the next phase will be:

1. **Choose a simple technology stack** — Discuss options suitable for beginners
2. **Design the folder structure** — Plan how files will be organized
3. **Build one feature at a time** — Start with the most important: Home page → Plan Your Visit → Contact

No code will be written until the plan is confirmed.

---

_Document created: January 29, 2026_
_Status: Ready for Review_
