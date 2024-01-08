import { AppBar, Avatar, Badge, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AuthContext } from './Context/AuthContext';

const Navbar = () => {

  const { toggle ,menu} = useContext(AuthContext);
  

  return (
    <>
    <AppBar sx={{height: 60,justifyContent: "center", zIndex:'99', backgroundColor:"black",top:"0",}} position="sticky"  elevation={5}>
        <Toolbar>
        <MenuIcon fontSize="large" color="inherit" onClick={toggle}/>
        <Stack sx={{ marginLeft: "auto"}} spacing={2} direction="row">
            <IconButton size="large" >
              <Badge variant='dot' color="error">
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