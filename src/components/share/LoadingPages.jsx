'use client'
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";

const LoadingPages =()=>{
    return(
        <Box sx={{ position : 'fixed' , top : '25%' , right : '50%'}}>
            <CircularProgress />
        </Box>
    )
}
export default LoadingPages;