'use client'
import {Box, Container, Typography} from "@mui/material";
import BlogCards from "@/components/blog/blogCards";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Link from "next/link";

const Blogs = ({blogs})=>{
    return(
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mb:5}}>
                <Box sx={{width:'40%'}}></Box>
                <Box display={'flex'} justifyContent={'space-between'} sx={{width:'55%'}}>
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
            <BlogCards blogs={blogs}/>
        </Container>
    )
}
export default Blogs;