const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger-menu");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

const links = document.querySelectorAll(".menu-list>ul>*");

links.forEach((link) =>
  link.addEventListener("click", () => header.classList.remove("active"))
);

let swiper = new Swiper(".swipo", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});
