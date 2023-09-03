'use client';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from "@/assets/icons/share/clock.svg";
import {timeStampToDate} from "@/hooks/timeStampToDate";
import HtmlDescription from "@/components/share/HtmlDescription";

const SingleBlog = ({images , timeStamp , title , content , data}) => {
    console.log(data)
    return (
        <Container mt={3}>
            <Grid container justifyContent={'space-between'} sx={{ minHeight: '360px'}}>
                <Grid sx={{py: 1}} item md={3} xs={12}>
                    <Box sx={{textAlign: 'center', width: '100%'}}>
                        <Image width={590} height={290} style={{width: '100%', height: 'auto'}} src={images[0].image}
                               alt={''}/>
                    </Box>
                </Grid>
                <Grid item md={9} xs={12} sx={{px: 2, py: 1}} display={'flex'} flexDirection={'column'}
                      justifyContent={'space-between'}>
                    <Typography sx={{mb:{xs:1 , md:0}}} variant={'h5'} fontWeight={'bold'}>
                        {
                            title
                        }
                    </Typography>
                    <Box display={'flex'} flexDirection={{md:'column' , xs:'column-reverse'}} justifyContent={'space-between'} sx={{height:'85%'}}>
                        <Typography sx={{
                            width: '100%',
                            maxHeight: 200,
                            textOverflow: 'ellipsis',
                        }} variant={'body2'}>
                            <HtmlDescription><Box dangerouslySetInnerHTML={{__html: content}}/></HtmlDescription>
                        </Typography>
                        <Box mb={{xs:2 , md:0}} display={'flex'} alignItems={'center'} gap={1}>
                            <ClockIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>{timeStampToDate(timeStamp)}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default SingleBlog;