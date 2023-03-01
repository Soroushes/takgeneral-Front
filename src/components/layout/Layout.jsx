import {Box, useTheme} from "@mui/material";
import Navbar from './Navbar'
const Layout = ({ children }) => {
    const {palette} = useTheme();
    return(
        <Box sx={{height : "100%" , width : "100%" , display : "flex" , flexDirection : "column"}}>
            <Box sx={{flex : 1 , overflowY : "scroll" , direction : 'rtl'}}>
                <Box sx={{direction : "ltr" , height : "100%"}}>
                    {children}
                </Box>
            </Box>
            <Box sx={{backgroundColor : palette.gray.lighter , display : "flex" , flexDirection : "column-reverse" , justifyContent : 'center' , height : 100}}>
                <Navbar/>
            </Box>
        </Box>
    )
}
export default Layout ;