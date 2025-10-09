// Helper to get CSS variable
function cssVar(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

// Chart options factory (dynamic colors & font)
function getChartOptions(isBar = true) {
  const isDarkMode = document.documentElement.classList.contains("dark-mode");

  return {
    responsive: true,
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
          display: isBar ? true : false,
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

// Old Charts
const ctxMembership = document
  .getElementById("membershipChart")
  .getContext("2d");
let membershipChart = new Chart(ctxMembership, {
  type: "line",
  data: {
    labels: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា"],
    datasets: [
      {
        label: "សិស្ស",
        data: [20, 100, 180, 220, 280, 350],
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13, 110, 253, 0.2)",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: getChartOptions(),
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

const ctxShop = document.getElementById("shopChart").getContext("2d");
let shopChart = new Chart(ctxShop, {
  type: "line",
  data: {
    labels: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា"],
    datasets: [
      {
        label: "ចំណូលប្រចាំខែ",
        data: [8500, 9500, 11000, 10000, 12000, 13000],
        borderColor: "#ffc107",
        backgroundColor: "rgba(255, 193, 7, 0.25)",
        pointBackgroundColor: "#ffc107",
        pointBorderColor: "#ffc107",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: getChartOptions(),
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

const ctxSports = document.getElementById("sportsChart").getContext("2d");
let sportsChart = new Chart(ctxSports, {
  type: "bar",
  data: {
    labels: [
      "បាល់ទាត់",
      "រត់ប្រណាំង",
      "បាល់បោះ",
      "ជិះកង់",
      "បាល់ទះ",
      "ការ៉ាតេ",
      "ហែលទឹក",
      "វាយសី",
    ],
    datasets: [
      {
        label: "ចំនួនសិស្សក្នុងកីឡា",
        data: [142, 98, 125, 76, 87, 64, 92, 58],
        backgroundColor: [
          "#4cc9f0",
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

const ctxItems = document.getElementById("itemsChart").getContext("2d");
let itemsChart = new Chart(ctxItems, {
  type: "bar",
  data: {
    labels: [
      "អាវកីឡា",
      "ស្បែកជើង",
      "កាបូប",
      "គ្រឿងបន្ថែម",
      "មួក",
      "ស្រោមដៃ",
      "អាវក្រៅ",
      "ស្រោមជើង",
    ],
    datasets: [
      {
        label: "ចំនួនលក់ក្នុងហាង",
        data: [50, 80, 120, 30, 60, 40, 70, 20],
        backgroundColor: [
          "#ffc107",
         
        ],
        borderColor: [
          "#ffc107",
          "#4caf50",
          "#03a9f4",
          "#ff5722",
          "#9c27b0",
          "#ffc107",
          "#4caf50",
          "#03a9f4",
        ],
        borderWidth: 1,
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

// Top Selling Products (Donut)
const ctxTopProducts = document
  .getElementById("topProductsChart")
  .getContext("2d");
let topProductsChart = new Chart(ctxTopProducts, {
  type: "doughnut",
  data: {
    labels: ["អាវកីឡា", "ស្បែកជើង", "កាបូប", "មួក"],
    datasets: [
      {
        label: "ទំនិញលក់បានច្រើន",
        data: [120, 90, 75, 60],
        backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#9966ff"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    ...getChartOptions(true),
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Noto Serif Khmer', serif",
            size: 14,
          },
          color: cssVar("--text-prime"),
        },
      },
    },
  },
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

// Daily Sales (Line)
const ctxDaily = document.getElementById("dailySalesChart").getContext("2d");
let dailySalesChart = new Chart(ctxDaily, {
  type: "line",
  data: {
    labels: [
      "ច័ន្ទ",
      "អង្គារ",
      "ពុធ",
      "ព្រហស្បតិ៍",
      "សុក្រ",
      "សៅរ៍",
      "អាទិត្យ",
    ],
    datasets: [
      {
        label: "ការលក់ប្រចាំថ្ងៃ",
        data: [350, 520, 680, 460, 1560, 1600, 2250],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.25)",
        pointBackgroundColor: "#28a745",
        pointBorderColor: "#28a745",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: getChartOptions(),
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

// Top Event Participants (Pie)
const ctxEventParticipants = document
  .getElementById("eventParticipantsChart")
  .getContext("2d");
let eventParticipantsChart = new Chart(ctxEventParticipants, {
  type: "doughnut",
  data: {
    labels: ["បាល់ទាត់", "រត់ប្រណាំង", "បាល់បោះ", "ហែលទឹក", "ការ៉ាតេ"],
    datasets: [
      {
        label: "ចំនួនអ្នកចូលរួមក្នុងព្រឹត្តិការណ៍",
        data: [90, 60, 35, 25, 70],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#4bc0c0",
          "#9966ff",
          "#ffc107",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    ...getChartOptions(true),
    plugins: {
      legend: {
        labels: {
          font: { family: "'Noto Serif Khmer', serif", size: 14 },
          color: cssVar("--text-prime"),
        },
      },
    },
  },
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

// Monthly Event Participation (Line)
const ctxMonthlyEvent = document
  .getElementById("monthlyEventChart")
  .getContext("2d");
let monthlyEventChart = new Chart(ctxMonthlyEvent, {
  type: "line",
  data: {
    labels: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា"],
    datasets: [
      {
        label: "ចំនួនអ្នកចូលរួមប្រចាំខែ",
        data: [250, 320, 460, 320, 145, 472],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.25)",
        pointBackgroundColor: "#28a745",
        pointBorderColor: "#28a745",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: getChartOptions(),
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


// Add this chart to update on theme change
function updateCharts() {
  [
    membershipChart,
    shopChart,
    sportsChart,
    itemsChart,
    topProductsChart,
    dailySalesChart,
    eventParticipantsChart,
    monthlyEventChart,
  ].forEach((chart) => {
    chart.options = getChartOptions(chart.config.type === "bar");
    chart.update("active");
  });
}
