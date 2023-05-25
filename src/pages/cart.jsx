import {Box} from "@mui/system";
import {Grid, Container, Typography, Button} from "@mui/material";
import CartItems from "src/components/cart/CartItems";
import {useSelector} from "react-redux";
import PN from "persian-number";
import EmptyCart from '../components/icons/emptyCart.svg'
const cart = () => {
    const selectedProducts = useSelector(state => state.cart)
    return (
        !selectedProducts.products?.length ?
            <Box sx={{backgroundColor: "#fafafa", pt: 2, minHeight: "80vh", display: 'flex', alignItems: 'center'}}>
                <Box sx={{width: '100%' , display:'flex' , justifyContent:'center'}}>
                    <EmptyCart sx={{color: 'text.main'}}/>
                </Box>
            </Box> :
            <Box sx={{backgroundColor: "#fafafa", pt: 2, minHeight: "80vh", display: 'flex'}}>
                <Container>
                    <Grid container rowGap={1}>
                        <Grid item md={12}
                              sx={{display: {lg: 'flex', md: 'none', xs: 'none'}, justifyContent: 'space-between'}}>
                            <Typography>سبد خرید شما</Typography>
                        </Grid>
                        <Grid item md={8} lg={8.5} xs={12}>
                            <Grid container sx={{mb: 1}}>
                                <Grid xs={12} item sx={{
                                    display: {lg: 'flex', xs: 'none'},
                                    backgroundColor: '#fff',
                                    py: 1.5,
                                    borderRadius: 3
                                }}>
                                    <Typography variant="body2" sx={{
                                        width: '50%',
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}>محصولات</Typography>
                                    <Typography variant="body2" sx={{
                                        width: '20%',
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}>تعداد</Typography>
                                    <Typography variant="body2"
                                                sx={{width: '30%', textAlign: 'center', fontWeight: 'bold'}}>قیمت
                                        کل</Typography>
                                </Grid>
                            </Grid>
                            {
                                selectedProducts?.products?.map((product) => {
                                    return (
                                        <CartItems key={product.id} product={product}/>
                                    )
                                })
                            }
                        </Grid>
                        <Grid sx={{pl: {md: 3}}} item md={4} lg={3.5} xs={12}>
                            <Grid sx={{backgroundColor: '#fff', borderRadius: 3, mb: 2, gap: 3, p: 3}} container>
                                <Grid item xs={12}
                                      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography variant="subtitle1" sx={{color: 'text.muted', fontWeight: 'bold'}}>قیمت
                                        کالاها</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'text.muted',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_price)))} تومان</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 5
                                }}>
                                    <Typography variant="subtitle1" sx={{color: 'text.muted', fontWeight: 'bold'}}>تخفیف کالاها</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'primary.main',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_discount_price)))} تومان</Typography>
                                </Grid>
                                <Grid item xs={12}
                                      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography variant="subtitle1" sx={{color: 'text.muted', fontWeight: 'bold'}}>جمع
                                        کل</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'text.muted',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_final_price)))} تومان</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Button variant={'contained'}
                                            sx={{textAlign: 'center', width: '100%', borderRadius: 2}}>ثبت
                                        سفارش</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}
export default cart;