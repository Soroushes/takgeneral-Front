'use client'
import {Box, Button} from "@mui/material";
import Navbar from '../../components/layout/Navbar';
import MobileHeader from "../../components/layout/MobileHeader";
import DesktopHeader from '../../components/layout/DesktopHeader'
import AlertSnakeBar from "../../components/share/alertSnakeBar";
import Footer from "@/components/layout/Footer";
import {useSelector} from "react-redux";
import CallingButtonIcon from '../../assets/icons/share/call-callingButton.svg';
import Link from "next/link";
const LayoutPage = ({children , categoryNames}) => {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                <Box sx={{display:{md:'none' , xs:'block'}}}><MobileHeader categories={categoryNames}/></Box>
                <Box sx={{display:{xs:'none' , md:'block'}}}><DesktopHeader categories={categoryNames}/></Box>
            </Box>
            <Box
                sx={{
                    pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`},
                    pb: {xs: `${navbarHeight}px`, md: 0},
                    display:'flex' , flexDirection:'column', alignItems:'end',
                    position:'relative'
                }}>
                <Box width={'100%'} sx={{minHeight : '50vh'}}>
                    {children}
                </Box>
                <Link aria-label={'contact-us'} title={'contact-us'} href={'/contact-us'}>
                    <Button color={'secondary'} variant={'contained'} sx={{borderRadius:'100%' , display:{md:'flex' , xs:'none'}  , zIndex:5 , position:'fixed', bottom: 25 , right: 25 , minWidth:'40px !important' ,aspectRatio:'1/1' , boxShadow:'none' , p:0 }}><CallingButtonIcon/></Button>
                </Link>
                <Footer/>
            </Box>
            <Box
                sx={{
                    display:{md:'none' , xs:'block'},
                    position: "fixed",
                    zIndex: 1200,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${navbarHeight}px`,
                }}>
                <Navbar/>
            </Box>
            <AlertSnakeBar/>
        </>
    );
}
export default LayoutPage;