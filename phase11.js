/* =====================================================
   PHASE 11 - TEAM + FOOTER + SECTION SPACING REPAIR
   Removes stretched Team-card whitespace, restores aligned
   footer structure, and balances the HMO-to-testimonials transition.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "team-footer-spacing-repair";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const repairFooterDisclaimerOrder = () => {
    const footer = document.querySelector("footer#contact");
    const grid = footer?.querySelector(".footer-grid");
    const note = footer?.querySelector(".portfolio-disclaimer");
    if (!footer || !grid || !note) return;

    note.remove();
    note.classList.add("footer-disclaimer-inline");
    grid.appendChild(note);
  };

  addStyle(`
    /* OUR TEAM: remove stretched blank space while keeping the original card design */
    .doctors-repaired .doctor-card-refined {
      align-self: start;
      height: auto;
    }

    .doctors-repaired .doctor-info-refined {
      min-height: 214px;
      height: auto;
    }

    .doctors-repaired .doctor-socials {
      margin-top: 18px;
      padding-top: 18px;
    }

    /* OUR SERVICES / ABOUT: maintain a clear visual break */
    #services.services-refined {
      background: var(--light-gray);
    }

    #about.experience-refined {
      background: var(--white);
    }

    /* OUR TEAM + HMO: shared neutral tone */
    #doctors.doctors-repaired,
    .payment-wrap.insurance-refined {
      background: #fbfcfc;
    }

    /* HMO: give the banner a little breathing room before testimonials */
    .payment-wrap.insurance-refined {
      padding-bottom: 34px;
    }

    .payment-wrap.insurance-refined .insurance-banner-refined {
      margin-bottom: 0;
    }

    /* FOOTER: neutral gray treatment with aligned columns */
    footer {
      background: var(--light-gray);
      color: var(--dark-gray);
    }

    footer .container {
      background: var(--white);
      border-color: rgba(43,45,66,.10);
    }

    footer .footer-grid {
      grid-template-columns: minmax(220px, 1.35fr) repeat(3, minmax(150px, 1fr));
      align-items: start;
      gap: clamp(32px, 5vw, 72px);
      border-bottom: 0;
      padding-bottom: 28px;
    }

    footer .footer-brand,
    footer .footer-col {
      align-self: start;
    }

    footer .footer-col h4 {
      margin-bottom: 18px;
    }

    footer .footer-col p,
    footer .footer-col a {
      margin-bottom: 10px;
    }

    /* Disclaimer sits immediately above the divider */
    footer .footer-disclaimer-inline {
      grid-column: 1 / -1;
      margin: 10px 0 0;
      padding: 14px 0 16px;
      border-top: 1px solid rgba(43,45,66,.10);
      color: rgba(43,45,66,.48);
      font-size: 10px;
      line-height: 1.55;
      text-align: center;
    }

    /* The lower legal row begins after the divider */
    footer .footer-bottom {
      padding-top: 18px;
      border-top: 1px solid rgba(43,45,66,.10);
      color: rgba(43,45,66,.52);
    }

    footer .footer-bottom span:last-child {
      color: rgba(43,45,66,.58);
    }

    footer .footer-brand p,
    footer .footer-col a,
    footer .footer-col p {
      color: rgba(43,45,66,.62);
    }

    footer .footer-col h4 {
      color: var(--dark-gray);
    }

    footer .footer-col a:hover {
      color: var(--mint-dark);
    }

    footer .footer-socials a {
      border-color: rgba(43,45,66,.14);
      color: var(--dark-gray);
      background: transparent;
    }

    footer .footer-socials a:hover {
      border-color: rgba(76,167,148,.45);
      background: var(--mint-light);
    }

    @media (max-width: 1100px) {
      footer .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 650px) {
      .payment-wrap.insurance-refined {
        padding-bottom: 24px;
      }

      footer .footer-grid {
        grid-template-columns: 1fr;
        gap: 28px;
        padding-bottom: 22px;
      }

      footer .footer-disclaimer-inline {
        margin-top: 4px;
        text-align: left;
      }

      footer .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
    }
  `);

  repairFooterDisclaimerOrder();
})();
