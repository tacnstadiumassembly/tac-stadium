// ========== PHASE 21: MEMBERS PORTAL & MINISTRY RESOURCES ========== //
// Resource data (placeholder, can be moved to JSON later)
const ministryResources = [
  {
    id: 1,
    title: "Bible Study Guide: Romans",
    desc: "A 12-week guide for in-depth study of the Book of Romans.",
    category: "bible",
    link: "#"
  },
  {
    id: 2,
    title: "Workers Manual 2026",
    desc: "Official manual for church workers and leaders.",
    category: "workers",
    link: "#"
  },
  {
    id: 3,
    title: "Choir Rehearsal Materials Q1",
    desc: "Sheet music and practice tracks for choir members.",
    category: "choir",
    link: "#"
  },
  {
    id: 4,
    title: "Youth Study: Faith Foundations",
    desc: "Youth-focused study resource on Christian foundations.",
    category: "youth",
    link: "#"
  },
  {
    id: 5,
    title: "Convention Materials 2025",
    desc: "All handouts and guides for the annual convention.",
    category: "conventions",
    link: "#"
  },
  {
    id: 6,
    title: "Bible Study Guide: Acts",
    desc: "A 10-week guide for the Book of Acts.",
    category: "bible",
    link: "#"
  },
  {
    id: 7,
    title: "Workers Orientation Handbook",
    desc: "Quick-start guide for new church workers.",
    category: "workers",
    link: "#"
  },
  {
    id: 8,
    title: "Youth Study: Living for Christ",
    desc: "Discussion guide for youth fellowship.",
    category: "youth",
    link: "#"
  },
];

function renderResourceCard(resource) {
  return `
    <article class="glass-card resource-card animate-on-scroll" data-category="${resource.category}" tabindex="0" aria-label="${resource.title}">
      <h3 style="margin-bottom:0.5rem; color:var(--faith-blue); font-size:1.1rem;">${resource.title}</h3>
      <p style="margin-bottom:1rem; color:#1f2933;">${resource.desc}</p>
      <button class="btn btn-primary resource-preview-btn" data-id="${resource.id}" aria-label="Preview resource: ${resource.title}">Preview & Download</button>
    </article>
  `;
}

function renderResourceGrid(filter) {
  const grid = document.getElementById("resourceGrid");
  if (!grid) return;
  let filtered =
    filter === "all"
      ? ministryResources
      : ministryResources.filter((r) => r.category === filter);
  grid.innerHTML =
    filtered.length > 0
      ? filtered.map(renderResourceCard).join("")
      : '<div style="color:#b91c1c; text-align:center;">No resources found.</div>';
  // Animate in
  grid.querySelectorAll(".resource-card").forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(24px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s, transform 0.5s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 100 + i * 80);
  });
}

function initResourceFilters() {
  const filterBtns = document.querySelectorAll(".resource-filters .filter-btn");
  if (!filterBtns.length) return;
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      const filter = this.getAttribute("data-filter");
      renderResourceGrid(filter);
    });
  });
}

function createResourceModal() {
  const modal = document.getElementById("resourceModal");
  if (!modal) return;
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDesc");
  const downloadBtn = document.getElementById("modalDownload");
  let lastFocused = null;

  function openModal(resource) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("modal-visible");
      modal.setAttribute("aria-expanded", "true");
      modal.focus();
    }, 10);
    titleEl.textContent = resource.title;
    descEl.textContent = resource.desc;
    downloadBtn.href = resource.link;
    lastFocused = document.activeElement;
    // Focus trap
    trapFocus(modal);
  }

  function closeModal() {
    modal.classList.remove("modal-visible");
    modal.setAttribute("aria-expanded", "false");
    setTimeout(() => {
      modal.style.display = "none";
      if (lastFocused) lastFocused.focus();
    }, 250);
  }

  // Open modal on card button click
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("resource-preview-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      const resource = ministryResources.find((r) => r.id === id);
      if (resource) openModal(resource);
    }
    if (e.target.classList.contains("modal-close")) {
      closeModal();
    }
  });
  // Keyboard: ESC closes modal
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block" && e.key === "Escape") {
      closeModal();
    }
  });
  // Click outside modal-content closes
  modal.addEventListener("mousedown", function (e) {
    if (e.target === modal) closeModal();
  });
}

