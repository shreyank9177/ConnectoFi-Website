import { topGiftingPicks, reviews, updates } from "./giftingData.js";
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

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
window.toggleMenu = toggleMenu;
const grid = document.querySelector(".product-grid");

topGiftingPicks.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-image">
      <img src="${product.image}" alt="${product.name}" />
      <div class="big-details">
        <div class="price-tag">${product.price}</div>
        <ul class="features-list">
          ${product.features
            .map(
              (feature) =>
                `<li><span class="checkmark">✓</span> ${feature}</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
    <div class="card-title">
      <div class="product-name">${product.name}</div>
      <button class="buy-button" onclick="window.open('${
        product.link
      }')">Buy on Amazon</button>
    </div>
  `;

  grid.prepend(card);
});

const container = document.querySelector(".reviews-container");

reviews.forEach((review) => {
  const card = document.createElement("div");
  card.className = "review-card";

  // Convert stars number to emoji stars
  const starText = "⭐️".repeat(review.stars);

  card.innerHTML = `
      <div class="platform-name">${review.platform}</div>
      <p class="stars">${starText}</p>
      <p class="review-text">“${review.text}”</p>
    `;

  container.appendChild(card);
});

const updateFeed = document.querySelector(".update-feed");

updates.forEach((update) => {
  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <p>${update.message}</p>
    <img src="${update.image}" alt="${update.alt}" />
  `;

  updateFeed.appendChild(post);
});

document.addEventListener("click", function (event) {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  if (!nav || !hamburger) return;

  const isClickInsideMenu = nav.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (
    window.innerWidth <= 1024 &&
    nav.classList.contains("show") &&
    !isClickInsideMenu &&
    !isClickOnHamburger
  ) {
    nav.classList.remove("show");
  }
});
