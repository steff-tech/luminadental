/* =====================================================
   LUMINA SCRIPT LOADER
   Keeps the tested base interaction layer separate from
   iterative visual refinements.
===================================================== */

const loadScript = (source) => new Promise((resolve, reject) => {
  const script = document.createElement("script");
  script.src = source;
  script.onload = resolve;
  script.onerror = reject;
  document.body.appendChild(script);
});

const normalizeEmDashes = () => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);
  textNodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue
      .replace(/\s*—\s*/g, ", ")
      .replace(/,\s+,/g, ",");
  });
};

const runPhase5Qa = () => {
  const style = document.createElement("style");
  style.dataset.phase = "qa-and-responsive-refinement";
  style.textContent = `
    .nav-links a,
    .nav-phone,
    .mobile-nav-links a,
    .mobile-menu-phone,
    .text-link,
    .doctor-socials a,
    .footer-col a {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
    }

    .nav-links a,
    .doctor-socials a,
    .footer-col a {
      min-height: 44px;
    }

    .faq-question {
      width: 100%;
      text-align: left;
    }

    .testimonial-carousel-refined {
      outline: none;
    }

    .testimonial-carousel-refined:focus-visible {
      outline: 3px solid rgba(76, 167, 148, 0.35);
      outline-offset: 5px;
      border-radius: 14px;
    }

    .testimonial-control:disabled,
    .testimonial-dot:disabled {
      cursor: default;
    }

    @media (max-width: 1100px) {
      :root { --header-height: 76px; }
      .container { width: min(100% - 48px, 900px); }
      .section { padding: 88px 0; }
      h1 { font-size: clamp(48px, 8vw, 70px); }
      h2 { font-size: clamp(36px, 6vw, 48px); }
      .trust-refined .trust-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 24px 0;
      }
      .trust-logo-refined { border-left: 0; border-top: 1px solid var(--border); }
      .faq-refined .faq-intro { position: static; }
      .faq-refined .faq-grid { grid-template-columns: 1fr; gap: 42px; }
      .final-booking-panel { align-items: flex-start; }
    }

    @media (max-width: 700px) {
      .container { width: min(100% - 32px, 560px); }
      .section { padding: 76px 0; }
      .hero { min-height: 650px; }
      .services-refined .service-content-refined { padding: 24px; }
      .experience-refined { padding-top: 76px; padding-bottom: 76px; }
      .trust-refined .trust-grid { grid-template-columns: 1fr; }
      .trust-logo-refined { min-height: 54px; border-top: 1px solid var(--border); }
      .insurance-banner-refined { border-radius: 18px; }
      .insurance-refined .insurance-wordmarks { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .insurance-logo-refined { min-width: 0; }
      .testimonial-track-refined { grid-auto-columns: 100%; }
      .quote-card-refined { min-height: 300px; padding: 24px; }
      .testimonial-controls { margin-top: 18px; }
      .testimonial-dots { max-width: calc(100% - 120px); overflow: hidden; }
      .testimonial-dot:nth-child(n+6) { display: none; }
      .final-booking-cta { padding-bottom: 76px; }
      .final-booking-panel {
        flex-direction: column;
        gap: 30px;
        padding: 30px 24px;
        border-radius: 22px;
      }
      .final-booking-button { width: 100%; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      .btn:hover,
      .service-card-refined:hover,
      .doctor-card-refined:hover,
      .testimonial-control:hover {
        transform: none;
      }
    }
  `;
  document.head.appendChild(style);

  const carousel = document.querySelector(".testimonial-carousel-refined");
  if (carousel) {
    carousel.setAttribute("tabindex", "0");
    carousel.setAttribute("role", "region");
    carousel.setAttribute("aria-label", "Patient testimonials");
  }

  const menu = document.querySelector("#mobileMenu");
  const toggle = document.querySelector("#menuToggle");
  const updateMenuFocus = () => {
    if (!menu || !toggle) return;
    if (!menu.classList.contains("active")) return;
    const focusable = menu.querySelectorAll("a, button, input, select, textarea, [tabindex]:not([tabindex=\"-1\"])");
    if (focusable.length) focusable[0].focus({ preventScroll: true });
  };
  toggle?.addEventListener("click", () => window.setTimeout(updateMenuFocus, 0));

  document.addEventListener("keydown", (event) => {
    if (!menu?.classList.contains("active") || event.key !== "Tab") return;
    const focusable = Array.from(menu.querySelectorAll("a, button, input, select, textarea, [tabindex]:not([tabindex=\"-1\"])")).filter((element) => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll("img").forEach((image) => {
    if (!image.hasAttribute("alt")) image.setAttribute("alt", "");
  });
};

(async () => {
  try {
    await loadScript("script-base.js");
    await loadScript("phase2.js");
    await loadScript("phase3.js");
    await loadScript("phase4.js");
    normalizeEmDashes();
    runPhase5Qa();
    await loadScript("phase6.js");
    normalizeEmDashes();
    await loadScript("phase7.js");
    await loadScript("phase8.js");
    await loadScript("phase9.js");
    await loadScript("phase10.js");
    await loadScript("phase11.js");
    await loadScript("phase12.js");
    await loadScript("phase13.js");
    await loadScript("phase14.js");
    await loadScript("phase15.js");
  } catch (error) {
    console.error("Lumina scripts failed to load:", error);
  }
})();
