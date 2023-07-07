'use client'
import {Container, Grid} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";

const ProductBanners = ({banners})=>{
    return (
        <Container sx={{my : 8}}>
            <Grid rowGap={3} container>
                {
                    banners.map((banner)=>(
                        <Grid sx={{px : {md : 2}}} item xs={12} md={4}>
                            <Box textAlign={'center'}>
                                <Image width={400} height={250} src={banner.src} style={{width : '100%' , height :'auto'}}/>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
export default ProductBanners ;