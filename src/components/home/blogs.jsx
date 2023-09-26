'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import BlogCard from "@/components/share/blogCard";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Link from "next/link";
import SwiperCustomWrapper from "@/components/share/SwiperCustomWrapper";
import {SwiperSlide} from "swiper/react";

const Blogs = ({blogs}) => {
    return (
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mb: 5}}>
                <Box sx={{width: '40%'}}></Box>
                <Box display={'flex'} justifyContent={'space-between'} sx={{width: {md:'55%' , xs:'70%'}}}>
                    <Box display={'flex'} gap={1} justifyContent={'center'}>
                        <Typography fontWeight={'bold'} variant={'h5'}>مجله</Typography>
                        <Typography fontWeight={'bold'} color={'secondary'} variant={'h5'}>تک جنرال</Typography>
                    </Box>
                    <Link href={`/blog`}>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <Typography color={'primary'} variant={'subtitle1'}>مشاهده بیشتر</Typography>
                            <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Grid container gap={2} sx={{mt: 3 , display:{md:'flex' , xs:'none'}}}>
                {
                    blogs?.map((item) => {
                        return (
                            <Grid key={item?.id} item md={4} xs={12} sx={{
                                p: 1,
                                '&:hover': {transform: 'translateY(-2%)'},
                                transition: 'all .5s',
                                minHeight: '360px',
                                borderRadius: 2,
                                boxShadow: 1,
                            }}>
                                <BlogCard blog={item}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display:{xs:'block' , md:'none'}}}>
                <SwiperCustomWrapper navigation={false}>
                    {
                        blogs?.map((item) => {
                            return(
                                <SwiperSlide key={item.id} style={{ '&:hover': {transform: 'translateY(-2%)'}, transition: 'all .5s', minHeight: '360px'}}>
                                    <BlogCard blog={item}/>
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