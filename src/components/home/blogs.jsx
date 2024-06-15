'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import BlogCard from "@/components/share/blogCard";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Link from "next/link";
import SwiperCustomWrapper from "@/components/share/SwiperCustomWrapper";
import {SwiperSlide} from "swiper/react";

const Blogs = ({blogs}) => {
    console.log(blogs)
    return (
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mb: 5}}>
                <Box sx={{width: {xs:'35%',sm:'55%'}}}></Box>
                <Box display={'flex'} justifyContent={'space-between'} sx={{width: {md:'55%' , xs:'70%'}}}>
                    <Box display={'flex'} gap={1} justifyContent={'center'}>
                        <Typography fontWeight={'bold'} component={'p'} variant={'h5'}>مجله</Typography>
                        <Typography fontWeight={'bold'} component={'p'} color={'secondary'} variant={'h5'}>تک جنرال</Typography>
                    </Box>
                    <Link href={`/blog`}>
                        <Box display={'flex'} alignItems={'center'} >
                            <Typography component={'p'} color={'primary'} variant={'h6'}>مشاهده بیشتر</Typography>
                            <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Grid container sx={{mt: 3 , display:{md:'flex' , xs:'none'} }}>
                {
                    blogs.map((item,index) => {
                        return (
                            <Grid key={item?.id} sx={{px:.5 , minHeight: '360px'}} item md={4} >
                                <Box sx={{
                                    p: 1,
                                    '&:hover': {transform: 'translateY(-2%)'},
                                    transition: 'all .5s',
                                    borderRadius: 2,
                                    height:'100%',
                                    backgroundColor:'#fff'
                                }}>
                                    <BlogCard imagePriority={index<3} blog={item}/>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display:{xs:'block' , md:'none'}}}>
                <SwiperCustomWrapper navigation={false}>
                    {
                        blogs.map((item,index) => {
                            return(
                                <SwiperSlide key={item.id} style={{ '&:hover': {transform: 'translateY(-2%)'}, transition: 'all .5s', minHeight: '360px'}}>
                                    <BlogCard imagePriority={index<1} blog={item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Box>
        </Container>
    )
}
export default Blogs;