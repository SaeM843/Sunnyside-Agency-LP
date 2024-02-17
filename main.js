const mobileNavButon = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");

function displayMobileNav() {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
  } else {
    mobileNav.classList.add("active");
  }
}

mobileNavButon.addEventListener("click", displayMobileNav);
