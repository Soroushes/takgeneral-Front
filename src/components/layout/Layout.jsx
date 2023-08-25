'use client'
import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import DesktopHeader from './DesktopHeader'
import AlertSnakeBar from "../share/alertSnakeBar";
import {useSelector} from 'react-redux';
import Footer from "@/components/layout/Footer";
const Layout = ({children, layoutData = []}) => {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight, isMobile} = useSelector(state => state.deviceInfo);
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                {
                    isMobile ?
                        <MobileHeader layoutData={layoutData}/>
                        :
                        <DesktopHeader layoutData={layoutData}/>

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
