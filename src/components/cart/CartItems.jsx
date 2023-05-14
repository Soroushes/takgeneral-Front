import {Box, Grid, Typography} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import Image from "next/image";
import PriceDiscount from "../share/PriceDiscount";
import {useProductServiceItems} from "../../hooks/useProductServiceItems";
const CartItems = ({product}) => {
    const productServiceItems = useProductServiceItems({
        freeSent: product.free_send,
        wareHouseExist: true,
        notFakeWarranty: true,
        smallSize : true
    });
    return (
        <Grid
            container
            rowGap={2}
            sx={{borderRadius: 3, p: 2, mb: 4, backgroundColor: "#fff"}}
        >
            <Grid item lg={6} xs={12}>
                <Box sx={{display: "flex", gap: 6, alignItems: 'center'}}>
                    <Image width={100} height={100} alt={'test'} src={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 1}}>
                            {product.name}
                        </Typography>
                        <Box>
                            {productServiceItems.map((productDetailItem) => {
                                if (productDetailItem.show) {
                                    return (
                                        <Box key={productDetailItem.title}
                                             sx={{display: "flex", alignItems: "center", gap: 1}}>
                                            <Typography variant={'caption'}>{productDetailItem.icon}</Typography>
                                            <Typography variant={'subtitle2'}>{productDetailItem.title}</Typography>
                                        </Box>
                                    );
                                }
                            })}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid
                lg={6}
                xs={12}
                item
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <CartEditionButton boxSx={{width : '150px'}} id={product.id}/>
                <PriceDiscount price={product.sum_price} finalPrice={product.sum_final_price} discountPercent={product.discount} fontSize={'body2'} isDiscountNear={true}/>
            </Grid>
        </Grid>
    );
};
export default CartItems;
