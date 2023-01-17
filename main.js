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

const solutions = [
  `Exams are just a part of life and life is much more than exams. As it is said a piece of paper cannot decide your future. Exams can have a large impact in everyone’s life but it should not be a reason to end one’s life. There are ample of opportunity in life. One might fail in one exam but at the same time one must realize that it is not the end of life. Finding motivation can be hard during this time. Everyone should have an aim in life and start working steadily towards it. 

Today there are lot of competitive exams that students are preparing and take a lot of stress about it. Many students think they have less time for preparation and get depressed. They think about the results and think whether or not they will be able to crack the examination, but we should not think about the results rather should work or focus on the thing that is in our hand that is preparation. We should honestly prepare and leave the rest in the hand of god. Why think about something that is not in our hand. 

Education is not always about taking stress; it is for the upliftment of our mindset so that we will be a better human being and contribute positively to our society. `,
];

const userInput = document.querySelector("#user-input");
const submit_btn = document.querySelector("#submit-btn");
const help_section = document.querySelector(".popUp");
const userProblem_dom = document.querySelector(".user-problem");
const Our_solutions = document.querySelector(".solutions");
const close_btn = document.querySelector(".close-btn");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let userProblem = userInput.value;

  const paste_content = (i) => {
    userProblem_dom.textContent = userProblem;
    Our_solutions.innerText = solutions[i];
    help_section.style.display = "block";
  };

  if (
    userProblem.match(/exam/gi) ||
    userProblem.match(/study/gi) ||
    userProblem.match(/education/gi)
  ) {
    paste_content(0);
  }
});

close_btn.addEventListener("click", () => {
  help_section.style.display = "none";
});
