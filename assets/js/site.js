(() => {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const header = document.querySelector(".site-header");

  if (menuButton && navigation && header) {
    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      header.classList.toggle("is-menu-open", !isOpen);
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    });

    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const configuredNumber = String(window.ALIF_SITE_CONFIG?.whatsappNumber || "").replace(/\D/g, "");
  document.querySelectorAll("[data-whatsapp-inquiry]").forEach((link) => {
    const message = link.dataset.whatsappMessage || "Hello, I would like to contact Alif Laam Meem Jewellers.";

    if (configuredNumber) {
      link.href = `https://wa.me/${configuredNumber}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();
      const status = document.querySelector("[data-whatsapp-status]");
      if (!status) return;
      status.hidden = false;
      status.textContent = "Add the shop WhatsApp number in assets/js/site-config.js to activate inquiries.";
      status.focus?.();
    });
  });
})();
