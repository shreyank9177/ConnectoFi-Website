document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top on page load
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Header shrink effect on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "0.5rem 2rem";
      header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
      header.style.padding = "1rem 2rem";
      header.style.boxShadow = "none";
    }
  });

  // Typing animation in hero section
  const tagline = document.querySelector(".hero-content p");
  const fullText = "Eat Smart. Write Well. Gift Better.";
  let index = 0;

  function typeText() {
    if (index < fullText.length) {
      tagline.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeText, 80);
    }
  }
  tagline.textContent = "";
  typeText();

  // Button ripple effect
  document.querySelectorAll(".cta-button, .category-card a").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      const x = e.clientX - this.getBoundingClientRect().left;
      const y = e.clientY - this.getBoundingClientRect().top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Intersection Observer for highlight cards
  const cards = document.querySelectorAll(".highlight-card, .value-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    observer.observe(card);
  });


  // Optional: Back to top button
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: #e52e71;
    color: white;
    border: none;
    padding: 12px;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 1000;
    display: none;
  `;
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