// Focus trap for modal accessibility
function trapFocus(modal) {
  const focusable = modal.querySelectorAll(
    'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  modal.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// Init Members Portal features if on members.html
if (document.getElementById("resourceGrid")) {
  renderResourceGrid("all");
  initResourceFilters();
  createResourceModal();
}
// ========== PHASE 20: PRAYER & TESTIMONY SUBMISSION SYSTEM ========== //

function handlePrayerForm() {
  const form = document.getElementById("prayerForm");
  if (!form) return;
  const successDiv = document.getElementById("prayerSuccess");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Validate
    const category = form.prayerCategory.value;
    const message = form.prayerMessage.value.trim();
    const urgency = form.prayerUrgency.value;
    const consent = form.prayerConsent.checked;
    let valid = true;
    if (!category) valid = false;
    if (!message || message.length < 10) valid = false;
    if (!urgency) valid = false;
    if (!consent) valid = false;
    if (!valid) {
      showFormError(form, "Please fill all required fields and give consent.");
      return;
    }
    // Store in localStorage queue
    const queue = JSON.parse(localStorage.getItem("prayerQueue") || "[]");
    queue.push({
      name: form.prayerName.value,
      email: form.prayerEmail.value,
      category,
      message,
      urgency,
      consent,
      date: new Date().toISOString(),
    });
    localStorage.setItem("prayerQueue", JSON.stringify(queue));
    // Show success
    showFormSuccess(
      successDiv,
      "Your prayer request has been received. Our prayer team will pray for you.",
    );
    form.reset();
  });
  // Animate card on scroll
  fadeUpOnScroll(form);
}

function handleTestimonyForm() {
  const form = document.getElementById("testimonyForm");
  if (!form) return;
  const successDiv = document.getElementById("testimonySuccess");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Validate
    const name = form.testimonyName.value.trim();
    const email = form.testimonyEmail.value.trim();
    const title = form.testimonyTitle.value.trim();
    const message = form.testimonyMessage.value.trim();
    const consent = form.testimonyConsent.checked;
    let valid = true;
    if (!name) valid = false;
    if (!email) valid = false;
    if (!title) valid = false;
    if (!message || message.length < 10) valid = false;
    if (!consent) valid = false;
    if (!valid) {
      showFormError(
        form,
        "Please fill all required fields and give permission to publish.",
      );
      return;
    }
    // Store in localStorage queue
    const queue = JSON.parse(localStorage.getItem("testimonyQueue") || "[]");
    queue.push({
      name,
      email,
      title,
      message,
      consent,
      date: new Date().toISOString(),
    });
    localStorage.setItem("testimonyQueue", JSON.stringify(queue));
    // Show success
    showFormSuccess(
      successDiv,
      "Thank you for sharing your testimony! It may be published after review.",
    );
    form.reset();
  });
  // Animate card on scroll
  fadeUpOnScroll(form);
}

// Helper: show animated success message
function showFormSuccess(div, msg) {
  if (!div) return;
  div.textContent = msg;
  div.style.display = "block";
  div.style.opacity = 0;
  div.style.transform = "translateY(24px)";
  setTimeout(() => {
    div.style.transition = "opacity 0.5s, transform 0.5s";
    div.style.opacity = 1;
    div.style.transform = "translateY(0)";
  }, 10);
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = "translateY(24px)";
    setTimeout(() => {
      div.style.display = "none";
    }, 500);
  }, 5000);
}

// Helper: show error (simple alert for now)
function showFormError(form, msg) {
  alert(msg);
}

