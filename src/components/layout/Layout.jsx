'use client'
import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
import {useEffect, useRef, useState} from "react";
import {usePathname} from 'next/navigation'
import AlertSnakeBar from "../share/alertSnakeBar";
import {fetchInfo} from 'src/redux/slices/userInfoSlice';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCart} from "../../redux/slices/cart";
import {SET_DESKTOP_HEIGHT, SET_DEVICE_INFO} from "../../redux/slices/deviceInfo";

const hideLayoutPaths = ['/login'];
const Layout = ({children}) => {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight, isMobile} = useSelector(state => state.deviceInfo);
    const pathname = usePathname();
    const [showLayout, setShowLayout] = useState(true);
    const dispatcher = useDispatch();
    const {full_name, phone_number} = useSelector(state => state.userInfo);
    const desktopHeaderRef = useRef(null)
    useEffect(() => {
        dispatcher(SET_DEVICE_INFO({firstTime : true}));
        dispatcher(SET_DESKTOP_HEIGHT(desktopHeaderRef.current.clientHeight));
        dispatcher(fetchInfo());
        dispatcher(fetchCart());
    }, [])
    // onresize = ()=>{
    //     dispatcher(SET_DEVICE_INFO()) ;
    // }
    useEffect(() => {
        const show = hideLayoutPaths.find((path) => path === pathname);
        setShowLayout(!!!show);
    }, [pathname])
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                {
                    isMobile ? <MobileHeader size={mobileHeaderHeight} status={{full_name, phone_number}}/> :
                        <DesktopHeader desktopHeaderRef={desktopHeaderRef} status={{full_name, phone_number}}/>
                }
            </Box>
            <Box
                sx={{
                pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`},
                pb: {xs: `${navbarHeight}px`, md: 0}
            }}>
                {children}
            </Box>
            {isMobile &&
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
            }
            <AlertSnakeBar/>
        </>
    );
}
export default Layout;