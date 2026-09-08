/* =====================================================
   PHASE 2 — NAVIGATION + HERO REFINEMENT
   Keeps the existing HTML/booking implementation intact.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "navigation-hero-refinement";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const applyNavigation = () => {
    const desktopLinks = document.querySelectorAll(".nav-links a");
    const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

    const items = [
      ["Services", "#services"],
      ["Our Doctors", "#doctors"],
      ["About", "#about"],
      ["FAQs", "#faq"]
    ];

    [desktopLinks, mobileLinks].forEach((links) => {
      items.forEach(([label, href], index) => {
        if (links[index]) {
          links[index].textContent = label;
          links[index].setAttribute("href", href);
        }
      });
    });

    const desktopPhone = document.querySelector(".nav-phone");
    if (desktopPhone) {
      desktopPhone.textContent = "Book an Appointment";
      desktopPhone.removeAttribute("href");
      desktopPhone.setAttribute("role", "button");
      desktopPhone.setAttribute("tabindex", "0");
      desktopPhone.classList.add("nav-booking-action");

      const triggerBooking = (event) => {
        event.preventDefault();
        const heroBooking = document.querySelector(
          ".hero .btn-primary"
        );
        if (heroBooking) heroBooking.click();
      };

      desktopPhone.addEventListener("click", triggerBooking);
      desktopPhone.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          triggerBooking(event);
        }
      });
    }

    const mobileCta = document.querySelector(".mobile-menu-cta");
    if (mobileCta) {
      mobileCta.textContent = "Book an Appointment";
    }

    const phoneIcon = document.querySelector(".nav-phone .phone-icon");
    if (phoneIcon) {
      phoneIcon.remove();
    }
  };

  const refineHero = () => {
    const hero = document.querySelector(".hero");
    const heroCopy = document.querySelector(".hero-copy");
    const heroNote = document.querySelector(".hero-note");
    const heroButton = document.querySelector(".hero .btn-primary");
    const announcement = document.querySelector(".announcement-bar");

    if (announcement) {
      announcement.setAttribute("aria-hidden", "true");
    }

    if (hero) hero.classList.add("hero-refined");
    if (heroCopy) heroCopy.classList.add("hero-copy-refined");
    if (heroNote) heroNote.classList.add("hero-note-refined");
    if (heroButton) heroButton.classList.add("hero-booking-action");
  };

  const markActiveSection = () => {
    const links = document.querySelectorAll(
      ".nav-links a, .mobile-nav-links a"
    );

    const sections = ["services", "doctors", "about", "faq"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const update = () => {
      let activeId = "";
      const offset = window.innerHeight * 0.28;

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= offset) activeId = section.id;
      });

      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-current", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  };

  addStyle(`
    .announcement-bar {
      display: none !important;
    }

    .nav-wrap {
      box-shadow: 0 1px 0 rgba(43, 45, 66, 0.02);
    }

    .nav-wrap nav {
      grid-template-columns: auto 1fr auto;
    }

    .nav-links {
      justify-self: center;
      gap: clamp(24px, 2.6vw, 38px);
    }

    .nav-links a {
      font-size: 13px;
      letter-spacing: 0.005em;
    }

    .nav-links a.is-current {
      color: var(--dark-gray);
    }

    .nav-links a.is-current::after {
      transform: scaleX(1);
    }

    .nav-booking-action {
      min-height: 44px;
      padding: 12px 18px;
      border-radius: 999px;
      background: var(--mint);
      color: var(--white) !important;
      box-shadow: 0 10px 24px rgba(76, 167, 148, 0.15);
      cursor: pointer;
      transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
    }

    .nav-booking-action:hover {
      transform: translateY(-1px);
      background: var(--mint-dark);
      box-shadow: 0 13px 28px rgba(76, 167, 148, 0.2);
    }

    .nav-booking-action::after {
      display: none !important;
    }

    .hero.hero-refined {
      min-height: 720px;
      background-position: 64% center;
    }

    .hero.hero-refined::before {
      background:
        linear-gradient(
          90deg,
          rgba(255,255,255,0.93) 0%,
          rgba(255,255,255,0.82) 27%,
          rgba(255,255,255,0.48) 55%,
          rgba(255,255,255,0.08) 100%
        );
    }

    .hero.hero-refined::after {
      background:
        linear-gradient(
          180deg,
          rgba(25,42,45,0.015),
          rgba(25,42,45,0.08)
        );
    }

    .hero-copy.hero-copy-refined {
      max-width: 690px;
      padding: 126px 0 116px;
    }

    .hero-copy-refined h1 {
      max-width: 650px;
      margin-top: 20px;
      margin-bottom: 24px;
      font-size: clamp(58px, 6.1vw, 86px);
      text-wrap: balance;
    }

    .hero-copy-refined .lead {
      max-width: 560px;
      font-size: 16px;
      line-height: 1.8;
    }

    .hero-booking-action {
      min-height: 52px;
      padding-inline: 25px;
      margin-top: 2px;
    }

    .hero-note.hero-note-refined {
      max-width: 420px;
      margin-top: 30px;
      padding-top: 22px;
      border-top: 1px solid rgba(43,45,66,0.12);
    }

    .hero-note-refined .mini-avatars img {
      border-color: rgba(255,255,255,0.96);
    }

    .hero-note-refined > span {
      max-width: 290px;
      line-height: 1.55;
    }

    .hero-animate {
      filter: none !important;
      animation-duration: 620ms;
    }

    @media (max-width: 1100px) {
      .nav-wrap nav {
        display: flex;
        justify-content: space-between;
      }

      .hero.hero-refined {
        min-height: 690px;
        background-position: 66% center;
      }

      .hero-copy.hero-copy-refined {
        max-width: 650px;
        padding: 108px 0;
      }
    }

    @media (max-width: 650px) {
      .hero.hero-refined {
        min-height: 680px;
        background-position: 66% center;
      }

      .hero.hero-refined::before {
        background:
          linear-gradient(
            180deg,
            rgba(255,255,255,0.92) 0%,
            rgba(255,255,255,0.81) 47%,
            rgba(255,255,255,0.52) 100%
          );
      }

      .hero-copy.hero-copy-refined {
        padding: 82px 0 94px;
      }

      .hero-copy-refined h1 {
        font-size: clamp(42px, 12vw, 54px);
        line-height: 1.04;
      }

      .hero-note.hero-note-refined {
        max-width: 360px;
        margin-top: 26px;
      }

      .nav-booking-action {
        display: none;
      }
    }
  `);

  const init = () => {
    applyNavigation();
    refineHero();
    markActiveSection();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
