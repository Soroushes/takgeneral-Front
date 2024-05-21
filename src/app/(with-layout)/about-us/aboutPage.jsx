'use client';
import {Box, Container, Grid, Typography} from "@mui/material";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import PompIcon from '../../../assets/icons/share/pompIcon.svg';
import AbzarIcon from '../../../assets/icons/share/abzarIcon.svg';
import TahvieIcon from '../../../assets/icons/share/tahvieIcon.svg';
import Link from "next/link";

const breadcrumbData = [{url: '/about-us', name: 'درباره تک جنرال'}]
const AboutUsPage = () => {
    return (
        <Container>
            <BreadcrumbGenerator hasEmptyUrl={false} breadcrumb={breadcrumbData}/>
            <Box>
                <Typography component={'h1'} sx={{my: 2}} textAlign={'center'} fontWeight={'bold'}
                            fontSize={'24px !important'}>درباره تک جنرال</Typography>
                <Grid container display={'flex'} rowGap={1} justifyContent={'space-between'} sx={{mb: 8, mt: 6}}>
                    <Grid item md={4} xs={6}>
                        <Link href={'/category/instrumentation'}>
                            <Box display={'flex'} gap={1} justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    p: 1.5,
                                    borderRadius: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center' ,
                                    mb:1
                                }}>
                                    <AbzarIcon/>
                                </Box>
                                <Typography textAlign={'center'} sx={{fontSize: {md: 19, xs: 10} }} fontWeight={'bold'}>ابزار دقیق</Typography>
                                <Typography sx={{fontSize: {md: 12, xs: 10}, minHeight:{xs:'40px' , md:'auto'}}} width={'100%'} textAlign={'center'}>فروش تجهیزات اندازه گیری فلو</Typography>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Link href={'/category/pumps'}>
                            <Box display={'flex'} gap={1} justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    aspectRatio: '1/1',
                                    p: 1.5,
                                    borderRadius: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb:1

                                }}>
                                    <PompIcon/>
                                </Box>
                                <Typography width={'100%'} textAlign={'center'} sx={{fontSize: {md: 19, xs: 10}}}
                                            fontWeight={'bold'}>پمپ و تجهیزات جانبی</Typography>
                                <Typography sx={{fontSize: {md: 12, xs: 10}, minHeight:{xs:'40px' , md:'auto'}}} width={'100%'} textAlign={'center'}>فروش پمپ آب
                                    خانگی و پمپ آب طبقاتی و ...</Typography>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Link href={'/category/air-conditioning'}>
                            <Box display={'flex'} gap={1} justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    aspectRatio: '1/1',
                                    p: 1.5,
                                    borderRadius: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb:1
                                }}>
                                    <TahvieIcon/>
                                </Box>
                                <Typography width={'100%'} textAlign={'center'} sx={{fontSize: {md: 19, xs: 10}}}
                                            fontWeight={'bold'}>تهویه مطبوع , سرمایش و گرمایش</Typography>
                                <Typography sx={{fontSize: {md: 12, xs: 10}, minHeight:{xs:'40px' , md:'auto'}}} textAlign={'center'}>فروش کولر گازی
                                    (اسپیلت)</Typography>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
                <Typography component={'p'} variant={'h5'} lineHeight={'29px'} textAlign={'justify'}>
                    شرکت جنرال در سال ۱۳۷۰ با تاسیس در خیابان طالقانی آغاز به کار کرد و با فروش ابزار دقیق به صنایع
                    پتروشیمی، شیمیایی، داروسازی، غذایی و پالایشگاه های نفتی، اسم خود را در این صنعت بر سر زبان ها
                    انداخت. حال پس از سال ها خدمت به مشتریان عزیز و کسب تجربه در این زمینه، خدمات خود را به صورت
                    اینترنتی راه اندازی کرده است تا شما عزیزان بتوانید در کوتاه ترین مدت محصول خود را با مشاوره از
                    همکاران ما دریافت کنید. شما میتوانید با دیدن تمامی محصولات در سایت آن را انتخاب کرده و پس از مشاوره
                    های لازم آن را خریداری کنید.
                </Typography>
            </Box>
        </Container>
    )
}
export default AboutUsPage;