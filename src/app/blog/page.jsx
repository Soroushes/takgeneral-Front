'use client'
import {Box, Container, Grid, Pagination, Typography} from "@mui/material";
import testImage from '../../assets/images/Blog/Frame 843.png';
import test2 from '../../assets/images/Blog/ofvllxweo1p 1.png';
import Image from "next/image";
import BlogCart from "../../components/blog/blogCart";
import ClockIcon from "../../assets/icons/share/Icon.svg";
import ArrowIcon from "../../assets/icons/single-product/arrow-left.svg";
import {useEffect, useState} from 'react' ;
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const dummyData = [
    {
        image: testImage,
        title: ' بهترین پمپ آب خانگی',
        content: '                                    بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا بلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا...'
    },
    {
        image: test2,
        title: 'ضرف شیپ هرامش لتیات',
        content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود م'
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
const Page = () => {
    const [pageState, setPageState] = useState(1);
    const noQueryPath = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const {push} = useRouter();
    const handlePaginationChange = (e, value) => {
        params.set('page', value)
        push(noQueryPath + '?' + params)
        setPageState(value);
    }
    // useEffect(() => {
    //     setPageState(1)
    // }, [params])
    delete dummyData[0];
    return (
        <Container sx={{mt: 3}}>
            <Grid container justifyContent={'space-between'} sx={{boxShadow: 1, p: 2, mx: 1, borderRadius: 2 , minHeight:'360px' }}>
                <Grid item md={6} xs={12}>
                    <Box sx={{textAlign: 'center', width: '100%'}}>
                        <Image width={590} height={290} style={{width: '100%', height: 'auto'}} src={testImage}
                               alt={''}/>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{ px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                     justifyContent={'space-between'}>
                    <Box>
                        <Typography sx={{mb: 4}} variant={'h6'} fontWeight={'bold'}>
                            بهترین پمپ آب خانگی
                        </Typography>
                        <Typography sx={{width: '100%' , maxHeight:100 ,  textOverflow: 'ellipsis' , wordWrap: 'break-word' , overflow: 'hidden'}} variant={'body2'}>
                            بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در
                            ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا
                            بلابلابلابلابلابلابلابلابلاب لابلابلابلابلابل ابلابلابلابلابلابلاب لابلاب لابلابلابلاب
                            لابلابلابلا
                            بلابلابلابلابلابلابلابلا بلا بلا بلابلا
                            بلابلابلابلابلابلابلابلاب لابلابلابلابلابلابلابلابلا بلابلابلابلاب
                            لابلابلابلابلابلابلابلابلابلا....
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', px: .5, mt: 2, justifyContent: 'space-between'}}>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <ClockIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>۱۴۰۲/۰۲/۱۷</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <Typography color={'primary'} variant={'subtitle1'}>مشاهده بیشتر</Typography>
                            <ArrowIcon/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{mt: 3}}>
                {
                    dummyData.map((item) => {
                        return (
                            <Grid item md={4} xs={12} sx={{p: 1 , minHeight:'360px' }}>
                                <BlogCart image={item.image} title={item.title} content={item.content}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4}}>
                <Pagination sx={{direction: 'ltr'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState} count={4} color={'secondary'}/>
            </Box>
        </Container>
    )
}
export default Page;