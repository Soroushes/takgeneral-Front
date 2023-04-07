import {Box} from "@mui/system";
import {Grid, Container, Typography} from "@mui/material";
import CartItems from "src/components/cart/CartItems";
import OrderCartItems from "src/components/cart/OrderCartItems";
import { useSelector } from "react-redux";
const cart = ()=>{
    const selectedProducts = useSelector(state => state.cart)
    return(
        <Box sx={{backgroundColor : "#fafafa" , pt : 2 , minHeight : "100%"}}>
        <Container>
            <Grid container rowGap={1}>
                <Grid item md={12} sx={{display:{lg :'flex' , md :'none' , xs :'none'} , justifyContent:'space-between'}}>
                    <Typography>سبد خرید شما</Typography>
                </Grid>
                <Grid item md={8} lg={8.5} xs={12}>
                    <Grid container sx={{mb:1}}>
                        // todo change width
                        <Grid xs={12} item sx={{display :{lg :'flex' , xs:'none'} , backgroundColor :'#fff' , py :2 , borderRadius :3 }}>
                            <Typography sx={{width :'50%' , textAlign:'center', fontSize:'13px' , fontWeight :'bold'}}>محصولات</Typography>
                            <Typography sx={{width :'20%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>تعداد</Typography>
                            <Typography sx={{width :'30%', textAlign:'center', fontSize:'13px', fontWeight :'bold'}}>قیمت کل</Typography>
                        </Grid>
                    </Grid>
                    {
                        selectedProducts?.products?.map((product)=>{
                            return(
                                <CartItems key={product.id} product={product}/>
                            )
                        })
                    }
                </Grid>
                <Grid sx={{pl : {md : 3}}} item md={4} lg={3.5} xs={12}><OrderCartItems/></Grid>
            </Grid>
        </Container>
        </Box>
    )
}
export default cart;