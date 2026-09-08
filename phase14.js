/* =====================================================
   PHASE 14 - TEAM / HMO SPACING BALANCE
   Reduces the oversized gap before the HMO banner and adds
   enough breathing room below it before testimonials.
===================================================== */

(() => {
  const style = document.createElement("style");
  style.dataset.phase = "team-hmo-spacing-balance";
  style.textContent = `
    /* Bring HMO closer to the Team section */
    #doctors.doctors-repaired {
      padding-bottom: 52px;
    }

    .payment-wrap.insurance-refined {
      padding-top: 0;
      padding-bottom: 58px;
    }

    .payment-wrap.insurance-refined .insurance-banner-refined {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media (max-width: 900px) {
      #doctors.doctors-repaired {
        padding-bottom: 44px;
      }

      .payment-wrap.insurance-refined {
        padding-bottom: 52px;
      }
    }

    @media (max-width: 700px) {
      #doctors.doctors-repaired {
        padding-bottom: 36px;
      }

      .payment-wrap.insurance-refined {
        padding-bottom: 42px;
      }
    }
  `;
  document.head.appendChild(style);
})();
