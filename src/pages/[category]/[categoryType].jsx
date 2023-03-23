import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container} from "@mui/material";
import categoryBanner from '../../../public/banner.png'
const Category=()=>{
    return(
        <>
            <Grid container sx={{width:'100%'}}>
                <Box sx={{ width:'100%', aspectRatio:'4.8/1' , position:'relative' , p:0}}>
                    <Image fil alt={''} l  src={categoryBanner}/>
                </Box>
            </Grid>
            <Container maxWidth={'lg'}>
                <Grid container >
                    <Grid item></Grid>
                </Grid>
            </Container>
        </>
            
    )
}
export default Category;