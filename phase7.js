/* =====================================================
   PHASE 7 - TESTIMONIAL, FAQ + FOOTER POLISH
   Restores the cleaner testimonial flow, keeps FAQ answers
   collapsed until activated, and gives the footer a palette-led
   dark treatment.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "testimonial-faq-footer-polish";
    style.textContent = css;
    document.head.appendChild(style);
  };

  addStyle(`
    /* TESTIMONIALS: restore the cleaner continuous flow */
    .testimonials-refined .testimonial-carousel-refined {
      overflow: hidden;
      scroll-snap-type: none;
      padding: 0 0 10px;
      mask-image: linear-gradient(
        90deg,
        transparent 0%,
        #000 5%,
        #000 95%,
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        90deg,
        transparent 0%,
        #000 5%,
        #000 95%,
        transparent 100%
      );
    }

    .testimonials-refined .testimonial-track-refined {
      display: flex;
      width: max-content;
      gap: 22px;
      animation: testimonialScroll 55s linear infinite !important;
      transform: translateX(0);
    }

    .testimonials-refined .quote-card-refined {
      flex: 0 0 360px;
      width: 360px;
      min-height: 310px;
      scroll-snap-align: none;
    }

    .testimonials-refined .testimonial-controls {
      display: none;
    }

    /* FAQ: answers stay collapsed until their item is active */
    .faq-refined .faq-answer-refined {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
    }

    .faq-refined .faq-answer-refined p {
      overflow: hidden;
      padding: 0;
    }

    .faq-refined .faq-item.active .faq-answer-refined {
      grid-template-rows: 1fr;
    }

    .faq-refined .faq-item.active .faq-answer-refined p {
      padding: 0 45px 24px 0;
    }

    /* FOOTER: use the primary dark palette color */
    footer {
      background: var(--dark-gray);
      color: rgba(255,255,255,.72);
    }

    footer .logo {
      color: var(--white);
    }

    footer .logo span {
      color: var(--mint);
    }

    footer .footer-brand p,
    footer .footer-col a,
    footer .footer-col p {
      color: rgba(255,255,255,.62);
    }

    footer .footer-col h4 {
      color: var(--white);
    }

    footer .footer-col a:hover {
      color: var(--white);
    }

    footer .footer-grid {
      border-bottom-color: rgba(255,255,255,.12);
    }

    footer .footer-bottom {
      color: rgba(255,255,255,.42);
    }

    footer .portfolio-disclaimer {
      border-top-color: rgba(255,255,255,.08);
      color: rgba(255,255,255,.46);
    }

    @media (max-width: 700px) {
      .testimonials-refined .quote-card-refined {
        flex-basis: min(360px, calc(100vw - 32px));
        width: min(360px, calc(100vw - 32px));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .testimonials-refined .testimonial-track-refined {
        animation: none !important;
        transform: none !important;
      }
    }
  `);
})();
