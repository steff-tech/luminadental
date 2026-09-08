/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileLinks =
  mobileMenu.querySelectorAll("a");


function openMenu() {

  menuToggle.classList.add("active");

  mobileMenu.classList.add("active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  menuToggle.setAttribute(
    "aria-label",
    "Close navigation menu"
  );

  mobileMenu.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeMenu() {

  menuToggle.classList.remove("active");

  mobileMenu.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

  mobileMenu.setAttribute(
    "aria-hidden",
    "true"
  );

}


menuToggle.addEventListener(
  "click",
  () => {

    const isOpen =
      menuToggle.getAttribute(
        "aria-expanded"
      ) === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  }
);


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================================== */

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      closeMenu();

    }
  );

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      mobileMenu.classList.contains("active")
    ) {

      closeMenu();

      menuToggle.focus();

    }

  }
);


/* =====================================================
   RESET MENU ON DESKTOP
===================================================== */

const desktopBreakpoint =
  window.matchMedia(
    "(min-width: 1101px)"
  );


desktopBreakpoint.addEventListener(
  "change",
  (event) => {

    if (event.matches) {
      closeMenu();
    }

  }
);


/* =====================================================
   SMOOTH INTERNAL ANCHOR SCROLLING
===================================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {

          event.preventDefault();

          window.scrollTo({

            top: 0,

            behavior:
              window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches
                ? "auto"
                : "smooth"

          });

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        const header =
          document.querySelector(
            ".nav-wrap"
          );

        const headerHeight =
          header
            ? header.offsetHeight
            : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;

        window.scrollTo({

          top:
            targetPosition,

          behavior:
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches
              ? "auto"
              : "smooth"

        });

      }
    );

  });


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.08,
        rootMargin:
          "0px 0px -50px 0px"
      }

    );


  revealElements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "visible"
      );

    }
  );

}


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions =
  document.querySelectorAll(
    ".faq-question"
  );


faqQuestions.forEach(
  (question) => {

    question.addEventListener(
      "click",
      () => {

        const faqItem =
          question.closest(
            ".faq-item"
          );

        const isActive =
          faqItem.classList.contains(
            "active"
          );

        document
          .querySelectorAll(
            ".faq-item"
          )
          .forEach(
            (item) => {

              item.classList.remove(
                "active"
              );

              const itemQuestion =
                item.querySelector(
                  ".faq-question"
                );

              itemQuestion.setAttribute(
                "aria-expanded",
                "false"
              );

            }
          );

        if (!isActive) {

          faqItem.classList.add(
            "active"
          );

          question.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      }
    );

  }
);

/* =====================================================
   TESTIMONIAL CAROUSEL
===================================================== */

const testimonialCarousel =
    document.querySelector(".testimonial-carousel");

const testimonialTrack =
    document.querySelector(".testimonial-track");


if (
    testimonialCarousel &&
    testimonialTrack
) {

    testimonialCarousel.addEventListener(
        "mouseenter",
        () => {

            testimonialTrack.style.animationPlayState =
                "paused";

        }
    );


    testimonialCarousel.addEventListener(
        "mouseleave",
        () => {

            testimonialTrack.style.animationPlayState =
                "running";

        }
    );

}


/* =====================================================
   BOOKING UX
   Front-end portfolio prototype only.
===================================================== */

const bookingState = {
  step: 1,
  service: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: ""
};


const bookingStyle =
  document.createElement("style");

