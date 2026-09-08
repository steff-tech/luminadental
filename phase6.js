/* =====================================================
   PHASE 6 - SEMANTIC + CONTENT CLEANUP
   Final polish before visual sign-off.
===================================================== */

(() => {
  const normalizeNavigation = () => {
    const labels = [
      ["#services", "Services"],
      ["#doctors", "Our Doctors"],
      ["#about", "About"],
      ["#faq", "FAQs"]
    ];

    document.querySelectorAll(".nav-links a, .mobile-nav-links a").forEach((link) => {
      const href = link.getAttribute("href");
      const match = labels.find(([target]) => target === href);
      if (match) link.textContent = match[1];
      if (href === "#contact" || href === "#home") {
        link.textContent = href === "#home" ? "Home" : "Contact";
      }
    });

    const desktopBook = document.querySelector(".nav-phone");
    if (desktopBook) {
      desktopBook.removeAttribute("href");
      desktopBook.setAttribute("role", "button");
      desktopBook.setAttribute("tabindex", "0");
      desktopBook.setAttribute("aria-label", "Book an appointment");
      const text = desktopBook.querySelector("span");
      if (text) text.textContent = "Book an Appointment";
    }
  };

  const normalizeFaqSemantics = () => {
    document.querySelectorAll("#faq .faq-item").forEach((item, index) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;

      const answerId = answer.id || `lumina-faq-answer-${index + 1}`;
      answer.id = answerId;
      question.setAttribute("aria-controls", answerId);
      answer.setAttribute("aria-hidden", item.classList.contains("active") ? "false" : "true");
    });

    document.querySelectorAll("#faq .faq-question").forEach((question) => {
      if (question.dataset.phase6Bound) return;
      question.dataset.phase6Bound = "true";
      question.addEventListener("click", () => {
        const item = question.closest(".faq-item");
        const answer = item?.querySelector(".faq-answer");
        if (!answer) return;
        window.requestAnimationFrame(() => {
          answer.setAttribute("aria-hidden", question.getAttribute("aria-expanded") === "true" ? "false" : "true");
        });
      });
    });
  };

  const normalizePlaceholderLinks = () => {
    document.querySelectorAll("a[href=\"#\"]").forEach((link) => {
      const label = link.getAttribute("aria-label") || link.textContent.trim();
      const isDoctorSocial = link.closest(".doctor-socials");
      const isFooterPlaceholder = link.closest("footer");

      if (isDoctorSocial) {
        link.setAttribute("href", "#contact");
        link.setAttribute("aria-label", `${label.replace(/ on Facebook| on Instagram/i, "")} contact`);
        return;
      }

      if (isFooterPlaceholder) {
        link.setAttribute("href", "#home");
      }
    });
  };

  const normalizeTrustCopy = () => {
    const trust = document.querySelector(".trust-strip");
    if (!trust) return;

    const note = document.createElement("p");
    note.className = "trust-disclaimer";
    note.textContent = "Concept presentation for portfolio purposes. Provider references are shown as illustrative examples.";
    trust.querySelector(".container")?.appendChild(note);
  };

  const normalizeTestimonialAccessibility = () => {
    const carousel = document.querySelector(".testimonial-carousel-refined");
    if (!carousel) return;

    carousel.setAttribute("aria-roledescription", "carousel");
    document.querySelectorAll(".testimonial-control").forEach((button) => {
      button.removeAttribute("aria-disabled");
    });

    document.querySelectorAll(".quote-card-refined").forEach((card, index) => {
      card.setAttribute("role", "group");
      card.setAttribute("aria-roledescription", "slide");
      card.setAttribute("aria-label", `Testimonial ${index + 1} of 10`);
    });
  };

  const addStyle = () => {
    const style = document.createElement("style");
    style.dataset.phase = "semantic-content-cleanup";
    style.textContent = `
      .trust-disclaimer {
        margin: 0;
        padding: 10px 0 14px;
        color: var(--body-gray);
        font-size: 10px;
        line-height: 1.55;
        text-align: right;
      }

      .nav-phone[role="button"] {
        cursor: pointer;
      }

      @media (max-width: 700px) {
        .trust-disclaimer {
          padding-top: 4px;
          text-align: left;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .trust-disclaimer {
          transition: none;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const init = () => {
    normalizeNavigation();
    normalizeFaqSemantics();
    normalizePlaceholderLinks();
    normalizeTrustCopy();
    normalizeTestimonialAccessibility();
    addStyle();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
