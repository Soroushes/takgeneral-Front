'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import OuterImageSection from "../../../../components/share/OuterImageSection";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import Link from "next/link";
import HtmlDescription from "@/components/share/HtmlDescription";
export default function ParentCategoryPage({
                                               brands,
                                               content,
                                               subCategory,
                                               breadcrumb,
                                               main_category,
                                               main_banner,
                                               other_banner,data
                                           }) {
    console.log(data)
    return (
        <>
            <Box sx={{position: "relative",display:{md:'block' , xs:'none'}, width: '100%', aspectRatio: {md: '4.5/1', xs: '1.5/1'}}}>
                <Image src={main_banner[0]?.image} style={{borderRadius: '8px'}} fill alt={main_banner[0]?.alt}/>
            </Box>
            <Box sx={{position: "relative" , display:{md:'none' , xs:'block'}, width: '100%', aspectRatio: {md: '4.5/1', xs: '1.5/1'}}}>
                <Image src={main_banner[0]?.mobile_image} style={{borderRadius: '8px'}} fill alt={main_banner[0]?.alt}/>
            </Box>
            <Container disableGutters>
                <Box sx={{px: 1}}>
                    <BreadcrumbGenerator breadcrumb={breadcrumb}/>
                </Box>
                <Typography sx={{px: 2}} fontWeight={'bold'} variant={'h2'}
                            component={'h1'}>{main_category?.name}</Typography>
                <Grid container sx={{justifyContent: 'start', padding: '70px 0 60px 0'}} rowGap={10}>
                    {
                        subCategory?.map((item) => {
                            return (
                                <Grid key={item.id} sx={{px: 2}} item xs={6} md={3}>
                                    <Link href={'/category/' + item.id}>
                                        <OuterImageSection alt={item.alt} shadow={2} image={item.image} title={item.name}/>
                                    </Link>
                                </Grid>
                            )
                        })
                    }

                </Grid>
                <Typography sx={{px: 2}} fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
                {/*<BrandSlider brands={brands}/>*/}
                <Grid sx={{my: 4}} container rowGap={2}>
                    {
                        other_banner?.map((item) => (
                            <Grid sx={{px: 1}} item xs={12} md={6}>
                                <Box>
                                    <Image width={600} height={250} style={{width: '100%', height: 'auto'}}
                                           src={item?.image}
                                           alt={item?.alt}/>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
                <HtmlDescription>
                    {content}
                </HtmlDescription>
            </Container>
        </>
    )
}