bookingStyle.textContent = `
  body.booking-open {
    overflow: hidden;
  }

  .booking-trigger {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 980;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 14px 20px;
    border: 1px solid rgba(76, 167, 148, 0.18);
    border-radius: 999px;
    background: var(--mint);
    color: var(--white);
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 18px 36px rgba(43, 45, 66, 0.14);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px);
    transition:
      opacity 180ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 180ms cubic-bezier(0.23, 1, 0.32, 1),
      visibility 180ms linear,
      background-color 180ms ease,
      box-shadow 180ms ease;
  }

  .booking-trigger.is-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .booking-trigger:hover {
    background: var(--mint-dark);
    box-shadow: 0 20px 40px rgba(43, 45, 66, 0.16);
  }

  .booking-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(27, 35, 38, 0.36);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 200ms cubic-bezier(0.23, 1, 0.32, 1),
      visibility 200ms linear;
  }

  .booking-overlay.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .booking-dialog {
    width: min(100%, 640px);
    max-height: min(88vh, 760px);
    overflow: auto;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--white);
    box-shadow: 0 30px 90px rgba(43, 45, 66, 0.2);
    transform: translateY(14px) scale(0.98);
    transition:
      transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .booking-overlay.is-open .booking-dialog {
    transform: translateY(0) scale(1);
  }

  .booking-dialog-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 28px 28px 18px;
    border-bottom: 1px solid var(--border);
  }

  .booking-kicker {
    margin-bottom: 8px;
    color: var(--mint-dark);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .booking-title {
    margin: 0;
    color: var(--dark-gray);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.04em;
  }

  .booking-close {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: var(--white);
    color: var(--dark-gray);
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
  }

  .booking-content {
    padding: 28px;
  }

  .booking-progress {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 28px;
  }

  .booking-progress span {
    height: 4px;
    border-radius: 999px;
    background: var(--light-gray);
  }

  .booking-progress span.is-active {
    background: var(--mint);
  }

  .booking-step[hidden] {
    display: none;
  }

  .booking-step h3 {
    margin-bottom: 8px;
    color: var(--dark-gray);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 22px;
  }

  .booking-step-intro {
    margin-bottom: 22px;
    color: var(--body-gray);
    font-size: 14px;
    line-height: 1.65;
  }

  .booking-options {
    display: grid;
    gap: 10px;
  }

  .booking-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    padding: 16px 18px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--white);
    color: var(--dark-gray);
    text-align: left;
    cursor: pointer;
    transition:
      border-color 160ms ease,
      background-color 160ms ease,
      transform 160ms ease;
  }

  .booking-option:hover {
    transform: translateY(-1px);
    border-color: rgba(76, 167, 148, 0.45);
    background: var(--mint-light);
  }

  .booking-option.is-selected {
    border-color: var(--mint);
    background: var(--mint-light);
    box-shadow: inset 0 0 0 1px rgba(76, 167, 148, 0.14);
  }

  .booking-option strong {
    font-size: 14px;
  }

  .booking-option span {
    color: var(--body-gray);
    font-size: 12px;
  }

  .booking-fields {
    display: grid;
    gap: 16px;
  }

  .booking-field {
    display: grid;
    gap: 7px;
  }

  .booking-field label {
    color: var(--dark-gray);
    font-size: 13px;
    font-weight: 700;
  }

  .booking-field input,
  .booking-field select {
    width: 100%;
    min-height: 48px;
    padding: 12px 14px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--white);
    color: var(--dark-gray);
    outline: none;
  }

  .booking-field input:focus,
  .booking-field select:focus {
    border-color: var(--mint);
    box-shadow: 0 0 0 4px rgba(76, 167, 148, 0.12);
  }

  .booking-error {
    color: #9d3e47;
    font-size: 12px;
  }

  .booking-summary {
    display: grid;
    gap: 12px;
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: var(--light-gray);
  }

  .booking-summary-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 18px;
  }

  .booking-summary-row span {
    color: var(--body-gray);
    font-size: 12px;
  }

  .booking-summary-row strong {
    color: var(--dark-gray);
    font-size: 13px;
    text-align: right;
  }

  .booking-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 28px;
  }

  .booking-actions .btn {
    min-width: 130px;
  }

  .booking-secondary {
    border: 0;
    background: transparent;
    color: var(--body-gray);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .booking-secondary:hover {
    color: var(--dark-gray);
  }

  .booking-success {
    padding: 36px 0 8px;
    text-align: center;
  }

  .booking-success-mark {
    width: 54px;
    height: 54px;
    margin: 0 auto 18px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--mint-light);
    color: var(--mint-dark);
    font-size: 24px;
  }

  .booking-success h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  .booking-success p {
    color: var(--body-gray);
    font-size: 14px;
    line-height: 1.7;
  }

  .booking-demo-note {
    margin-top: 14px;
    color: rgba(43,45,66,.48);
    font-size: 10px;
    line-height: 1.5;
  }

  @media (max-width: 700px) {
    .booking-overlay {
      padding: 12px;
      align-items: end;
    }

    .booking-dialog {
      width: 100%;
      max-height: 92vh;
      border-radius: 20px 20px 0 0;
    }

    .booking-dialog-header {
      padding: 22px 20px 16px;
    }

    .booking-title {
      font-size: 24px;
    }

    .booking-content {
      padding: 20px;
    }

    .booking-actions {
      flex-wrap: wrap;
    }

    .booking-actions .btn,
    .booking-secondary {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .booking-trigger,
    .booking-overlay,
    .booking-dialog,
    .booking-option {
      transition: none;
    }
  }
`;

