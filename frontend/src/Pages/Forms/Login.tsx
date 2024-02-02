import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import bgImg from "../../Images/loginimage.png";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import xsBgImg from "../../Images/budget-planning.png";
import smBgImg from "../../Images/ipad.png";
import { API } from "../../Constant/network";
import toast from "react-hot-toast";

interface userLog {
  email: String;
  password: String;
}

const Login = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState<userLog>({
    email: "",
    password: "",
  });
  // const router = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event?.preventDefault()
    const url = "http://localhost:8000/api/v1/auth/login";
    API.post(url, userData)?.subscribe({
      next(response: any) {
        // setUserData(response.data);
        // console.log(response.data.email, "-response.email");
        console.log(response.token, "-response.data from login");
        localStorage.setItem("userToken", JSON.stringify(response.token));
      },
      error(error) {
        console.log(error);
      },
      complete() {
        console.log("complete");
      },
    });
    toast.success("Logged in Successfully!");
  };

  console.log(userData, " - userDAta");

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
    height: { xs: "50%", md: "100%" },
    backgroundImage: {
      xs: `url(${xsBgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
      sm: `url(${bgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
      md: `url(${smBgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
    },
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    // backgroundSize: { xs: "small", md: "auto" },
    // border: "1px solid red",
    borderRadius: { xs: "0 0 20px 20px", md: "0" },
  };

  const left = {
    width: { xs: "100%", md: "38%" },
    height: "50vh",
    alignItems: "center",
    // border: "1px solid red",
    margin: { xs: "15px 0 0 0 ", md: "auto " },
    padding: { xs: "35px 0 0 0", md: "0" },
  };

  const heading = {
    textAlign: "center",
    marginTop: { xs: "4%", md: "9%" },
    color: "white",
    fontSize: { xs: "26px", sm: "40px", md: "35px" },
    fontWeight: "600",
  };

  const subhead = {
    textAlign: "center",
    color: "white",
    fontSize: { xs: "14px", sm: "22px", md: "18px" },
    fontWeight: "500",
    marginTop: { xs: "1.2%", sm: "6px", md: "5px" },
    // display:{xs:"none", md:"block"}
  };

  const sub = {
    textAlign: "center",
    color: "white",
    fontSize: { xs: "17px", sm: "25px", md: "19px" },
    fontWeight: "500",
    marginTop: { xs: "1.1%", sm: "11px", md: "10px" },
  };

  return (
    <Box sx={outer}>
      <Box sx={inner}>
        <Box sx={right}>
          <Typography sx={heading}>Welcome Back!</Typography>
          <Typography sx={subhead}>Use every Penny Wisely</Typography>
          <Typography sx={sub}>Login to Begin!</Typography>
        </Box>
        <Box sx={left} component="form" onSubmit={handleSubmit}>
          <FormControl sx={{ width: "90%" }}>
            <FormControl>
              <TextField
                label="Email"
                variant="outlined"
                placeholder="Enter Email"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{ fontSize: { sm: "30px", md: "23px" } }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: { sm: "20px", md: "16px" },
                    height: { sm: "70px", md: "55px" },
                  },
                }}
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Password"
                variant="outlined"
                placeholder="Enter Password"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon sx={{ fontSize: { sm: "30px", md: "23px" } }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon
                        sx={{ fontSize: { sm: "30px", md: "23px" } }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: { sm: "20px", md: "16px" },
                    height: { sm: "70px", md: "55px" },
                  },
                }}
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: { sm: "50px", md: "35px" },
                fontSize: { sm: "20px", md: "15px" },
              }}
            >
              Sign In
            </Button>
            <Typography
              variant="body2"
              sx={{
                marginTop: { xs: "25px", md: "15px" },
                fontSize: { sm: "19px", md: "12px" },
              }}
            >
              New User? <b onClick={() => router("/register")}>Sign Up</b>
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
