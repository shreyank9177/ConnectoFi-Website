// about.js

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// Optional: Close nav menu if user clicks outside on small screens
document.addEventListener("click", function (event) {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  const isClickInsideMenu = nav.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (
    window.innerWidth <= 1024 &&
    nav.style.display === "flex" &&
    !isClickInsideMenu &&
    !isClickOnHamburger
  ) {
    nav.style.display = "none";
  }
});
