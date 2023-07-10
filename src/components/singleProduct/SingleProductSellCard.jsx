import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PriceDiscount from "../share/PriceDiscount";
import Suggestion from "../../assets/icons/suggestion.svg";
import FreeDelivery from '../../assets/icons/freeDelivery.svg';
import Warranty from '../../assets/icons/warranty (2).svg';
import {useSelector} from "react-redux";

const SingleProductSellCard = ({
                                   available,
                                   freeSent,
                                   sevenDaysBack,
                                   price,
                                   discount,
                                   finalPrice,
                                   warranty,
                                   id,
                                   opinionRef
                               }) => {
    const {isMobile} = useSelector(state => state.deviceInfo)
    const scrollToOpinion = () => {
        window.scrollTo({
            top: opinionRef.current?.offsetTop - 150,
            behavior: 'smooth'
        })
    };
    return (
        <>
            <Box sx={{mb: 2, backgroundColor: '#fff', py: 2 , px:.5, borderRadius: 2, boxShadow: 1}} display={'flex'}
                 justifyContent={'space-around'}>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1.5}}>
                    <FreeDelivery/>
                    <Typography sx={{textAlign:'center'}} variant={'subtitle1'}>ضمانت اصالت کالا</Typography>
                </Box>
                {
                    freeSent &&
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1.5}}>
                        <FreeDelivery/>
                        <Typography sx={{textAlign:'center'}} variant={'subtitle1'}>ارسال رایگان</Typography>
                    </Box>
                }
                {
                    available &&
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1.5}}>
                        <FreeDelivery/>
                        <Typography sx={{textAlign:'center'}} variant={'subtitle1'}>موجود در انبار</Typography>
                    </Box>
                }
                {
                    isMobile && warranty &&
                        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1.5}}>
                            <Warranty/>
                            <Typography variant={'body2'}>گارانتی</Typography>
                        </Box>
                }
            </Box>
            {
                warranty && !isMobile &&
                <Box sx={{backgroundColor: '#fff', display: 'flex', gap: 1, mb: 2, p: 2, borderRadius: 2, boxShadow: 1}}>
                    <Warranty/>
                    <Typography variant={'body2'}>گارانتی</Typography>
                </Box>
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
                <Typography sx={{fontWeight: "bold", borderBottom: '1px solid #eee', pt: 3, pb: 1.5, px: 1}}
                            variant={'h5'}>قیمت محصول:</Typography>
                <Box sx={{my: 2, display: 'flex', justifyContent: 'end' , width:'100%', direction: 'ltr'}}>
                    <PriceDiscount finalPriceBold={true} align={'end'} gap={1.7} justify={{md:'column' , xs:'row'}} discountPrice={price}
                                   finalPrice={finalPrice} discountedPriceColor={'text.muted'}
                                   finalPriceColor={'text.main'} discountedPriceFont={'h5'} fontSize={'h2'}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%'}}>
                    <CartEditionButton id={id}/>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'end'} sx={{mt: 2}}>
                <Button variant="contained" onClick={scrollToOpinion} color={'secondary'}
                        sx={{aspectRatio: '1/1', borderRadius: '100%'}}>
                    <Suggestion/>
                </Button>
            </Box>

        </>
    )
}
export default SingleProductSellCard;