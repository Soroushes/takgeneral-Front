import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import LoginIcon from "../../assets/icons/layout/locationIcon";
import HamburgerMenu from "../../assets/icons/layout/hamburgerMenu.svg";
import Link from "next/link";
import UserIcon from "../../assets/icons/layout/user";
import {Drawer, Typography} from "@mui/material";
import {useState} from "react";
import {headerItem} from "@/data/header";
import logo from '../../../public/logo.png'
import Image from "next/image";
import { urls } from "src/data/urls";
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
            <Toolbar sx={{height : '100%'}}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        justifyContent: "space-between",
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
                                alignItems: "center",
                                flexDirection: "column",
                                width: "300px",
                                px: 3,
                                py : 1
                            }}>
                                <Image
                                    width={125} height={35}
                                    src={logo}
                                    alt="Takgeneral Logo"
                                />
                            {headerItem.map((item, id) => {
                                return (
                                    <Link onClick={()=>{setDrawerIsOpen(false)}} style={{display : 'block' , width : "100%"}} key={id} href={'/category'}>
                                        <Box
                                            sx={{
                                                borderBottom: "1px solid #ccc",
                                                py: 2.5,
                                                display: 'flex',
                                                width: "100%",
                                                gap: 1,
                                                alignItems: 'center'
                                            }}
                                            >
                                            {item.icon}
                                            <Typography variant={'body2'} component={'li'}>{item.name}</Typography>
                                        </Box>
                                    </Link>
                                )
                            })}
                        </Box>
                    </Drawer>
                       <Link href={urls.home}>
                               <Image
                                   width={125} height={35}
                                   src={logo}
                                   alt="TakgeneralLogo"
                               />
                       </Link>
                    {status.phone_number ? (
                        <Link href={urls.profile}>
                            <Typography>
                                <UserIcon/>
                            </Typography>
                        </Link>
                    ) : (
                        <Link href={urls.login}>
                            <Typography variant={'body2'} sx={{display : "flex" , flexDirection : "column" , alignItems : "center"}}>
                                <LoginIcon/>
                                ورود
                            </Typography>
                        </Link>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default MobileHeader;
