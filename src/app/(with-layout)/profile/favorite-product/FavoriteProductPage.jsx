'use client';
import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import image from '../../../../assets/images/product-image.png';
const FavoriteProductPage = ()=>{
    return(
        <Box sx={{backgroundColor:'#FAFAFA'}}>
            <Typography variant={'h2'} fontWeight={'bold'}>محصولات مورد علاقه</Typography>
            <Grid container>
                <Grid item md={6} xs={12} display={'flex'} justifyContent={'space-between'}>
                    <Image src={image} alt={''}/>
                    <Box>
                        <Typography>ست کنترل پنتاکس اصلی هیدروماتیک
                            سطر دوم در صورت نیاز</Typography>
                        <Typography>
                            ۷٬۵۰۰٬۰۰۰ تومان
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} display={'flex'} justifyContent={'space-between'}>
                    <Image src={image} alt={''}/>
                    <Box>
                        <Typography>ست کنترل پنتاکس اصلی هیدروماتیک
                            سطر دوم در صورت نیاز</Typography>
                        <Typography>
                            ۷٬۵۰۰٬۰۰۰ تومان
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        )
}
export default FavoriteProductPage;