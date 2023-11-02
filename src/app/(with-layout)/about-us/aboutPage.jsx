'use client';
import {Box, Container, Typography} from "@mui/material";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import PompIcon from '../../../assets/icons/share/pompIcon.svg';
import AbzarIcon from '../../../assets/icons/share/abzarIcon.svg';
import TahvieIcon from '../../../assets/icons/share/tahvieIcon.svg';

const breadcrumbData = [{url: '/about-us', name: 'درباره تک جنرال'}]
const AboutUsPage = () => {
    return (
        <Container>
            <BreadcrumbGenerator hasEmptyUrl={false} breadcrumb={breadcrumbData}/>
            <Box>
                <Typography component={'h1'} sx={{my: 2}} textAlign={'center'} fontWeight={'bold'}
                            fontSize={'24px !important'}>درباره تک جنرال</Typography>
                <Box display={'flex'} justifyContent={'space-between'} sx={{mb: 8, mt: 6}} gap={1}>
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
                            <PompIcon/>
                        </Box>
                        <Typography textAlign={'center'} sx={{fontSize: {md: 19, xs: 11}, minHeight: {md:'auto' , xs:40}}} variant={'h2'} fontWeight={'bold'}>ابزار دقیق</Typography>
                        <Typography sx={{fontSize: {md: 12, xs: 10}}} width={'100%'} textAlign={'center'}>فروش تجهیزات اندازه گیری فلو</Typography>
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
                            <AbzarIcon/>
                        </Box>
                        <Typography width={'100%'} textAlign={'center'} sx={{fontSize: {md: 19, xs: 11}, minHeight: {md:'auto' , xs:40}}}
                                    fontWeight={'bold'}>تهویه مطبوع و سرمایش و گرمایش</Typography>
                        <Typography sx={{fontSize: {md: 12, xs: 10}}} textAlign={'center'}>فروش کولر گازی
                            (اسپیلت)</Typography>
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
                            <TahvieIcon/>
                        </Box>
                        <Typography width={'100%'} textAlign={'center'} sx={{fontSize: {md: 19, xs: 11}, minHeight: {md:'auto' , xs:40}}}
                                    fontWeight={'bold'}>پمپ و تجهیزات جانبی</Typography>
                        <Typography sx={{fontSize: {md: 12, xs: 10}}} width={'100%'} textAlign={'center'}>فروش پمپ آب
                            خانگی و پمپ آب طبقاتی و ...</Typography>
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