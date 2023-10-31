'use client'
import {Box, Button, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from '../../assets/icons/share/clock.svg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import {timeStampToDate} from "@/hooks/timeStampToDate";
import Link from "next/link";

const BlogCard = ({blog}) => {
    return (
        <Link href={`/blog/${blog.slug}`} sx={{
            cursor : 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box sx={{textAlign: 'center', width: '100%', borderRadius: 7, aspectRatio: '1/1' , mb:2}}>
                <Image
                    width={590} height={290} style={{maxWidth: '100%', height: 'auto', borderRadius: 7}}
                    src={blog?.main_image?.image}
                    alt={''}/>
            </Box>
            <Box sx={{minHeight: '90px' }} display={'flex'} flexDirection={'column'}
                 justifyContent={'space-between'}>
                <Typography fontWeight={'bold'}>{blog?.title}</Typography>
                <Box sx={{display: 'flex', px: .5, mt: 2, justifyContent: 'space-between'}}>
                    <Box display={'flex'} alignItems={'center'} gap={.5}>
                        <ClockIcon/>
                        <Typography variant={'subtitle1'}
                                    sx={{textAlign: 'center'}}>{timeStampToDate(blog?.created_time?.timestamp)}</Typography>
                    </Box>
                    <Button variant={'text'}>
                        <Typography color={'primary'}>
                            ادامه مطلب
                        </Typography>
                        <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                    </Button>
                </Box>
            </Box>
        </Link>
    )
}
export default BlogCard;