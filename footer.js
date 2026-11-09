/* ── Dynamic Footer & Contact Page Hydration from studio-config.js ── */
(function () {
  "use strict";

  function applyStudioConfig() {
    const cfg = window.STUDIO_CONFIG;
    if (!cfg) return;

    // Email
    const emailEls = document.querySelectorAll("#footer-email, #contact-page-email, #connect-email-text");
    emailEls.forEach(el => {
      if (cfg.email) {
        if (el.tagName === "A") el.href = "mailto:" + cfg.email;
        el.textContent = cfg.email;
      }
    });

    const emailLinks = document.querySelectorAll("#connect-card-email, #connect-icon-email");
    emailLinks.forEach(el => {
      if (cfg.email) el.href = "mailto:" + cfg.email;
    });

    // Phone
    const phoneLinkVal = cfg.phoneLink || (cfg.phone ? "tel:" + cfg.phone.replace(/[^\d+]/g, "") : "");
    const phoneEls = document.querySelectorAll("#footer-phone, #contact-page-phone, #connect-phone-text");
    phoneEls.forEach(el => {
      if (cfg.phone) {
        if (el.tagName === "A") el.href = phoneLinkVal;
        el.textContent = cfg.phone;
      }
    });

    const phoneLinks = document.querySelectorAll("#connect-card-phone, #connect-icon-phone");
    phoneLinks.forEach(el => {
      if (phoneLinkVal) el.href = phoneLinkVal;
    });

    // WhatsApp
    const waUrl = cfg.whatsappUrl || (cfg.whatsappNumber || cfg.phone ? "https://wa.me/" + (cfg.whatsappNumber || cfg.phone).replace(/[^\d]/g, "") : "");
    const waEls = document.querySelectorAll("#connect-card-whatsapp, #connect-icon-whatsapp, .whatsapp-float, .page-whatsapp-float, .menu-whatsapp, .page-menu-whatsapp");
    waEls.forEach(el => {
      if (waUrl) el.href = waUrl;
    });
    const waTextEl = document.getElementById("connect-whatsapp-text");
    if (waTextEl && (cfg.whatsappNumber || cfg.phone)) {
      waTextEl.textContent = cfg.whatsappNumber || cfg.phone;
    }

    // Instagram
    const instaLinks = document.querySelectorAll("#footer-insta-link, #connect-card-insta, #connect-icon-insta");
    instaLinks.forEach(el => {
      if (cfg.instagramUrl) el.href = cfg.instagramUrl;
    });
    const instaHandles = document.querySelectorAll("#footer-insta-handle, #connect-insta-text");
    instaHandles.forEach(el => {
      if (cfg.instagramHandle) el.textContent = cfg.instagramHandle;
    });

    // Address
    const addrEls = document.querySelectorAll("#footer-address, #connect-address-text");
    addrEls.forEach(el => {
      if (cfg.address) el.textContent = cfg.address;
    });

    // Copyright
    const copyEls = document.querySelectorAll("#footer-copyright, #connect-copyright-text");
    copyEls.forEach(el => {
      if (cfg.copyright) el.textContent = cfg.copyright;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStudioConfig);
  } else {
    applyStudioConfig();
  }
})();
