/* =====================================================
   PHASE 13 - FOOTER FRAME REMOVAL
   Removes the extra rounded inner card/frame while preserving
   the footer content, spacing, alignment, and disclaimer order.
===================================================== */

(() => {
  const style = document.createElement("style");
  style.dataset.phase = "footer-frame-removal";
  style.textContent = `
    footer {
      background: #f4f5f6;
      color: var(--dark-gray);
    }

    footer::before {
      display: none;
    }

    footer .container {
      width: min(1240px, calc(100% - 80px));
      margin: 0 auto;
      padding: 72px 0 30px;
      border: 0;
      border-radius: 0;
      background: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    footer .footer-grid {
      border-bottom-color: rgba(43,45,66,.12);
    }

    footer .footer-brand .logo {
      color: var(--dark-gray);
    }

    footer .footer-brand .logo span {
      color: var(--mint);
    }

    footer .footer-brand p,
    footer .footer-col a,
    footer .footer-col p {
      color: var(--body-gray);
    }

    footer .footer-col h4 {
      color: var(--dark-gray);
    }

    footer .footer-col a:hover {
      color: var(--mint-dark);
    }

    footer .footer-bottom {
      color: rgba(43,45,66,.52);
    }

    footer .portfolio-disclaimer {
      border-top-color: transparent;
      color: rgba(43,45,66,.46);
    }

    footer .footer-socials a {
      border-color: rgba(43,45,66,.16);
      color: var(--dark-gray);
      background: transparent;
    }

    footer .footer-socials a:hover {
      border-color: rgba(76,167,148,.4);
      background: var(--mint-light);
      color: var(--mint-dark);
    }

    @media (max-width: 1100px) {
      footer .container {
        width: min(100% - 48px, 900px);
        padding: 60px 0 26px;
      }
    }

    @media (max-width: 650px) {
      footer .container {
        width: calc(100% - 32px);
        padding: 52px 0 20px;
      }
    }
  `;
  document.head.appendChild(style);
})();
