'use client'
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {useFormContext} from "react-hook-form";
import PaymentCard from "@/components/share/PaymentCard";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import Link from "next/link";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import PN from "persian-number";
import CartItems from "@/components/cart/CartItems";

const FinalCheckPage = () => {
    const {loading} = useSelector(state => state.userInfo);
    const selectedProducts = useSelector(state => state.cart) ;
    const {getValues} = useFormContext();
    const {push} = useRouter();
    const data = getValues();

    console.log(data)
    useEffect(() =>{
        if(!getValues('map')) push('/cart/address-selection')
    }, []);
    const payment = ()=>{

    }
    return (
        <>
            {
                loading ? <h1>hi</h1> :
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
                                    <Box display={'flex'} sx={{borderBottom: '1px solid #eee', py: 3}}>
                                        <Typography
                                            width={'20%'} variant={'h4'} fontWeight={'bold'}>گیرنده:
                                        </Typography>
                                        <Typography
                                            variant={'h5'}>فلانی
                                        </Typography>
                                    </Box>
                                    <Box display={'flex'} sx={{borderBottom: '1px solid #eee', py: 3}}>
                                        <Typography
                                            width={'20%'} variant={'h4'} fontWeight={'bold'}>
                                            ارسال به:
                                        </Typography>
                                        <Box width={'100%'}>
                                            <Typography
                                                pb={1}
                                                variant={'h5'}>فلانی
                                            </Typography>
                                            <Typography
                                                pb={1}
                                                variant={'h5'}>فلانی
                                            </Typography>
                                            <Box width={'60%'} pt={1} justifyContent={'space-between'} alignItems={'center'} display={'flex'}>
                                                <Typography variant={'h5'}>واحد: {PN.convertEnToPe(1)}</Typography>
                                                <Typography variant={'h5'}>پلاک: {PN.convertEnToPe(2)}</Typography>
                                                <Typography variant={'h5'}>کد پستی: {PN.convertEnToPe(3)}</Typography>
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
                                <PaymentCard submitFn={payment} button={'ادامه تایید آدرس'}/>
                            </Grid>
                        </Container>
                    </Box>
            }
        </>

    )
}
export default FinalCheckPage