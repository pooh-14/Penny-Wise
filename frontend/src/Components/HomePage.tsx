import { Box, Grid, Paper, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box sx={{width:"97%", margin:"auto",marginTop:"20px"}}>
      <Box >
        <Grid container spacing={{xs:1,sm:2,md:3}}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{height:"100px",backgroundColor:"lightblue"}}>
            <Box>
              <Typography>My Balance</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{height:"100px",backgroundColor:"lightblue"}}>
            <Box>
              <Typography>Income</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{height:"100px",backgroundColor:"lightblue"}}>
            <Box>
              <Typography>Expenses</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{height:"100px",backgroundColor:"lightblue"}}>
            <Box>
              <Typography>Total Savings</Typography>
            </Box>
          </Paper>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop:"20px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper sx={{height:"300px",backgroundColor:"lightblue"}}>
              <Box>
                expense-graph-weekly
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <Paper sx={{height:"300px",backgroundColor:"lightblue"}}>
              <Box>
                pie-chart- category
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{border:"1px solid blue",marginTop:"20px"}}>
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
