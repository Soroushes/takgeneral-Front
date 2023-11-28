'use client'
import {Box, Button, Typography} from "@mui/material";
import Navbar from '../../components/layout/Navbar';
import MobileHeader from "../../components/layout/MobileHeader";
import DesktopHeader from '../../components/layout/DesktopHeader'
import AlertSnakeBar from "../../components/share/alertSnakeBar";
import Footer from "@/components/layout/Footer";
import {useSelector} from "react-redux";
import CallingButtonIcon from '../../assets/icons/share/call-callingButton.svg';
import CallingIcon from '../../assets/icons/share/call-calling.svg';
import CallIcon from '../../assets/icons/share/call.svg';
import {useState} from "react";
import MainModal from "@/components/share/MainModal";
import Link from "next/link";
const LayoutPage = ({children , categoryNames}) => {
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight} = useSelector(state => state.deviceInfo);
    const [contactModalIsOpen , setContactModalIsOpen] = useState(false)
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
                <Button onClick={()=>{setContactModalIsOpen(true)}} color={'secondary'} variant={'contained'} sx={{borderRadius:'100%' , zIndex:5 , position:'fixed', bottom: {md:25 , xs:95} , right: {md:25 , xs:30} , minWidth:'40px !important' ,aspectRatio:'1/1' , boxShadow:'none' , p:0 }}><CallingButtonIcon/></Button>
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
            <MainModal open={contactModalIsOpen} setOpen={setContactModalIsOpen} title={'تماس با ما'}>
                <Box py={2} px={3}>
                    <Link passHref target={'_blank'} href={"tel:+982177500376"}>
                        <Box onClick={()=>{setContactModalIsOpen(false)}} mb={2} display={'flex'} alignItems={'center'}>
                            <Box mr={1} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor:'secondary.main', borderRadius:'100%' , p:1}}><CallingIcon/></Box>
                            <Typography>تماس در ساعت کاری(خط ثابت)</Typography>
                        </Box>
                    </Link>
                    <Link passHref target={'_blank'} href={"tel:989212075118"}>
                        <Box onClick={()=>{setContactModalIsOpen(false)}} display={'flex'} alignItems={'center'}>
                            <Box mr={1} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor:'primary.main' , borderRadius:'100%' , p:1}}><CallIcon/></Box>
                            <Typography>تماس 24 ساعته (تبفن همراه)</Typography>
                        </Box>
                    </Link>
                </Box>
            </MainModal>
        </>
    );
}
export default LayoutPage;