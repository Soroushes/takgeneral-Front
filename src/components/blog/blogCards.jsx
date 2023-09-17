'use client'
import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from '../../assets/icons/share/clock.svg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Link from "next/link";
import HtmlDescription from "@/components/share/HtmlDescription";
import {timeStampToDate} from "@/hooks/timeStampToDate";

const BlogCards = ({blogs}) => {
    return (
        <Grid container sx={{mt: 3}}>
            {
                blogs?.map((item) => {
                    return (
                        <Grid key={item?.id} item md={4} xs={12} sx={{
                            p: 1,
                            '&:hover': {transform: 'translateY(-2%)'},
                            transition: 'all .5s',
                            minHeight: '360px'
                        }}>
                            <Box sx={{
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Link href={`/blog/${item?.id}`}>
                                    <Box sx={{textAlign: 'center', width: '100%', borderRadius: 7, aspectRatio: '1/1'}}>
                                        <Image width={590} height={290} style={{width: '100%', height: 'auto', borderRadius: 7}}
                                               src={item?.main_image.image ?? null}
                                               alt={''}/>
                                    </Box>
                                </Link>
                                <Box sx={{minHeight: '70px', pt: 1}} display={'flex'} flexDirection={'column'}
                                     justifyContent={'space-between'}>
                                    <Typography fontWeight={'bold'}>{item?.title}</Typography>
                                    <HtmlDescription boxSx={{
                                        maxHeight: 60,
                                        textOverflow: 'ellipsis',
                                        wordWrap: 'break-word',
                                        overflow: 'hidden', fontSize: '13px'
                                    }}>{item?.desc}</HtmlDescription>
                                    <Box sx={{display: 'flex', px: .5, mt: 2, justifyContent: 'space-between'}}>
                                        <Box display={'flex'} alignItems={'center'} gap={.5}>
                                            <ClockIcon/>
                                            <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>{timeStampToDate(item?.created_time?.timestamp)}</Typography>
                                        </Box>
                                        <Link href={`/blog/${item?.id}`}>
                                            <Box display={'flex'} alignItems={'center'} gap={.5}>
                                                <Typography color={'primary'} variant={'subtitle1'}>ادامه مطلب</Typography>
                                                <ChevronLeftRoundedIcon color={'primary'} fontSize={'small'}/>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
export default BlogCards;