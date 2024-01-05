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
import React from "react";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import PaidTwoToneIcon from "@mui/icons-material/PaidTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import LineChart from "./LineChart";

const HomePage = () => {
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
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Box sx={{ width: "95%", margin: "auto", paddingTop: "25px" }}>
        <Box>
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
                      $5000
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
                      $15000
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
                    <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                      $10000
                    </Typography>
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
                      $5000
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "25px" }}>
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
                  <LineChart/>
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
                <Box>pie-chart- category</Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ border: "1px solid blue", marginTop: "25px", color: "white" }}
        >
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Sr No.</TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Date
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Category
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Amount
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Payment Mode
                </TableCell>
              </TableRow>
            </TableHead>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
