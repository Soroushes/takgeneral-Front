import { Box, Grid, Typography, Stack } from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PN from "persian-number";
import Image from "next/image";
import PriceDiscount from "../share/PriceDiscount";
import { useProductDetailItems } from "../../hooks/useProductDetailItems";
const CartItems = ({ product }) => {
  const productDetailItems = useProductDetailItems({
    freeSent: product.free_send,
    wareHouseExist: true,
    notFakeWarranty: true,
    sevenDaysBack: product.seven_days_back,
    warranty: product.warranty,
  });
  return (
    <Grid
      container
      rowGap={2}
      sx={{ borderRadius: 3, p: 2, mb: 4, backgroundColor: "#fff" }}
    >
      <Grid item lg={6} xs={12}>
        <Box sx={{ display: "flex", gap: 2, alignItems: { lg: "center" } }}>
        {
            product.main_image ? <Image width={100} height={100} alt={'test'} src={product.main_image} /> : null
        }
          <Box>
            <Typography sx={{ fontSize: "20px", mb: 1 }}>
              {product.name}
            </Typography>
            <Box sx={{ display: { lg: "none" } }}>
              {productDetailItems.map((productDetailItem) => {
                if (productDetailItem.show) {
                  return (
                    <Box key={productDetailItem.title} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography>{productDetailItem.icon}</Typography>
                      <Typography>{productDetailItem.title}</Typography>
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
        <CartEditionButton fromCart={true} id={2} />
        <PriceDiscount price={product.price} finalPrice={product.final_price} discount={product.discount} fontSize={'caption'} isDiscountNear={true}/>
      </Grid>
      <Grid sx={{ display: { lg: "flex", xs: "none" } }} item lg={12}>
        <Box gap={3} display={"flex"}>
          {productDetailItems.map((productDetailItem) => {
            if (productDetailItem.show) {
              return (
                <Box key={productDetailItem.title} sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>{productDetailItem.icon}</Typography>
                  <Typography>{productDetailItem.title}</Typography>
                </Box>
              );
            }
          })}
        </Box>
      </Grid>
    </Grid>
  );
};
export default CartItems;
