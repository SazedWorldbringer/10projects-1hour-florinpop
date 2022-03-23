// mobile menu
const navMenu = document.querySelector(".nav-menu");
const navToggleBtn = document.querySelector(".nav-toggle");

function mobileMenu() {
  navMenu.classList.toggle("show-menu");
}

navToggleBtn.addEventListener("click", mobileMenu);

// scroll header
