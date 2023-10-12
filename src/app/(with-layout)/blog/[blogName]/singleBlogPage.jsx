'use client';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from "@/assets/icons/share/clock.svg";
import {timeStampToDate} from "@/hooks/timeStampToDate";
import HtmlDescription from "@/components/share/HtmlDescription";

const SingleBlog = ({images, timeStamp, title, content}) => {
    return (
        <Container mt={3}>
            <Grid container justifyContent={'space-between'}>
                <Grid sx={{py: 1}} item xs={12}>
                    {
                        images[0]?.image ?
                            <Box sx={{textAlign: 'center', width: '100%'}}>
                                <Image width={590} height={290} style={{maxWidth: '100%', height: 'auto'}}
                                       src={images[0]?.image}
                                       alt={''}/>
                            </Box>:null
                    }
                </Grid>
                <Grid item xs={12} sx={{py: 1}} display={'flex'} flexDirection={'column'}
                      justifyContent={'space-between'}>
                    <Typography sx={{mb: 1}} variant={'h5'} fontWeight={'bold'}>
                        {
                            title
                        }
                    </Typography>
                    <Box display={'flex'} flexDirection={{md: 'column', xs: 'column-reverse'}}
                         justifyContent={'space-between'}>
                        <HtmlDescription boxSx={{
                            width: '100%', px: 0
                        }}>
                            {content}
                        </HtmlDescription>
                        <Box my={2} display={'flex'} alignItems={'center'} gap={1}>
                            <ClockIcon/>
                            <Typography
                                variant={'subtitle1'}
                                sx={{textAlign: 'center'}}>{timeStampToDate(timeStamp)}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default SingleBlog;