import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PriceDiscount from "../share/PriceDiscount";
import FreeDelivery from '../../assets/icons/single-product/freeDelivery.svg';
import AvailableIcon from '../../assets/icons/single-product/available.svg';
import OriginalIcon from '../../assets/icons/single-product/original.svg';
import BestPriceIcon from '../../assets/icons/single-product/bestPrice.svg';
import Warranty from '../../assets/icons/single-product/warranty.svg';

const SingleProductSellCard = ({
                                   available,
                                   freeSent,
                                   price,
                                   finalPrice,
                                   warranty,
                                   id,
                               }) => {
    return (
        <>
            <Box sx={{mb: 2, backgroundColor: '#fff', py: 2, px: .5, borderRadius: 2, boxShadow: 1}} display={'flex'}
                 justifyContent={'space-around'}>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: .5}}>
                    <OriginalIcon/>
                    <Typography sx={{textAlign: 'center'}} variant={'subtitle1'}>ضمانت اصالت کالا</Typography>
                </Box>
                {
                    freeSent &&
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: .5}}>
                        <FreeDelivery/>
                        <Typography sx={{textAlign: 'center'}} variant={'subtitle1'}>ارسال رایگان</Typography>
                    </Box>
                }
                {
                    available &&
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: .5}}>
                        <AvailableIcon/>
                        <Typography sx={{textAlign: 'center'}} variant={'subtitle2'}>موجود در انبار</Typography>
                    </Box>
                }
            </Box>

            <Box
                sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: 1,
                    backgroundColor:'#fff'
                }}>
                {
                    warranty &&
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Warranty/>
                        <Typography textAlign={'center'} variant={'subtitle1'}>12 ماه گارانتی تعمیر و تعویض</Typography>
                    </Box>
                }
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <BestPriceIcon/>
                    <Typography textAlign={'center'} variant={'subtitle1'}>تضمین بهترین قیمت</Typography>
                </Box>
            </Box>

            <Box sx={{
                px: 1.5,
                pb: 3,
                backgroundColor: "#fff",
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxShadow: 1
            }}>
                <Typography sx={{fontWeight: "bold", borderBottom: '1px solid #eee', py: 2, px: 1.5}}
                            variant={'h5'}>قیمت محصول:</Typography>
                <Box sx={{my: 2, display: 'flex', justifyContent: 'end', width: '100%', direction: 'ltr'}}>
                    <PriceDiscount finalPriceBold={true} align={'end'} gap={1.7} justify={{md: 'column', xs: 'row'}}
                                   discountPrice={price}
                                   finalPrice={finalPrice} discountedPriceColor={'text.muted'}
                                   finalPriceColor={'text.main'} discountedPriceFont={'h5'} fontSize={'h4'}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%'}}>
                    <CartEditionButton boxSx={{width: '110px'}} id={id}/>
                </Box>
            </Box>
        </>
    )
}
export default SingleProductSellCard;