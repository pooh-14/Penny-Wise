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
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import xsBgImg from "../Images/loginimagetwo.jpg";

const Login = () => {
  const router = useNavigate();

  const outer = {
    width: "100%",
    height: "100vh",
    backgroundImage:
      "linear-gradient(to bottom right, #423cb4 , #c06ac5, #423cb4)",
    border: "1px solid white",
    fontFamily: "'Poppins', sans-serif",
  };

  const inner = {
    width: { xs: "100%", md: "80%" },
    height: { xs: "100vh", md: "80vh" },
    backgroundColor: "white",
    margin: "auto",
    marginTop: { xs: "0", md: "50px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    boxShadow:
      "2px 0 10px rgba(0, 0, 0, 0.055), -2px 0 10px rgba(0, 0, 0, 0.055)",
  };

  const right = {
    width: { xs: "100%", md: "62%" },
    height: { xs: "45%", md: "100%" },
    backgroundImage: {
      xs: `url(${xsBgImg})`,
      md: `url(${bgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
    },
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

  const heading = {
    textAlign: "center",
    marginTop: { xs: "4%", md: "9%" },
    color: { xs: "black", md: "white" },
    fontSize: "35px",
    fontWeight: "600",
  };

  const subhead = {
    textAlign: "center",
    color: { xs: "black", md: "white" },
    fontSize: "17px",
    fontWeight: "500",
    marginTop: { xs: "0", md: "5px" },
  };

  const sub = {
    textAlign: "center",
    color: { xs: "black", md: "white" },
    fontSize: "19px",
    fontWeight: "500",
    marginTop: { xs: "3px", md: "10px" },
  };

  return (
    <Box sx={outer}>
      <Box sx={inner}>
        <Box sx={right}>
          <Typography sx={heading}>Welcome Back!</Typography>
          <Typography sx={subhead}>Use every Penny Wisely</Typography>
          <Typography sx={sub}>Login to Begin!</Typography>
        </Box>
        <Box sx={left}>
          <FormControl sx={{ width: "90%" }}>
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
            <Button variant="contained">Sign In</Button>
            <Typography
              variant="body2"
              sx={{ marginTop: "15px", fontSize: "12px" }}
            >
              New User? <b>Sign Up</b>
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
