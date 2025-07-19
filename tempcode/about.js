document.addEventListener("DOMContentLoaded", () => {
  // Typing effect inside span
  const heroPara = document.querySelector(".hero-about p");
  const fullText =
    "At ConnectoFi, we believe in making your life easier — whether you're writing, gifting, or fueling your day.";

  // Replace original text with span
  if (heroPara) {
    const span = document.createElement("span");
    span.classList.add("typewriter");
    heroPara.innerHTML = ""; // clear content
    heroPara.appendChild(span);

    let index = 0;
    function typeEffect() {
      if (index <= fullText.length) {
        span.innerHTML =
          fullText.substring(0, index) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeEffect, 30);
      } else {
        span.innerHTML = fullText; // Remove cursor
      }
    }
    typeEffect();
  }

  // Scroll Reveal
  const revealElements = document.querySelectorAll(
    ".about-section, .mission-vision .card, .value-card, .team-member"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial call

//   // Theme Toggle
//   const toggleBtn = document.createElement("button");
//   toggleBtn.innerText = "🌓 Theme";
//   Object.assign(toggleBtn.style, {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     padding: "10px 16px",
//     border: "none",
//     borderRadius: "8px",
//     background: "#6a11cb",
//     color: "#fff",
//     cursor: "pointer",
//     boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
//     zIndex: 1000,
//   });

//   document.body.appendChild(toggleBtn);
//   let darkMode = false;
//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-theme");
//     darkMode = !darkMode;
//     toggleBtn.innerText = darkMode ? "☀️ Light" : "🌓 Theme";
//   });
});
