'use client'
import {Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/system";
import Link from "next/link";

const HomePageCategorySection = ({categories}) => {
    return (
        <Container sx={{mb: 4}}>
            <Grid justifyContent={'center'} rowGap={5} container>

                <Grid item xs={12}>
                    <Box gap={1} justifyContent={'center'} display={'flex'}>
                        <Typography  fontWeight={'bold'} variant={'h2'}>
                            دسته بندی های
                        </Typography>
                        <Typography fontWeight={'bold'} variant={'h2'} component={'h1'} color={'secondary'}>تک
                            جنرال
                        </Typography>
                    </Box>
                </Grid>
                {
                    categories.map((item, index) => (
                        <Grid key={index} sx={{px: {md: 6, xs: 3}}} xs={6} sm={4} md={3} item>
                            <Link href={'/category'}>
                                <Box sx={{aspectRatio: '1/1', position: 'relative', mb: 2}}>
                                    <Image fill src={item.image}/>
                                </Box>
                                <Typography
                                    variant={'h3'}
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