document.head.appendChild(
  bookingStyle
);


const bookingMarkup = `
  <div class="booking-trigger" id="bookingTrigger" aria-hidden="true">
    <button type="button" class="btn btn-primary" data-booking-open>
      Book an Appointment
    </button>
  </div>

  <div class="booking-overlay" id="bookingOverlay" aria-hidden="true">
    <div class="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="bookingTitle" tabindex="-1">
      <div class="booking-dialog-header">
        <div>
          <div class="booking-kicker">Appointment request</div>
          <h2 class="booking-title" id="bookingTitle">Book an Appointment</h2>
        </div>
        <button type="button" class="booking-close" data-booking-close aria-label="Close booking">×</button>
      </div>

      <div class="booking-content">
        <div class="booking-progress" aria-hidden="true">
          <span class="is-active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="booking-step" data-booking-step="1">
          <h3>What would you like help with?</h3>
          <p class="booking-step-intro">Choose a service so we can guide you to the most relevant appointment.</p>
          <div class="booking-options">
            <button type="button" class="booking-option" data-service="Cosmetic Dentistry">
              <strong>Cosmetic Dentistry</strong><span>Smile enhancements</span>
            </button>
            <button type="button" class="booking-option" data-service="Invisalign & Clear Aligners">
              <strong>Invisalign &amp; Clear Aligners</strong><span>Digital treatment planning</span>
            </button>
            <button type="button" class="booking-option" data-service="General & Preventive Care">
              <strong>General &amp; Preventive Care</strong><span>Check-ups and everyday care</span>
            </button>
          </div>
        </div>

        <div class="booking-step" data-booking-step="2" hidden>
          <h3>Choose a date and time</h3>
          <p class="booking-step-intro">Select a convenient slot for this portfolio prototype.</p>
          <div class="booking-fields">
            <div class="booking-field">
              <label for="bookingDate">Preferred date</label>
              <input type="date" id="bookingDate">
            </div>
            <div class="booking-field">
              <label for="bookingTime">Preferred time</label>
              <select id="bookingTime">
                <option value="">Choose a time</option>
                <option>9:00 AM</option>
                <option>10:30 AM</option>
                <option>1:00 PM</option>
                <option>2:30 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>
          <p class="booking-error" data-booking-error="date" role="alert" hidden>Please choose both a date and time.</p>
          <div class="booking-actions">
            <button type="button" class="booking-secondary" data-booking-back>Back</button>
            <button type="button" class="btn btn-primary" data-booking-next>Continue</button>
          </div>
        </div>

        <div class="booking-step" data-booking-step="3" hidden>
          <h3>Tell us how to reach you</h3>
          <p class="booking-step-intro">This information is only used to demonstrate the interaction.</p>
          <div class="booking-fields">
            <div class="booking-field">
              <label for="bookingName">Full name</label>
              <input type="text" id="bookingName" autocomplete="name">
            </div>
            <div class="booking-field">
              <label for="bookingEmail">Email</label>
              <input type="email" id="bookingEmail" autocomplete="email">
            </div>
            <div class="booking-field">
              <label for="bookingPhone">Mobile number</label>
              <input type="tel" id="bookingPhone" autocomplete="tel">
            </div>
          </div>
          <p class="booking-error" data-booking-error="contact" role="alert" hidden>Please complete your name, email, and mobile number.</p>
          <div class="booking-actions">
            <button type="button" class="booking-secondary" data-booking-back>Back</button>
            <button type="button" class="btn btn-primary" data-booking-next>Review Request</button>
          </div>
        </div>

        <div class="booking-step" data-booking-step="4" hidden>
          <h3>Review your request</h3>
          <p class="booking-step-intro">Everything below is fictional and will not be sent to a real clinic.</p>
          <div class="booking-summary">
            <div class="booking-summary-row"><span>Service</span><strong data-summary="service">—</strong></div>
            <div class="booking-summary-row"><span>Date</span><strong data-summary="date">—</strong></div>
            <div class="booking-summary-row"><span>Time</span><strong data-summary="time">—</strong></div>
            <div class="booking-summary-row"><span>Name</span><strong data-summary="name">—</strong></div>
            <div class="booking-summary-row"><span>Email</span><strong data-summary="email">—</strong></div>
            <div class="booking-summary-row"><span>Phone</span><strong data-summary="phone">—</strong></div>
          </div>
          <div class="booking-actions">
            <button type="button" class="booking-secondary" data-booking-back>Back</button>
            <button type="button" class="btn btn-primary" data-booking-confirm>Confirm Request</button>
          </div>
          <p class="booking-demo-note">Demo interaction only. No appointment will actually be submitted.</p>
        </div>

        <div class="booking-success" data-booking-success hidden>
          <div class="booking-success-mark" aria-hidden="true">✓</div>
          <h3>Request received.</h3>
          <p>Your appointment flow is complete. In a live product, this is where confirmation and next steps would appear.</p>
          <p class="booking-demo-note">This is a portfolio prototype. No real booking was created.</p>
        </div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML(
  "beforeend",
  bookingMarkup
);

const bookingOverlay =
  document.getElementById("bookingOverlay");

const bookingDialog =
  bookingOverlay.querySelector(
    ".booking-dialog"
  );

const bookingSteps =
  bookingOverlay.querySelectorAll(
    ".booking-step"
  );

const bookingProgress =
  bookingOverlay.querySelectorAll(
    ".booking-progress span"
  );

const bookingSuccess =
  bookingOverlay.querySelector(
    "[data-booking-success]"
  );

let bookingLastFocused = null;
let bookingPreviousStep = 1;

function updateBookingView() {

  bookingSteps.forEach((step) => {

    const stepNumber =
      Number(
        step.dataset.bookingStep
      );

    step.hidden =
      stepNumber !== bookingState.step;

  });

  bookingProgress.forEach(
    (indicator, index) => {
      indicator.classList.toggle(
        "is-active",
        index < bookingState.step
      );
    }
  );

  const progressMax =
    Math.max(0, bookingState.step - 1);

  bookingProgress.forEach(
    (indicator, index) => {
      indicator.classList.toggle(
        "is-active",
        index <= progressMax
      );
    }
  );

  bookingSuccess.hidden =
    !bookingState.completed;
}

function resetBooking() {
  bookingState.step = 1;
  bookingState.service = "";
  bookingState.date = "";
  bookingState.time = "";
  bookingState.name = "";
  bookingState.email = "";
  bookingState.phone = "";
  bookingState.completed = false;
  bookingPreviousStep = 1;

  bookingOverlay.querySelectorAll(
    ".booking-option"
  ).forEach((button) => {
    button.classList.remove("is-selected");
  });

  bookingOverlay.querySelectorAll(
    ".booking-error"
  ).forEach((error) => {
    error.hidden = true;
  });

  bookingOverlay.querySelectorAll(
    "input, select"
  ).forEach((field) => {
    field.value = "";
  });

  updateBookingSummary();
  updateBookingView();
}

function updateBookingSummary() {
  const formattedDate =
    bookingState.date
      ? new Date(`${bookingState.date}T00:00:00`).toLocaleDateString(
          undefined,
          {
            month: "long",
            day: "numeric",
            year: "numeric"
          }
        )
      : "—";

  const values = {
    service: bookingState.service || "—",
    date: formattedDate,
    time: bookingState.time || "—",
    name: bookingState.name || "—",
    email: bookingState.email || "—",
    phone: bookingState.phone || "—"
  };

  Object.entries(values).forEach(
    ([key, value]) => {
      const target =
        bookingOverlay.querySelector(
          `[data-summary="${key}"]`
        );

      if (target) {
        target.textContent = value;
      }
    }
  );
}

function showBookingError(name) {
  const error =
    bookingOverlay.querySelector(
      `[data-booking-error="${name}"]`
    );

  if (error) error.hidden = false;
}

function hideBookingError(name) {
  const error =
    bookingOverlay.querySelector(
      `[data-booking-error="${name}"]`
    );

  if (error) error.hidden = true;
}

function validateDateStep() {
  const dateField =
    document.getElementById("bookingDate");

  const timeField =
    document.getElementById("bookingTime");

  const date = dateField.value;
  const time = timeField.value;

  if (!date || !time) {
    showBookingError("date");
    return false;
  }

  bookingState.date = date;
  bookingState.time = time;
  hideBookingError("date");
  return true;
}

function validateContactStep() {
  const nameField =
    document.getElementById("bookingName");

  const emailField =
    document.getElementById("bookingEmail");

  const phoneField =
    document.getElementById("bookingPhone");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();
  const isEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(email);

  if (!name || !isEmail || !phone) {
    showBookingError("contact");
    return false;
  }

  bookingState.name = name;
  bookingState.email = email;
  bookingState.phone = phone;
  hideBookingError("contact");
  return true;
}

function openBooking(trigger) {
  resetBooking();
  bookingLastFocused = trigger || document.activeElement;
  bookingOverlay.classList.add("is-open");
  bookingOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("booking-open");
  window.setTimeout(() => {
    bookingOverlay.querySelector(".booking-close")?.focus();
  }, 0);
}

function closeBooking() {
  bookingOverlay.classList.remove("is-open");
  bookingOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("booking-open");
  bookingLastFocused?.focus?.();
}

bookingOverlay.addEventListener("click", (event) => {
  if (event.target === bookingOverlay) closeBooking();
});

bookingOverlay.querySelectorAll(
  "[data-booking-close]"
).forEach((button) => {
  button.addEventListener("click", closeBooking);
});

document.addEventListener("keydown", (event) => {
  if (!bookingOverlay.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeBooking();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = Array.from(
    bookingDialog.querySelectorAll(
      "button, input, select, textarea, [href], [tabindex]:not([tabindex=\"-1\"])")
  ).filter((element) => !element.hidden && !element.hasAttribute("disabled"));

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

bookingOverlay.querySelectorAll(
  "[data-service]"
).forEach((button) => {
  button.addEventListener("click", () => {
    bookingState.service =
      button.dataset.service || "";

    bookingOverlay.querySelectorAll(
      "[data-service]"
    ).forEach((option) => {
      option.classList.toggle(
        "is-selected",
        option === button
      );
    });

    bookingState.step = 2;
    bookingPreviousStep = 1;
    updateBookingView();
  });
});

bookingOverlay.querySelectorAll(
  "[data-booking-next]"
).forEach((button) => {
  button.addEventListener("click", () => {
    if (bookingState.step === 2 && !validateDateStep()) return;
    if (bookingState.step === 3 && !validateContactStep()) return;

    bookingPreviousStep =
      bookingState.step;
    bookingState.step =
      Math.min(4, bookingState.step + 1);
    updateBookingSummary();
    updateBookingView();
  });
});

bookingOverlay.querySelectorAll(
  "[data-booking-back]"
).forEach((button) => {
  button.addEventListener("click", () => {
    bookingPreviousStep =
      bookingState.step;
    bookingState.step =
      Math.max(1, bookingState.step - 1);
    updateBookingView();
  });
});

bookingOverlay.querySelector(
  "[data-booking-confirm]"
)?.addEventListener("click", () => {
  bookingState.completed = true;
  updateBookingView();
});

document.addEventListener("click", (event) => {
  const trigger =
    event.target.closest(
      "[data-booking-open]"
    );

  if (!trigger) return;

  event.preventDefault();
  openBooking(trigger);
});

const bookingTrigger =
  document.getElementById("bookingTrigger");

const showBookingTrigger = () => {
  const threshold =
    window.innerHeight * 0.65;

  const isPastHero =
    window.scrollY > threshold;

  if (bookingTrigger) {
    bookingTrigger.classList.toggle(
      "is-visible",
      isPastHero
    );
    bookingTrigger.setAttribute(
      "aria-hidden",
      String(!isPastHero)
    );
  }
};

window.addEventListener(
  "scroll",
  showBookingTrigger,
  { passive: true }
);

showBookingTrigger();
