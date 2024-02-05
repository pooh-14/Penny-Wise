import {
  Box,
  Grid,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import PaidTwoToneIcon from "@mui/icons-material/PaidTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import LineChart from "../../LineChart";
import PieChart from "../../Components/PieChart";
import Expenses from "../Expenses/Expenses";
import { API } from "../../Constant/network";

interface expOfMonth {
  _id: null;
  totalAmount: number;
  totalDocuments: number;
}

const HomePage: React.FC = () => {
  const [monthlyExp, setMonthlyExp] = useState<expOfMonth | null>(null);

  const totalMonthlyExp = () => {
    const url = "http://localhost:8000/api/v1/statistics/statistics";
    const token: string | null = JSON.parse(
      localStorage.getItem("userToken") || "null"
    );
    const headers = { Authorization: "Bearer " + token };
    API.get(url,{}, headers)?.subscribe({
      next(response: any) {
        setMonthlyExp(response.totalCount[0]);
        console.log(response, ": response");
        console.log(response.totalCount, ": response.data");
      },
      error(error) {
        console.log(error);
      },
      complete() {
        console.log("complete");
      },
    });
  };

  useEffect(() => {
    totalMonthlyExp();
  }, []);

  console.log(monthlyExp,"---monthlyExp")

  const pprbox = {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0 10px",
  };

  const balicon = {
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #3f2065 0, #d77fc5 100%)",
    color: "white",
  };

  const inicon = {
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #0f4c13 0, #64f752 100%)",
    color: "white",
  };

  const expicon = {
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #0819f4 0, #848cfa 100%)",
    color: "white",
  };

  const savicon = {
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #f45a08 0, #edff22 100%)",
    color: "white",
  };

  const pprstyle = {
    height: "100px",
    backgroundColor: "#272727",
    border: "1px solid #3d3d3d",
    borderRadius: "12px",
    color: "white",
  };

  return (
    <Box sx={{ width: "100%", height: "200%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          margin: "auto",
          paddingTop: "25px",
        }}
      >
        <Box sx={{ width: "95%", margin: "auto" }}>
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  height: "100px",
                  backgroundColor: "#272727",
                  border: "1px solid #3d3d3d",
                  borderRadius: "12px",
                  color: "white",
                }}
              >
                <Box sx={pprbox}>
                  <Box>
                    <AccountBalanceWalletTwoToneIcon sx={balicon} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px" }}>
                      My Balance
                    </Typography>
                    <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                      $0000
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={pprstyle}>
                <Box sx={pprbox}>
                  <Box>
                    <VolunteerActivismTwoToneIcon sx={inicon} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px" }}>Income</Typography>
                    <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                      $00000
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={pprstyle}>
                <Box sx={pprbox}>
                  <Box>
                    <PaidTwoToneIcon sx={expicon} />
                  </Box>
                 
                  <Box>
                  <Typography sx={{ fontSize: "15px" }}>Expenses</Typography>
                  {monthlyExp ? 
                  <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                    ${monthlyExp.totalAmount}
                  </Typography>: null}
                </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={pprstyle}>
                <Box sx={pprbox}>
                  <Box>
                    <SavingsTwoToneIcon sx={savicon} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px" }}>
                      Total Savings
                    </Typography>
                    <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                      $0000
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "95%", margin: "auto", marginTop: "25px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  height: "300px",
                  backgroundColor: "#272727",
                  border: "1px solid #3d3d3d",
                  borderRadius: "12px",
                  color: "white",
                }}
              >
                <Box>
                  <LineChart />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  height: "300px",
                  backgroundColor: "#272727",
                  border: "1px solid #3d3d3d",
                  borderRadius: "12px",
                  color: "white",
                }}
              >
                <Box>
                  <PieChart />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", margin: "auto", marginTop: "25px" }}>
          <Expenses />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
