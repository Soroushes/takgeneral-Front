import Skeleton from "@mui/material/Skeleton";
import {Box} from "@mui/system";

const SingleProductLoadingImage=()=>{
    return(
        
        <Box sx={{display:'flex' ,width:'100%' ,height :'100%', flexDirection :'column' ,justifyContent:'start' , alignItems:'center'}}>
            <Skeleton sx={{borderRadius :2 , width:'100%' , height:'60%'}}/>
            <Box sx={{display : 'flex' , justifyContent :'space-evenly',alignItems:'start'  , gap :2 , height:'20%'}}>
                <Skeleton sx={{borderRadius :2 , height :'100%'}} width={60}  />
                <Skeleton sx={{borderRadius :2, height :'100%'}} width={60} />
                <Skeleton sx={{borderRadius :2, height :'100%'}} width={60} />
                <Skeleton sx={{borderRadius :2, height :'100%'}} width={60}/>
            </Box>
        </Box>
    )

}
export default SingleProductLoadingImage;