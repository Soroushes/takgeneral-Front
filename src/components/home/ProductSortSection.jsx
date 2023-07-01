'use client'
import SortSection from "../share/SortSection";
import {Container, Grid, Typography} from "@mui/material";
const ProductSortSection =({sortItems})=>{
    return(
        <Container sx={{my: 3 , width:'100%' }}>
            <Typography sx={{mb: 3}} textAlign={'center'} component={'h2'} variant={'body2'}>دسته بندی
                محصولات</Typography>
            <Grid rowGap={3} container>
                {
                    sortItems.map((sortItem) => {
                        return (
                            <Grid item key={sortItem.title} sm={3} xs={6} sx={{px: 1 , width:'100'}}>
                                <SortSection image={sortItem.product_image}
                                            title={sortItem.name} description={sortItem.description}/>
                            </Grid>
                        )
                    })

                }
            </Grid>
        </Container>
    )
}
export default ProductSortSection;