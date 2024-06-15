'use client'
import {Box, Button, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from '../../assets/icons/share/clock.svg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import {timeStampToDate} from "@/hooks/timeStampToDate";
import Link from "next/link";

const BlogCard = ({blog,imagePriority}) => {
    return (
        <Link href={`/blog/${blog.slug}`} >
            <Box sx={{
                cursor : 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Box sx={{textAlign: 'center', width: '100%', borderRadius: 7, aspectRatio: '1/1' , mb:2}}>
                    {
                        blog?.main_image?.image ?
                            <Image priority={imagePriority} sizes="(max-width: 590px) 100vw, (max-width: 590px) 50vw, 33vw"
                                   width={590} height={590} style={{maxWidth: '100%', height: 'auto', borderRadius: 7 , aspectRatio:'1/1'}}
                                   src={blog?.main_image?.image}
                                   alt={blog.title}/>:null
                    }
                </Box>
                <Box sx={{minHeight: '90px' }} display={'flex'} flexDirection={'column'}
                     justifyContent={'space-between'}>
                    <Typography fontWeight={'bold'}>{blog?.title}</Typography>
                    <Box sx={{display: 'flex', px: .5, mt: 2, justifyContent: 'space-between'}}>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <ClockIcon/>
                            <Typography component={'p'} variant={'h6'}
                                        sx={{textAlign: 'center'}}>{timeStampToDate(blog?.created_time?.timestamp)}</Typography>
                        </Box>
                        <Button variant={'text'}>
                            <Typography variant={'h6'} component={'p'} color={'primary'}>
                                ادامه مطلب
                            </Typography>
                            <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}
export default BlogCard;