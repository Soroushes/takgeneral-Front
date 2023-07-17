import {Box, Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import Image from "next/image";
import PriceDiscount from "../share/PriceDiscount";
import {useProductServiceItems} from "../../hooks/useProductServiceItems";
import Link from "next/link";
import testImage from '../../assets/images/product-image.png';
import {useSelector} from "react-redux";

const CartItems = ({product}) => {
    const {isMobile} = useSelector(state => state.deviceInfo);
    return (

        <Box sx={{display: "flex", alignItems: {md:'end' , xs:'start'} , justifyContent:{md:'start' , xs:'space-between'} , width: '100%' , gap:{xs:0 , md:3}}}>
            <Box>
                <Link style={{width:'50%'}} href={'/product/' + product.product_id}>
                    <Image width={100} height={100} style={{width:'100%' , height:'auto'}} alt={'test'} src={testImage}/>
                </Link>
                {
                    isMobile ? <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}}
                                                  id={product.product_id}/>: null
                }
            </Box>
            <Box display={'flex'} sx={{height:'100%'}} flexDirection={'column'} justifyContent={'space-between'}>
                <Box>
                    <Typography variant="h5" sx={{mb: 1}}>
                        {product.name}
                    </Typography>
                    <Typography sx={{mb: 2}} variant={'caption'}>درجه حفاظت : IP44</Typography>
                    <Typography variant={'subtitle2'}>جنس پروانه : برنج</Typography>
                    <Typography variant={'subtitle2'}>گارانتی اصالت و سلامت فیزیکی کالا</Typography>
                </Box>
                {
                    isMobile ? <PriceDiscount finalPriceBold={true} finalPriceColor={'#333'} discountedPriceColor={'text.muted'} gap={1}
                                              discountedPriceFont={'subtitle2'} align={'end'} justify={'row'} discountPrice={product.sum_price}
                                              finalPrice={product.sum_final_price} discountPercent={product.discount} fontSize={'body2'}
                                              isDiscountNear={true}/> :
                        <CartEditionButton hideStatus={true} boxSx={{width: '90px', height: '35px'}}
                                           id={product.product_id}/>
                }
            </Box>
            {
                !isMobile ? <PriceDiscount finalPriceBold={true} finalPriceColor={'#333'} discountedPriceColor={'text.muted'} gap={1}
                                           discountedPriceFont={'subtitle2'} align={'end'} discountPrice={product.sum_price}
                                           finalPrice={product.sum_final_price} discountPercent={product.discount} fontSize={'body2'}
                                           isDiscountNear={true}/>: null
            }
        </Box>
    );
};
export default CartItems;
