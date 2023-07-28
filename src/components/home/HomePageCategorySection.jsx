'use client'
import {Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/system";
import Link from "next/link";

const HomePageCategorySection = ({categories}) => {
    return (
        <Container sx={{my: 3}}>
            <Grid justifyContent={'center'} rowGap={5} container>
                <Grid item xs={12}>
                    <Box gap={.5} justifyContent={'center'} display={'flex'}>
                        <Typography  fontWeight={'bold'} variant={'h4'}>
                            دسته بندی های
                        </Typography>
                        <Typography fontWeight={'bold'} variant={'h4'} component={'h1'} color={'secondary'}>
                           تک جنرال
                        </Typography>
                    </Box>
                </Grid>
                {
                    categories.map((item, index) => (
                        <Grid key={index} sx={{px: {md: 6, xs: 3}}} xs={6} sm={4} md={3} item>
                            <Link style={{width : '100%'}} href={'/category/21'}>
                                <Box sx={{mb: 2 , width : '100%' , textAlign : 'center'}}>
                                    <Image style={{width : '100%' , height : '100%'}} width={160} height={160} src={item.image}/>
                                </Box>
                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                    sx={{width: '100%'}}
                                    overflow={'hidden'}
                                    textOverflow={'ellipsis'}
                                    whiteSpace={'nowrap'}
                                >
                                    {item.title}
                                </Typography>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
export default HomePageCategorySection;