import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container, Typography } from "@mui/material";
import categoryBanner from '../../../../public/banner.png'
import ProductPreviewCard from "../../../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import MainModel from "src/components/share/MainModel";
import { useState } from "react";

const Category = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerIsOpen(prev => !prev);
    };
    const brandFilter ={
        title :'برند های پمپ', 
        values:[
            {
                name :'pentax' , 
                number :'2'
            }, 
            {
                name :'diaselsaz' , 
                number :'3'
            } 
        ]
    }
    return (
        <>
            <Box sx={{width: '100%', aspectRatio: '4.8/1', position: 'relative', p: 0, mb: 3}}>
                <Image fill alt={''} src={categoryBanner}/>
            </Box>
            <Container maxWidth={'lg'}>
                <Grid container rowGap={2}>
                    <Grid container xs={3} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{height: 300, width: "100%"}}>
                            <CheckBoxFilter subFilter={brandFilter}/>
                        </Box>
                    </Grid>
                    <Grid container xs={12} sx={{ width :'100%', display: {xs: 'block', md: "none"} , borderRadius:2}}>
                        <Box sx={{width :'100%' , height:'50px' ,borderBottom :'1px solid #ccc' , display :'flex' , flexDirection :'column' , justifyContent :'center'}}>
                            <Typography onClick={toggleDrawer}>فیلتر</Typography>
                            <MainModel sx={{width :'100%'}} drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen}/>
                        </Box>
                    </Grid>
                    <Grid rowGap={4} xs={12} md={9} container sx={{borderRadius: 2, boxShadow: 3}}>
                        <Grid item sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard price={12000000} title={'فلومتر مایع و گاز سایز 25 میلی متر مدل خطی LZB-VA تمام استیل'}
                                                discountPercent={20}
                                                afterDiscountPrice={100000000}
                                                image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                        </Grid>
                        <Grid sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard price={12000000} title={'پمپ آب خانگی محیطی 1 اسب AQm75 لئو'}
                                                image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                        </Grid>
                        <Grid sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard price={12000000} title={'\'فلومتر مایع و گاز سایز 25 میلی متر مدل خطی sad asd dsa sad asd asd asd asd '}
                                                image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                        </Grid>
                        <Grid sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard price={12000000} title={'پمپ پمپ پمپ پمپ'}
                                                image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                        </Grid>
                        <Grid sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard price={12000000} title={'پمپ پمپ پمپ پمپ'}
                                                image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </>

    )
}
export default Category;