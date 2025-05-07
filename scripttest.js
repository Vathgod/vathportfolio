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
