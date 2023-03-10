import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import LoginIcon from "../icons/LoginIcon";
import HamburgerMenu from "../icons/hamburgerMenu.svg";
import Link from "next/link";
import UserIcon from "../icons/user";
import {Drawer, Typography} from "@mui/material";
import {useState} from "react";
import {headerItem} from "../../data/header";
const MobileHeader = ({status , size}) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerIsOpen(prev => !prev);
    };

    return (
        <AppBar sx={{backgroundColor: "#fff", height: `${size}px`}}>
            <Toolbar sx={{height: "100%"}}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}>
                    <HamburgerMenu onClick={toggleDrawer}/>
                    <Drawer
                        anchor={"left"}
                        open={drawerIsOpen}
                        onClose={()=>setDrawerIsOpen(false)}
                        transitionDuration={500}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: "column",
                                width: "300px",
                                px: 3,
                            }}>
                            <Box sx={{width: "60%", mx: "auto"}}>
                                <img
                                    style={{width: "100%"}}
                                    src="../logo.png"
                                    alt="Takgeneral Logo"
                                />
                            </Box>
                            {headerItem.map((item, id) => {
                                return (
                                    <Box
                                        sx={{
                                            borderBottom: "1px solid #ccc",
                                            py: 3,
                                            display: 'flex',
                                            width: "100%",
                                            gap: 1,
                                            alignItems: 'center'
                                        }}
                                        key={id}>
                                        {item.icon}
                                        <Typography component={'li'}>{item.name}</Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Drawer>
                    <Box sx={{m: "auto", height: "100%", py: 1}}>
                       <Link href={'/'}>
                           <img
                               style={{height: "100%"}}
                               src="../logo.png"
                               alt="TakgeneralLogo"
                           />
                       </Link>
                    </Box>
                    {status.phone_number ? (
                        <Link href={"/profile"}>
                            <Typography>
                                <UserIcon/>
                            </Typography>
                        </Link>
                    ) : (
                        <Link href={"/login"}>
                            <Typography sx={{display : "flex" , flexDirection : "column" , alignItems : "center"}}>
                                <LoginIcon/>
                                ????????
                            </Typography>
                        </Link>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default MobileHeader;
