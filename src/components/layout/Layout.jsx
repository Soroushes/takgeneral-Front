import {Box} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {GET_USER_STATUS} from "../../redux/slices/userStatusSlice";
import {useRouter} from "next/router";
const hideLayoutPaths = ['/login'] ;
const Layout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_USER_STATUS());
    }, []) ;
    const {pathname} = useRouter() ;
    const [showLayout , setShowLayout] = useState(true) ;
    useEffect(()=>{
        const show = hideLayoutPaths.find((path)=>path===pathname) ;
        setShowLayout(!!!show) ;
    },[pathname])
    return (
        <Box sx={{height: "100%", width: "100%", flexDirection: "column" , display : "flex"}}>
            <Box sx={{flex: 1, overflowY: "scroll", direction: 'rtl'}}>
                <Box sx={{direction: "ltr", height: "100%" , pt : "80px"}}>
                    <Box sx={{display : showLayout ? "block" : "none"}}>
                        <MobileHeader/>
                    </Box>
                    {children}
                </Box>
            </Box>
            <Box sx={{
                display: showLayout ? {xs: "flex", md: "none"} : "none",
                flexDirection: "column-reverse",
                justifyContent: 'center',
                height: 80
            }}>
                <Navbar/>
            </Box>
        </Box>
    )
}
export default Layout;