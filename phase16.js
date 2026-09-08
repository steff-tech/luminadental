/* PHASE 16 - DOCTOR SOCIAL ICON RESTORE + FOOTER REFINEMENT */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "doctor-social-and-footer-refinement";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const replaceDoctorImages = () => {
    const section = document.querySelector("#doctors");
    if (!section) return;

    const cards = section.querySelectorAll(".doctor-card");
    const imageSources = [
      "https://images.pexels.com/photos/15752232/pexels-photo-15752232.jpeg?auto=compress&cs=tinysrgb&w=2400",
      "https://images.pexels.com/photos/37272297/pexels-photo-37272297.jpeg?auto=compress&cs=tinysrgb&w=2400"
    ];

    // Elena is card 2, Adrian is card 3 in the six-card team grid.
    [1, 2].forEach((cardIndex, sourceIndex) => {
      const image = cards[cardIndex]?.querySelector(".doctor-image img");
      if (!image) return;

      image.src = imageSources[sourceIndex];
      image.removeAttribute("srcset");
      image.sizes = "100vw";
    });
  };

  addStyle(`
    /* Restore the compact doctor social buttons. */
    .doctors-repaired .doctor-socials {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .doctors-repaired .doctor-socials a {
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
      padding: 0;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }

    .doctors-repaired .doctor-socials svg {
      width: 14px;
      height: 14px;
    }

    /* Footer columns share one consistent heading-to-body rhythm. */
    footer .footer-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    footer .footer-col h4 {
      width: 100%;
      margin: 0 0 18px;
    }

    footer .footer-col p,
    footer .footer-col a {
      display: block;
      width: 100%;
      margin: 0 0 10px;
      padding: 0;
      min-height: 0;
      height: auto;
      line-height: 1.65;
      text-align: left;
    }

    footer .footer-col p:last-child,
    footer .footer-col a:last-child {
      margin-bottom: 0;
    }

    /* Instagram is not part of the final Contact content. */
    footer .footer-col a[href="#"],
    footer .footer-col a[aria-label*="Instagram" i] {
      display: none !important;
    }

    /* Keep the page usable even if reveal initialization is skipped. */
    .reveal {
      opacity: 1;
      transform: none;
      filter: none;
    }

    /* Precisely center the FAQ plus independently of text-glyph metrics. */
    .faq-question .faq-icon {
      position: relative;
      flex: 0 0 28px;
      width: 28px;
      height: 28px;
      display: block;
      margin: 0;
      font-size: 0;
      line-height: 1;
      color: var(--mint-dark);
    }

    .faq-question .faq-icon::before,
    .faq-question .faq-icon::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 1.5px;
      border-radius: 999px;
      background: currentColor;
      transform: translate(-50%, -50%);
    }

    .faq-question .faq-icon::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    /* Booking stays available through the persistent navigation CTA. */
    .final-booking-cta {
      display: none !important;
    }

    @media (max-width: 650px) {
      footer .footer-col {
        width: 100%;
      }
    }
  `);

  // Remove the Instagram placeholder from the Contact column immediately.
  const removeInstagram = () => {
    const footerContact = Array.from(document.querySelectorAll("footer .footer-col")).find(
      (column) => column.querySelector("h4")?.textContent.trim() === "Contact"
    );

    if (!footerContact) return;

    Array.from(footerContact.querySelectorAll("a")).forEach((link) => {
      const text = link.textContent.trim().toLowerCase();
      const label = (link.getAttribute("aria-label") || "").toLowerCase();

      if (text === "instagram" || label.includes("instagram")) {
        link.remove();
      }
    });
  };

  removeInstagram();
  replaceDoctorImages();

  // Protect the final footer state if another refinement inserts the placeholder later.
  const footer = document.querySelector("footer");
  if (footer && typeof MutationObserver !== "undefined") {
    const observer = new MutationObserver(removeInstagram);
    observer.observe(footer, { childList: true, subtree: true });
  }
})();
