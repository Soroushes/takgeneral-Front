import {Box} from "@mui/material";

const Layout = ({children})=>{
    return(
        <Box sx={{height : "100%" , width : "100%" , display : "flex" , flexDirection : "column"}}>
            <Box sx={{flex : 1 , overflowY : "scroll" , direction : 'rtl'}}>
                <Box sx={{direction : "ltr" , height : "100%"}}>
                    {children}
                </Box>
            </Box>
            <Box sx={{backgroundColor : "black" , display : "flex" , flexDirection : "column-reverse" , height : 100}}>
            </Box>
        </Box>
    )
}
export default Layout ;