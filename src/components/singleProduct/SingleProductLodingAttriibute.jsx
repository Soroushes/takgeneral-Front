import Skeleton from "@mui/material/Skeleton";
import {Box} from "@mui/system";

const SingleProductLoadingAttribute =()=>{
    return(
        <Box sx={{display:'flex' , flexDirection :'column' , alignItems :'start',px:2 , gap:2 , width:'100%'}}>
            <Skeleton variant='text' sx={{width :'75%', height:'40px' ,pb:2, borderRadius :2}}/>
            <Skeleton variant='text' sx={{width :'50%', height:'25px' , borderRadius :2}}/>
            <Skeleton variant='text' sx={{width :'30%',  borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
        </Box>
    )
}
export default SingleProductLoadingAttribute;