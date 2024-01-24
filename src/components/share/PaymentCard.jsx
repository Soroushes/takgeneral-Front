import {Box, Button, Grid, Typography} from "@mui/material";
import PN from "persian-number";
import {useSelector} from "react-redux";

const PaymentCard = ({submitFn , button})=>{
    const selectedProducts = useSelector(state=>state.cart);
    return(
        <Grid sx={{pl: {md: 3}}} item md={4} lg={3.3} xs={12}>
            <Box sx={{backgroundColor: '#fff', borderRadius: 3, mb: 2, pb: 3}}>
                <Typography sx={{textAlign:'center' , py:2 , borderBottom :'1px solid #eee'}}>جزییات خرید</Typography>
                <Box
                    sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' , px:3 , py:2}}>
                    <Typography variant="subtitle1">قیمت
                        محصولات:</Typography>
                    <Typography variant="subtitle1" sx={{
                        color: 'text.muted',
                        fontWeight: 'bold'
                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts?.total_price)))} تومان</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center', py: 1 , px:3
                }}>
                    <Typography color={'error'} variant="subtitle1">تخفیف محصولات:</Typography>
                    <Typography color={'error'} variant="subtitle1"
                                fontWeight={'bold'}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts?.total_discount_price)))} تومان</Typography>
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
                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(0)))} تومان</Typography>
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
                    }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts?.total_final_price)))} تومان</Typography>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' , px:2}}>
                    <Button type={'submit'} onClick={submitFn} variant={'contained'}
                            sx={{textAlign: 'center', width: '100%', borderRadius: 2}}>{button}</Button>
                </Grid>
            </Box>
        </Grid>
    )
}
export default PaymentCard;