// // CLASS

// const targets = document.querySelectorAll(".ani");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const target = entry.target;
//       if (entry.isIntersecting) {
//         target.classList.add("opacity-100", "blur-0");
//         target.classList.remove("opacity-0", "blur-md");
//       } else {
//         target.classList.remove("opacity-100", "blur-0");
//         target.classList.add("opacity-0", "blur-md");
//       }
//     });
//   },
//   {
//     threshold: 0,
//   }
// );

// targets.forEach((target) => {
//   observer.observe(target);
// });

const targets = document.querySelectorAll(".ani");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        target.classList.add("opacity-100", "translate-y-0", "blur-0");
        target.classList.remove("opacity-0", "translate-y-10", "blur-md");
      } else {
        target.classList.remove("opacity-100", "translate-y-0", "blur-0");
        target.classList.add("opacity-0", "translate-y-10", "blur-md");
      }
    });
  },
  { threshold: 0 }
);

targets.forEach((target) => {
  observer.observe(target);
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// hide & show
function hidNav() {
  const nav = document.getElementById("#hide");
  nav.style.display = "none";
}
function showNav() {
  const nav = document.getElementById("#hide");
  nav.style.display = "flex";
}

const sections = document.querySelectorAll("section[id]");

const sideNavLinks = document.querySelectorAll("#side-nav a");
const sideNav = document.getElementById("side-nav");
const updateActiveLink = () => {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  // Update main navigation
  navLinks.forEach((link) => link.classList.remove("active"));
  if (navLinks[index]) {
    navLinks[index].classList.add("active");
  }

  // Update side navigation
  sideNavLinks.forEach((link) => link.classList.remove("active"));
  if (sideNavLinks[index]) {
    sideNavLinks[index].classList.add("active");
  }
};

// Initial call and on scroll
updateActiveLink();
window.addEventListener("scroll", updateActiveLink);
