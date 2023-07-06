'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import categoryBanner from '../../assets/images/categoryBanner.png';
import Image from "next/image";
import sortImage from '../../assets/images/testSort.png'
import BrandSlider from "../../components/share/BrandSlider";
import brandImage from '../../assets/images/pentax (1).png';
import categoryImages from '../../assets/images/1.png';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useSelector} from "react-redux";
import OuterImageSection from "../../components/share/SortSection";

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
            <Container disableGutters={true}>
                <Box sx={{position: "relative",  width: '100%', aspectRatio : isMobile ? '1.5/1' : '4.5/1'  , mt : 1 , mb : 3}}>
                    <Image src={categoryBanner} style={{borderRadius: '8px'}} fill alt={'banner'}/>
                </Box>
                <Typography sx={{px : 1}} fontWeight={'bold'} variant={'h2'} component={'h1'}>پمپ و تجهیزات جانبی</Typography>
                <Grid container sx={{my : 5}} rowGap={6}    >
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={6} md={3}>
                        <OuterImageSection shadow={2} image={sortImage} description={'hi'} title={'pomp1'}/>
                    </Grid>
                </Grid>
                <Typography sx={{px : 1}} fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
                    <BrandSlider brands={brands}/>
                <Grid sx={{my : 4}} container rowGap={2}>
                    <Grid sx={{px : 1}} item xs={12} md={6} >
                        <Box>
                            <Image width={600} height={250} style={{width : '100%' , height : 'auto'}} src={categoryImages} alt={'banner'}/>
                        </Box>
                    </Grid>
                    <Grid sx={{px : 1}} item xs={12} md={6} >
                        <Box >
                            <Image width={600} height={250} style={{width : '100%' , height : 'auto'}} src={categoryImages} alt={'banner'}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
)
}