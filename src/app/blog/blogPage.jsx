'use client'
import {Box, Container, Grid, Pagination, PaginationItem, Typography} from "@mui/material";
import Image from "next/image";
import BlogCart from "../../components/blog/blogCart";
import ClockIcon from "../../assets/icons/share/clock.svg";
import {useEffect, useState} from 'react' ;
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from "next/link";
import {timeStampToDate} from "@/hooks/timeStampToDate";
const BlogPage = ({blogs, currentPage, pageCount}) => {
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
    useEffect(() => {
        setPageState(currentPage)
    }, [params])
    return (
        <Container sx={{mt: 3}}>
            <Typography variant={'h3'} my={3} fontWeight={'bold'} sx={{display: {xs: 'block', md: 'none'}}}>مجله تک
                جنرال</Typography>
            <Box sx={{px: 1}}>
                <Grid container justifyContent={'space-between'} sx={{boxShadow: 1, p: 2, borderRadius: 2}}>
                    <Grid item md={3} xs={12}>
                        <Box sx={{textAlign: 'center', width: '100%', aspectRatio: '1/1'}}>
                            <Image width={590} height={290} style={{width: '100%', height: 'auto'}}
                                   src={blogs[0].main_image.image}
                                   alt={''}/>
                        </Box>
                    </Grid>
                    <Grid item md={9} xs={12} sx={{px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                          justifyContent={'space-between'}>
                        <Box>
                            <Typography sx={{mb: 4}} variant={'h6'} fontWeight={'bold'}>
                                {
                                    blogs[0].title
                                }
                            </Typography>
                            <Typography sx={{
                                width: '100%',
                                maxHeight: 100,
                                textOverflow: 'ellipsis',
                                wordWrap: 'break-word',
                                overflow: 'hidden'
                            }} variant={'body2'}>
                                بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی
                                در
                                ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا
                                بلابلا
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
                                <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>{timeStampToDate(blogs[0].created_time.timestamp)}</Typography>
                            </Box>
                            <Link href={`/blog/${blogs[0].id}`}>
                                <Box display={'flex'} alignItems={'center'} gap={.5}>
                                    <Typography color={'primary'} variant={'subtitle1'}>مشاهده بیشتر</Typography>
                                    <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={{mt: 3}}>
                {
                    blogs?.map((item, index) => {
                        if (index === 0) {
                            return (
                                <Grid item md={4} xs={12} sx={{
                                    p: 1,
                                    '&:hover': {transform: 'translateY(-2%)'},
                                    transition: 'all .5s',
                                    minHeight: '360px'
                                }}>
                                    <BlogCart image={item.main_image.image} title={item.title} content={item.content}
                                              id={item.id} date={timeStampToDate(item.created_time.timestamp)}/>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4 , px:2}}>
                <Pagination sx={{direction: 'rtl'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState}
                            count={pageCount}
                            color={'secondary'}
                            boundaryCount={0}
                            siblingCount={1}
                            renderItem={(item) => {
                                return (
                                    (
                                        <PaginationItem
                                            slots={{previous: ChevronRightRoundedIcon, next: ChevronLeftRoundedIcon}}
                                            {...item}
                                        />
                                    )
                                )
                            }}
                />
            </Box>
        </Container>
    )
}
export default BlogPage;