import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  BarElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  // const data = {
  //   type:'bar',
  //   labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
  //   datasets: [
  //     {
  //       label: "Weekly Expense",
  //       // data: [
  //       //   {
  //       //     score: 3,
  //       //     rawDate: "Week-1",
  //       //     phase: "A",
  //       //   },
  //       //   {
  //       //     score: 6,
  //       //     rawDate: "Week-2",
  //       //     phase: "B",
  //       //   },
  //       //   {
  //       //     score: 5,
  //       //     rawDate: "Week-3",
  //       //     phase: "C",
  //       //   },
  //       //   {
  //       //     score: 9,
  //       //     rawDate: "Week-4",
  //       //     phase: "D",
  //       //   },
  //       // ],

  //       backgroundColor:(context:any)=>{
  //         const bgColor= [
  //           'blue','red', 'green','yellow'
  //         ]
  //         console.log(context,'-context')
  //       },
  //       pointColor:"red",
  //       pointBorderColor: "white",
  //       // lineBorderColor: "blue",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //   ],

  //   plugins: {
  //     Legend: true,
  //   },

  // };

  // const options = {
  //   // maintainAspectRatio:false,
  //   parsing:{
  //     xAxisKey:'rawDate',
  //     yAxisKey:'score'
  //   },
  //   // scales: {
  //   //   y: {
  //   //     min: 1,
  //   //     // max:15,
  //   //   },
  //   // },
  // };

  const data = {
    type: "Line",
    labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
    datasets: [
      {
        label: "Weekly Expense",
        data: ["50", "30", "20", "60"],
        backgroundColor: [
          "rgba(255, 255, 255,0.2)",
          "rgba(251, 86, 7)",
          "rgba(255, 190, 11)",
          "rgba(58, 134, 255)",
        ],
        borderColor: ["rgba(255, 255, 255)"],
        borderWidth: 1,
        tension: 0.4,
        fill:true
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
      },
    },
  };

  return (
    <Box sx={{ width: "600px", height: "400px", padding: "10px 0 100px 25px" }}>
      {/* <Line data={data} options={options}></Line> */}
      <Line data={data} options={options}></Line>
    </Box>
  );
};

export default LineChart;
