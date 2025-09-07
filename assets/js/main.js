// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll effect
const header = document.getElementById("site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("open");
});
