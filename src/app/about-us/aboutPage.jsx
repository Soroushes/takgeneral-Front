'use client';
import {Box, Container, Typography} from "@mui/material";
import Test from "../../assets/icons/about-us/testIcon.svg";
import testImage from '../../assets/images/about-us/testImage.png';
import Image from "next/image";
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
                <Typography sx={{my:5}} fontWeight={'bold'} fontSize={'24px !important'}>تیتر اول</Typography>
                <Typography variant={'h5'} lineHeight={'29px'}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </Typography>
                <Box sx={{width:'100%' , height:'auto' , mt:4}}>
                    <Image style={{width:'100%' , height:'341px'}} src={testImage} alt={''}/>
                </Box>
            </Box>
        </Container>
    )
}
export default AboutUsPage;