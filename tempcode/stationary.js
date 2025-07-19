document.addEventListener("DOMContentLoaded", () => {
  // === Banner Slider ===
  const slides = document.querySelectorAll(".banner-slider picture");

  const fills = document.querySelectorAll(".fill");
  const circles = document.querySelectorAll(".circle");
  const interval = 5000;
  let current = 0;
  let timer;

  function resetProgress() {
    fills.forEach((fill) => {
      fill.style.transition = "none";
      fill.style.width = "0%";
      void fill.offsetWidth; // Force reflow
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

  // === Scroll Reveal ===
  // const revealItems = document.querySelectorAll(
  //   ".card, .range-card, .post, .review-card"
  // );

  // const revealOnScroll = () => {
  //   const triggerBottom = window.innerHeight * 0.9;
  //   revealItems.forEach((el) => {
  //     const boxTop = el.getBoundingClientRect().top;
  //     if (boxTop < triggerBottom) {
  //       el.style.opacity = "1";
  //       el.style.transform = "translateY(0)";
  //       el.style.transition = "all 0.6s ease-out";
  //     }
  //   });
  // };

  // Initial state
  // revealItems.forEach((el) => {
  //   el.style.opacity = "0";
  //   el.style.transform = "translateY(50px)";
  // });

  // window.addEventListener("scroll", revealOnScroll);
  // revealOnScroll();

  // === Back to Top Button ===
  const backBtn = document.createElement("button");
  backBtn.textContent = "↑";
  Object.assign(backBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#2575fc",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
    display: "none",
    zIndex: "999",
    transition: "opacity 0.3s",
  });
  document.body.appendChild(backBtn);

  window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Product Card Click Expand (for mobile or small screens) ===
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        card.classList.toggle("expanded");
      }
    });
  });

  // === Animated Page Load ===
  // document.body.style.opacity = "0";
  // document.body.style.transition = "opacity 0.6s ease-in";
  // setTimeout(() => {
  //   document.body.style.opacity = "1";
  // }, 50);
});

const menuToggle = document.getElementById("menu-toggle");
const dropdownNav = document.getElementById("dropdown-nav");

menuToggle.addEventListener("click", () => {
  dropdownNav.classList.toggle("show");
});
