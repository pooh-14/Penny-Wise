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

const SideBar = () => {
  const drawer = {
    "& .MuiPaper-root": {
      width: "259px",
    justifyContent:"space-between",
    backgroundColor:"yellow"
    },
  };

  const menuKaFirstList = [
    {
      text: "Dashboard",
      icon: "hii",
    },
    {
      text: "Income",
      icon: "hii",
    },
    {
      text: "Expense",
      icon: "hii",
    },
    {
      text: "Transactions",
      icon: "hii",
    },
    {
      text: "Savings",
      icon: "hii",
    },
  ];

  const menuKaSecondList = [
    {
      text: "My Profile",
      icon: "hii",
    },
    {
      text: "Help & Support",
      icon: "hii",
    },
    {
      text: "Logout",
      icon: "Hi",
    },
  ];
  
  return (
    <Box>
      <Drawer variant="permanent" sx={drawer}>
        <Box sx={{ display: "flex", border:"1px solid red" }}>
          <AccountBalanceWalletRoundedIcon />
          <Typography>Penny-Wise</Typography>
          <ChevronLeftIcon />
        </Box>
        <Box sx={{border:"1px solid red" }}>
        <List>
        {menuKaFirstList?.map((menuone,index)=> (
          <ListItemButton key={index}>
          <ListItemIcon>{menuone.icon}</ListItemIcon>
          <ListItemText>{menuone.text}</ListItemText>
          </ListItemButton>
        ))}
        </List>
        </Box>
        
        <Box sx={{border:"1px solid red" }}>
        <List>
        {menuKaSecondList?.map((menutwo,index)=> (
          <ListItemButton key={index}>
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
