import React from 'react'
import App from '../App'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Container = () => {
  return (
    <Box sx={{display:"flex",width:"100%", height:"100vh"}}>
        <Box sx={{width:"320px", border:"1px solid black"}}>
            <SideBar/>
        </Box>
        <Box sx={{width:"100%", border:"1px solid red"}}>
            <Box sx={{width:"100%", border:"1px solid blue", height:"60px"}}>
                <Navbar/>
            </Box>
            <Box>
                <App/>
            </Box>
        </Box>
    </Box>
  )
}

export default Container