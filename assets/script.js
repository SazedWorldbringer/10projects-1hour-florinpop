// mobile menu
const navMenu = document.querySelector(".nav-menu");
const navToggleBtn = document.querySelector(".nav-toggle");

function mobileMenu() {
  navMenu.classList.toggle("show-menu");
}

navToggleBtn.addEventListener("click", mobileMenu);

// hide menu when a link is clickded
const navItem = document.querySelectorAll(".item-link");

function hideMenu() {
  navMenu.classList.remove("show-menu");
}

navItem.forEach((n) => n.addEventListener("click", hideMenu));
