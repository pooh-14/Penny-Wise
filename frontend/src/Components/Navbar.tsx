import { AppBar, Avatar, Badge, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  return (
    <>
    <AppBar sx={{height: 60,justifyContent: "center",borderBottom:"1px solid #e4e4e5", zIndex:'1'}} color="success" position="sticky" elevation={0}>
        <Toolbar>
        <MenuIcon fontSize="large" color="inherit"/>
        <Stack sx={{ marginLeft: "auto"}} spacing={2} direction="row">
            <IconButton size="large" >
              <Badge badgeContent={3} color="primary">
                <NotificationsNoneOutlinedIcon sx={{color:"white"}}/>
              </Badge>
            </IconButton>
            <Box
              sx={{
                display: "flex",
                // border: "1px solid black",
                alignItems: "center",
                width: 143,
                justifyContent:"space-between"
              }}
            >
              <Avatar src="/broken-image.jpg" />
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight:"700"}}>User Name</Typography>
                <Typography sx={{ fontSize: "12px", marginTop:"-1px"}} color="white">User</Typography>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
    </AppBar>
    </>

  )
}

export default Navbar