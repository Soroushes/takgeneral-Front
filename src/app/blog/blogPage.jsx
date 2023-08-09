'use client'
import {Box, Container, Grid, Pagination, PaginationItem, Typography} from "@mui/material";
import testImage from '../../assets/images/Blog/blog-main-image.png';
import test2 from '../../assets/images/Blog/blog-image.png';
import Image from "next/image";
import BlogCart from "../../components/blog/blogCart";
import ClockIcon from "../../assets/icons/share/clock.svg";
import ArrowIcon from "../../assets/icons/single-product/blue-arrow-left.svg";
import { useState} from 'react' ;
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import ArrowRightIcon from "@/assets/icons/share/arrow-right.svg";
import ArrowLeftIcon from "@/assets/icons/share/arrow-left.svg";

// const dummyData = [
//     {
//         image: testImage,
//         title: ' بهترین پمپ آب خانگی',
//         content: '                                    بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا بلابلابلابلابلابلابلابلا بلا بلا بلابلا بلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلابلا...'
//     },
//     {
//         image: test2,
//         title: 'ضرف شیپ هرامش لتیات',
//         content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود م'
//     },
//     {
//         image: test2,
//         title: 'ضرف شیپ هرامش لتیات',
//         content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
//     },
//     {
//         image: test2,
//         title: 'ضرف شیپ هرامش لتیات',
//         content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
//     },
//     {
//         image: test2,
//         title: 'ضرف شیپ هرامش لتیات',
//         content: 'آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت درج شود. آن چیزی که می خواهید در خصوص متن ها نوشته شود می تواند در این قسمت بنویسید....'
//     }
// ];
const BlogPage = ({data}) => {
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
    const mainBlog = data.find((item)=> item.main_image.is_main === true);
    const result = data.filter((item) => item.main_image.is_main !== true);
    console.log(mainBlog.image)
    // useEffect(() => {
    //     setPageState(1)
    // }, [params])
    return (
        <Container sx={{mt: 3}}>
            <Box sx={{px:1}}>
                <Grid container justifyContent={'space-between'} sx={{boxShadow: 1, p: 2, borderRadius: 2 , minHeight:'360px' }}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{textAlign: 'center', width: '100%'}}>
                            <Image width={590} height={290} style={{width: '100%', height: 'auto'}} src={mainBlog.main_image.image}
                                   alt={''}/>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                          justifyContent={'space-between'}>
                        <Box>
                            <Typography sx={{mb: 4}} variant={'h6'} fontWeight={'bold'}>
                                {
                                    mainBlog.title
                                }
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
            </Box>
            <Grid container sx={{mt: 3}}>
                {
                    result?.map((item) => {
                        return (
                            <Grid item md={4} xs={12} sx={{p: 1 , '&:hover' : {transform:'translateY(-2%)'} , transition:'all .5s' , minHeight:'360px' }}>
                                <BlogCart image={item.image} title={item.title} content={item.content}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4}}>
                <Pagination sx={{direction: 'rtl'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState}
                            count={10}
                            color={'secondary'}
                            boundaryCount={0}
                            siblingCount={1}
                            renderItem={(item) => {
                                return(
                                    (
                                        <PaginationItem
                                            slots={{ previous: ArrowRightIcon, next: ArrowLeftIcon }}
                                            {...item}
                                        />
                                    )
                                )
                            }}
                />            </Box>
        </Container>
    )
}
export default BlogPage;