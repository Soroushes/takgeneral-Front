import {Grid, Pagination} from "@mui/material";
import ProductPreviewCard from "./ProductPreviewCard";
import {BASE_URL} from "../../data/urls";
import {Box} from "@mui/system";
import {usePathname} from "next/navigation";
const ProductList =({product , count=8 , page =1})=>{
    const noQueryPath = usePathname() ;
    const handlePaginationChange = (e, value) => {
        push({
                pathname: noQueryPath,
                query: {
                    page: value,
                }
            },
            undefined,
            {scroll: false}
        )
    }
    return(
        <Grid item xs={12} md={8.5} >
            <Grid container sx={{borderRadius: 2}}>
                {
                    product.map((productItem) => (
                        <Grid key={productItem.id} item sx={{ pb:1.6 , pl:.8 , pr:.8}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard
                                shadow={2}
                                id={productItem.id}
                                price={productItem.price} title={productItem.name}
                                discountPercent={+productItem.discount}
                                afterDiscountPrice={productItem.final_price}
                                image={`${BASE_URL}media/Group_2073.png`}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: {md:'end' , xs:'center'}, mt: 4}}>
                <Pagination shape={'rounded'} onChange={handlePaginationChange} page={page} count={count}
                            color={'secondary'} />
            </Box>
        </Grid>
    )
}
export default ProductList;