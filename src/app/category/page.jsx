'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import categoryBanner from '../../assets/images/categoryBanner.png';
import Image from "next/image";
import SortSection from "../../components/share/SortSection";
import sortImage from '../../assets/images/testSort.png'

export default function Page() {
    return (
        <Container>
            <Box sx={{position: "relative", width: '100%', aspectRatio : '3.5/1' , my : 4}}>
                <Image src={categoryBanner} style={{borderRadius: '8px'}} fill alt={'banner'}/>
            </Box>
            <Typography fontWeight={'bold'} variant={'h2'} component={'h1'}>پمپ و تجهیزات جانبی</Typography>
            <Grid container sx={{my : 5}} rowGap={6}>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid sx={{px : 1}} item md={3}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
            </Grid>
            <Typography fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
        </Container>
    )
}