'use client';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from "@/assets/icons/share/clock.svg";
import {setDate} from "@/hooks/timeStampToDate";

const SingleBlog = ({images , timeStamp , title}) => {
    const mainImage = images.find((element) => element.is_main === true);
    return (
        <Container mt={3}>
            <Grid container justifyContent={'space-between'} sx={{ minHeight: '360px'}}>
                <Grid sx={{py: 1}} item md={6} xs={12}>
                    <Box sx={{textAlign: 'center', width: '100%'}}>
                        <Image width={590} height={290} style={{width: '100%', height: 'auto'}} src={mainImage.image}
                               alt={''}/>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                      justifyContent={'space-between'}>
                    <Typography sx={{mb:{xs:1 , md:0}}} variant={'h5'} fontWeight={'bold'}>
                        {
                            title
                        }
                    </Typography>
                    <Box display={'flex'} flexDirection={{md:'column' , xs:'column-reverse'}} justifyContent={'space-between'} sx={{height:'85%'}}>
                        <Typography sx={{
                            width: '100%',
                            maxHeight: 100,
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden'
                        }} variant={'body2'}>
                            بهترین پمپ آب خانگی کدام است؟ معرفی کم صداترین، قویترین و بهترین پمپ آب خانگی و کشاورزی در
                            ایران، در این مقاله به تفصیه به این مضوع پرداخته وبلابلابلابلابلابلابلابلا بلا بلا بلابلا
                            بلابلابلابلابلابلابلابلابلاب لابلابلابلابلابل ابلابلابلابلابلابلاب لابلاب لابلابلابلاب
                            لابلابلابلا
                            بلابلابلابلابلابلابلابلا بلا بلا بلابلا
                            بلابلابلابلابلابلابلابلاب لابلابلابلابلابلابلابلابلا بلابلابلابلاب
                            لابلابلابلابلابلابلابلابلابلا....
                        </Typography>
                        <Box mb={{xs:2 , md:0}} display={'flex'} alignItems={'center'} gap={1}>
                            <ClockIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>{setDate(timeStamp)}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default SingleBlog;