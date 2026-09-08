/* =====================================================
   PHASE 15 - FOOTER COLUMN CONTENT ALIGNMENT
   Keeps Visit, Hours, and Contact body content aligned to
   the same left edge beneath their headings.
===================================================== */

(() => {
  const style = document.createElement("style");
  style.dataset.phase = "footer-column-alignment";
  style.textContent = `
    footer .footer-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    footer .footer-col h4 {
      width: 100%;
      margin-bottom: 18px;
    }

    footer .footer-col p,
    footer .footer-col a {
      display: block;
      width: 100%;
      margin: 0 0 10px;
      padding: 0;
      text-align: left;
    }

    footer .footer-col p:last-child,
    footer .footer-col a:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 650px) {
      footer .footer-col {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
})();
