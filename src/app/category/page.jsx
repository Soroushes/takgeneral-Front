'use client'
import {Box, Container, Grid} from "@mui/material";
import categoryBanner from '../../../public/categoryBanner.jpg';
import Image from "next/image";
import SortSection from "../../components/share/SortSection";
import sortImage from '../../../public/pomp 1.png'

export default function Page() {
    return (
        <Container sx={{mt: 2}}>
            <Box sx={{position: "relative", width: '100%', height: '300px'}}>
                <Image src={categoryBanner} style={{borderRadius: '8px'}} fill alt={'banner'}/>
            </Box>
            <Grid container sx={{mt: 5}} rowGap={3} justifyContent={'space-between'}>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>
                <Grid item md={3} sx={{px: 1 , width:'100'}}>
                    <SortSection image={sortImage} description={'hi'} title={'pomp1'}/>
                </Grid>

            </Grid>
        </Container>
    )
}