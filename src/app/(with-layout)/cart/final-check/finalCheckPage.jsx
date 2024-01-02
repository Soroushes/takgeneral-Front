'use client'
import {Box, Button, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useFormContext} from "react-hook-form";
import PaymentCard from "@/components/share/PaymentCard";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import Link from "next/link";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import PN from "persian-number";
import CartItems from "@/components/cart/CartItems";
import {useAxios} from "@/hooks/useAxios";

const FinalCheckPage = () => {
    const {full_name , phone_number , loading} = useSelector(state => state.userInfo);
    const selectedProducts = useSelector(state => state.cart) ;
    const {getValues} = useFormContext();
    const {callApi} = useAxios();
    const {push} = useRouter();
    const data = getValues();
    useEffect(() =>{
        if(!getValues('map')) push('/cart/address-selection')
    }, []);
    const payment = ()=>{
        callApi({
            method:'POST',
            url:'request-to-payment',
            data:{
                order_id : selectedProducts.order_id,
                address_id : +data.map,
                receiver_name : data.myself ? full_name : data.name,
                receiver_phone : data.myself ? phone_number : data.phone,
                order_description : data.full_address
            },
            token:true,
            successFunc:(res)=>{
                push(res.payment_link)
            }
        })
    }
    return (
        <>
            {
                loading ?
                    <Box width={'100%'} sx={{ display: 'flex',minHeight: "50vh" , justifyContent:'center' , alignItems:'center' , margin:'auto'}}>
                        <CircularProgress />
                    </Box>:
                    <Box sx={{pt: 2, minHeight: "80vh", display: 'flex'}}>
                        <Container>
                            <Grid container>
                                <Grid width={'100%'} item md={8} lg={8.5} xs={12}>
                                    <Box sx={{borderBottom: '1px solid #eee', pb: 1, pt: 1}} display={'flex'}
                                         justifyContent={'space-between'}>
                                        <Box>
                                            <Typography variant={'h1'} fontWeight={'bold'}>نهایی کردن خرید</Typography>
                                        </Box>
                                        <Link href={'/cart/address-selection'}>
                                            <Button sx={{borderRadius: 1.5}}>برگشت<ChevronLeftRoundedIcon/></Button>
                                        </Link>
                                    </Box>
                                    <Box display={'flex'} rowGap={1} flexDirection={{md:'row' , xs:'column'}} sx={{borderBottom: '1px solid #eee', py: 3}}>
                                        <Typography
                                            width={'20%'} variant={'h4'} fontWeight={'bold'}>گیرنده:
                                        </Typography>
                                        <Box display={'flex'} width={{md:'40%' , xs:'80%'}} justifyContent={'space-between'}>
                                            <Typography variant={'h5'}>
                                                {
                                                    data.myself ? full_name : data.name
                                                }
                                            </Typography>
                                            <Typography variant={'h5'}>
                                                {
                                                    data.myself ? phone_number : data.phone
                                                }
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} rowGap={1} flexDirection={{md:'row' , xs:'column'}} sx={{borderBottom: '1px solid #eee', py: 3}}>
                                        <Typography
                                            width={'20%'} variant={'h4'} fontWeight={'bold'}>
                                            ارسال به:
                                        </Typography>
                                        <Box px={{xs:1 , md:0}} width={'100%'}>
                                            <Typography pb={1} variant={'h5'}>
                                                {
                                                    data?.selectedMap?.title
                                                }
                                            </Typography>
                                            <Typography
                                                pb={1}
                                                variant={'h5'}>{
                                                data.selectedMap?.full_address
                                            }
                                            </Typography>
                                            <Box width={{md:'60%' , xs:'80%'}} pt={1} justifyContent={'space-between'} alignItems={'center'} display={'flex'}>
                                                <Typography variant={'h5'}>واحد: {PN.convertEnToPe(data?.selectedMap?.vahed)}</Typography>
                                                <Typography variant={'h5'}>پلاک: {PN.convertEnToPe(data?.selectedMap?.pelak)}</Typography>
                                                <Typography variant={'h5'}>کد پستی: {PN.convertEnToPe(data?.selectedMap?.post_code)}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box  sx={{ py: 3}}>
                                        <Typography
                                            width={'20%'} pb={2} variant={'h4'} fontWeight={'bold'}>سفارش:
                                        </Typography>
                                        <Box sx={{width:'100%' , my:1.5}}>
                                            {
                                                selectedProducts?.products?.map((product) => {
                                                    return (
                                                        <CartItems haveEditionButton={false} key={product.product_variant_id} product={product}/>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                                <PaymentCard submitFn={payment} button={'پرداخت'}/>
                            </Grid>
                        </Container>
                    </Box>
            }
        </>

    )
}
export default FinalCheckPage