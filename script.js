const target = document.querySelector("#ani1");

const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("opacity-100", "blur-0");
        target.classList.remove("opacity-0", "blur-md");
      } else {
        target.classList.remove("opacity-100", "blur-0");
        target.classList.add("opacity-0", "blur-md");
      }
    });
  },
  {
    threshold: 0,
  }
);
observer1.observe(target);

const target2 = document.querySelector("#ani0");
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target2.classList.add("opacity-100", "blur-0");
        target2.classList.remove("opacity-0", "blur-md");
      } else {
        target2.classList.remove("opacity-100", "blur-0");
        target2.classList.add("opacity-0", "blur-md");
      }
    });
  },
  {
    threshold: 0,
  }
);
observer2.observe(target2);

const target3 = document.querySelector("#ani2");
const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target3.classList.add("opacity-100", "blur-0");
        target3.classList.remove("opacity-0", "blur-md");
      } else {
        target3.classList.remove("opacity-100", "blur-0");
        target3.classList.add("opacity-0", "blur-md");
      }
    });
  },
  {
    threshold: 0,
  }
);
observer3.observe(target3);

const target4 = document.querySelector("#ani3");
const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target4.classList.add("opacity-100", "blur-0");
        target4.classList.remove("opacity-0", "blur-md");
      } else {
        target4.classList.remove("opacity-100", "blur-0");
        target4.classList.add("opacity-0", "blur-md");
      }
    });
  },
  {
    threshold: 0,
  }
);
observer4.observe(target4);
