import { Typography , Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import PN from "persian-number";
const OrderCartItems = ()=>{
    // todo create an array map them here delete this component and map on the cart.jsx component
    const selectedProducts = useSelector(state => state.cart)
        return(
        <Grid sx={{backgroundColor:'#fff'  , p:2 , borderRadius :3  ,mb:2 , gap:3}} container>
            <Grid item xs={12} sx={{display :'flex' , justifyContent :'space-between', alignItems :'center'}}>
                <Typography variant="subtitle1" sx={{color :'text.muted' , fontWeight :'bold'}}>قیمت کالاها</Typography>
                <Typography variant="subtitle1" sx={{color :'text.muted' , fontWeight :'bold'}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_price)))} تومان</Typography>
            </Grid>
            <Grid item xs={12} sx={{display :'flex' , justifyContent :'space-between', alignItems :'center' ,mb:5}}>
                <Typography variant="subtitle1" sx={{ color :'text.muted' , fontWeight :'bold'}}>تخفیف کالاها</Typography>
                <Typography variant="subtitle1" sx={{ color :'secondary.main' , fontWeight :'bold'}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_discount_price))) } تومان</Typography>
            </Grid>
            <Grid item xs={12} sx={{display :'flex' , justifyContent :'space-between', alignItems :'center'}}>
                <Typography variant="subtitle1" sx={{ color :'text.muted' , fontWeight :'bold'}}>جمع کل</Typography>
                <Typography variant="subtitle1" sx={{ color :'text.muted' , fontWeight :'bold'}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(selectedProducts.total_final_price)))} تومان</Typography>
            </Grid>
            <Grid item xs={12} sx={{display:'flex' , justifyContent:'center'}}>
                <Button variant={'contained'} color={'secondary'} sx={{textAlign:'center'  , width:'100%'}}>ثبت  سفارش</Button>
            </Grid>
        </Grid>
    )
}
export default OrderCartItems;