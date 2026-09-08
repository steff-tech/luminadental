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

const normalizeEmDashes = () => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  const textNodes = [];
  let node;

  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue
      .replace(/\s*—\s*/g, ", ")
      .replace(/,\s+,/g, ",");
  });
};

(async () => {
  try {
    await loadScript("script-base.js");
    await loadScript("phase2.js");
    normalizeEmDashes();
  } catch (error) {
    console.error("Lumina scripts failed to load:", error);
  }
})();
