'use client'
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";

const LoadingPages =()=>{
    return(
        <Box sx={{ display: 'flex'  , justifyContent:'center'  , marginTop:'20%' , background:'#fff'}}>
            <CircularProgress />
        </Box>
    )
}
export default LoadingPages;