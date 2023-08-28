'use client'
import {CircularProgress , Box} from "@mui/material";

const LoadingPages =()=>{
    return(
        <Box sx={{ position : 'fixed' , top : '25%' , right : '50%'}}>
            <CircularProgress />
        </Box>
    )
}
export default LoadingPages;