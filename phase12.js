/* =====================================================
   PHASE 12 - TEAM CARD GEOMETRY ALIGNMENT
   Restores the main-branch card geometry consistently across
   all doctors while keeping the clearer image treatment.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "team-card-geometry-alignment";
    style.textContent = css;
    document.head.appendChild(style);
  };

  addStyle(`
    #doctors.doctors-repaired .doctor-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      align-items: stretch;
    }

    #doctors.doctors-repaired .doctor-card-refined {
      min-height: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--light-gray);
    }

    #doctors.doctors-repaired .doctor-image-refined {
      width: 100%;
      height: 350px;
      flex: 0 0 350px;
      overflow: hidden;
      border-radius: 0;
      background: #f1f4f3;
    }

    #doctors.doctors-repaired .doctor-image-refined img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: none;
      image-rendering: auto;
      transform: none;
      transition: transform 0.5s ease;
    }

    #doctors.doctors-repaired .doctor-card-refined:hover .doctor-image-refined img {
      transform: scale(1.025);
    }

    #doctors.doctors-repaired .doctor-info-refined {
      min-height: 214px;
      height: auto;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      padding: 22px 24px 24px;
      background: var(--white);
    }

    #doctors.doctors-repaired .doctor-info-refined h3,
    #doctors.doctors-repaired .doctor-card-lead .doctor-info-refined h3 {
      margin-bottom: 6px;
      font-size: 19px;
      line-height: 1.3;
    }

    #doctors.doctors-repaired .doctor-specialty-refined {
      min-height: 0;
      margin-bottom: 0;
      color: var(--body-gray);
      font-size: 13px;
      line-height: 1.55;
      letter-spacing: normal;
      text-transform: none;
    }

    #doctors.doctors-repaired .doctor-description-refined {
      margin-top: 12px;
      max-width: none;
      color: #7b818b;
      font-size: 12px;
      line-height: 1.65;
    }

    #doctors.doctors-repaired .doctor-socials {
      margin-top: auto;
      padding-top: 18px;
    }

    @media (max-width: 900px) {
      #doctors.doctors-repaired .doctor-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      #doctors.doctors-repaired .doctor-image-refined {
        height: 320px;
        flex-basis: 320px;
      }
    }

    @media (max-width: 700px) {
      #doctors.doctors-repaired .doctor-grid {
        grid-template-columns: 1fr;
      }

      #doctors.doctors-repaired .doctor-image-refined {
        height: auto;
        flex-basis: auto;
        aspect-ratio: 1 / 1.08;
      }
    }
  `);
})();
