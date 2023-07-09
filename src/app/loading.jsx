'use client'
import {Box} from "@mui/system";
import {CircularProgress} from "@mui/material";

export default function Loading(){
    return (
        <Box sx={{height :'100vh' , position : 'fixed' , left : 0 , right : 0 , top : 0 , backgroundColor : 'white' , zIndex : 9999 , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
            <CircularProgress color={'primary'} size={50}/>
        </Box>
    )
}