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