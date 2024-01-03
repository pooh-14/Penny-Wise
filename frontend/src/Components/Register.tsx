import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import bgImg from "../Images/loginimage.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Register = () => {
  const outer = {
    width: "100%",
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom right, #423cb4 , #c06ac5, #423cb4)",
    border: "1px solid black",
    fontFamily: "'Poppins', sans-serif",
  };

  const inner = {
    width: "80%",
    height: "80vh",
    backgroundColor: "white",
    // border: "1px solid #c06ac5",
    margin: "auto",
    marginTop: "50px",
    display: "flex",
    // borderRadius: "7px",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.105), -2px 0 10px rgba(0, 0, 0, 0.105)",
  };

  const right = {
    width: { xs: "100%", md: "62%" },
    height: { xs: "45%", md: "100%" },
    backgroundImage: `url(${bgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: { xs: "45%", md: "auto" },
    border: "1px solid red",
  };

  const left = {
    width: { xs: "100%", md: "38%" },
    height:"50vh",
    alignItems: "center",
    border: "1px solid red",
    margin: { xs: "20px 0 0 0 ", md:"auto " },
    padding:{xs:"35px 0 0 0", md:"0"},
    borderRadius:{xs:"30px 30px 0 0", md:"0"},
    backgroundImage:
      {xs:"linear-gradient(135deg, #423cb4 0, #c06ac5, 100%)", md:"none"},
    color:{xs:"white",md:"none"}  
  };

    const heading= {
      textAlign: "center",
      marginTop: { xs: "4%", md: "9%" },
    color: { xs: "black", md: "white" },
      fontSize:"35px",
      fontWeight:"600"
    }

    const subhead={
      textAlign: "center",
      color: { xs: "black", md: "white" },
      fontSize: "17px",
      fontWeight: "500",
      marginTop: { xs: "0", md: "5px" },
    }
    
    const sub={
      textAlign: "center",
      color: { xs: "black", md: "white" },
      fontSize: "19px",
      fontWeight: "500",
      marginTop: { xs: "3px", md: "10px" },
    }

  return (
    <Box sx={outer}>
      <Box sx={inner}>
        <Box sx={right}>
          <Typography sx={heading}>Welcome to Penny-Wise!</Typography>
          <Typography sx={subhead}>Use every Penny Wisely</Typography>
          <Typography sx={sub}>Register Now!</Typography>
        </Box>
        <Box sx={left}>
          <FormControl sx={{ width: "90%" }}>
            <FormControl>
              <TextField
                label="Full Name"
                variant="outlined"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Email"
                variant="outlined"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Password"
                variant="outlined"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Confirm Password"
                variant="outlined"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Button variant="contained">Sign Up</Button>
            <Typography
              variant="body2"
              sx={{ marginTop: "15px", fontSize: "12px" }}
            >
              Already Registered? <b>Sign In</b>
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
