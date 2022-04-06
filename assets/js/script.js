"use strict";
/* Show Mobile Menu*/
const showMenu = (toggleEl, navEl) => {
  const toggle = document.getElementById(toggleEl);
  const navMenu = document.getElementById(navEl);

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show__menu");
  });
};

showMenu("nav-toggle", "nav__menu");

/* Remove Mobile Menu */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show__menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Active Link While Scrolling Sections */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);


