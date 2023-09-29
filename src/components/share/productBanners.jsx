'use client'
import {Container, Grid , Box} from "@mui/material";
import Image from "next/image";

const ProductBanners = ({banners , sizing})=>{
    return (
        <Container sx={{my : 8}}>
            <Grid justifyContent={'space-between'} rowGap={3} container>
                {
                    banners?.map((banner)=>(
                        <Grid key={Math.random() * 1000} item {...sizing}>
                            <Box textAlign={'center'}>
                                <Image alt={''} width={400} height={250} src={banner.src} style={{width : '100%' , height :'auto'}}/>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
export default ProductBanners ;