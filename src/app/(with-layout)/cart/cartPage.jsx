'use client'
import {Container, Grid, Typography , Box} from "@mui/material";
import {useSelector} from "react-redux";
import CartItems from "../../../components/cart/CartItems";
import EmptyCart from '../../../assets/icons/cart/emptyCartIcon.svg';
import {useRouter} from "next/navigation";
import PaymentCard from "@/components/share/PaymentCard";

const CartPage =()=> {
    const selectedProducts = useSelector(state => state.cart) ;
    const {isLoggedIn , profile_complete} = useSelector(state=>state.userInfo);
    const {push} = useRouter();
    const continueShop = ()=>{
        if(profile_complete) push(`/cart/address-selection`);
        else if(isLoggedIn) push('/profile?from=/cart/address-selection');
        else if(!isLoggedIn) push('/login?from=cart/address-selection');
    }
    return (
        !selectedProducts.products?.length ?
            <Box sx={{width:'100%' , pt:2 , gap:2 , display: 'flex', justifyContent: 'center', alignItems:'center' , flexDirection:'column'}}>
                <Box>
                    <EmptyCart sx={{color: 'text.main'}}/>
                </Box>
                <Typography fontWeight={'bold'}>سبد خرید شما خالی است !</Typography>
            </Box> :
            <Box sx={{ pt: 2, minHeight: "80vh", display: 'flex'}}>
                <Container>
                    <Grid container rowGap={1} sx={{justifyContent:'space-between'}}>
                        <Grid item md={8} lg={8.5} xs={12}>
                            <Typography sx={{borderBottom :'1px solid #eee' , pb:1.5}} variant={'h5'} fontWeight={'bold'}>سبد خرید</Typography>
                            <Box sx={{width:'100%' , my:1.5}}>
                                {
                                    selectedProducts?.products?.map((product) => {
                                        return (
                                            <CartItems key={product.product_variant_id} product={product}/>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                        <PaymentCard button={'ادامه خرید'} submitFn={continueShop}/>
                    </Grid>
                </Container>
            </Box>
    )
}
export default CartPage;