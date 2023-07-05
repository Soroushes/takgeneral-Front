'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import categoryBanner from '../../assets/images/categoryBanner.png';
import Image from "next/image";
import SortSection from "../../components/share/SortSection";
import sortImage from '../../assets/images/testSort.png'
import SectionSlider from "../../components/share/SectionSlider";
import brandImage from '../../assets/images/pentax (1).png';
import categoryImages from '../../assets/images/1.png';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useSelector} from "react-redux";

export default function Page() {
    const {isMobile} = useSelector(state => state.deviceInfo)
    const brands = [
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},

    ]
    return (
            <Container>
                <Box sx={{position: "relative", width: '100%', aspectRatio : isMobile ? '2.5/1' : '3.5/1'  , mt : 1 , mb : 3}}>
                    <Image src={categoryBanner} style={{borderRadius: '8px'}} fill alt={'banner'}/>
                </  Box>
                <Typography fontWeight={'bold'} variant={'h2'} component={'h1'}>پمپ و تجهیزات جانبی</Typography>
                <Grid container sx={{my : 5}} rowGap={6}    >
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                </Grid>
                <Typography fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
                <SectionSlider innerImage={true} sections={brands}/>
                <Grid sx={{my : 4}} container rowGap={2}>
                    <Grid sx={{px : 1}} item xs={12} md={6} >
                        <Box sx={{aspectRatio : '2.5/1'}} position={'relative'}>
                            <Image src={categoryImages} fill alt={'banner'}/>
                        </Box>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={12} md={6} >
                        <Box sx={{aspectRatio : '2.5/1'}} position={'relative'}>
                            <Image src={categoryImages} fill alt={'banner'}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
)
}