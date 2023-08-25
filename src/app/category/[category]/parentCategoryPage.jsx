'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import categoryBanner from '../../../assets/images/home/home-main-banner.png';
import Image from "next/image";
import sortImage from '../../../assets/images/testSort.png'
import BrandSlider from "../../../components/share/BrandSlider";
import categoryImages from '../../../assets/images/home/homeBanner.png';
import {useSelector} from "react-redux";
import OuterImageSection from "../../../components/share/OuterImageSection";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";

export default function ParentCategoryPage({brands , subCategory , breadcrumb , main_category}) {
    const {isMobile} = useSelector(state => state.deviceInfo);
    return (
        <Container disableGutters>
            <Box sx={{position: "relative", width: '100%', aspectRatio: isMobile ? '1.5/1' : '4.5/1', mt: 1, mb: 3}}>
                <Image src={categoryBanner} style={{borderRadius: '8px'}} fill alt={'banner'}/>
            </Box>
            <Box sx={{px:1}}>
                <BreadcrumbGenerator breadcrumb={breadcrumb}/>
            </Box>
            <Typography sx={{px:  2}} fontWeight={'bold'} variant={'h2'} component={'h1'}>{main_category.name}</Typography>
            <Grid container sx={{justifyContent: 'start' , padding : '70px 0 60px 0'}} rowGap={10}>
                {
                    subCategory?.map((item)=>{
                        return(
                            <Grid key={item.id} sx={{px: 2}} item xs={6} md={3}>
                                <OuterImageSection href={'/category/' + item.id} shadow={2} image={sortImage} title={item.name}/>
                            </Grid>
                        )
                    })
                }

            </Grid>
            <Typography sx={{px : 2}} fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
            <BrandSlider brands={brands}/>
            <Grid sx={{my: 4}} container rowGap={2}>
                <Grid sx={{px: 1}} item xs={12} md={6}>
                    <Box>
                        <Image width={600} height={250} style={{width: '100%', height: 'auto'}} src={categoryImages}
                               alt={'banner'}/>
                    </Box>
                </Grid>
                <Grid sx={{px: 1}} item xs={12} md={6}>
                    <Box>
                        <Image width={600} height={250} style={{width: '100%', height: 'auto'}} src={categoryImages}
                               alt={'banner'}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}