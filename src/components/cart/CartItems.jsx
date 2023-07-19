import {Box, Grid, Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import Image from "next/image";
import PriceDiscount from "../share/PriceDiscount";
import Link from "next/link";
import testImage from '../../assets/images/product-image.png';
import {useSelector} from "react-redux";

const CartItems = ({product}) => {
    const {isMobile} = useSelector(state => state.deviceInfo);
    return (
        <Grid container sx={{justifyContent:'space-between' , mt:3 }}>
            <Grid item xs={4} md={3}>
                <Link href={'/product/' + product.product_id} style={{textAlign:'center'}}>
                    <Image width={100} height={100} style={{width: '100%', height: 'auto'}} alt={'test'}
                           src={testImage}/>
                </Link>
            </Grid>
            <Grid item md={3} xs={6} sx={{display:'flex' , flexDirection :' column' , justifyContent:'space-between' , alignItems:'center'}}>
                        <Box>
                            <Typography sx={{mb:2}} variant="h5">{product.name}</Typography>
                            <Typography sx={{mb:1}} variant={'subtitle2'}>درجه حفاظت : IP44</Typography>
                            <Typography sx={{mb:1}} variant={'subtitle2'}>جنس پروانه : برنج</Typography>
                            <Typography sx={{mb:1}} variant={'subtitle2'}>گارانتی اصالت و سلامت فیزیکی کالا</Typography>
                        </Box>
                    {
                        !isMobile &&
                            <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}}
                                               id={product.product_id}/>
                    }
            </Grid>
            <Grid item md={4} sx={{display:'flex' , alignItems:'end'}}>
                {
                    !isMobile && <PriceDiscount finalPriceBold={true} finalPriceColor={'#333'} discountedPriceColor={'text.muted'}
                                               gap={1}
                                               discountedPriceFont={'subtitle2'} align={'end'} discountPrice={product.sum_price}
                                               finalPrice={product.sum_final_price} discountPercent={product.discount}
                                               isDiscountNear={true}/>
                }
            </Grid>
            <Grid item xs={11} sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , mt:1}}>
                {isMobile &&
                    <>
                            <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}} id={product.product_id}/>
                            <PriceDiscount finalPriceBold={true} finalPriceColor={'#333'} discountedPriceColor={'text.muted'}
                                           discountedPriceFont={'subtitle2'} justifyContent={'end'} gap={1.5} justify={'row'} discountPrice={product.sum_price}
                                           finalPrice={product.sum_final_price} discountPercent={product.discount}
                                           isDiscountNear={true}/>
                    </>
                }
            </Grid>
        </Grid>
    );
};
export default CartItems;
