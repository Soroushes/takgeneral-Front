import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import LoginIcon from "../icons/LoginIcon.svg";
import HamburgerMenu from "../icons/hamburgerMenu.svg";

import Link from "next/link";
import {useSelector} from "react-redux";
import UserIcon from "../icons/user";
import {Typography} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import {useState} from "react";
import PompIcon from "../icons/pomp";
const MobileHeader = () => {
  const {token} = useSelector((state) => state.userStatus);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerIsOpen(prev=>!prev);
  };
  const drawerItems = [
    {
      name: "پمپ و تجهیزات جانبی",
      
      link: "/",
    },
    {
      name: "ابزار دقیق",
      
      link: "/",
    },
    {
      name: "شیر برقی کاز",
      
      link: "/",
    },
    {
      name: "فلومتر",
      
      link: "/",
    },
  ];
  return (
    <Box>
      <AppBar sx={{backgroundColor: "#fff", height: "80px"}}>
        <Toolbar sx={{height: "100%"}}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
            <HamburgerMenu onClick={toggleDrawer} />
            <>
              <Drawer
                sx={{width: "50px"}}
                anchor={"left"}
                open={drawerIsOpen}
                onClose={() => setDrawerIsOpen(false)}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    flexDirection: "column",
                    gap: 2,
                    width: "300px",
                    px: 3,
                  }}>
                  <Box sx={{width: "50%"}}>
                    <img
                      style={{width: "100%"}}
                      src="../logo.png"
                      alt="Takgeneral Logo"
                    />
                  </Box>
                  {
                    drawerItems.map((item , id)=>{
                      return (
                        <Box>
                          <Box sx={{borderBottom: "1px solid #ccc", pb: 2}}>
                            <PompIcon/>
                            <Typography>{item.name}</Typography>
                          </Box>
                          
                         
                        </Box>
                      );
                    })
                  }
                  {/* <Box sx={{borderBottom: "1px solid #ccc", pb: 2 }}>
                    <Typography></Typography>
                  </Box>
                  <Box sx={{borderBottom: "1px solid #ccc", pb: 2}}>
                    <Typography></Typography>
                  </Box>
                  <Box sx={{borderBottom: "1px solid #ccc", pb: 2}}>
                    <Typography></Typography>
                  </Box>
                  <Box sx={{borderBottom: "1px solid #ccc", pb: 2}}>
                    <Typography></Typography>
                  </Box> */}
                </Box>
              </Drawer>
            </>
            <Box sx={{m: "auto", height: "100%", py: 1}}>
              <img
                style={{height: "100%"}}
                src="../logo.png"
                alt="TakgeneralLogo"
              />
            </Box>
            {token ? (
              <Link href={"/profile"}>
                {" "}
                <Typography>
                  <UserIcon />
                </Typography>
              </Link>
            ) : (
              <Link href={"/login"}>
                <Typography>
                  <LoginIcon />
                </Typography>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MobileHeader;
