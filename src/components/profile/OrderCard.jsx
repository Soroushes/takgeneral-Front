import {Box, Grid, Typography} from "@mui/material";
const OrderCard = ()=>{
    return(
        <Grid container sx={{border:'1px solid #eee' , borderRadius:2 , p:2}}>
            <Grid item xs={12}>
                <Box sx={{borderBottom:'1px solid #eee' , pb:2}} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Typography textAlign={'center'} variant={'subtitle1'}>در حال پردازش</Typography>
                    </Box>
                    <Typography textAlign={'center'} variant={'subtitle1'}>شماره سفارش :  TLC-854865845</Typography>
                    <Typography textAlign={'center'} variant={'subtitle1'}>تاریخ سفارش :  ۱۱ خرداد ۱۴۰۲ ۱۸:۴۵:۵۶</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
export default OrderCard