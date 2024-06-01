'use client';
import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import image from '../../../../assets/images/product-image.png';
import DeleteIcon from '../../../../assets/icons/share/trash.svg';
import BagIcon from '../../../../assets/icons/layout/blue-bag.svg';
const FavoriteProductPage = ()=>{
    return(
        <Box sx={{backgroundColor:'#FAFAFA'}}>
            <Typography variant={'h2'} fontWeight={'bold'}>محصولات مورد علاقه</Typography>
            <Grid container>
                <Grid sx={{border :'1px solid #ddd' , borderRadius:2 , p:3}} item md={6} xs={12} display={'flex'} justifyContent={'space-between'}>
                    <Image src={image} alt={''}/>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                        <Typography>ست کنترل پنتاکس اصلی هیدروماتیک</Typography>
                        <Typography>سطر دوم در صورت نیاز</Typography>
                        <Typography textAlign={'end'}>
                            ۷٬۵۰۰٬۰۰۰ تومان
                        </Typography>
                        <Box justifyContent={'end'} gap={1} display={'flex'} width={'100%'}>
                            <Button sx={{borderRadius:2 , borderWidth:'2px' , py:1,minWidth:'auto' , '&:hover': {borderWidth: '2px',
                                          }}} variant={'outlined'}>
                                <BagIcon/>
                            </Button>
                            <Button sx={{borderRadius:2, borderWidth:'2px' , py:1 ,minWidth:'auto','&:hover': {borderWidth: '2px'}}} color={'error'} variant={'outlined'}>
                                <DeleteIcon width={22} height={22}/>
                            </Button>
                        </Box>
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