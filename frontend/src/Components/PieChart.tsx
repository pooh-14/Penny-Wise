import React from "react";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const LineChart = () => {

  const data = {
    type: "Pie",
    labels: ["Food", "Shopping", "Rent", "Groceries", "Travel"],
    datasets: [
      {
        label: "Categories",
        data: ["50", "30", "20", "60","40"],
        backgroundColor: [
          "rgba(131, 56, 236)",
          "rgba(251, 86, 7)",
          "rgba(255, 190, 11)",
          "rgba(58, 134, 255)",
          "rgba(86, 11, 173)"
        ],
        borderColor: ["rgba(255, 255, 255)"],
        borderWidth:1,
        tension: 0.4,
        // fill:true
      },
    ],
  };

 

  return (
    <Box sx={{ width: "600px", height: "400px", padding: "5px 0 105px 25px" }}>
      <Pie data={data}></Pie>
    </Box>
  );
};

export default LineChart;
