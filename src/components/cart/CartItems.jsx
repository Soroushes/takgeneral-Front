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
        <Grid container sx={{justifyContent: 'space-between', mt: 3 , borderBottom:'1px solid #eee' , pb:3  }}>
            <Grid item xs={4} md={2.5}>
                <Link href={'/product/' + product.product_id} style={{textAlign: 'center'}}>
                    <Image width={100} height={100} style={{width: '100%', height: 'auto'}} alt={'test'}
                           src={testImage}/>
                </Link>
            </Grid>
            <Grid item xs={7} md={8.5}
                  sx={{display: 'flex', flexDirection: ' column', justifyContent: 'space-between'}}>
                <Box>
                    <Typography sx={{mb: 2}} variant="h5">{product.name}</Typography>
                    <Typography sx={{mb: 1}} variant={'subtitle2'}>درجه حفاظت : IP44</Typography>
                    <Typography sx={{mb: 1}} variant={'subtitle2'}>جنس پروانه : برنج</Typography>
                    <Typography sx={{mb: 1}} variant={'subtitle2'}>گارانتی اصالت و سلامت فیزیکی کالا</Typography>
                </Box>
                {
                    !isMobile && (
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}}
                                               id={product.product_variant_id}/>
                            <PriceDiscount
                                finalPriceBold={true} finalPriceColor={'#333'}
                                discountedPriceColor={'text.muted'}
                                discountedPriceFont={'subtitle2'}
                                align={'end'}
                                gap={1}
                                justifyContent={'center'}
                                discountPrice={product.sum_price}
                                finalPrice={product.sum_final_price} discountPercent={product.discount}
                            />
                        </Box>
                    )

                }
            </Grid>
            {
                isMobile && (
                    <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                        <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}} id={product.product_variant_id}/>
                        <PriceDiscount
                            finalPriceBold={true} finalPriceColor={'#333'}
                            discountedPriceColor={'text.muted'}
                            discountedPriceFont={'subtitle2'} justifyContent={'center'} gap={1.5}
                            justify={'row'} discountPrice={product.sum_price}
                            finalPrice={product.sum_final_price} discountPercent={product.discount}
                        />
                    </Grid>
                )
            }
        </Grid>
    );
};
export default CartItems;
