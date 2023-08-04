'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import testImage from '../../assets/images/Blog/Frame 843.png';
import test2 from '../../assets/images/Blog/ofvllxweo1p 1.png';
import Image from "next/image";
import {useSelector} from "react-redux";
import BlogCart from "../../components/blog/blogCart";
import ClockIcon from "../../assets/icons/share/Icon.svg";
import ArrowIcon from "../../assets/icons/single-product/arrow-left.svg";

const Page = () => {
    const {isMobile} = useSelector(state => state.deviceInfo);
    const dummyData = [
        {
            image: testImage,
            title: ' بهترین پمپ آب خانگی',
            content: '                                    بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا بلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا...'
        },
        {
            image: test2,
            title: 'ضرف شیپ هرامش لتیات',
            content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
        },
        {
            image: test2,
            title: 'ضرف شیپ هرامش لتیات',
            content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
        },
        {
            image: test2,
            title: 'ضرف شیپ هرامش لتیات',
            content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
        },
        {
            image: test2,
            title: 'ضرف شیپ هرامش لتیات',
            content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
        }
    ];
    if (!isMobile) {
        delete dummyData[0];
    }
    return (
        <Container sx={{mt: 3}}>
            {
                !isMobile ?
                    <Box display={'flex'} justifyContent={'space-between'} sx={{boxShadow: 1, p: 2  , mx:1, borderRadius: 2}}>
                        <Box sx={{width: '50%'}}>
                            <Box sx={{textAlign: 'center', width: '100%'}}>
                                <Image width={590} height={290} style={{width: '100%', height: 'auto'}} src={testImage}
                                       alt={''}/>
                            </Box>
                        </Box>
                        <Box sx={{width: '50%', px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                             justifyContent={'space-between'}>
                            <Box>
                                <Typography sx={{mb: 4}} variant={'h6'} fontWeight={'bold'}>
                                    بهترین پمپ آب خانگی
                                </Typography>
                                <Typography sx={{width:'100%'}} variant={'body2'}>
                                    بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در
                                    ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا
                                    بلابلابلابلابلابلابلابلابلاب لابلابلابلابلابل ابلابلابلابلابلابلاب لابلاب لابلابلابلاب لابلابلابلا
                                    بلابلابلابلابلابلابلابلا بلا بلا بلابلا
                                    بلابلابلابلابلابلابلابلاب لابلابلابلابلابلابلابلابلا بلابلابلابلاب لابلابلابلابلابلابلابلابلابلا....
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex' , px:.5 , mt:2, justifyContent: 'space-between'}}>
                                <Box display={'flex'} alignItems={'center'} gap={.5}>
                                    <ClockIcon/>
                                    <Typography variant={'subtitle1'} sx={{textAlign:'center'}}>۱۴۰۲/۰۲/۱۷</Typography>
                                </Box>
                                <Box display={'flex'} alignItems={'center'} gap={.5}>
                                    <Typography color={'primary'} variant={'subtitle1'}>مشاهده بیشتر</Typography>
                                    <ArrowIcon/>
                                </Box>
                            </Box>
                        </Box>
                    </Box> : null
            }
            <Grid container sx={{mt: 3}}>
                {
                    dummyData.map((item) => {
                        return (
                            <Grid item md={4} xs={12} sx={{p: 1}}>
                                <BlogCart image={item.image} title={item.title} content={item.content}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
export default Page;