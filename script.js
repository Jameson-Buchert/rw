const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__link--list");

if (hamburger && navList) {
  const setMenuOpen = (open) => {
    hamburger.classList.toggle("active", open);
    navList.classList.toggle("active", open);
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  hamburger.addEventListener("click", () => {
    setMenuOpen(hamburger.getAttribute("aria-expanded") !== "true");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && hamburger.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      hamburger.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.matchMedia("(max-width: 768px)").addEventListener("change", () => {
    setMenuOpen(false);
  });
}
