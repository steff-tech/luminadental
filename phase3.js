/* =====================================================
   PHASE 3 - CORE CONTENT REFINEMENT
   Services, About / Experience, and Doctors.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "core-content-refinement";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const refineServices = () => {
    const section = document.querySelector("#services");
    const cards = document.querySelectorAll("#services .service-card");
    const heading = document.querySelector("#services h2");

    if (!section) return;

    section.classList.add("core-section-refined", "services-refined");

    if (heading) {
      heading.innerHTML = "Care tailored to your<br>everyday life.";
    }

    cards.forEach((card, index) => {
      card.classList.add("service-card-refined");
      card.style.setProperty("--service-index", index);

      const image = card.querySelector(".service-image");
      const content = card.querySelector(".service-content");
      const title = card.querySelector("h3");
      const description = card.querySelector("p");
      const link = card.querySelector(".text-link");

      if (image) image.classList.add("service-image-refined");
      if (content) content.classList.add("service-content-refined");
      if (title) title.classList.add("service-title-refined");
      if (description) description.classList.add("service-description-refined");
      if (link) {
        link.classList.add("service-link-refined");
        link.innerHTML = "Explore service <span aria-hidden=\"true\">↗</span>";
      }
    });
  };

  const refineExperience = () => {
    const section = document.querySelector("#about");
    const copy = document.querySelector("#about .experience-copy");
    const image = document.querySelector("#about .experience-image");
    const heading = document.querySelector("#about h2");
    const features = document.querySelectorAll("#about .feature");

    if (!section) return;

    section.classList.add("experience-refined");

    if (heading) {
      heading.innerHTML = "A calmer way<br>to care for your smile.";
    }

    if (copy) copy.classList.add("experience-copy-refined");
    if (image) image.classList.add("experience-image-refined");

    features.forEach((feature, index) => {
      feature.classList.add("feature-refined");
      feature.style.setProperty("--feature-index", index);

      const mark = feature.querySelector(".feature-mark");
      if (mark) {
        mark.textContent = String(index + 1).padStart(2, "0");
        mark.setAttribute("aria-hidden", "true");
      }
    });
  };

  const refineDoctors = () => {
    const section = document.querySelector("#doctors");
    const cards = document.querySelectorAll("#doctors .doctor-card");
    const heading = document.querySelector("#doctors h2");

    if (!section) return;

    section.classList.add("doctors-refined");

    if (heading) {
      heading.innerHTML = "Meet the people<br>behind your care.";
    }

    cards.forEach((card, index) => {
      card.classList.add("doctor-card-refined");
      card.style.setProperty("--doctor-index", index);

      const image = card.querySelector(".doctor-image");
      const info = card.querySelector(".doctor-info");
      const specialty = card.querySelector(".doctor-specialty");
      const description = card.querySelector(".doctor-description");

      if (image) image.classList.add("doctor-image-refined");
      if (info) info.classList.add("doctor-info-refined");
      if (specialty) specialty.classList.add("doctor-specialty-refined");
      if (description) description.classList.add("doctor-description-refined");
    });

    if (cards[0]) cards[0].classList.add("doctor-card-lead");
  };

  addStyle(`
    /* SERVICES */
    .services-refined {
      background: var(--light-gray);
    }

    .services-refined .services-head {
      align-items: end;
      margin-bottom: 52px;
    }

    .services-refined .services-head .lead {
      max-width: 430px;
      margin-bottom: 2px;
      font-size: 15px;
      line-height: 1.75;
    }

    .services-refined .service-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .service-card-refined {
      overflow: hidden;
      border: 1px solid rgba(43, 45, 66, 0.08);
      border-radius: 22px;
      background: var(--white);
      box-shadow: none;
      transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
    }

    .service-card-refined:hover {
      transform: translateY(-4px);
      border-color: rgba(76, 167, 148, 0.24);
      box-shadow: 0 20px 45px rgba(43, 45, 66, 0.08);
    }

    .service-image-refined {
      aspect-ratio: 4 / 4.6;
      overflow: hidden;
      background: var(--mint-light);
    }

    .service-image-refined img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: saturate(0.82);
      transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1), filter 450ms ease;
    }

    .service-card-refined:hover .service-image-refined img {
      transform: scale(1.025);
      filter: saturate(0.9);
    }

    .service-content-refined {
      min-height: 255px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 28px 28px 30px;
    }

    .service-title-refined {
      max-width: 250px;
      margin-bottom: 12px;
      font-size: 21px;
      line-height: 1.28;
    }

    .service-description-refined {
      margin: 0;
      color: var(--body-gray);
      font-size: 14px;
      line-height: 1.72;
    }

    .service-link-refined {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
      padding-top: 24px;
      color: var(--dark-gray);
      font-size: 13px;
      font-weight: 700;
      border-bottom: 1px solid rgba(43, 45, 66, 0.2);
      transition: color 180ms ease, border-color 180ms ease, gap 180ms ease;
    }

    .service-link-refined:hover {
      color: var(--mint-dark);
      border-color: var(--mint);
      gap: 11px;
    }

    /* EXPERIENCE / ABOUT */
    .experience-refined {
      padding-top: 126px;
      padding-bottom: 126px;
    }

    .experience-refined .experience-grid {
      grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
      gap: clamp(54px, 8vw, 118px);
      align-items: center;
    }

    .experience-image-refined {
      min-height: 640px;
      border-radius: 28px;
      background-position: center;
      box-shadow: 0 24px 70px rgba(43, 45, 66, 0.09);
    }

    .experience-copy-refined {
      max-width: 540px;
    }

    .experience-copy-refined .lead {
      max-width: 500px;
      font-size: 16px;
      line-height: 1.8;
    }

    .experience-copy-refined .feature-list {
      margin-top: 38px;
      gap: 0;
    }

    .feature-refined {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 18px;
      padding: 20px 0;
      border-top: 1px solid var(--border);
    }

    .feature-refined:last-child {
      border-bottom: 1px solid var(--border);
    }

    .feature-refined .feature-mark {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(76, 167, 148, 0.22);
      border-radius: 50%;
      background: var(--mint-light);
      color: var(--mint-dark);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    .feature-refined strong {
      display: block;
      margin-bottom: 6px;
      color: var(--dark-gray);
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 15px;
      line-height: 1.45;
    }

    .feature-refined span {
      display: block;
      color: var(--body-gray);
      font-size: 13px;
      line-height: 1.65;
    }

    /* DOCTORS */
    .doctors-refined {
      background: #fbfcfc;
    }

    .doctors-refined .center-head {
      max-width: 760px;
      margin-bottom: 50px;
    }

    .doctors-refined .center-head .lead {
      max-width: 520px;
      margin-inline: auto;
      font-size: 15px;
    }

    .doctors-refined .doctor-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .doctor-card-refined {
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }

    .doctor-image-refined {
      aspect-ratio: 0.88;
      overflow: hidden;
      border-radius: 22px;
      background: var(--light-gray);
    }

    .doctor-image-refined img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: saturate(0.72);
      transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1), filter 450ms ease;
    }

    .doctor-card-refined:hover .doctor-image-refined img {
      transform: scale(1.018);
      filter: saturate(0.88);
    }

    .doctor-info-refined {
      padding: 18px 2px 8px;
    }

    .doctor-info-refined h3 {
      margin-bottom: 7px;
      font-size: 19px;
      line-height: 1.28;
    }

    .doctor-specialty-refined {
      min-height: 38px;
      margin-bottom: 12px;
      color: var(--mint-dark);
      font-size: 11px;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .doctor-description-refined {
      max-width: 340px;
      color: var(--body-gray);
      font-size: 13px;
      line-height: 1.65;
    }

    .doctor-card-lead .doctor-image-refined {
      box-shadow: 0 22px 52px rgba(43, 45, 66, 0.11);
    }

    .doctor-card-lead .doctor-info-refined h3 {
      font-size: 21px;
    }

    .doctor-card-lead .doctor-specialty-refined {
      color: var(--dark-gray);
    }

    /* TABLET */
    @media (max-width: 900px) {
      .services-refined .service-grid,
      .doctors-refined .doctor-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .experience-refined .experience-grid {
        grid-template-columns: 1fr;
        gap: 54px;
      }

      .experience-image-refined {
        min-height: 520px;
      }

      .experience-copy-refined {
        max-width: 680px;
      }
    }

    /* MOBILE */
    @media (max-width: 650px) {
      .services-refined .services-head {
        display: block;
        margin-bottom: 34px;
      }

      .services-refined .services-head .lead {
        margin-top: 20px;
      }

      .services-refined .service-grid,
      .doctors-refined .doctor-grid {
        grid-template-columns: 1fr;
      }

      .service-image-refined {
        aspect-ratio: 1 / 1;
      }

      .service-content-refined {
        min-height: 0;
      }

      .experience-refined {
        padding-top: 92px;
        padding-bottom: 92px;
      }

      .experience-image-refined {
        min-height: 420px;
        border-radius: 22px;
      }

      .feature-refined {
        grid-template-columns: 38px minmax(0, 1fr);
        gap: 14px;
      }

      .feature-refined .feature-mark {
        width: 38px;
        height: 38px;
      }

      .doctor-image-refined {
        aspect-ratio: 1 / 1.08;
      }

      .doctor-info-refined {
        padding-bottom: 26px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .service-card-refined,
      .service-image-refined img,
      .service-link-refined,
      .doctor-image-refined img {
        transition: none;
      }
    }
  `);

  const init = () => {
    refineServices();
    refineExperience();
    refineDoctors();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
