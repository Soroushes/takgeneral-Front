'use client';
import {Box, Container, Tooltip, Typography} from "@mui/material";
import Test from "../../../assets/icons/about-us/testIcon.svg";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";

const breadcrumbData = [{url: '/about-us', name: 'درباره تک جنرال'}]
const AboutUsPage = () => {
    return (
        <Container>
            <BreadcrumbGenerator hasEmptyUrl={false} breadcrumb={breadcrumbData}/>
            <Box>
                <Typography component={'h1'} sx={{my: 4}} textAlign={'center'} fontWeight={'bold'}
                            fontSize={'24px !important'}>درباره تک جنرال</Typography>
                <Box display={'flex'} justifyContent={'space-between'} sx={{my: 10}} gap={1}>
                    <Box sx={{width: '33%'}} gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            p: 1.5,
                            boxShadow: 1,
                            borderRadius: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Test/>
                        </Box>
                        <Typography textAlign={'center'} variant={'h2'} fontWeight={'bold'}>ابزار دقیق</Typography>
                        <Tooltip title="فروش تجهیزات اندازه گیری فلو">
                            <Typography overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'} width={'100%'}
                                        textAlign={'center'}>فروش تجهیزات اندازه گیری فلو</Typography>
                        </Tooltip>
                    </Box>
                    <Box sx={{width: '33%'}} gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            aspectRatio: '1/1',
                            p: 1.5,
                            boxShadow: 1,
                            borderRadius: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Test/>
                        </Box>
                        <Tooltip title="تهویه مطبوع و سرمایش و گرمایش">
                            <Typography width={'100%'} overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'}
                                        textAlign={'center'}
                                        variant={'h2'}
                                        fontWeight={'bold'}>تهویه مطبوع و سرمایش و گرمایش</Typography>
                        </Tooltip>
                        <Tooltip title="فروش کولر گازی (اسپیلت)">
                            <Typography overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'}
                                        textAlign={'center'}>فروش کولر گازی (اسپیلت)</Typography>
                        </Tooltip>
                    </Box>
                    <Box sx={{width: '33%'}} gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            aspectRatio: '1/1',
                            p: 1.5,
                            boxShadow: 1,
                            borderRadius: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Test/>
                        </Box>
                        <Tooltip title="پمپ و تجهیزات جانبی">
                            <Typography overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'} width={'100%'}
                                        textAlign={'center'}
                                        variant={'h2'}
                                        fontWeight={'bold'}>پمپ و تجهیزات جانبی</Typography>
                        </Tooltip>
                        <Tooltip title="فروش پمپ آب خانگی و پمپ آب طبقاتی و ..">
                            <Typography overflow={'hidden'}
                                        textOverflow={'ellipsis'}
                                        whiteSpace={'nowrap'}
                                        width={'100%'}
                                        textAlign={'center'}>فروش پمپ آب خانگی و پمپ آب طبقاتی و ...</Typography>
                        </Tooltip>
                    </Box>
                </Box>
                <Typography variant={'h5'} lineHeight={'29px'}>
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