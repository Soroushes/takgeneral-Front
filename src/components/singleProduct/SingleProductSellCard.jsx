import {Typography , Box} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PriceDiscount from "../share/PriceDiscount";
import FreeDelivery from '../../assets/icons/single-product/freeDelivery.svg';
import AvailableIcon from '../../assets/icons/single-product/available.svg';
import OriginalIcon from '../../assets/icons/single-product/original.svg';
import BestPriceIcon from '../../assets/icons/single-product/bestPrice.svg';
import Warranty from '../../assets/icons/single-product/warranty.svg';
import {useCart} from "@/hooks/useCart";
import FakeIcon from '../../assets/icons/single-product/iranian.svg';
const SingleProductSellCard = ({
                                   available,
                                   freeSent,
                                   warranty,
                                   id,
                                   price, finalPrice , madeIn , minPrice
                               }) => {
    const {priceItem} = useCart(id);
    return (
        <>
            <Box sx={{mb: 2, backgroundColor: '#fff', py: 2, px: .5, borderRadius: 2, boxShadow: 1}} display={'flex'}
                 justifyContent={'space-around'}>
                {
                    madeIn &&
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: .5}}>
                        {
                            madeIn === 'کالای اورجینال' ?
                                <OriginalIcon/>
                                :
                                <FakeIcon/>
                        }
                        <Typography sx={{textAlign: 'center'}} variant={'subtitle1'}>{madeIn}</Typography>
                    </Box>
                }
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
            {
                minPrice || warranty ?
                    <Box
                        sx={{
                            mb: 2,
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 1,
                            display: 'flex',
                            justifyContent: 'space-around',
                            gap: 1,
                            backgroundColor: '#fff'
                        }}>
                        {
                            warranty &&
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <Warranty/>
                                <Typography textAlign={'center'} variant={'subtitle1'}>{warranty}</Typography>
                            </Box>
                        }
                        {
                            minPrice &&
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <BestPriceIcon/>
                                <Typography textAlign={'center'} variant={'subtitle1'}>کمترین قیمت در ایران</Typography>
                            </Box>
                        }
                    </Box>: null


            }
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
                                   discountPrice={priceItem.price ? priceItem.price: price}
                                   finalPrice={priceItem.finalPrice ? priceItem.finalPrice: finalPrice} discountedPriceColor={'text.muted'}
                                   finalPriceColor={'text.main'} discountedPriceFont={'h5'} fontSize={'h4'}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%'}}>
                    <CartEditionButton available={available} boxSx={{width: '110px'}} id={id}/>
                </Box>
            </Box>
        </>
    )
}
export default SingleProductSellCard;