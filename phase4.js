/* =====================================================
   PHASE 4 - TRUST + CONVERSION REFINEMENT
   Trust markers, HMO, testimonials, FAQ, final CTA.
===================================================== */

(() => {
  const addStyle = (css) => {
    const style = document.createElement("style");
    style.dataset.phase = "trust-conversion-refinement";
    style.textContent = css;
    document.head.appendChild(style);
  };

  const refineTrust = () => {
    const section = document.querySelector(".trust-strip");
    const grid = section?.querySelector(".trust-grid");
    const label = section?.querySelector(".trust-label");
    const logos = section?.querySelectorAll(".badge-logo");
    if (!section || !grid) return;
    section.classList.add("trust-refined");
    if (label) label.innerHTML = "Selected tools and<br>clinical technologies";
    logos?.forEach((logo, index) => {
      logo.classList.add("trust-logo-refined");
      logo.style.setProperty("--trust-index", index);
    });
  };

  const refineInsurance = () => {
    const section = document.querySelector(".payment-wrap");
    const banner = section?.querySelector(".insurance-banner");
    const copy = section?.querySelector(".insurance-copy");
    const logos = section?.querySelectorAll(".insurance-wordmark");
    if (!section || !banner) return;
    section.classList.add("insurance-refined");
    banner.classList.add("insurance-banner-refined");
    copy?.classList.add("insurance-copy-refined");
    logos?.forEach((logo, index) => {
      logo.classList.add("insurance-logo-refined");
      logo.style.setProperty("--insurance-index", index);
    });
  };

  const refineTestimonials = () => {
    const section = document.querySelector(".testimonials");
    const carousel = section?.querySelector(".testimonial-carousel");
    const track = section?.querySelector(".testimonial-track");
    const cards = track?.querySelectorAll(".quote-card");
    if (!section || !carousel || !track || !cards?.length) return;

    section.classList.add("testimonials-refined");
    carousel.classList.add("testimonial-carousel-refined");
    track.classList.add("testimonial-track-refined");
    cards.forEach((card, index) => {
      card.classList.add("quote-card-refined");
      card.dataset.index = String(index);
    });

    if (carousel.querySelector(".testimonial-controls")) return;

    const controls = document.createElement("div");
    controls.className = "testimonial-controls";
    controls.innerHTML = `
      <button type="button" class="testimonial-control" data-direction="prev" aria-label="Previous testimonial"><span aria-hidden="true">←</span></button>
      <div class="testimonial-dots" aria-label="Choose testimonial"></div>
      <button type="button" class="testimonial-control" data-direction="next" aria-label="Next testimonial"><span aria-hidden="true">→</span></button>
    `;
    carousel.appendChild(controls);

    const dotsWrap = controls.querySelector(".testimonial-dots");
    const dots = [];
    cards.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "testimonial-dot";
      dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });

    let currentIndex = 0;
    let isScrolling = false;
    const getVisibleCount = () => window.matchMedia("(max-width: 700px)").matches ? 1 : 3;
    const updateControls = () => {
      const maxIndex = Math.max(0, cards.length - getVisibleCount());
      currentIndex = Math.min(currentIndex, maxIndex);
      dots.forEach((dot, index) => {
        const active = index === currentIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    };
    const scrollToIndex = (index, behavior = "smooth") => {
      if (isScrolling) return;
      const maxIndex = Math.max(0, cards.length - getVisibleCount());
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      const target = cards[currentIndex];
      if (!target) return;
      isScrolling = true;
      carousel.scrollTo({ left: Math.max(0, target.offsetLeft - track.offsetLeft), behavior });
      window.setTimeout(() => { isScrolling = false; }, behavior === "smooth" ? 360 : 0);
      updateControls();
    };
    controls.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-direction]");
      if (!button) return;
      scrollToIndex(currentIndex + (button.dataset.direction === "next" ? 1 : -1));
    });
    dots.forEach((dot, index) => dot.addEventListener("click", () => scrollToIndex(index)));
    let scrollTimer;
    carousel.addEventListener("scroll", () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const cardWidth = cards[0]?.getBoundingClientRect().width || 1;
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "18") || 18;
        currentIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));
        updateControls();
      }, 80);
    }, { passive: true });
    window.addEventListener("resize", updateControls);
    carousel.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      scrollToIndex(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    });
    scrollToIndex(0, "auto");
  };

  const refineFaq = () => {
    const section = document.querySelector("#faq");
    const list = section?.querySelector(".faq-list");
    const questions = section?.querySelectorAll(".faq-question");
    if (!section || !list) return;
    section.classList.add("faq-refined");
    list.classList.add("faq-list-refined");
    questions?.forEach((question, index) => {
      const item = question.closest(".faq-item");
      const answer = item?.querySelector(".faq-answer");
      const id = `lumina-faq-answer-${index + 1}`;
      question.classList.add("faq-question-refined");
      question.setAttribute("aria-controls", id);
      if (answer) {
        answer.id = id;
        answer.classList.add("faq-answer-refined");
      }
    });
  };

  const createFinalCta = () => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer#contact");
    if (!main || !footer || document.querySelector(".final-booking-cta")) return;
    const section = document.createElement("section");
    section.className = "final-booking-cta";
    section.innerHTML = `
      <div class="container">
        <div class="final-booking-panel reveal">
          <div class="final-booking-copy">
            <div class="eyebrow">Your next visit</div>
            <h2>A better dental<br>experience starts here.</h2>
            <p>Choose a time that works for you, tell us what you need, and we will take it from there.</p>
          </div>
          <button type="button" class="btn btn-primary final-booking-button">Book an Appointment</button>
        </div>
      </div>
    `;
    footer.parentNode.insertBefore(section, footer);
    const button = section.querySelector(".final-booking-button");
    const heroButton = document.querySelector(".hero .btn-primary");
    button?.addEventListener("click", () => heroButton?.click());
    const target = section.querySelector(".reveal");
    if (target && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      observer.observe(target);
    }
  };

  addStyle(`
    .trust-refined { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--white); }
    .trust-refined .trust-grid { grid-template-columns: minmax(190px, 1.15fr) repeat(4, minmax(110px, 1fr)); gap: 24px; min-height: 136px; align-items: center; }
    .trust-refined .trust-label { color: var(--dark-gray); font-size: 11px; line-height: 1.7; letter-spacing: .1em; text-transform: uppercase; }
    .trust-logo-refined { display: grid; place-items: center; min-height: 48px; padding: 10px; border-left: 1px solid var(--border); color: rgba(43,45,66,.56); filter: grayscale(1); font-size: 16px; font-weight: 700; letter-spacing: -.02em; }
    .trust-logo-refined small { margin-top: 5px; color: rgba(43,45,66,.42); font-size: 8px; font-weight: 700; letter-spacing: .1em; }
    .insurance-refined { padding-top: 12px; padding-bottom: 12px; }
    .insurance-banner-refined { position: relative; overflow: hidden; gap: 46px; border: 1px solid var(--border); border-radius: 22px; background: #f4f8f7; box-shadow: none; }
    .insurance-banner-refined::after { content: ""; position: absolute; width: 260px; height: 260px; right: -110px; bottom: -160px; border-radius: 50%; background: rgba(76,167,148,.08); pointer-events: none; }
    .insurance-copy-refined { max-width: 460px; }
    .insurance-copy-refined h3 { max-width: 420px; margin-bottom: 12px; font-size: clamp(24px,3vw,34px); line-height: 1.18; }
    .insurance-copy-refined p { max-width: 430px; color: var(--body-gray); font-size: 14px; line-height: 1.75; }
    .insurance-refined .insurance-wordmarks { gap: 8px; }
    .insurance-logo-refined { position: relative; min-width: 102px; padding: 16px 10px; border: 1px solid rgba(43,45,66,.07); border-radius: 12px; background: rgba(255,255,255,.76); color: rgba(43,45,66,.62); font-size: 12px; letter-spacing: .02em; }
    .testimonials-refined { background: var(--light-gray); overflow: hidden; }
    .testimonials-refined .center-head { margin-bottom: 40px; }
    .testimonial-carousel-refined { position: relative; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none; padding: 4px 0 10px; }
    .testimonial-carousel-refined::-webkit-scrollbar { display: none; }
    .testimonial-track-refined { display: grid; grid-auto-flow: column; grid-auto-columns: calc((100% - 36px)/3); gap: 18px; width: max-content; animation: none !important; transform: none !important; }
    .quote-card-refined { scroll-snap-align: start; min-height: 330px; padding: 30px; border: 1px solid var(--border); border-radius: 20px; background: var(--white); box-shadow: none; }
    .quote-card-refined .quote-icon { color: var(--mint-dark); font-size: 42px; line-height: .8; }
    .quote-card-refined .stars { margin: 22px 0 18px; color: var(--mint-dark); font-size: 12px; letter-spacing: .16em; }
    .quote-card-refined blockquote { max-width: 420px; color: var(--dark-gray); font-family: "Plus Jakarta Sans",sans-serif; font-size: 15px; font-weight: 600; line-height: 1.65; }
    .quote-card-refined .patient { margin-top: auto; padding-top: 28px; border-top: 1px solid var(--border); }
    .quote-card-refined .patient strong { font-size: 12px; letter-spacing: .04em; }
    .quote-card-refined .patient span { color: var(--body-gray); font-size: 11px; }
    .testimonial-controls { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-top: 24px; }
    .testimonial-control { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid rgba(43,45,66,.14); border-radius: 50%; background: var(--white); color: var(--dark-gray); font-size: 18px; cursor: pointer; transition: background-color 180ms ease,border-color 180ms ease,transform 180ms ease; }
    .testimonial-control:hover { transform: translateY(-1px); border-color: rgba(76,167,148,.45); background: var(--mint-light); }
    .testimonial-dots { display: flex; align-items: center; gap: 7px; margin-inline: auto; }
    .testimonial-dot { width: 7px; height: 7px; padding: 0; border: 0; border-radius: 50%; background: rgba(43,45,66,.18); cursor: pointer; transition: width 180ms ease,background-color 180ms ease; }
    .testimonial-dot.is-active { width: 20px; border-radius: 999px; background: var(--mint); }
    .faq-refined { background: var(--white); }
    .faq-refined .faq-grid { grid-template-columns: minmax(220px,.72fr) minmax(0,1.28fr); gap: clamp(50px,10vw,150px); align-items: start; }
    .faq-refined .faq-intro { position: sticky; top: 120px; }
    .faq-list-refined { border-top: 1px solid var(--border); }
    .faq-list-refined .faq-item { border-bottom: 1px solid var(--border); }
    .faq-list-refined .faq-question { min-height: 76px; padding: 22px 0; font-family: "Plus Jakarta Sans",sans-serif; font-size: 15px; font-weight: 600; }
    .faq-list-refined .faq-icon { width: 34px; height: 34px; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 50%; color: var(--dark-gray); font-size: 16px; }
    .faq-list-refined .faq-item.active .faq-icon { border-color: rgba(76,167,148,.28); background: var(--mint-light); color: var(--mint-dark); }
    .faq-answer-refined { max-width: 680px; }
    .faq-answer-refined p { padding-bottom: 24px; color: var(--body-gray); font-size: 14px; line-height: 1.75; }
    .final-booking-cta { padding: 28px 0 112px; background: var(--white); }
    .final-booking-panel { display: flex; align-items: center; justify-content: space-between; gap: 48px; padding: clamp(34px,5vw,58px); border-radius: 28px; background: var(--dark-gray); box-shadow: 0 28px 80px rgba(43,45,66,.14); }
    .final-booking-copy { max-width: 640px; }
    .final-booking-copy .eyebrow { color: rgba(255,255,255,.64); }
    .final-booking-copy h2 { margin-bottom: 18px; color: var(--white); font-size: clamp(32px,5vw,56px); line-height: 1.06; }
    .final-booking-copy p { max-width: 500px; color: rgba(255,255,255,.72); font-size: 15px; line-height: 1.75; }

    @media (max-width: 1100px) {
      .trust-refined .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .insurance-banner-refined { grid-template-columns: 1fr; }
      .insurance-refined .insurance-wordmarks { grid-template-columns: repeat(3, minmax(0,1fr)); }
      .testimonial-track-refined { grid-auto-columns: calc((100% - 18px)/2); }
      .faq-refined .faq-grid { grid-template-columns: 1fr; gap: 42px; }
      .faq-refined .faq-intro { position: static; }
      .final-booking-panel { align-items: flex-start; }
    }

    @media (max-width: 700px) {
      .trust-refined .trust-grid { grid-template-columns: 1fr; }
      .trust-logo-refined { border-left: 0; border-top: 1px solid var(--border); }
      .insurance-refined .insurance-wordmarks { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .testimonial-track-refined { grid-auto-columns: 100%; }
      .quote-card-refined { min-height: 300px; padding: 24px; }
      .final-booking-cta { padding: 20px 0 76px; }
      .final-booking-panel { flex-direction: column; gap: 30px; padding: 30px 24px; border-radius: 22px; }
      .final-booking-button { width: 100%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .testimonial-control,
      .testimonial-dot { transition: none; }
      .testimonial-control:hover { transform: none; }
    }
  `);

  const init = () => {
    refineTrust();
    refineInsurance();
    refineTestimonials();
    refineFaq();
    createFinalCta();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
