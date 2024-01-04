import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import logo from '../Images/logoone.webp'

const SideBar = () => {
  const drawer = {
    "& .MuiPaper-root": {
      width: "265px",
    justifyContent:"space-between",
    backgroundColor:"yellow",
    color:"white"
    },
  };

  const menuKaFirstList = [
    {
      text: "Dashboard",
      icon: <DashboardOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
    {
      text: "Income and Savings",
      icon: <VolunteerActivismOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
    {
      text: "Expense",
      icon: <PaidOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
    {
      text: "Transactions",
      icon: <PaymentsOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
    {
      text: "Accounts",
      icon: <AccountBalanceOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
  ];

  const menuKaSecondList = [
    {
      text: "My Profile",
      icon: <AccountCircleOutlinedIcon sx={{color:"white",fontSize:"28px"}} />,
    },
    {
      text: "Help & Support",
      icon: <HelpOutlineOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
    {
      text: "Logout",
      icon: <LogoutOutlinedIcon sx={{color:"white",fontSize:"28px"}}/>,
    },
  ];
  
  return (
    <Box>
      <Drawer variant="permanent" sx={drawer}>
        <Box sx={{ display: "flex",  justifyContent:"space-between",padding:"10px 60px 0 21px", alignItems:"center" }}>
          <img style={{width:"45px", height:"45px", borderRadius:"50px"}} src={logo}/>
          <Typography sx={{fontSize:"22px", color:"white", fontWeight:"600"}}>Penny-Wise</Typography>
          <ChevronLeftIcon sx={{color:"white",fontSize:"32px", display:{xs:"block", md:"none"}}}/>
        </Box>
        <Box sx={{marginTop:"-80px" }}>
        <List sx={{padding:"10px"}}>
        {menuKaFirstList?.map((menuone,index)=> (
          <ListItemButton key={index} sx={{height:"60px"}}>
          <ListItemIcon>{menuone.icon}</ListItemIcon>
          <ListItemText>{menuone.text}</ListItemText>
          </ListItemButton>
        ))}
        </List>
        </Box>
        
        <Box >
        <List sx={{padding:"10px"}}>
        {menuKaSecondList?.map((menutwo,index)=> (
          <ListItemButton key={index} sx={{height:"60px"}}>
          <ListItemIcon>{menutwo.icon}</ListItemIcon>
          <ListItemText>{menutwo.text}</ListItemText>
          </ListItemButton>
        ))}
        </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
