'use client'
import {Container, Grid} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";

const ProductBanners = ({banners , sizing})=>{
    return (
        <Container sx={{my : 8}}>
            <Grid justifyContent={'space-between'} rowGap={3} container>
                {
                    banners.map((banner)=>(
                        <Grid item {...sizing}>
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