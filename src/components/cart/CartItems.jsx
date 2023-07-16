import {Box, Grid, Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import Image from "next/image";
import PriceDiscount from "../share/PriceDiscount";
import {useProductServiceItems} from "../../hooks/useProductServiceItems";
import Link from "next/link";
import testImage from '../../assets/images/product-image.png';
const CartItems = ({product}) => {
    const productServiceItems = useProductServiceItems({
        freeSent: product.free_send,
        wareHouseExist: true,
        notFakeWarranty: true,
        smallSize : true
    });
    return (
        <Grid
            container
            rowGap={2}
            sx={{borderRadius: 3, p: 2, mb: 4 , borderBottom :'1px solid #eee'}}
        >
            <Grid item lg={6} xs={12}>
                <Box sx={{display: "flex", gap: 6, alignItems: 'center'}}>
                    <Link href={'/product/'+ product.product_id}>
                        <Image width={100} height={100} alt={'test'} src={testImage}/>
                    </Link>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 1}}>
                            {product.name}
                        </Typography>
                        <Box>
                            <Typography sx={{mb:2}} variant={'caption'}>درجه حفاظت : IP44</Typography>
                            <Typography variant={'subtitle2'}>جنس پروانه : برنج</Typography>
                            <Typography variant={'subtitle2'}>گارانتی اصالت و سلامت فیزیکی کالا</Typography>
                            <CartEditionButton hideStatus={true} boxSx={{width : '90px' , height:'35px'}} id={product.product_id}/>
                            {/*{productServiceItems.map((productDetailItem) => {*/}
                            {/*    if (productDetailItem.show) {*/}
                            {/*        return (*/}
                            {/*            <Box key={productDetailItem.title}*/}
                            {/*                 sx={{display: "flex", alignItems: "center", gap: 1}}>*/}
                            {/*                <Typography variant={'caption'}>درجه حفاظت : IP44</Typography>*/}
                            {/*                <Typography variant={'subtitle2'}>جنس پروانه : برنج</Typography>*/}
                            {/*                <Typography variant={'subtitle2'}>گارانتی اصالت و سلامت فیزیکی کالا</Typography>*/}
                            {/*            </Box>*/}
                            {/*        );*/}
                            {/*    }*/}
                            {/*})}*/}
                        </Box>
                    </Box>
                        <PriceDiscount discountPrice={product.sum_price} finalPrice={product.sum_final_price} discountPercent={product.discount} fontSize={'body2'} isDiscountNear={true}/>
                </Box>
            </Grid>

        </Grid>
    );
};
export default CartItems;
