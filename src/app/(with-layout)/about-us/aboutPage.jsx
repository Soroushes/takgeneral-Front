'use client';
import {Box, Container, Typography} from "@mui/material";
import Test from "../../../assets/icons/about-us/testIcon.svg";
const AboutUsPage = () => {
    return (
        <Container>
            <Box>
                <Typography sx={{my:10}} textAlign={'center'} fontWeight={'bold'} fontSize={'30px !important'}>تک جنرال</Typography>
                <Box display={'flex'} justifyContent={'space-between'} sx={{mt:2}} gap={1}>
                    <Box gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
                        <Typography variant={'h2'} fontWeight={'bold'}>پمپ آب</Typography>
                        <Typography textAlign={'center'}>فروش انواع پمپ آب خانگی و صنعتی</Typography>
                    </Box>
                    <Box gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
                        <Typography variant={'h2'} fontWeight={'bold'}>کولر گازی</Typography>
                        <Typography textAlign={'center'}>فروش انواع پمپ آب خانگی و صنعتی</Typography>
                    </Box>
                    <Box gap={1} display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
                        <Typography variant={'h2'} fontWeight={'bold'}>پمپ صنعتی</Typography>
                        <Typography textAlign={'center'}>فروش انواع پمپ آب خانگی و صنعتی</Typography>
                    </Box>
                </Box>
                <Typography sx={{mt:15 , mb:10}} textAlign={'center'} fontWeight={'bold'} fontSize={'24px !important'}>درباره ما</Typography>
                <Typography variant={'h5'} lineHeight={'29px'}>
                    شرکت جنرال در سال ۱۳۷۰ با تاسیس در خیابان طالقانی آغاز به کار کرد و با فروش ابزار دقیق به صنایع پتروشیمی، شیمیایی، داروسازی، غذایی و پالایشگاه های نفتی، اسم خود را در این صنعت بر سر زبان ها انداخت. حال پس از سال ها خدمت به مشتریان عزیز و کسب تجربه در این زمینه، خدمات خود را به صورت اینترنتی راه اندازی کرده است تا شما عزیزان بتوانید در کوتاه ترین مدت محصول خود را با مشاوره از همکاران ما دریافت کنید. شما میتوانید با دیدن تمامی محصولات در سایت آن را انتخاب کرده و پس از مشاوره های لازم آن را خریداری کنید.
                </Typography>
            </Box>
        </Container>
    )
}
export default AboutUsPage;