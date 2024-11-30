import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
      label: "Expense",
      // label: false,
      data: [1236, 1034, 1090, 1460, 880, 2100, 1236, 1034, 1090, 1460, 880, 2100],
      fill: false, // Графік без заливки під лінією
      borderColor: "#FF5C33", // Колір лінії
      borderDash: [5, 5],
      borderWidth: 2,
      tension: 0.4, // Параметр інтерполяції (0.4 створює плавну лінію)
      // pointStyle: false,
      // pointStyle: 'circle',
      pointRadius: 6, // Постійний розмір точки для наведення
      pointBackgroundColor: "rgba(0, 0, 0, 0)", // Прозорий фон за замовчуванням
      pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // Колір заливки при наведенні
      pointHoverRadius: 6, // Той самий розмір при наведенні
      pointBorderWidth: 1,
      pointBorderColor: "rgba(0, 0, 0, 0)", // Легка рамка, щоб точка була помітною при наведенні
    },
    {
      label: "Income",
      data: [1692, 1134, 1402, 489, 1278, 1270, 864, 971, 1679, 1765, 2310, 1883],
      fill: true, // Графік без заливки під лінією
      backgroundColor: "#00cb8b73", // Колір лінії
      borderWidth: 0,
      tension: 0.4, // Параметр інтерполяції (0.4 створює плавну лінію)
      // pointStyle: false,
      pointRadius: 6, // Постійний розмір точки для наведення
      pointBackgroundColor: "rgba(0, 0, 0, 0)", // Прозорий фон за замовчуванням
      pointHoverBackgroundColor: "#272727", // Колір заливки при наведенні
      pointHoverRadius: 6, // Той самий розмір при наведенні
      // pointBorderWidth: 1,
      pointBorderColor: "rgba(0, 0, 0, 0)", // Легка рамка, щоб точка була помітною при наведенні
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      // position: "top",
      display: false,
    },
    // title: {
    //   display: false,
    //   text: "",
    // },
  },
  scales: {
    x: {
      // title: {
      //   display: false,
      //   text: "Month",
      // },
      grid: {
        drawBorder: false, // axis border
      },
      border: {
        display: false, // borders
      },
    },
    y: {
      // title: {
      //   display: false,
      //   text: "Expence ($)",
      // },
      ticks: {
        display: false, // labels on Y
      },
      grid: {
        display: false, // grind on X
        borderWidth: 0, // border X
        drawBorder: false, // border Y
      },
      border: {
        display: false, // border X
      },
      beginAtZero: true,
    },
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
