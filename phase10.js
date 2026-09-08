/* =====================================================
   PHASE 10 - SECTION COLOR + CARD RESTORATION
   Separates Services from About, restores the original
   Team card treatment, and returns service links to Learn More.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "section-color-card-restoration";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const restoreServiceLinks = () => {
    document.querySelectorAll("#services .service-link-refined, #services .text-link").forEach((link) => {
      link.innerHTML = "Learn More <span aria-hidden=\"true\">→</span>";
      link.classList.remove("service-link-refined");
      link.classList.add("text-link");
    });
  };

  addStyle(`
    /* SECTION COLOR SEPARATION */
    #services.services-refined {
      background: var(--light-gray);
    }

    #about.experience-refined {
      background: var(--white);
    }

    /* OUR TEAM + HMO: shared section tone for a smoother transition */
    #doctors.doctors-repaired,
    .payment-wrap.insurance-refined {
      background: #fbfcfc;
    }

    /* OUR TEAM: restore the earlier bordered card treatment */
    .doctors-repaired .doctor-card-refined {
      min-height: 0;
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--light-gray);
      box-shadow: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .doctors-repaired .doctor-card-refined:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(43, 45, 66, 0.08);
    }

    .doctors-repaired .doctor-image-refined {
      width: 100%;
      height: 350px;
      overflow: hidden;
      border-radius: 0;
      background: #f1f4f3;
    }

    .doctors-repaired .doctor-image-refined img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: none;
      image-rendering: auto;
      transform: none;
      transition: transform 0.5s ease;
    }

    .doctors-repaired .doctor-card-refined:hover .doctor-image-refined img {
      transform: scale(1.025);
    }

    .doctors-repaired .doctor-info-refined {
      min-height: 214px;
      display: flex;
      flex-direction: column;
      padding: 22px 24px 24px;
      background: var(--white);
    }

    .doctors-repaired .doctor-info-refined h3,
    .doctors-repaired .doctor-card-lead .doctor-info-refined h3 {
      margin-bottom: 6px;
      font-size: 19px;
      line-height: 1.3;
    }

    .doctors-repaired .doctor-specialty-refined {
      min-height: 0;
      margin-bottom: 0;
      color: var(--body-gray);
      font-size: 13px;
      line-height: 1.55;
      letter-spacing: normal;
      text-transform: none;
    }

    .doctors-repaired .doctor-description-refined {
      margin-top: 12px;
      max-width: none;
      color: #7b818b;
      font-size: 12px;
      line-height: 1.65;
    }

    .doctors-repaired .doctor-socials {
      margin-top: auto;
    }

    /* SERVICES: return to the original link styling */
    .services-refined .text-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      margin-top: auto;
      padding-top: 18px;
      border-bottom: 0;
      color: var(--mint-dark);
      font-size: 13px;
      font-weight: 700;
      transition: color 0.25s ease;
    }

    .services-refined .text-link span {
      transition: transform 0.25s ease;
    }

    .services-refined .text-link:hover {
      color: var(--mint-dark);
    }

    .services-refined .text-link:hover span {
      transform: translateX(4px);
    }

    /* Keep service cards aligned while preserving the original link style */
    .services-refined .service-content-refined {
      min-height: 255px;
    }

    /* Match the HMO interior to the shared Team-area tone without flattening its banner */
    .insurance-refined .insurance-banner-refined {
      background: #f4f8f7;
    }

    @media (max-width: 900px) {
      .doctors-repaired .doctor-image-refined {
        height: 320px;
      }
    }

    @media (max-width: 700px) {
      .doctors-repaired .doctor-grid {
        grid-template-columns: 1fr;
      }

      .doctors-repaired .doctor-image-refined {
        height: auto;
        aspect-ratio: 1 / 1.08;
      }
    }
  `);

  restoreServiceLinks();
})();
