'use client'
import OuterImageSection from "../share/OuterImageSection";
import {Container, Grid, Typography} from "@mui/material";
const ProductSortSection =({sortItems})=>{
    return(
        <Container sx={{my: 3 , width:'100%' }}>
            <Typography sx={{mb: 3}} textAlign={'center'} component={'h2'} variant={'body2'}>دسته بندی
                محصولات</Typography>
            <Grid rowGap={3} container>
                {
                    sortItems.map((sortItem , index) => {
                        return (
                            <Grid item key={index} sm={4} lg={3} xs={6} >
                                <OuterImageSection image={sortItem.product_image}
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