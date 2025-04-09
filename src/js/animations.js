const preloader = document.querySelector(".preloader");
const header = document.querySelector(".header");
const headerLogo = header.querySelector(".header__logo");
const headerBurgerButton = header.querySelector(".burger-button");
const headerNavigation = header.querySelector(".header__navigation");

document.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;
  preloader.style.top = `${currentScrollPosition}px`;
});

const offset = window.innerHeight;
document.body.style.overflow = "hidden";

function showElement(element) {
  element.classList.remove("hide");
}

window.onload = function () {
  setTimeout(() => {
    preloader.classList.add("hide");
    document.body.style.overflow = "auto";
    showElement(header);
  }, 1000);

  setTimeout(() => {
    showElement(headerLogo);
    showElement(headerNavigation);
    showElement(headerBurgerButton);
  }, 1400);
};

const points = document.querySelectorAll(".ordering-steps__dot");
let currentIndex = 0;

function highlightPoints() {
  points.forEach((point) => point.classList.remove("highlight"));

  points[currentIndex].classList.add("highlight");

  currentIndex = (currentIndex + 1) % points.length;

  setTimeout(highlightPoints, 150);
}

highlightPoints();
