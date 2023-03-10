import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
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
            <Box sx={{display: showLayout ? {xs: "block", md: "none"} : "none"}}>
                <MobileHeader token={token}/>
            </Box>
            <Box sx={{display: showLayout ? {xs: "none", md: "block"} : "none"}}>
                <DesktopHeader token={token}/>
            </Box>
            <Box sx={{pt: {xs: "65px", md: "130px"} , pb : {xs : "65px" , md : 0}}}>{children}</Box>
            <Box
                sx={{
                    position: "fixed",
                    zIndex: 1200,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "65px",
                    display: showLayout ? {xs: "block", md: "none"} : "none",
                }}>
                <Navbar/>
            </Box>
            <AlertSnakeBar/>
        </>
    );
}
export default Layout;