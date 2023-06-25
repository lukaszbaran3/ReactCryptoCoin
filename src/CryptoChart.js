import React, { useState, useEffect } from "react";
import "./css/CryptoChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CryptoChart({ coinId }) {
  const [chartData, setChartData] = useState([]);
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  });
  const coinName = coinId.toLowerCase();
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinName}`
        );
        const data = await response.json();
        console.log(data);

        const time = data.chart.map((time) => time[0]);
        const price = data.chart.map((price) => price[1]);

        setChartData({
          labels: time,
          datasets: [
            {
              label: `${coinId} Price $`,
              data: price,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCryptos();
  }, []);

  return (
    <div className="chart">
      {chartData.labels ? <Line data={chartData} options={options} /> : null}
    </div>
  );
}

export default CryptoChart;
