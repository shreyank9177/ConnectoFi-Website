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
      // Force reflow to restart animation
      void fill.offsetWidth;
    });
  }

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    resetProgress();
    fills[index].style.transition = `width ${interval}ms linear`;
    fills[index].style.width = "100%";

    current = index;
  }

  function startAutoSlide() {
    showSlide(current);
    timer = setInterval(() => {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }, interval);
  }

  function jumpToSlide(index) {
    clearInterval(timer);
    showSlide(index);
    startAutoSlide();
  }

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      jumpToSlide(index);
    });
  });

  startAutoSlide();
});