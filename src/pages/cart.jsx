import {Box} from "@mui/system";
import {Grid, Container, Typography} from "@mui/material";
import CartItems from "src/components/cart/CartItems";
import OrderCartItems from "src/components/cart/OrderCartItems";
const cart = ()=>{
    return(
        <Box sx={{backgroundColor : "#fafafa" , pt : 2}}>
        <Container>
            <Grid container rowGap={7}>
                <Grid item md={12} sx={{display:{lg :'flex' , md :'none' , xs :'none'} , justifyContent:'space-between'}}>
                    <Typography>سبد خرید شما</Typography>
                </Grid>
                <Grid item md={8} lg={8.5} xs={12}>
                    <Grid container sx={{mb : 4}}>
                        <Grid xs={12} item sx={{display :{lg :'flex' , xs:'none'} , backgroundColor :'#fff' , py :2 , borderRadius :3 }}>
                            <Typography sx={{width :'50%' , textAlign:'center', fontSize:'13px' , fontWeight :'bold'}}>محصولات</Typography>
                            <Typography sx={{width :'20%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>تعداد</Typography>
                            <Typography sx={{width :'30%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>قیمت کل</Typography>
                        </Grid>
                    </Grid>
                    <CartItems/>
                    <CartItems/>
                    <CartItems/>
                    <CartItems/>
                    <CartItems/>
                </Grid>
                <Grid sx={{pl : {lg : 3}}} item md={4} lg={3.5} xs={12}><OrderCartItems/></Grid>
            </Grid>
        </Container>
        </Box>
    )
}
export default cart;