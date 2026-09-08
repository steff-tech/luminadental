/* =====================================================
   PHASE 8 - FOOTER VISUAL REFINEMENT
   Reference-inspired composition without copying the source design.
===================================================== */

(() => {
  const footer = document.querySelector("footer#contact");
  if (!footer) return;

  const brand = footer.querySelector(".footer-brand");

  if (brand && !brand.querySelector(".footer-socials")) {
    const socials = document.createElement("div");
    socials.className = "footer-socials";
    socials.innerHTML = `
      <a href="#contact" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5"></rect>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="17.5" cy="6.5" r="1"></circle>
        </svg>
      </a>
      <a href="#contact" aria-label="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.67.33-1 1-1z"></path>
        </svg>
      </a>
      <a href="#contact" aria-label="X">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4h4.4l3.05 4.26L16.2 4H19l-5.25 6.1L19.5 20h-4.4l-3.4-4.75L7.4 20H4.6l5.55-6.45L5 4zm3.1 1.8 7.95 12.4h1.35L9.45 5.8H8.1z"></path>
        </svg>
      </a>
    `;
    brand.appendChild(socials);
  }

  const style = document.createElement("style");
  style.dataset.phase = "footer-visual-refinement";
  style.textContent = `
    /* FOOTER FRAME */
    footer {
      position: relative;
      margin-top: 0;
      padding: 0 0 28px;
      background: var(--mint);
      color: var(--white);
      overflow: hidden;
    }

    footer::before {
      content: "";
      display: block;
      width: min(1240px, calc(100% - 80px));
      height: 18px;
      margin: 0 auto;
      border-left: 1px solid rgba(255,255,255,.34);
      border-right: 1px solid rgba(255,255,255,.34);
    }

    footer .container {
      position: relative;
      width: min(1240px, calc(100% - 80px));
      margin: 0 auto;
      padding: 52px 56px 26px;
      border: 1px solid rgba(255,255,255,.34);
      border-top: 0;
      border-radius: 0 0 28px 28px;
      background: rgba(43,45,66,.10);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    footer .footer-grid {
      grid-template-columns: minmax(220px, 1.35fr) repeat(3, minmax(150px, 1fr));
      gap: clamp(36px, 6vw, 82px);
      padding-bottom: 46px;
      border-bottom: 1px solid rgba(255,255,255,.18);
    }

    footer .footer-brand .logo {
      font-size: 22px;
      letter-spacing: .16em;
    }

    footer .footer-brand p {
      max-width: 300px;
      margin-top: 18px;
      color: rgba(255,255,255,.76);
      font-size: 13px;
      line-height: 1.75;
    }

    footer .footer-col h4 {
      margin-bottom: 20px;
      color: var(--white);
      font-size: 12px;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    footer .footer-col a,
    footer .footer-col p {
      margin-bottom: 12px;
      color: rgba(255,255,255,.68);
      font-size: 13px;
      line-height: 1.65;
    }

    footer .footer-col a:hover {
      color: var(--white);
    }

    footer .footer-socials {
      display: flex;
      gap: 9px;
      margin-top: 26px;
    }

    footer .footer-socials a {
      width: 38px;
      height: 38px;
      min-height: 38px;
      display: grid;
      place-items: center;
      margin: 0;
      border: 1px solid rgba(255,255,255,.34);
      border-radius: 50%;
      color: var(--white);
      transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
    }

    footer .footer-socials a:hover {
      transform: translateY(-2px);
      border-color: rgba(255,255,255,.62);
      background: rgba(255,255,255,.10);
    }

    footer .footer-socials svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    footer .footer-socials a:nth-child(2) svg,
    footer .footer-socials a:nth-child(3) svg {
      stroke: none;
      fill: currentColor;
    }

    footer .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding-top: 20px;
      color: rgba(255,255,255,.58);
      font-size: 11px;
    }

    footer .portfolio-disclaimer {
      margin: 0;
      padding: 12px 0 0;
      border-top: 0;
      color: rgba(255,255,255,.48);
      font-size: 10px;
      line-height: 1.55;
      text-align: center;
    }

    @media (max-width: 1100px) {
      footer::before {
        width: min(100% - 48px, 900px);
      }

      footer .container {
        width: min(100% - 48px, 900px);
        padding: 42px 34px 24px;
      }

      footer .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 36px 48px;
      }
    }

    @media (max-width: 650px) {
      footer {
        padding-bottom: 16px;
      }

      footer::before {
        width: calc(100% - 32px);
        height: 12px;
      }

      footer .container {
        width: calc(100% - 32px);
        padding: 36px 24px 20px;
        border-radius: 0 0 22px 22px;
      }

      footer .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        padding-bottom: 30px;
      }

      footer .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      footer .portfolio-disclaimer {
        text-align: left;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      footer .footer-socials a {
        transition: none;
      }

      footer .footer-socials a:hover {
        transform: none;
      }
    }
  `;
  document.head.appendChild(style);
})();
