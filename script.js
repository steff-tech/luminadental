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

  .booking-success {
    padding: 12px 0 6px;
    text-align: center;
  }

  .booking-success-mark {
    width: 58px;
    height: 58px;
    margin: 0 auto 18px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--mint-light);
    color: var(--mint-dark);
    font-size: 24px;
    font-weight: 800;
  }

  .booking-success h3 {
    margin-bottom: 10px;
    font-size: 26px;
  }

  .booking-demo-note {
    margin-top: 20px;
    color: #858c95;
    font-size: 11px;
    line-height: 1.6;
  }

  @media (max-width: 650px) {
    .booking-trigger {
      right: 16px;
      left: 16px;
      bottom: max(16px, env(safe-area-inset-bottom));
      width: auto;
      min-height: 52px;
      box-shadow: 0 16px 34px rgba(43, 45, 66, 0.16);
    }

    .booking-overlay {
      align-items: end;
      padding: 12px;
    }

    .booking-dialog {
      width: 100%;
      max-height: 92vh;
      border-radius: 22px 22px 16px 16px;
    }

    .booking-dialog-header {
      padding: 24px 20px 16px;
    }

    .booking-content {
      padding: 22px 20px 24px;
    }

    .booking-title {
      font-size: 24px;
    }

    .booking-actions {
      position: sticky;
      bottom: -24px;
      margin-inline: -20px;
      margin-bottom: -24px;
      padding: 16px 20px calc(16px + env(safe-area-inset-bottom));
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-top: 1px solid var(--border);
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

document.head.appendChild(bookingStyle);


const bookingOverlay =
  document.createElement("div");

bookingOverlay.className =
  "booking-overlay";

bookingOverlay.id = "bookingOverlay";

bookingOverlay.setAttribute(
  "aria-hidden",
  "true"
);

bookingOverlay.innerHTML = `
  <section
    class="booking-dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="bookingTitle"
  >
    <div class="booking-dialog-header">
      <div>
        <div class="booking-kicker">Lumina Dental Studio</div>
        <h2 class="booking-title" id="bookingTitle">Book an Appointment</h2>
      </div>

      <button
        class="booking-close"
        type="button"
        aria-label="Close booking dialog"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>

    <div class="booking-content">
      <div class="booking-progress" aria-label="Booking progress">
        <span class="is-active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="booking-step" data-step="1">
        <h3>What would you like help with?</h3>
        <p class="booking-step-intro">
          Choose the option that feels closest to what you need. You can also keep it general.
        </p>

        <div class="booking-options">
          <button class="booking-option" type="button" data-service="Cosmetic Dentistry">
            <strong>Cosmetic Dentistry</strong>
            <span>Smile enhancements</span>
          </button>

          <button class="booking-option" type="button" data-service="Invisalign & Clear Aligners">
            <strong>Invisalign &amp; Clear Aligners</strong>
            <span>Discreet orthodontic care</span>
          </button>

          <button class="booking-option" type="button" data-service="General & Preventive Care">
            <strong>General &amp; Preventive Care</strong>
            <span>Check-ups and everyday care</span>
          </button>

          <button class="booking-option" type="button" data-service="I'm not sure yet">
            <strong>I’m not sure yet</strong>
            <span>Help me choose</span>
          </button>
        </div>
      </div>

      <div class="booking-step" data-step="2" hidden>
        <h3>When would you prefer to visit?</h3>
        <p class="booking-step-intro">
          This is a preference for the portfolio prototype and does not check live clinic availability.
        </p>

        <div class="booking-fields">
          <div class="booking-field">
            <label for="bookingDate">Preferred date</label>
            <input id="bookingDate" type="date" required>
          </div>

          <div class="booking-field">
            <label for="bookingTime">Preferred time</label>
            <select id="bookingTime" required>
              <option value="">Select a time</option>
              <option value="Morning">Morning · 9 AM to 12 PM</option>
              <option value="Afternoon">Afternoon · 1 PM to 4 PM</option>
              <option value="Evening">Evening · 5 PM to 7 PM</option>
            </select>
          </div>
        </div>
      </div>

      <div class="booking-step" data-step="3" hidden>
        <h3>How can we reach you?</h3>
        <p class="booking-step-intro">
          Use demo information here. Nothing will be sent to a real clinic.
        </p>

        <div class="booking-fields">
          <div class="booking-field">
            <label for="bookingName">Full name</label>
            <input id="bookingName" type="text" autocomplete="name" placeholder="Alex Santos" required>
          </div>

          <div class="booking-field">
            <label for="bookingEmail">Email address</label>
            <input id="bookingEmail" type="email" autocomplete="email" placeholder="alex@example.com" required>
          </div>

          <div class="booking-field">
            <label for="bookingPhone">Mobile number</label>
            <input id="bookingPhone" type="tel" autocomplete="tel" placeholder="09XX XXX XXXX" required>
          </div>
        </div>
      </div>

      <div class="booking-step" data-step="4" hidden>
        <h3>Review your request</h3>
        <p class="booking-step-intro">
          Everything looks good. This final action only completes the demo interaction.
        </p>

        <div class="booking-summary" id="bookingSummary"></div>
      </div>

      <div class="booking-step booking-success" data-step="success" hidden>
        <div class="booking-success-mark" aria-hidden="true">✓</div>
        <h3>Request ready</h3>
        <p class="booking-step-intro">
          Your appointment request has been prepared for this portfolio demo.
        </p>
        <p class="booking-demo-note">
          Demo only. No appointment was sent, stored, or submitted to a real clinic.
        </p>
      </div>

      <div class="booking-actions">
        <button class="booking-secondary" type="button" data-booking-back hidden>
          Back
        </button>
        <div></div>
        <button class="btn btn-primary" type="button" data-booking-next>
          Continue
        </button>
      </div>
    </div>
  </section>
`;

document.body.appendChild(bookingOverlay);


const bookingDialog =
  bookingOverlay.querySelector(
    ".booking-dialog"
  );

const bookingClose =
  bookingOverlay.querySelector(
    ".booking-close"
  );

const bookingNext =
  bookingOverlay.querySelector(
    "[data-booking-next]"
  );

const bookingBack =
  bookingOverlay.querySelector(
    "[data-booking-back]"
  );

const bookingSteps =
  [...bookingOverlay.querySelectorAll(
    ".booking-step"
  )];

const bookingProgress =
  [...bookingOverlay.querySelectorAll(
    ".booking-progress span"
  )];

const bookingOptions =
  [...bookingOverlay.querySelectorAll(
    ".booking-option"
  )];

const bookingDate =
  bookingOverlay.querySelector(
    "#bookingDate"
  );

const bookingTime =
  bookingOverlay.querySelector(
    "#bookingTime"
  );

const bookingName =
  bookingOverlay.querySelector(
    "#bookingName"
  );

const bookingEmail =
  bookingOverlay.querySelector(
    "#bookingEmail"
  );

const bookingPhone =
  bookingOverlay.querySelector(
    "#bookingPhone"
  );

const bookingSummary =
  bookingOverlay.querySelector(
    "#bookingSummary"
  );

let lastBookingTrigger = null;


function getBookingFocusableElements() {
  return [
    ...bookingDialog.querySelectorAll(
      'button:not([hidden]), input:not([hidden]), select:not([hidden]), [href]:not([hidden])'
    )
  ].filter(
    (element) =>
      !element.disabled &&
      element.offsetParent !== null
  );
}


function setBookingStep(step) {
  bookingState.step = step;

  bookingSteps.forEach(
    (element) => {
      element.hidden =
        element.dataset.step !==
        String(step);
    }
  );

  bookingProgress.forEach(
    (bar, index) => {
      bar.classList.toggle(
        "is-active",
        index < step
      );
    }
  );

  bookingBack.hidden = step <= 1;
  bookingNext.hidden = false;
  bookingNext.textContent =
    step === 4
      ? "Confirm demo"
      : "Continue";

  if (step === 4) {
    renderBookingSummary();
  }

  requestAnimationFrame(() => {
    const focusable =
      getBookingFocusableElements();

    const first =
      focusable.find(
        (element) =>
          element !== bookingClose
      ) || bookingClose;

    first.focus();
  });
}


function renderBookingSummary() {
  bookingSummary.innerHTML = `
    <div class="booking-summary-row">
      <span>Service</span>
      <strong>${bookingState.service}</strong>
    </div>
    <div class="booking-summary-row">
      <span>Date</span>
      <strong>${formatBookingDate(bookingState.date)}</strong>
    </div>
    <div class="booking-summary-row">
      <span>Time</span>
      <strong>${bookingState.time}</strong>
    </div>
    <div class="booking-summary-row">
      <span>Name</span>
      <strong>${bookingState.name}</strong>
    </div>
    <div class="booking-summary-row">
      <span>Email</span>
      <strong>${bookingState.email}</strong>
    </div>
    <div class="booking-summary-row">
      <span>Phone</span>
      <strong>${bookingState.phone}</strong>
    </div>
  `;
}


function formatBookingDate(value) {
  if (!value) {
    return "Not selected";
  }

  const date =
    new Date(`${value}T00:00:00`);

  return new Intl.DateTimeFormat(
    "en-PH",
    {
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  ).format(date);
}


function clearBookingValidation() {
  bookingOverlay
    .querySelectorAll(".booking-error")
    .forEach(
      (error) => error.remove()
    );

  [
    bookingDate,
    bookingTime,
    bookingName,
    bookingEmail,
    bookingPhone
  ].forEach(
    (field) => {
      if (field) {
        field.removeAttribute(
          "aria-invalid"
        );
      }
    }
  );
}


function showFieldError(
  field,
  message
) {
  clearBookingValidation();

  const wrapper =
    field.closest(".booking-field");

  const error =
    document.createElement("span");

  error.className =
    "booking-error";

  error.textContent = message;

  wrapper.appendChild(error);

  field.setAttribute(
    "aria-invalid",
    "true"
  );

  field.focus();
}


function validateCurrentStep() {
  clearBookingValidation();

  if (bookingState.step === 1) {
    if (!bookingState.service) {
      const firstOption =
        bookingOptions[0];

      firstOption.focus();

      return false;
    }

    return true;
  }

  if (bookingState.step === 2) {
    bookingState.date =
      bookingDate.value;

    bookingState.time =
      bookingTime.value;

    if (!bookingState.date) {
      showFieldError(
        bookingDate,
        "Please choose a preferred date."
      );
      return false;
    }

    if (!bookingState.time) {
      showFieldError(
        bookingTime,
        "Please choose a preferred time."
      );
      return false;
    }

    return true;
  }

  if (bookingState.step === 3) {
    bookingState.name =
      bookingName.value.trim();

    bookingState.email =
      bookingEmail.value.trim();

    bookingState.phone =
      bookingPhone.value.trim();

    if (!bookingState.name) {
      showFieldError(
        bookingName,
        "Please enter your name."
      );
      return false;
    }

    if (
      !bookingEmail.validity.valid ||
      !bookingState.email
    ) {
      showFieldError(
        bookingEmail,
        "Please enter a valid email address."
      );
      return false;
    }

    if (
      bookingState.phone.replace(
        /\D/g,
        ""
      ).length < 8
    ) {
      showFieldError(
        bookingPhone,
        "Please enter a valid phone number."
      );
      return false;
    }

    return true;
  }

  return true;
}


function resetBooking() {
  bookingState.step = 1;
  bookingState.service = "";
  bookingState.date = "";
  bookingState.time = "";
  bookingState.name = "";
  bookingState.email = "";
  bookingState.phone = "";

  bookingOptions.forEach(
    (option) =>
      option.classList.remove(
        "is-selected"
      )
  );

  bookingDate.value = "";
  bookingTime.value = "";
  bookingName.value = "";
  bookingEmail.value = "";
  bookingPhone.value = "";

  clearBookingValidation();

  setBookingStep(1);
}


function openBooking(trigger) {
  if (
    mobileMenu.classList.contains(
      "active"
    )
  ) {
    closeMenu();
  }

  lastBookingTrigger =
    trigger ||
    document.activeElement;

  bookingOverlay.classList.add(
    "is-open"
  );

  bookingOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "booking-open"
  );

  resetBooking();

  requestAnimationFrame(() => {
    bookingClose.focus();
  });
}


function closeBooking() {
  bookingOverlay.classList.remove(
    "is-open"
  );

  bookingOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "booking-open"
  );

  if (
    lastBookingTrigger &&
    typeof lastBookingTrigger.focus ===
      "function"
  ) {
    lastBookingTrigger.focus();
  }

  lastBookingTrigger = null;
}


bookingOptions.forEach(
  (option) => {
    option.addEventListener(
      "click",
      () => {
        bookingOptions.forEach(
          (item) =>
            item.classList.remove(
              "is-selected"
            )
        );

        option.classList.add(
          "is-selected"
        );

        bookingState.service =
          option.dataset.service;

        setBookingStep(2);
      }
    );
  }
);


bookingNext.addEventListener(
  "click",
  () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (bookingState.step < 4) {
      setBookingStep(
        bookingState.step + 1
      );
      return;
    }

    bookingSteps.forEach(
      (element) => {
        element.hidden =
          element.dataset.step !==
          "success";
      }
    );

    bookingBack.hidden = true;
    bookingNext.hidden = false;
    bookingNext.textContent =
      "Back to website";

    bookingNext.onclick = () => {
      bookingNext.onclick = null;
      closeBooking();
    };

    requestAnimationFrame(() => {
      bookingNext.focus();
    });
  }
);


