import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const image = new Image();
image.src = "/images/pattern.png";

export default function BarChart({ period = "daily", style, theme }) {
  const statistics = {
    yearly: {
      labels: ["2021", "2022", "2023", "2024"],
      expense: {
        data: [30326.98, 16887.24, 31469.14, 38745.67],
      },
      income: {
        data: [32876.98, 24567.04, 41579.14, 37290.5],
      },
    },
    monthly: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      expense: {
        data: [1200.45, 1150.99, 1350.56, 1420.32, 980.89, 2100.72, 1300.23, 1100.1, 1400.67, 950.3, 2050.44],
      },
      income: {
        data: [2480.3, 2400.75, 2480.88, 2000.9, 1050.25, 2150.6, 2480.45, 1180.99, 2400.5, 1000.15, 100.9],
      },
    },
    daily: {
      labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      expense: {
        data: [60.45, 120.65, 110.23, 150.32, 90.99, 150.32, 250.32],
      },
      income: {
        data: [140.1, 15.75, 0.2, 25.5, 150, 400, 0],
      },
    },
  };

  function selectPeriodData(period) {
    const labels = statistics[period].labels;
    const expenseData = statistics[period].expense.data;
    const incomeData = statistics[period].income.data;
    return { labels, expenseData, incomeData };
  }

  const { labels, expenseData, incomeData } = selectPeriodData(period);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expense",
        data: expenseData,
        // backgroundColor: "#272727", // Bar color
        backgroundColor: style[theme].expenseBarColor, // Bar color
        // borderColor: "#272727", // Border color for bars
        borderWidth: 0,
        borderRadius: 0, // Rounded corners for bars
        barThickness: 8,
      },
      {
        label: "Income",
        data: incomeData,
        backgroundColor: style[theme].incomeBarColor, // Bar color
        // backgroundColor: (context) => {
        //   const chart = context.chart;
        //   const { ctx } = chart;
        //   const pattern = ctx.createPattern(image, "repeat");
        //   return pattern;
        // },
        // borderColor: "#00cb8b", // Border color for bars
        borderWidth: 0,
        borderRadius: 0, // Rounded corners for bars
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "start",
        labels: {
          boxWidth: 12,
          padding: 10,
          // usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          borderWidth: 0,
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderWidth: 0,
          drawBorder: false,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
