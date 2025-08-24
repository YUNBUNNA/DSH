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