bookingBack.addEventListener(
  "click",
  () => {
    if (bookingState.step <= 1) {
      return;
    }

    setBookingStep(
      bookingState.step - 1
    );
  }
);


bookingClose.addEventListener(
  "click",
  closeBooking
);

bookingOverlay.addEventListener(
  "click",
  (event) => {
    if (
      event.target ===
      bookingOverlay
    ) {
      closeBooking();
    }
  }
);


document.addEventListener(
  "keydown",
  (event) => {
    if (
      !bookingOverlay.classList.contains(
        "is-open"
      )
    ) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeBooking();
      return;
    }

    if (
      event.key === "Tab"
    ) {
      const focusable =
        getBookingFocusableElements();

      if (!focusable.length) {
        return;
      }

      const first =
        focusable[0];
      const last =
        focusable[
          focusable.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          last
      ) {
        event.preventDefault();
        first.focus();
      }
    }
  }
);


/* =====================================================
   BOOKING TRIGGERS
===================================================== */

const primaryBookingLinks =
  document.querySelectorAll(
    ".hero .btn-primary, .mobile-menu-cta"
  );

primaryBookingLinks.forEach(
  (link) => {
    link.setAttribute(
      "href",
      "#book"
    );

    link.classList.add(
      "booking-link"
    );

    link.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        openBooking(link);
      }
    );
  }
);


const floatingBooking =
  document.createElement("button");

floatingBooking.className =
  "booking-trigger";
floatingBooking.type = "button";
floatingBooking.textContent =
  "Book an Appointment";
floatingBooking.setAttribute(
  "aria-label",
  "Book an Appointment"
);


document.body.appendChild(
  floatingBooking
);

floatingBooking.addEventListener(
  "click",
  () => {
    openBooking(floatingBooking);
  }
);


function updateFloatingBooking() {
  floatingBooking.classList.toggle(
    "is-visible",
    window.scrollY > 520
  );
}


window.addEventListener(
  "scroll",
  updateFloatingBooking,
  { passive: true }
);

updateFloatingBooking();


/* =====================================================
   BOOKING DATE SAFETY
===================================================== */

const today =
  new Date();

const todayValue = [
  today.getFullYear(),
  String(
    today.getMonth() + 1
  ).padStart(2, "0"),
  String(
    today.getDate()
  ).padStart(2, "0")
].join("-");

bookingDate.min =
  todayValue;
