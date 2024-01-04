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

const HomePage = () => {

  const pprbox={
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0 30px",
  }

  const balicon={
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(135deg, #3f2065 0, #d77fc5 100%)",
    color: "white",
  }

  const inicon={
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(135deg, #0f4c13 0, #64f752 100%)",
    color: "white",
  }

  const expicon={
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(135deg, #0819f4 0, #848cfa 100%)",
    color: "white",
  }

  const savicon={
    fontSize: "61px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(135deg, #f45a08 0, #edff22 100%)",
    color: "white",
  }

  return (
    <Box sx={{ width: "95%", margin: "auto", marginTop: "25px" }}>
      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ height: "100px", backgroundColor: "lightblue" }}>
              <Box
                sx={pprbox}
              >
                {/* <Box>
                  <AccountBalanceWalletTwoToneIcon
                    sx={balicon}
                  />
                </Box> */}
                <Box>
                  <Typography sx={{ fontSize: "19px" }}>My Balance</Typography>
                  <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                    $5000
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ height: "100px", backgroundColor: "lightblue" }}>
              <Box
                sx={pprbox}
              >
                {/* <Box>
                  <VolunteerActivismTwoToneIcon
                    sx={inicon}
                  />
                </Box> */}
                <Box>
                  <Typography sx={{ fontSize: "19px" }}>Income</Typography>
                  <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                    $15000
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ height: "100px", backgroundColor: "lightblue" }}>
              <Box
                sx={pprbox}
              >
                {/* <Box>
                  <PaidTwoToneIcon
                    sx={expicon}
                  />
                </Box> */}
                <Box>
                  <Typography sx={{ fontSize: "19px" }}>Expenses</Typography>
                  <Typography sx={{ fontSize: "21px", marginTop: "5px" }}>
                    $10000
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ height: "100px", backgroundColor: "lightblue" }}>
              <Box
                sx={pprbox}
              >
                {/* <Box>
                  <SavingsTwoToneIcon
                    sx={savicon}
                  />
                </Box> */}
                <Box>
                  <Typography sx={{ fontSize: "19px" }}>
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
            <Paper sx={{ height: "300px", backgroundColor: "lightblue" }}>
              <Box>expense-graph-weekly</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ height: "300px", backgroundColor: "lightblue" }}>
              <Box>pie-chart- category</Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ border: "1px solid blue", marginTop: "25px" }}>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Sr No.</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Payment Mode</TableCell>
            </TableRow>
          </TableHead>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
