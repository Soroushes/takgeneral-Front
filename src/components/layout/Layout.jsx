import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import AlertSnakeBar from "../share/alertSnakeBar";

const hideLayoutPaths = ['/login'];
const Layout = ({children}) => {
    const {pathname} = useRouter();
    const [showLayout, setShowLayout] = useState(true);
    const [token, setToken] = useState('');
    useEffect(() => {
        const show = hideLayoutPaths.find((path) => path === pathname);
        setShowLayout(!!!show);
        setToken(localStorage.getItem('token'));
    }, [pathname])
    return (
        <>
            <Box sx={{direction: 'rtl', height: "100%"}}>
                <Box sx={{direction: "ltr", height: "100%", pt: "80px"}}>
                    <Box sx={{display: showLayout ? {xs: "block", md: 'none'} : "none"}}>
                        <MobileHeader token={token}/>
                    </Box>
                    <Box sx={{pb: "80px" , height : "100%"}}>
                        {children}
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                position: "fixed",
                zIndex: 1200,
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                display: showLayout ? {xs: "block", md: "none"} : "none",
            }}>
                <Navbar/>
            </Box>
            <AlertSnakeBar/>
        </>
    )
}
export default Layout;