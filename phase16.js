/* PHASE 16 - DOCTOR SOCIAL ICON RESTORE + FOOTER CLEANUP */

(() => {
  const style = document.createElement("style");
  style.dataset.phase = "doctor-social-restore";
  style.textContent = `
    .doctors-repaired .doctor-socials { display:flex; align-items:center; gap:8px; }
    .doctors-repaired .doctor-socials a {
      width:30px; min-width:30px; height:30px; min-height:30px;
      padding:0; display:grid; place-items:center; border-radius:50%;
    }
    .doctors-repaired .doctor-socials svg { width:14px; height:14px; }
  `;
  document.head.appendChild(style);

  const contact = [...document.querySelectorAll("footer .footer-col")].find(
    (column) => column.querySelector("h4")?.textContent.trim() === "Contact"
  );
  const instagram = [...(contact?.querySelectorAll("a") || [])].find(
    (link) => link.textContent.trim().toLowerCase() === "instagram"
  );
  instagram?.remove();
})();
