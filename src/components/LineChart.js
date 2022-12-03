import React from "react";
import './styles.css';
import {Line}  from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
Chart.register(CategoryScale);
Chart.register(...registerables);
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "New Signups",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Revenue",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Product sales",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Active learners",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function LineChart() {
  return (
    <div className="LineChart">
      <Line data={data} />
    </div>
  );
}
