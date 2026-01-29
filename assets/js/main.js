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

  // Log for debugging (remove in production)
  console.log("TAC Stadium JS loaded successfully.");
});
