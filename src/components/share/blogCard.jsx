'use client'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from '../../assets/icons/share/clock.svg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Link from "next/link";
import HtmlDescription from "@/components/share/HtmlDescription";
import {timeStampToDate} from "@/hooks/timeStampToDate";

const BlogCard = ({blog}) => {
    return (
        <Link href={`/blog/${blog?.id}`}>
            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Box sx={{textAlign: 'center', width: '100%', borderRadius: 7, aspectRatio: '1/1'}}>
                    <Image width={590} height={290} style={{maxWidth: '100%', height: 'auto', borderRadius: 7}}
                           src={blog?.main_image.image ?? null}
                           alt={''}/>
                </Box>
                <Box sx={{minHeight: '70px', pt: 1}} display={'flex'} flexDirection={'column'}
                     justifyContent={'space-between'}>
                    <Typography fontWeight={'bold'}>{blog?.title}</Typography>
                    <HtmlDescription boxSx={{
                        maxHeight: 60,
                        textOverflow: 'ellipsis',
                        wordWrap: 'break-word',
                        overflow: 'hidden', fontSize: '13px', px: 0
                    }}>{blog?.desc}</HtmlDescription>
                    <Box sx={{display: 'flex', px: .5, mt: 2, justifyContent: 'space-between'}}>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <ClockIcon/>
                            <Typography variant={'subtitle1'}
                                        sx={{textAlign: 'center'}}>{timeStampToDate(blog?.created_time?.timestamp)}</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                            <Typography color={'primary'} variant={'subtitle1'}>ادامه مطلب</Typography>
                            <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}
export default BlogCard;