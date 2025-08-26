const toggleButton = document.getElementById("theme-toggle");

document.documentElement.classList.add("no-transition");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.classList.add(savedTheme + "-mode");

window.addEventListener("load", () => {
  document.documentElement.classList.remove("no-transition");
});

toggleButton.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    document.documentElement.classList.remove("dark-mode");
    document.documentElement.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove("light-mode");
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-countto"));
      const duration = parseInt(counter.getAttribute("data-duration"));
      let start = 0;
      const stepTime = 20; // update every 20ms
      const step = target / (duration / stepTime);
      const updateCounter = () => {
        start += step;
        if (start < target) {
          counter.textContent = Math.floor(start);
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  });
