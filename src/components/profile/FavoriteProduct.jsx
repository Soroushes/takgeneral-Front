import Image from "next/image";
import image from "@/assets/images/product-image.png";
import {Box, Button, Grid, Typography} from "@mui/material";
import BagIcon from "@/assets/icons/layout/blue-bag.svg";
import DeleteIcon from "@/assets/icons/share/trash.svg";

const FavoriteProduct = ()=>{
    return(
        <Grid sx={{border :'1px solid #ddd' , borderRadius:2 , p: {md:2,xs:1}}} item md={5.85} xs={12} display={'flex'} justifyContent={'space-between'}>
            <Image src={image} alt={''}/>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Typography>ست کنترل پنتاکس اصلی هیدروماتیک</Typography>
                <Typography>سطر دوم در صورت نیاز</Typography>
                <Typography textAlign={'end'}>
                    ۷٬۵۰۰٬۰۰۰ تومان
                </Typography>
                <Box justifyContent={'end'} gap={1} display={'flex'} width={'100%'}>
                    <Button sx={{borderRadius:2 , py: {xs:.5 , md:1} , px:{md:2,xs:.5},minWidth:'auto' , '&:hover': {borderWidth: '1px',}}} variant={'outlined'}>
                        <BagIcon/>
                    </Button>
                    <Button sx={{borderRadius:2, py: {xs:.5 , md:1} , px:{md:2,xs:.5},minWidth:'auto','&:hover': {borderWidth: '1px'}}} color={'error'} variant={'outlined'}>
                        <DeleteIcon width={22} height={22}/>
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}
export default FavoriteProduct;