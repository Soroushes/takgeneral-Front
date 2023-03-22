import Skeleton from "@mui/material/Skeleton";
import {Box} from "@mui/system";

const SingleProductLoadingImage=()=>{
    return(
        
        <Box sx={{display:'flex' ,width:'100%', flexDirection :'column' , gap : 3 , alignItems:'center'}}>
            <Skeleton sx={{borderRadius :2 , width:'100%' , transform : "scale(1)" , aspectRatio : '1/1'}}/>
            <Box sx={{display : 'flex' , justifyContent :'space-between',alignItems:'start'  , gap :2 , width : "100%"}}>
                <Skeleton sx={{borderRadius :2 , transform : "scale(1)" , width : "25%" , aspectRatio : "1/1"}} />
                <Skeleton sx={{borderRadius :2 , transform : "scale(1)" , width : "25%" , aspectRatio : "1/1"}} />
                <Skeleton sx={{borderRadius :2 , transform : "scale(1)" , width : "25%" , aspectRatio : "1/1"}} />
                <Skeleton sx={{borderRadius :2 , transform : "scale(1)" , width : "25%" , aspectRatio : "1/1"}} />
            </Box>
        </Box>
    )

}
export default SingleProductLoadingImage;