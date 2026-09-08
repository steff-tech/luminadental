/* =====================================================
   PHASE 9 - TESTIMONIAL + TEAM REPAIR
   Restores continuous testimonial motion, decorative quote styling,
   and the clearer original team-card presentation.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "testimonial-team-repair";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const repairTestimonials = () => {
    const track = document.querySelector(".testimonial-track-refined");
    if (!track || track.dataset.loopShell) return;

    const cards = Array.from(track.children).filter((card) => !card.dataset.clone);
    if (!cards.length) return;

    const loop = document.createElement("div");
    loop.className = "testimonial-loop";

    cards.forEach((card) => {
      loop.appendChild(card);
    });

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.dataset.clone = "true";
      clone.setAttribute("aria-hidden", "true");
      clone.removeAttribute("data-index");
      clone.classList.remove("reveal", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "visible");
      loop.appendChild(clone);
    });

    track.replaceChildren(loop);
    track.dataset.loopShell = "true";
  };

  const repairTeam = () => {
    const section = document.querySelector("#doctors");
    if (!section) return;

    section.classList.add("doctors-repaired");

    section.querySelectorAll(".doctor-card-refined").forEach((card) => {
      card.classList.remove("doctor-card-lead");
    });
  };

  addStyle(`
    /* TESTIMONIALS */
    .testimonials-refined .testimonial-carousel-refined {
      overflow: hidden;
      padding: 4px 0 10px;
      mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
    }

    .testimonials-refined .testimonial-track-refined {
      display: flex;
      width: 100%;
      gap: 0;
      overflow: visible;
      animation: none !important;
      transform: none !important;
    }

    .testimonial-loop {
      --loop-gap: 22px;
      display: flex;
      flex: 0 0 auto;
      width: max-content;
      gap: var(--loop-gap);
      animation: luminaTestimonialLoop 55s linear infinite;
      will-change: transform;
    }

    .testimonials-refined .quote-card-refined {
      flex: 0 0 360px;
      width: 360px;
      min-height: 310px;
      padding: 34px 28px 28px;
    }

    .testimonials-refined .quote-card-refined .quote-icon {
      position: absolute;
      top: -24px;
      right: 18px;
      color: var(--mint-light);
      font-family: Georgia, serif;
      font-size: 140px;
      line-height: 1;
      pointer-events: none;
    }

    .testimonials-refined .quote-card-refined .stars {
      margin-bottom: 22px;
      color: var(--mint);
      font-size: 14px;
      letter-spacing: 2px;
    }

    .testimonials-refined .quote-card-refined blockquote {
      color: #44495b;
      font-family: "Inter", sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.75;
    }

    .testimonials-refined .quote-card-refined .patient {
      margin-top: auto;
      padding-top: 22px;
      border-top: 0;
    }

    @keyframes luminaTestimonialLoop {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(calc(-50% - 11px), 0, 0);
      }
    }

    /* TEAM */
    .doctors-repaired .doctor-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .doctors-repaired .doctor-card-refined {
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--light-gray);
      box-shadow: none;
    }

    .doctors-repaired .doctor-image-refined {
      height: 350px;
      aspect-ratio: auto;
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
      transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .doctors-repaired .doctor-card-refined:hover .doctor-image-refined img {
      transform: scale(1.018);
    }

    .doctors-repaired .doctor-info-refined {
      min-height: 214px;
      padding: 22px 24px 24px;
      background: var(--white);
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

    .doctors-repaired .doctor-info-refined h3,
    .doctors-repaired .doctor-card-lead .doctor-info-refined h3 {
      font-size: 19px;
    }

    .doctors-repaired .doctor-card-lead .doctor-specialty-refined {
      color: var(--body-gray);
    }

    @media (max-width: 900px) {
      .doctors-repaired .doctor-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .testimonials-refined .quote-card-refined {
        flex-basis: 330px;
        width: 330px;
      }
    }

    @media (max-width: 700px) {
      .testimonial-loop {
        --loop-gap: 16px;
      }

      .doctors-repaired .doctor-grid {
        grid-template-columns: 1fr;
      }

      .doctors-repaired .doctor-image-refined {
        height: auto;
        aspect-ratio: 1 / 1.08;
      }

      .testimonials-refined .quote-card-refined {
        flex-basis: min(360px, calc(100vw - 32px));
        width: min(360px, calc(100vw - 32px));
      }

      @keyframes luminaTestimonialLoop {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(calc(-50% - 8px), 0, 0);
        }
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .testimonial-loop {
        animation: none !important;
        transform: none !important;
      }
    }
  `);

  repairTestimonials();
  repairTeam();
})();
