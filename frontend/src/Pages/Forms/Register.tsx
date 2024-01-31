import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import bgImg from "../../Images/loginimage.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import xsBgImg from "../../Images/budget-planning.png";
import { useNavigate } from "react-router-dom";
import smBgImg from "../../Images/ipad.png";
import { API } from "../../Constant/network";

interface userTab {
  role: any;
  name: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const Register = () => {
  const [userData, setUserData] = useState<userTab>({
    role: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSelect = (event: SelectChangeEvent<string>) => {
    setUserData({ ...userData, role: event.target.value });
  };

  const handleRegistration = () => {
    const url = "http://localhost:8000/api/v1/auth/register";
    API.post(url, userData)?.subscribe({
      next(response: any) {
        console.log(response, ": response");
        console.log(response.data, ": response.data");
        setUserData(response.data);
        alert("reg success");
      },
      error(error) {
        console.log(error);
        alert("reg failed");
      },
      complete() {
        console.log("complete");
      },
    });
  };

  console.log(userData, " - userDAta");

  const outer = {
    width: "100%",
    height: { xs: "135vh", sm: "110vh", md: "100vh" },
    backgroundImage:
      "linear-gradient(to bottom right, #423cb4 , #c06ac5, #423cb4)",
    border: "1px solid black",
    fontFamily: "'Poppins', sans-serif",
  };

  const inner = {
    width: { xs: "100%", md: "80%" },
    height: { xs: "135vh", md: "80vh" },
    backgroundColor: "white",
    margin: "auto",
    marginTop: { xs: "0", md: "50px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    boxShadow:
      "2px 0 10px rgba(0, 0, 0, 0.105), -2px 0 10px rgba(0, 0, 0, 0.105)",
  };

  const right = {
    width: { xs: "100%", md: "62%" },
    height: { xs: "40%", sm: "36%", md: "100%" },
    backgroundImage: {
      xs: `url(${xsBgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
      sm: `url(${bgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
      md: `url(${smBgImg}),linear-gradient(135deg, #7b6ceb 0, #d371be 100%)`,
    },
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    // backgroundSize: { xs: "45%", md: "auto" },
    // border: "1px solid red",
    borderRadius: { xs: "0 0 20px 20px", md: "0" },
  };

  const left = {
    width: { xs: "100%", md: "38%" },
    height: "50vh",
    alignItems: "center",
    // border: "1px solid red",
    padding: { xs: "35px 0 0 0", md: "45px 0 0 0" },
  };

  const heading = {
    textAlign: "center",
    marginTop: { xs: "4%", md: "9%" },
    color: "white",
    fontSize: { xs: "25px", sm: "40px", md: "35px" },
    fontWeight: "600",
  };

  const subhead = {
    textAlign: "center",
    color: "white",
    fontSize: { xs: "14px", sm: "22px", md: "18px" },
    fontWeight: "500",
    marginTop: { xs: "-2px", sm: "6px", md: "5px" },
    // display:{xs:"none", md:"block"}
  };

  const sub = {
    textAlign: "center",
    color: "white",
    fontSize: { xs: "17px", sm: "25px", md: "19px" },
    fontWeight: "500",
    marginTop: { xs: "1px", sm: "11px", md: "10px" },
  };

  return (
    <Box sx={outer}>
      <Box sx={inner}>
        <Box sx={right}>
          <Typography sx={heading}>Welcome to Penny-Wise!</Typography>
          <Typography sx={subhead}>Use every Penny Wisely</Typography>
          <Typography sx={sub}>Register Now!</Typography>
        </Box>
        <Box sx={left} component="form" onSubmit={handleRegistration}>
          <FormControl sx={{ width: "90%" }}>
            <FormControl>
              <InputLabel>Select Role</InputLabel>
              <Select
                placeholder="Select Role"
                sx={{
                  marginBottom: "30px",
                  "& .MuiOutlinedInput-root": { height: "15px" },
                }}
                variant="outlined"
                label="Select Role"
                type="role"
                name="role"
                value={userData.role}
                onChange={handleSelect}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                label="Full Name"
                variant="outlined"
                placeholder="Enter Full Name"
                sx={{ marginBottom: "30px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon
                        sx={{ fontSize: { sm: "30px", md: "23px" } }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: { sm: "20px", md: "16px" },
                    height: { sm: "70px", md: "55px" },
                  },
                }}
                type="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </FormControl>
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
            <FormControl>
              <TextField
                label="Confirm Password"
                variant="outlined"
                placeholder="Enter Confirm Password"
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
                type="confirmPassword"
                name="confirmPassword"
                value={userData.confirmPassword}
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
              Sign Up
            </Button>
            <Typography
              sx={{
                marginTop: { xs: "25px", md: "15px" },
                fontSize: { sm: "19px", md: "12px" },
                color: "black",
              }}
            >
              Already Registered?{" "}
              <b onClick={() => router("/login")}>Sign In</b>
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
