import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
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
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);
const DualBarChart = () => {
    const data = {
        type: "Bar",
        labels: ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug","Sept", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            data: ["15000", "15000", "15000", "15000", "25000", "25000", "25000", "25000", "25000", "25000", "30000", "30000"],
            backgroundColor:'#00a8e8',
            tension: 0.4,
            fill:true
          },
          {
            label:"Savings",
            data:["5000","5000","5000","5000","10000","10000","7000","10000","10000","15000","10000","15000"],
            backgroundColor: '#70e000',
          }
        ]
      };
    
      const options = {
        scales: {
          y: {
            min: 1000,
            max:30000
          },
        },
      };
    
      return (
        <Box sx={{ width: "100%",padding:"15px 15px 10px 10px", margin:"auto" }}>
          <Bar data={data} options={options}></Bar>
        </Box>
      );
}

export default DualBarChart