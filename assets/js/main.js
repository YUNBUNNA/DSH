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

// Animated Counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute("data-countto"), 10) || 0;
    const duration = parseInt(el.getAttribute("data-duration"), 10) || 2000;
    const startValue = parseInt(el.textContent, 10) || 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(startValue + (target - startValue) * progress);
      el.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(tick);
  };

  // IntersectionObserver if supported
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target); // run once
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => io.observe(c));
  } else {
    // fallback for old browsers: simple scroll check
    const isInView = el => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const onScroll = () => {
      counters.forEach(el => {
        if (!el.dataset.countStarted && isInView(el)) {
          animateCount(el);
          el.dataset.countStarted = "true";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
  }
});
