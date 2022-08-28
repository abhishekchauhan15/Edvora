import React from "react";
import { Chart as ChartJS, BarElement } from "chart.js";

import { Bar } from "react-chartjs-2";

const BarChart = (data) => {
  // console.log(data.data);
  return (
    <div>
      Bar Chart
      <Bar
        data={{
          labels: data.data.map((item) => item.name),
          datasets: [
            {
              label: "stock price",
              data: data.data.map((item) => item.stock),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        width={1100}
        height={700}
      />
    </div>
  );
};

export default BarChart;
