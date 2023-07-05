import {Box, Typography} from "@mui/material";
import Image from "next/image";

const InnerImageSection = ({name , image})=>{
    return(
        <Box sx={{borderRadius:3 , p : 1 , backgroundColor : '#fff' , boxShadow : 2}}>
            <Box sx={{aspectRatio : '2/1' ,mx : 'auto' , width : '80%' ,mb : 2 , textAlign : 'center'}} position={'relative'}>
                <Image fill src={image} alt={name} />
            </Box>
            <Typography textAlign={'center'}>{name}</Typography>
        </Box>
    )
}
export default InnerImageSection;