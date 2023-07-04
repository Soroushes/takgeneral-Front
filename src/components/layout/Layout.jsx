'use client'
import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
import {useEffect, useRef, useState} from "react";
import { usePathname } from 'next/navigation'
import AlertSnakeBar from "../share/alertSnakeBar";
import { fetchInfo } from 'src/redux/slices/userInfoSlice';
import { useDispatch , useSelector} from 'react-redux';
import {fetchCart} from "../../redux/slices/cart";
import {SET_DEVICE_INFO} from "../../redux/slices/deviceInfo";
const hideLayoutPaths = ['/login'];
const Layout = ({children}) => {
    const navbarHeight = 55 ;
    const mobileHeaderHeight = 55 ;
    const [desktopHeaderHeight , setDesktopHeaderHeight] = useState(0) ;
    const pathname = usePathname();
    const [showLayout, setShowLayout] = useState(true);
    const dispatcher = useDispatch();
    const {full_name , phone_number } = useSelector(state => state.userInfo);
    const desktopHeaderRef = useRef(null)
    useEffect(() => {
        dispatcher(SET_DEVICE_INFO()) ;
        setDesktopHeaderHeight(desktopHeaderRef.current.clientHeight);
        dispatcher(fetchInfo());
        dispatcher(fetchCart());
    }, [])
    useEffect(()=>{
        const show = hideLayoutPaths.find((path) => path === pathname);
        setShowLayout(!!!show);
    },[pathname])
    return (
        <>
            <Box sx={{display: showLayout ? {xs: "block", md: "none"} : "none" , position : 'relative' , zIndex : 10}}>
                <MobileHeader size={mobileHeaderHeight} status={{full_name , phone_number}}/>
            </Box>
            <Box sx={{display: showLayout ? {xs: "none", md: "block"} : "none" , position : 'relative' ,  zIndex : 10}}>
                <DesktopHeader desktopHeaderRef={desktopHeaderRef} status={{full_name , phone_number}}/>
            </Box>
            <Box sx={{pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`} , pb : {xs : `${navbarHeight}px` , md : 0}}}>{children}</Box>
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