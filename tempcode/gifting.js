document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".banner-img");
  const fills = document.querySelectorAll(".fill");
  const circles = document.querySelectorAll(".circle");
  const interval = 5000;
  let current = 0;
  let timer;

  function resetProgress() {
    fills.forEach((fill) => {
      fill.style.transition = "none";
      fill.style.width = "0%";
      void fill.offsetWidth;
      fill.style.transition = "width 5s linear";
    });
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      fills[i].style.width = "0%";
    });

    slides[index].classList.add("active");
    fills[index].style.width = "100%";
  }

  function startSlider() {
    resetProgress();
    showSlide(current);

    timer = setInterval(() => {
      current = (current + 1) % slides.length;
      resetProgress();
      showSlide(current);
    }, interval);
  }

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      clearInterval(timer);
      current = index;
      resetProgress();
      showSlide(current);
      startSlider();
    });
  });

  startSlider();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
