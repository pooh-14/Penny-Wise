import { Box, Button, Fab, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DualBarChart from "./DualBarChart";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const IncomeSavings = () => {
  const inicon = {
    fontSize: "81px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #0f4c13 0, #64f752 100%)",
    color: "white",
  };

  const savicon = {
    fontSize: "81px",
    padding: "11px",
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #f45a08 0, #edff22 100%)",
    color: "white",
  };

  const pprbox = {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 15px",
    alignItems: "center",
    color: "white",
  };

  const pprcss = {
    height: "190px",
    borderRadius: "12px",
    backgroundColor: "#272727",
    border: "1px solid #3d3d3d",
    padding: "10px",
    fontFamily: "Poppins",
  };

  const textbox = {
    width: "57%",
    // border:"1px solid blue",
    height: "100%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
  };

  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              borderRadius: "12px",
              backgroundColor: "#272727",
              border: "1px solid #3d3d3d",
              padding: "15px",
              fontFamily: "Poppins",
            }}
          >
            <Box>
              <Typography>
                Monthly Income v/s Savings Graphical Representation
              </Typography>
              <Box>
                <DualBarChart />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={12}>
              <Paper sx={pprcss}>
                <Box sx={pprbox}>
                  <Box>
                    <VolunteerActivismTwoToneIcon sx={inicon} />
                  </Box>
                  <Box sx={textbox}>
                    <Typography sx={{ fontSize: "25px" }}>Income</Typography>
                    <Typography sx={{ fontSize: "31px", marginTop: "5px" }}>
                      $15000
                    </Typography>
                    <Box sx={{marginTop:"10px", display:"flex",justifyContent:"space-between",width:"70%"}}>
                      <Fab color="primary" sx={{width:"45px", height:"45px"}}>
                        <AddIcon />
                      </Fab>
                      <Fab color="secondary"sx={{width:"45px", height:"45px"}}>
                        <EditIcon />
                      </Fab>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
              <Paper sx={pprcss}>
                <Box sx={pprbox}>
                  <Box>
                    <SavingsTwoToneIcon sx={savicon} />
                  </Box>
                  <Box sx={textbox}>
                    <Typography sx={{ fontSize: "25px" }}>
                      Total Savings
                    </Typography>
                    <Typography sx={{ fontSize: "31px", marginTop: "5px" }}>
                      $5000
                    </Typography>
                    <Box sx={{marginTop:"10px", display:"flex",justifyContent:"space-between",width:"70%"}}>
                      <Fab color="primary" sx={{width:"45px", height:"45px"}}>
                        <AddIcon />
                      </Fab>
                      <Fab color="secondary"sx={{width:"45px", height:"45px"}}>
                        <EditIcon />
                      </Fab>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IncomeSavings;
