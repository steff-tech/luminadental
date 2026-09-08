/* =====================================================
   PHASE 17 - FOOTER CONTACT CLEANUP
   Removes only the standalone Instagram text link from
   the Contact column, preserving phone and email.
===================================================== */

(() => {
  const footerContact = Array.from(document.querySelectorAll("footer .footer-col")).find(
    (column) => column.querySelector("h4")?.textContent.trim() === "Contact"
  );

  if (!footerContact) return;

  const instagramLink = Array.from(footerContact.querySelectorAll("a")).find(
    (link) => link.textContent.trim().toLowerCase() === "instagram"
  );

  instagramLink?.remove();
})();
