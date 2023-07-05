import {Box, Typography} from "@mui/material";
import Image from "next/image";
import theme from "../../assets/theme/theme";

const BrandName = ({name , image})=>{
    return(
        <Box sx={{borderRadius:3 , p : 1 , backgroundColor : '#fff' , boxShadow : theme.shadows[2]}}>
            <Box sx={{aspectRatio : '2/1' ,mx : 'auto' , width : '80%' ,mb : 2 , textAlign : 'center'}} position={'relative'}>
                <Image fill src={image} alt={name} />
            </Box>
            <Typography textAlign={'center'}>{name}</Typography>
        </Box>
    )
}
export default BrandName;