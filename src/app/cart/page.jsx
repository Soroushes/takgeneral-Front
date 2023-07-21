'use client'
import {Box} from "@mui/system";
import {Button, Container, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import PN from "persian-number";
import CartItems from "../../components/cart/CartItems";
import EmptyCart from '../../assets/icons/cart/Frame 39376.svg';

export default function Page() {
    const selectedProducts = useSelector(state => state.cart) ;
    return (
        !selectedProducts.products?.length ?
            <Box sx={{width:'100%' , pt:2 , gap:2 , display: 'flex', justifyContent: 'center', alignItems:'center' , flexDirection:'column'}}>
                    <Box>
                        <EmptyCart sx={{color: 'text.main'}}/>
                    </Box>
                    <Typography fontWeight={'bold'}>سبد خرید شما خالی است !</Typography>
            </Box> :
            <Box sx={{backgroundColor: "#fafafa", pt: 2, minHeight: "80vh", display: 'flex'}}>
                <Container>
                    <Grid container rowGap={1} sx={{justifyContent:'space-between'}}>
                        <Grid item md={8} lg={8.5} xs={12}>
                            <Typography sx={{borderBottom :'1px solid #eee' , pb:1.5}} variant={'h5'} fontWeight={'bold'}>سبد خرید</Typography>
                            <Box sx={{width:'100%' , my:1.5}}>
                                {
                                    selectedProducts?.products?.map((product) => {
                                        return (
                                            <CartItems key={product.product_id} product={product}/>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                        <Grid sx={{pl: {md: 3}}} item md={4} lg={3.3} xs={12}>
                            <Box sx={{backgroundColor: '#fff', borderRadius: 3, mb: 2, pb: 3}} container>
                                <Typography sx={{textAlign:'center' , py:2 , borderBottom :'1px solid #eee'}}>جزییات خرید</Typography>
                                <Box
                                      sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' , px:3 , py:2}}>
                                    <Typography variant="subtitle1">قیمت
                                        محصولات:</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'text.muted',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_price)))} تومان</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center', py: 1 , px:3
                                }}>
                                    <Typography color={'error'} variant="subtitle1">تخفیف محصولات:</Typography>
                                    <Typography color={'error'} variant="subtitle1"
                                                fontWeight={'bold'}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_discount_price)))} تومان</Typography>
                                </Box>
                                <Box
                                      sx={{
                                          display: 'flex',
                                          borderTop: '1px solid #eee',
                                          borderBottom: '1px solid #eee',
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                          py: 2 , px:3
                                      }}>
                                    <Typography variant="subtitle1">هزینه ارسال:</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'text.muted',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_price)))} تومان</Typography>
                                </Box>
                                <Grid item xs={12}
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                          py: 2 , px:3
                                      }}>
                                    <Typography variant="subtitle1">مبلغ قابل پرداخت:</Typography>
                                    <Typography variant="subtitle1" sx={{
                                        color: 'text.muted',
                                        fontWeight: 'bold'
                                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_final_price)))} تومان</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' , px:2}}>
                                    <Button variant={'contained'}
                                            sx={{textAlign: 'center', width: '100%', borderRadius: 2}}>ثبت
                                        سفارش</Button>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}