const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".mobile-overlay");
const body = document.body;
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const mobileLinks = document.querySelectorAll(
  ".mobile-nav .nav-link:not(.dropdown-toggle)",
);
const subLinks = document.querySelectorAll(".mobile-nav .dropdown-content a");

function toggleMenu() {
  const isOpen = hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("menu-open");
  hamburger.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  hamburger.classList.remove("active");
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = toggle.closest(".nav-item");
    parent.classList.toggle("open");
  });
});

[...mobileLinks, ...subLinks].forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && body.classList.contains("menu-open")) {
    closeMenu();
  }
});
