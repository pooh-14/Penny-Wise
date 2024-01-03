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
    width: "62%",
    backgroundImage: `url(${bgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

    const heading= {
      textAlign: "center",
      marginTop: "9%",
      color: "white",
      fontSize:"35px",
      fontWeight:"600"
    }

    const subhead={
        textAlign: "center",
          color: "white",
          fontSize:"17px",
          fontWeight:"500",
          marginTop:"5px"
    }
    
    const sub={
        textAlign: "center",
          color: "white",
          fontSize:"19px",
          fontWeight:"400",
          marginTop:"10px"
    }

  return (
    <Box sx={outer}>
      <Box sx={inner}>
        <Box sx={right}>
          <Typography sx={heading}>Welcome to Penny-Wise!</Typography>
          <Typography sx={subhead}>Use every Penny Wisely</Typography>
          <Typography sx={sub}>Register Now!</Typography>
        </Box>
        <Box sx={{ width: "38%", alignItems: "center", margin: "auto" }}>
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
