import { useContext } from "react";
import App from "../App";
import { Box } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/Navbar";

const Container = () => {
    
  const {  menu,setMenu } = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "700px",
        border:"5px solid yellow",
        backgroundColor: "#111111",
        color: "white",
        zIndex:"999"
      }}
    >
      <Box >
        {menu ? 
        <Box sx={{ width: "65px"}}>
        <SideBar/>
        </Box>
        :
        <Box sx={{ width: "240px" }}>
        <SideBar/>
        </Box>}
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ width: "100%", height: "60px", position: "sticky", top: "0", zIndex:'999' }}
        >
          <Navbar />
        </Box>
        <Box sx={{ width: "100%"}}>
          <App />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
