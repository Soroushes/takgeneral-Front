import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {GET_USER_STATUS} from "../../redux/slices/userStatusSlice";
import {useRouter} from "next/router";

const hideLayoutPaths = ['/login'];
const Layout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_USER_STATUS());
    }, []);
    const {pathname} = useRouter();
    const [showLayout, setShowLayout] = useState(true);
    useEffect(() => {
        const show = hideLayoutPaths.find((path) => path === pathname);
        setShowLayout(!!!show);
    }, [pathname])
    return (
        <Box sx={{height: "100%", width: "100%", flexDirection: "column", display: "flex"}}>
            <Box sx={{direction: 'rtl' , height : "100%"}}>
                <Box sx={{direction: "ltr", height: "100%" , pt : "80px"}}>
                    <Box sx={{display: showLayout ? {xs: "block", md: 'none'} : "none" }}>
                        <MobileHeader/>
                    </Box>
                    <Box sx={{pb : "80px"}}>
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
                display: showLayout ? {xs: "block", md: "none"} : "none" ,
            }}>
                <Navbar/>
            </Box>
        </Box>
    )
}
export default Layout;