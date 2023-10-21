'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import OuterImageSection from "../../../../components/share/OuterImageSection";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import Link from "next/link";
import HtmlDescription from "@/components/share/HtmlDescription";
import BrandSlider from "@/components/share/BrandSlider";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {useState} from "react";

export default function ParentCategoryPage({
                                               brands,
                                               content,
                                               subCategory,
                                               breadcrumb,
                                               main_category,
                                               main_banner,
                                               other_banner
                                           }) {
    const [contentIsShow, setContentIsShow] = useState(false);
    return (
        <>
            {
                main_banner.length ?
                    <>
                        <Box sx={{
                            position: "relative",
                            display: {md: 'block', xs: 'none'},
                            width: '100%',
                            aspectRatio:'4.5/1'
                        }}>
                            <Image src={main_banner[0]?.image} style={{borderRadius: '8px'}} fill alt={main_banner[0]?.alt ?? ''}/>
                        </Box>
                        <Box sx={{
                            position: "relative",
                            display: {md: 'none', xs: 'block'},
                            width: '100%',
                            aspectRatio: '1.5/1'
                        }}>
                            <Image src={main_banner[0]?.mobile_image} style={{borderRadius: '8px'}} fill alt={main_banner[0]?.alt ?? ''}/>
                        </Box>
                    </>:null
            }
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
                                    <Link href={'/category/' + item.url}>
                                        <OuterImageSection alt={item.alt ?? ''} shadow={2} image={item.image}
                                                           title={item.name}/>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Typography sx={{px: 2}} fontWeight={'bold'} variant={'h2'} component={'h2'}>انواع برند ها</Typography>
                <BrandSlider brands={brands}/>
                <Grid sx={{my: 4}} container rowGap={2}>
                    {
                        other_banner?.map((item) => (
                            <Grid sx={{px: 1}} item xs={12} md={6}>
                                <Box>
                                    <Image width={600} height={250} style={{width: '100%', height: 'auto'}}
                                           src={item?.image}
                                           alt={item?.alt ?? ''}/>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
                {
                    content ?
                    <Box sx={{px:1 ,position:'relative'}}>
                        <HtmlDescription boxSx={{
                            mt: 3,
                            maxHeight: !contentIsShow ? '160px' : 'auto',
                            overflow: 'hidden' ,textOverflow: 'ellipsis' , px:0
                        }}>{content}</HtmlDescription>
                        <Box onClick={setContentIsShow.bind(this, prev => !prev)}
                             sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center", gap: 1}}>
                            <Typography
                                variant={"body2"}
                                color={'primary'}
                                sx={{
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                {
                                    contentIsShow ? 'مشاهده کمتر' : "مشاهده بیشتر"
                                }
                            </Typography>
                            {
                                contentIsShow ? <ExpandLessRoundedIcon fontSize={'small'} color={'primary'}/> :
                                    <ExpandMoreRoundedIcon fontSize={'small'} color={'primary'}/>
                            }
                        </Box>
                    </Box> : null
                }
            </Container>
        </>
    )
}