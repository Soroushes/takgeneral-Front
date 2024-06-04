'use client';
import {Box, Grid, Typography} from "@mui/material";
import FavoriteProduct from "@/components/profile/FavoriteProduct";
const FavoriteProductPage = ()=>{
    return(
        <Box sx={{backgroundColor:'#FAFAFA'}}>
            <Typography variant={'h2'} mb={4} fontWeight={'bold'}>محصولات مورد علاقه</Typography>
            <Grid container rowGap={2} justifyContent={'space-between'}>
                <FavoriteProduct/>
                <FavoriteProduct/>
                <FavoriteProduct/>
                <FavoriteProduct/>
            </Grid>
        </Box>
        )
}
export default FavoriteProductPage;