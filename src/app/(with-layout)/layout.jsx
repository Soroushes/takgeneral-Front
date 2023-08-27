'use client'
import {Box} from "@mui/material";
import Navbar from '../../components/layout/Navbar';
import MobileHeader from "../../components/layout/MobileHeader";
import DesktopHeader from '../../components/layout/DesktopHeader'
import AlertSnakeBar from "../../components/share/alertSnakeBar";
import {useSelector} from 'react-redux';
import Footer from "@/components/layout/Footer";
export default function Layout({children}) {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight, isMobile} = useSelector(state => state.deviceInfo);
    console.log(isMobile)
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                {
                    isMobile ?
                        <MobileHeader/>
                        :
                        <DesktopHeader/>

                }
            </Box>
            <Box
                sx={{
                    pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`},
                    pb: {xs: `${navbarHeight}px`, md: 0},
                }}>
                <Box>
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