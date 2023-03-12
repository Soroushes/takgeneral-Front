import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import AlertSnakeBar from "../share/alertSnakeBar";
import { fetchInfo } from 'src/redux/slices/userInfoSlice';
import { useDispatch , useSelector} from 'react-redux';
const hideLayoutPaths = ['/login'];
const Layout = ({children}) => {
    const navbarHeight = 65 ;
    const mobileHeaderHeight = 65 ;
    const pcHeaderHeight = 130 ;
    const {pathname} = useRouter();
    const [showLayout, setShowLayout] = useState(true);
    const dispatcher = useDispatch();
    const {full_name , phone_number } = useSelector(state => state.userInfo);
    useEffect(() => {
        const show = hideLayoutPaths.find((path) => path === pathname);
        setShowLayout(!!!show);
        dispatcher(fetchInfo());
    }, [pathname])
    return (
        <>
            <Box sx={{display: showLayout ? {xs: "block", md: "none"} : "none"}}>
                <MobileHeader size={mobileHeaderHeight} status={{full_name , phone_number}}/>
            </Box>
            <Box sx={{display: showLayout ? {xs: "none", md: "block"} : "none"}}>
                <DesktopHeader size={pcHeaderHeight} status={{full_name , phone_number}}/>
            </Box>
            <Box sx={{pt: {xs: `${mobileHeaderHeight}px`, md: `${pcHeaderHeight}px`} , pb : {xs : `${navbarHeight}px` , md : 0}}}>{children}</Box>
            <Box
                sx={{
                    position: "fixed",
                    zIndex: 1200,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${navbarHeight}px`,
                    display: showLayout ? {xs: "block", md: "none"} : "none",
                }}>
                <Navbar/>
            </Box>
            <AlertSnakeBar/>
        </>
    );
}
export default Layout;