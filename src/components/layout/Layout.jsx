import {Box, useTheme} from "@mui/material";
import Navbar from './Navbar';
import MobileHeader from "./MobileHeader";
const Layout = ({ children }) => {
    const {palette} = useTheme();
    return(
        <Box sx={{height : "100%" , width : "100%" , display : "flex" , flexDirection : "column"}}>
            <Box sx={{flex : 1 , overflowY : "scroll" , direction : 'rtl'}}>
                <Box sx={{direction : "ltr" , height : "100%"}}>
                    <MobileHeader/>
                    {children}
                </Box>
            </Box>
            <Box sx={{display : {xs : "flex" , md : "none"} , flexDirection : "column-reverse" , justifyContent : 'center' , height : 80 }}>
                <Navbar/>
            </Box>
        </Box>
    )
}
export default Layout ;