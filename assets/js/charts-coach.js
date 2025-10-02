// Helper to get CSS variable
function cssVar(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

// Chart options factory
function getChartOptions(isBar = true) {
  const isDarkMode = document.documentElement.classList.contains("dark-mode");
  return {
    responsive: true,
    maintainAspectRatio: false, // IMPORTANT: chart fills container
    plugins: {
      legend: {
        labels: {
          font: { family: "'Noto Serif Khmer', serif", size: 14 },
          color: cssVar("--text-prime"),
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: isDarkMode ? "#ffffff" : "#000000",
        titleFont: { family: "'Noto Serif Khmer', serif", size: 14 },
        bodyFont: { family: "'Noto Serif Khmer', serif", size: 12 },
        titleColor: isDarkMode ? "#000000" : "#ffffff",
        bodyColor: isDarkMode ? "#000000" : "#ffffff",
      },
    },
    scales: {
      x: {
        offset: isBar,
        ticks: {
          font: { family: "'Noto Serif Khmer', serif", size: 12 },
          color: cssVar("--text-prime"),
          maxRotation: 0,
          minRotation: 0,
          align: "center",
          padding: isBar ? 10 : 0,
        },
        grid: {
          color: isBar ? cssVar("--text-second") : "transparent",
          display: isBar,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { family: "'Noto Serif Khmer', serif", size: 12 },
          color: cssVar("--text-prime"),
        },
        grid: { color: cssVar("--text-second"), borderDash: [5, 5] },
      },
    },
  };
}

// Membership Chart
const ctxMembership = document
  .getElementById("membershipChart")
  .getContext("2d");
let membershipChart = new Chart(ctxMembership, {
  type: "line",
  data: {
    labels: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា"],
    datasets: [
      {
        label: "ប្រាក់ចំណូល",
        data: [250, 300, 450, 650, 800, 1000],
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13, 110, 253, 0.2)",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: getChartOptions(),
});


const ctxStudents = document.getElementById("studentsChart").getContext("2d");
let studentsChart = new Chart(ctxStudents, {
  type: "bar",
  data: {
    labels: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា"],
    datasets: [
      {
        label: "ចំនួនសិស្ស",
        data: [142, 98, 125, 76, 87, 64, 92, 58],
        backgroundColor: [
          "#4361ee",
        ],
      },
    ],
  },
  options: getChartOptions(true),
  plugins: [
    {
      id: "legendMargin",
      beforeInit(chart) {
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
          fitValue.bind(chart.legend)();
          this.height += 20;
        };
      },
    },
  ],
});

// Optional: update charts on theme change
function updateCharts() {
  [membershipChart, studentsChart].forEach((chart) => {
    chart.options = getChartOptions(chart.config.type === "bar");
    chart.update("active");
  });
}
