/* =====================================================
   LUMINA SCRIPT LOADER
   Keeps the tested base interaction layer separate from
   iterative visual refinements.
===================================================== */

const loadScript = (source) => new Promise((resolve, reject) => {
  const script = document.createElement("script");
  script.src = source;
  script.onload = resolve;
  script.onerror = reject;
  document.body.appendChild(script);
});

(async () => {
  try {
    await loadScript("script-base.js");
    await loadScript("phase2.js");
  } catch (error) {
    console.error("Lumina scripts failed to load:", error);
  }
})();
