'use client'
import {CircularProgress , Box} from "@mui/material";

const LoadingPages =()=>{
    return(
        <Box sx={{height : '70vh' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}>
            <CircularProgress />
        </Box>
    )
}
export default LoadingPages;