// Helper: fade-up animation on scroll
function fadeUpOnScroll(el) {
  if (!el) return;
  el.classList.add("animate-on-scroll");
  el.style.opacity = 0;
  el.style.transform = "translateY(24px)";
  function reveal() {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.style.transition = "opacity 0.5s, transform 0.5s";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      window.removeEventListener("scroll", reveal);
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
}

// Init forms if present
handlePrayerForm();
handleTestimonyForm();
/**
 * ============================================
 * TAC STADIUM - MAIN JAVASCRIPT FILE
 * ============================================
 * Lightweight, progressive enhancement JavaScript.
 * Site works without JS - this just improves UX.
 *
 * Features:
 * 1. Mobile navigation toggle (hamburger menu)
 * 2. Sermon filter functionality
 * 3. Event filter functionality
 * 4. Form validation (client-side)
 * 5. Smooth scroll for anchor links
 * 6. Double-submit prevention
 * 7. Page transition animation (Phase 10)
 * 8. Scroll reveal animations (Phase 10)
 *
 * Created: January 29, 2026
 * Updated: Phase 10 - Brand UI, Motion & Page Transitions
 * ============================================
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ============================================
  // PHASE 10: CHECK FOR REDUCED MOTION PREFERENCE
  // ============================================
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // ============================================
  // 1. MOBILE NAVIGATION TOGGLE
  // ============================================
  // Creates a hamburger menu button for mobile

  function initMobileNav() {
    const header = document.querySelector("header");
    const nav = document.querySelector("header nav");

    if (!header || !nav) return;

    // Create hamburger button
    const menuButton = document.createElement("button");
    menuButton.className = "mobile-menu-toggle";
    menuButton.setAttribute("aria-label", "Toggle navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = `
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    `;

    // Insert button before nav
    nav.parentNode.insertBefore(menuButton, nav);

    // Toggle menu on click
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("nav-open");
      menuButton.setAttribute("aria-expanded", isOpen.toString());
      menuButton.classList.toggle("menu-open", isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target) && nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("menu-open");
      }
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("nav-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("menu-open");
      });
    });
  }

  // ============================================
  // 2. SERMON FILTER FUNCTIONALITY
  // ============================================
  // Filters sermon cards by category

  function initSermonFilter() {
    const filterButtons = document.querySelectorAll(
      ".section-sermon-filters .filter-btn",
    );
    const sermonCards = document.querySelectorAll(".sermon-card");

    if (filterButtons.length === 0 || sermonCards.length === 0) return;

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        // Get filter value (from button text, lowercase)
        const filterValue = this.textContent.trim().toLowerCase();

        // Filter cards
        sermonCards.forEach(function (card) {
          const category = card.getAttribute("data-category") || "";

          if (filterValue === "all" || category.toLowerCase() === filterValue) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // ============================================
  // 3. EVENT FILTER FUNCTIONALITY
  // ============================================
  // Filters event cards by category

  function initEventFilter() {
    const filterButtons = document.querySelectorAll(
      ".section-event-filters .filter-btn",
    );
    const eventCards = document.querySelectorAll(".event-card");

    if (filterButtons.length === 0 || eventCards.length === 0) return;

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        // Get filter value (from button text, lowercase)
        const filterValue = this.textContent.trim().toLowerCase();

        // Filter cards
        eventCards.forEach(function (card) {
          const category = card.getAttribute("data-category") || "";

          if (
            filterValue === "all events" ||
            category.toLowerCase() === filterValue
          ) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // ============================================
  // 4. FORM VALIDATION
  // ============================================
  // Client-side validation for forms

  /**
   * Shows an error message below a form field
   */
  function showError(input, message) {
    // Remove existing error
    clearError(input);

    // Create error element
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    // Add error class to input
    input.classList.add("input-error");

    // Insert after input (or after radio group)
    const formGroup = input.closest(".form-group");
    if (formGroup) {
      formGroup.appendChild(errorDiv);
    }
  }

  /**
   * Clears error message from a form field
   */
  function clearError(input) {
    input.classList.remove("input-error");
    const formGroup = input.closest(".form-group");
    if (formGroup) {
      const existingError = formGroup.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }
    }
  }

  /**
   * Shows a success message in the form
   */
  function showSuccessMessage(form, message) {
    // Remove existing success message
    const existingSuccess = form.querySelector(".success-message");
    if (existingSuccess) existingSuccess.remove();

    // Create success element
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = message;

    // Insert at top of form
    form.insertBefore(successDiv, form.firstChild);

    // Auto-clear after 5 seconds
    setTimeout(function () {
      successDiv.remove();
    }, 5000);
  }

  /**
   * Validates email format
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Initialize Contact Form Validation
   */
  function initContactFormValidation() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Get form fields
      const nameInput = form.querySelector("#contact-name");
      const emailInput = form.querySelector("#contact-email");
      const messageInput = form.querySelector("#contact-message");

      // Validate name
      if (nameInput && nameInput.value.trim() === "") {
        showError(nameInput, "Please enter your full name.");
        isValid = false;
      } else if (nameInput) {
        clearError(nameInput);
      }

      // Validate email
      if (emailInput && emailInput.value.trim() === "") {
        showError(emailInput, "Please enter your email address.");
        isValid = false;
      } else if (emailInput && !isValidEmail(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      } else if (emailInput) {
        clearError(emailInput);
      }

      // Validate message
      if (messageInput && messageInput.value.trim() === "") {
        showError(messageInput, "Please enter your message.");
        isValid = false;
      } else if (messageInput) {
        clearError(messageInput);
      }

      // If valid, show success (no actual sending)
      if (isValid) {
        showSuccessMessage(
          form,
          "Thank you! Your message has been received. We will get back to you soon.",
        );

        // Reset form
        form.reset();

        // Disable submit button temporarily
        const submitBtn = form.querySelector(".btn-submit");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sent!";
          setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
          }, 3000);
        }
      }
    });

    // Clear errors on input
    form.querySelectorAll("input, textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        clearError(this);
      });
    });
  }

  /**
   * Initialize Visitor Form Validation
   */
  function initVisitorFormValidation() {
    const form = document.querySelector(".visitor-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Get form fields
      const nameInput = form.querySelector("#visitor-name");
      const visitingWithSelect = form.querySelector("#visitor-with");
      const firstTimeRadios = form.querySelectorAll('input[name="first-time"]');

      // Validate name
      if (nameInput && nameInput.value.trim() === "") {
        showError(nameInput, "Please enter your full name.");
        isValid = false;
      } else if (nameInput) {
        clearError(nameInput);
      }

      // Validate visiting with
      if (visitingWithSelect && visitingWithSelect.value === "") {
        showError(
          visitingWithSelect,
          "Please select who you are visiting with.",
        );
        isValid = false;
      } else if (visitingWithSelect) {
        clearError(visitingWithSelect);
      }

      // Validate first time radio
      let firstTimeSelected = false;
      firstTimeRadios.forEach(function (radio) {
        if (radio.checked) firstTimeSelected = true;
      });

      if (!firstTimeSelected && firstTimeRadios.length > 0) {
        const radioGroup = firstTimeRadios[0].closest(".form-group");
        if (radioGroup && !radioGroup.querySelector(".error-message")) {
          const errorDiv = document.createElement("div");
          errorDiv.className = "error-message";
          errorDiv.textContent = "Please select if this is your first visit.";
          radioGroup.appendChild(errorDiv);
        }
        isValid = false;
      } else if (firstTimeRadios.length > 0) {
        const radioGroup = firstTimeRadios[0].closest(".form-group");
        if (radioGroup) {
          const existingError = radioGroup.querySelector(".error-message");
          if (existingError) existingError.remove();
        }
      }

      // If valid, show success (no actual sending)
      if (isValid) {
        showSuccessMessage(
          form,
          "Thank you! We've received your visit notification. We look forward to welcoming you!",
        );

        // Reset form
        form.reset();

        // Disable submit button temporarily
        const submitBtn = form.querySelector(".btn-submit");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Submitted!";
          setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = "Notify the Church";
          }, 3000);
        }
      }
    });

    // Clear errors on input
    form.querySelectorAll("input, textarea, select").forEach(function (input) {
      input.addEventListener("input", function () {
        clearError(this);
      });
      input.addEventListener("change", function () {
        clearError(this);
      });
    });
  }

  // ============================================
  // 5. SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // ============================================
  // 6. PREVENT DOUBLE SUBMIT
  // ============================================

  function initPreventDoubleSubmit() {
    document.querySelectorAll("form").forEach(function (form) {
      let isSubmitting = false;

      form.addEventListener("submit", function () {
        if (isSubmitting) {
          return false;
        }

        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
          // Don't disable if we have custom validation handling
          if (
            !form.classList.contains("contact-form") &&
            !form.classList.contains("visitor-form")
          ) {
            isSubmitting = true;
            submitBtn.disabled = true;

            // Re-enable after 3 seconds (in case of error)
            setTimeout(function () {
              isSubmitting = false;
              submitBtn.disabled = false;
            }, 3000);
          }
        }
      });
    });
  }

  // ============================================
  // PHASE 10: SCROLL REVEAL ANIMATIONS
  // ============================================
  // Fade-up animation for cards and sections on scroll

  function initScrollReveal() {
    // Skip if user prefers reduced motion
    if (prefersReducedMotion) return;

    // Select elements to animate
    const animatableElements = document.querySelectorAll(
      ".sermon-card, .event-card, .ministry-card, .giving-card, " +
        ".contact-info-card, .service-time-card, .form-container",
    );

    // Add animation class to all animatable elements
    animatableElements.forEach(function (el) {
      el.classList.add("animate-on-scroll");
    });

    // Create intersection observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -50px 0px", // trigger slightly before element is fully visible
      threshold: 0.1, // 10% of element must be visible
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Add visible class with slight delay for stagger effect
          entry.target.classList.add("is-visible");
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    animatableElements.forEach(function (el) {
      observer.observe(el);
    });

    // Animate section headings
    const sectionHeadings = document.querySelectorAll("main section h2");
    sectionHeadings.forEach(function (heading) {
      heading.classList.add("section-heading-animate");
    });

    const headingObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sectionHeadings.forEach(function (heading) {
      headingObserver.observe(heading);
    });
  }

  // ============================================
  // PHASE 10: PAGE TRANSITION HANDLING
  // ============================================
  // Smooth page navigation with fade effect

  function initPageTransitions() {
    // Skip if user prefers reduced motion
    if (prefersReducedMotion) return;

    // Get all internal navigation links
    const internalLinks = document.querySelectorAll(
      'a[href^="/"]:not([target="_blank"]), ' +
        'a[href^="./"]:not([target="_blank"]), ' +
        'a[href^="../"]:not([target="_blank"]), ' +
        'a:not([href^="http"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])',
    );

    internalLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Skip if it's an anchor link or external
        if (!href || href.startsWith("#") || href.startsWith("http")) return;

        e.preventDefault();

        // Add exit animation class
        document.body.classList.add("page-exit");

        // Navigate after animation
        setTimeout(function () {
          window.location.href = href;
        }, 200);
      });
    });
  }

  // ============================================
  // PHASE 10: BUTTON RIPPLE EFFECT (SUBTLE)
  // ============================================
  // Adds subtle tactile feedback on button press

  function initButtonFeedback() {
    const buttons = document.querySelectorAll(".btn, .btn-primary, .btn-small");

    buttons.forEach(function (button) {
      button.addEventListener("mousedown", function () {
        this.style.transform = "scale(0.98)";
      });

      button.addEventListener("mouseup", function () {
        this.style.transform = "";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "";
      });
    });
  }

  // ============================================
  // INITIALIZE ALL FEATURES
  // ============================================

  initMobileNav();
  initSermonFilter();
  initEventFilter();
  initContactFormValidation();
  initVisitorFormValidation();
  initSmoothScroll();
  initPreventDoubleSubmit();

  // Phase 10 features
  initScrollReveal();
  initPageTransitions();
  initButtonFeedback();

  // ========== PHASE 18: SERMON SEARCH & EVENT CALENDAR ========== //

  // Sermon search/filter system
  let allSermons = [];
  function filterSermons() {
    const search = (
      document.getElementById("sermonSearch")?.value || ""
    ).toLowerCase();
    const cat = document.getElementById("sermonCategory")?.value || "all";
    let filtered = allSermons.filter((sermon) => {
      const matchCat =
        cat === "all" ||
        (sermon.category && sermon.category.toLowerCase() === cat);
      const matchSearch =
        !search ||
        (sermon.title && sermon.title.toLowerCase().includes(search)) ||
        (sermon.preacher && sermon.preacher.toLowerCase().includes(search));
      return matchCat && matchSearch;
    });
    const grid =
      document.getElementById("sermonResults") ||
      document.querySelector(".sermon-grid-full");
    if (!grid) return;
    showLoadingState(grid);
    setTimeout(() => {
      grid.innerHTML = filtered.length
        ? filtered.map(renderSermonCard).join("")
        : '<div style="color:#b91c1c; text-align:center;">No sermons found.</div>';
      // Animate in
      grid.querySelectorAll(".sermon-card").forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(24px)";
        setTimeout(() => {
          card.style.transition = "opacity 0.5s, transform 0.5s";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, 50);
      });
    }, 200);
  }

  function searchSermons() {
    document
      .getElementById("sermonSearch")
      ?.addEventListener("input", filterSermons);
    document
      .getElementById("sermonCategory")
      ?.addEventListener("change", filterSermons);
  }

  // Patch loadSermons to store all sermons and trigger filter
  const origLoadSermons = loadSermons;
  loadSermons = function () {
    const grid =
      document.getElementById("sermonResults") ||
      document.querySelector(".sermon-grid-full");
    if (!grid) return;
    showLoadingState(grid);
    fetch("../assets/data/sermons.json")
      .then((r) => r.json())
      .then((data) => {
        allSermons = data;
        filterSermons();
      })
      .catch(() => {
        grid.innerHTML =
          '<div style="color:#b91c1c; text-align:center;">Failed to load sermons.</div>';
      });
  };

  // Event calendar system
  let allEvents = [];
  function renderCalendar(month, year) {
    const calendar = document.getElementById("eventCalendar");
    if (!calendar) return;
    // Clear
    calendar.innerHTML = "";
    // Header
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const header = document.createElement("div");
    header.className = "calendar-header";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.marginBottom = "1rem";
    header.innerHTML = `
      <button id="prevMonth" aria-label="Previous month" style="background:none;border:none;font-size:1.5rem;cursor:pointer;">&#8592;</button>
      <span style="font-weight:bold;font-size:1.2rem;">${monthNames[month]} ${year}</span>
      <button id="nextMonth" aria-label="Next month" style="background:none;border:none;font-size:1.5rem;cursor:pointer;">&#8594;</button>
    `;
    calendar.appendChild(header);
    // Days grid
    const grid = document.createElement("div");
    grid.className = "calendar-grid";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(7,1fr)";
    grid.style.gap = "0.25rem";
    grid.style.marginBottom = "1rem";
    // Weekday headers
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((d) => {
      const wd = document.createElement("div");
      wd.textContent = d;
      wd.style.fontWeight = "bold";
      wd.style.textAlign = "center";
      grid.appendChild(wd);
    });
    // Dates
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let dayNum = 1;
    for (let i = 0; i < 42; i++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.tabIndex = 0;
      cell.setAttribute(
        "aria-label",
        `Day ${dayNum} ${monthNames[month]} ${year}`,
      );
      cell.style.background = "#fff";
      cell.style.border = "1px solid #e5e7eb";
      cell.style.borderRadius = "6px";
      cell.style.minHeight = "2.2em";
      cell.style.font = "inherit";
      cell.style.cursor = "pointer";
      cell.style.transition = "background 0.2s";
      cell.style.outline = "none";
      if (i >= firstDay && dayNum <= daysInMonth) {
        cell.textContent = dayNum;
        // Badge if event exists
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
        const hasEvent = allEvents.some((ev) => ev.date === dateStr);
        if (hasEvent) {
          const badge = document.createElement("span");
          badge.textContent = "•";
          badge.style.color = "#b91c1c";
          badge.style.marginLeft = "0.25em";
          badge.setAttribute("aria-label", "Event");
          cell.appendChild(badge);
        }
        cell.addEventListener("click", () => showEventsForDate(dateStr));
        cell.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            showEventsForDate(dateStr);
          }
        });
      } else {
        cell.textContent = "";
        cell.disabled = true;
        cell.style.background = "transparent";
        cell.style.border = "none";
        cell.tabIndex = -1;
      }
      grid.appendChild(cell);
      if (i >= firstDay && dayNum <= daysInMonth) dayNum++;
    }
    calendar.appendChild(grid);
    // Navigation
    header.querySelector("#prevMonth").onclick = () => {
      let m = month - 1,
        y = year;
      if (m < 0) {
        m = 11;
        y--;
      }
      renderCalendar(m, y);
    };
    header.querySelector("#nextMonth").onclick = () => {
      let m = month + 1,
        y = year;
      if (m > 11) {
        m = 0;
        y++;
      }
      renderCalendar(m, y);
    };
    // Animate in
    calendar.style.opacity = 0;
    calendar.style.transform = "translateY(-16px)";
    setTimeout(() => {
      calendar.style.transition = "opacity 0.5s, transform 0.5s";
      calendar.style.opacity = 1;
      calendar.style.transform = "translateY(0)";
    }, 10);
  }

  function showEventsForDate(dateStr) {
    const grid = document.querySelector(".event-grid-full");
    if (!grid) return;
    showLoadingState(grid);
    setTimeout(() => {
      const events = allEvents.filter((ev) => ev.date === dateStr);
      grid.innerHTML = events.length
        ? events.map(renderEventCard).join("")
        : '<div style="color:#b91c1c; text-align:center;">No events for this date.</div>';
      // Animate in
      grid.querySelectorAll(".event-card").forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(24px)";
        setTimeout(() => {
          card.style.transition = "opacity 0.5s, transform 0.5s";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, 50);
      });
    }, 200);
  }

  // Patch loadEvents to store all events and render calendar
  const origLoadEvents = loadEvents;
  loadEvents = function () {
    const grid = document.querySelector(".event-grid-full");
    if (!grid) return;
    showLoadingState(grid);
    fetch("../assets/data/events.json")
      .then((r) => r.json())
      .then((data) => {
        allEvents = data;
        // Default: show all events for current month
        const now = new Date();
        renderCalendar(now.getMonth(), now.getFullYear());
        grid.innerHTML = allEvents.length
          ? allEvents.map(renderEventCard).join("")
          : '<div style="color:#b91c1c; text-align:center;">No events found.</div>';
        // Animate in
        grid.querySelectorAll(".event-card").forEach((card) => {
          card.style.opacity = 0;
          card.style.transform = "translateY(24px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.5s, transform 0.5s";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
          }, 50);
        });
      })
      .catch(() => {
        grid.innerHTML =
          '<div style="color:#b91c1c; text-align:center;">Failed to load events.</div>';
      });
  };

  // Init search/filter listeners after DOM
  if (
    document.getElementById("sermonSearch") ||
    document.getElementById("sermonCategory")
  )
    searchSermons();

  // Phase 17/18: JSON content loaders
  if (document.querySelector(".sermon-grid-full")) loadSermons();
  if (document.querySelector(".event-grid-full")) loadEvents();
  if (
    document.querySelector(".service-time-sunday") ||
    document.querySelector(".church-phone")
  )
    loadChurchInfo();

  // ========== PHASE 19: NOTICE BOARD & ANNOUNCEMENTS ========== //

  function fetchAnnouncements() {
    fetch("assets/data/announcements.json")
      .then((r) => r.json())
      .then((data) => {
        renderNotices(data);
        showPriorityAlert(data);
      });
  }

  function renderNotices(data) {
    const container = document.getElementById("noticeList");
    if (!container) return;
    // Sort: high priority first, then by date desc
    const sorted = [...data]
      .sort((a, b) => {
        if (a.priority === "high" && b.priority !== "high") return -1;
        if (b.priority === "high" && a.priority !== "high") return 1;
        return new Date(b.date) - new Date(a.date);
      })
      .slice(0, 5);
    container.innerHTML = sorted
      .map(
        (notice) => `
      <article class="glass-card notice-card animate-on-scroll" aria-label="${notice.title}" style="margin-bottom:1.5rem; padding:1.25rem 1rem; border-radius:12px; background:rgba(255,255,255,0.97); color:#1f2933; box-shadow:0 2px 12px rgba(31,60,136,0.08);">
        <h3 style="margin-bottom:0.5rem; color:var(--faith-blue); font-size:1.15rem;">${notice.title}</h3>
        <time datetime="${notice.date}" style="display:block; font-size:0.95rem; color:#4b5563; margin-bottom:0.5rem;">${new Date(notice.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</time>
        <p style="margin-bottom:0;">${notice.message}</p>
      </article>
    `,
      )
      .join("");
    // Animate in
    container.querySelectorAll(".notice-card").forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(24px)";
      setTimeout(
        () => {
          card.style.transition = "opacity 0.5s, transform 0.5s";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        },
        100 + i * 80,
      );
    });
  }

  function showPriorityAlert(data) {
    if (!Array.isArray(data)) return;
    const high = data.find((n) => n.priority === "high");
    if (!high) return;
    if (localStorage.getItem("alertBannerDismissed") === high.date) return;
    // Create banner
    const banner = document.createElement("div");
    banner.className = "alert-banner";
    banner.setAttribute("role", "alert");
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.background = "linear-gradient(90deg,#b91c1c,#4f7cff)";
    banner.style.color = "#fff";
    banner.style.fontWeight = "bold";
    banner.style.fontSize = "1.1rem";
    banner.style.zIndex = "9999";
    banner.style.padding = "1rem 2rem 1rem 1.5rem";
    banner.style.display = "flex";
    banner.style.justifyContent = "space-between";
    banner.style.alignItems = "center";
    banner.style.boxShadow = "0 2px 12px rgba(31,60,136,0.12)";
    banner.style.transform = "translateY(-100%)";
    banner.style.transition = "transform 0.5s";
    banner.innerHTML = `<span>Important Church Notice: ${high.title} — ${high.message}</span><button aria-label="Dismiss notice" style="background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;margin-left:2rem;">&times;</button>`;
    document.body.appendChild(banner);
    setTimeout(() => {
      banner.style.transform = "translateY(0)";
    }, 50);
    banner.querySelector("button").onclick = function () {
      banner.style.transform = "translateY(-100%)";
      localStorage.setItem("alertBannerDismissed", high.date);
      setTimeout(() => banner.remove(), 500);
    };
  }

  // Init announcements on homepage only
  if (document.getElementById("notice-board")) fetchAnnouncements();

  // Log for debugging (remove in production)
  console.log("TAC Stadium JS loaded successfully.");
});
