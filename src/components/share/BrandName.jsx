import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Paper from "@mui/material/Paper";

const BrandName = ({name , image})=>{
    return(
        <Paper elevation={1} sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:2 , my:2  , py:1 , borderRadius:3}}>
            <Box><Image src={image} alt={name} /></Box>
            <Typography>{name}</Typography>
        </Paper>
    )
}
export default BrandName;