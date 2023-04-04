import {Box} from "@mui/system";
import {Grid, Container, Typography, Divider} from "@mui/material";
import CartItems from "src/components/cart/CartItems";
import OrderCartItems from "src/components/cart/OrderCartItems";
const cart = ()=>{
    return(
        <Box sx={{backgroundColor: '#F9F9F9', py: 3}}>
        <Container sx={{mt :4}}>
            <Grid container sx={{display:'flex'  ,rowGap:7 }}>
                <Grid item md={12} sx={{display:{lg :'flex' , md :'none' , xs :'none'} , justifyContent:'space-between'}}>
                    <Typography>سبد خرید شما</Typography>
                </Grid>
                <Grid item md={9} xs={12} sx={{ display :'flex' , flexDirection :'column'  , gap:2}}>
                    <Grid container sx={{width :'100%' }}>
                        <Grid item sx={{display :{lg :'flex' , md:'none' , xs:'none'}  , width:'100%' , backgroundColor :'white' , py :2 , borderRadius :3 }}>
                            <Typography sx={{width :'50%' , textAlign:'center', fontSize:'13px' , fontWeight :'bold'}}>محصولات</Typography>
                            <Typography sx={{width :'20%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>تعداد</Typography>
                            <Typography sx={{width :'30%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>قیمت کل</Typography>
                        </Grid>
                    </Grid>
                    <CartItems/>
                </Grid>
                <Grid item md={3} xs={12}><OrderCartItems/></Grid>
            </Grid>
        </Container>
        </Box>
    )
}
export default cart;