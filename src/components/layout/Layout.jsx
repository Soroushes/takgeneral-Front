'use client'
import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
import {useEffect, useRef} from "react";
import AlertSnakeBar from "../share/alertSnakeBar";
import {fetchInfo} from 'src/redux/slices/userInfoSlice';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCart} from "@/redux/slices/cart";
import {SET_DEVICE_INFO} from "@/redux/slices/deviceInfo";
import Footer from "@/components/layout/Footer";
const Layout = ({children}) => {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight, isMobile} = useSelector(state => state.deviceInfo);
    const dispatcher = useDispatch();
    const {full_name, phone_number} = useSelector(state => state.userInfo);
    const resizeTimeOutRef = useRef(null);
    useEffect(() => {
        onresize = () => {
            clearTimeout(resizeTimeOutRef.current);
            resizeTimeOutRef.current = setTimeout(() => {
                dispatcher(SET_DEVICE_INFO());
            }, 1000)
        }
        dispatcher(SET_DEVICE_INFO());
        dispatcher(fetchInfo());
        dispatcher(fetchCart());
    }, [])
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                {
                    isMobile ?
                        <MobileHeader/>
                        :
                        <DesktopHeader status={{full_name, phone_number}}/>

                }
            </Box>
            <Box
                sx={{
                    pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`},
                    pb: {xs: `${navbarHeight}px`, md: 0},
                }}>
                <Box sx={{minHeight: '50vh'}}>
                    {children}
                </Box>
                <Footer/>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    zIndex: 1200,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${navbarHeight}px`,
                }}>
                {
                    isMobile ? <Navbar/> : null
                }

            </Box>
            <AlertSnakeBar/>
        </>
    );
}
export default Layout;
