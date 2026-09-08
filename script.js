/* =====================================================
   LEGACY COMPATIBILITY ENTRY
   The actual application entry point now lives at
   js/main.js. Keeping this tiny bridge prevents breakage
   for existing HTML references during the folder cleanup.
===================================================== */

const entry = document.createElement("script");
entry.src = "js/main.js";
entry.onerror = (error) => {
  console.error("Lumina main entry failed to load:", error);
};
document.body.appendChild(entry);
