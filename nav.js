const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const body = document.body;
const dropdown = document.getElementById("home-dropdown");
const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

function toggleMenu() {
  const isOpen = navMenu.classList.contains("active");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("menu-open");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");
  hamburger.setAttribute("aria-expanded", "false");
  dropdown.classList.remove("active");
}

function handleDropdown(e) {
  if (window.innerWidth < 1024) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
}

function handleOutsideClick(e) {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);
dropdownToggle.addEventListener("click", handleDropdown);
window.addEventListener("click", handleOutsideClick);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    if (navMenu.classList.contains("active")) {
      closeMenu();
    }
  }
});
