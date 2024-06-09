'use client';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import ClockIcon from "@/assets/icons/share/clock.svg";
import {timeStampToDate} from "@/hooks/timeStampToDate";
import HtmlDescription from "@/components/share/HtmlDescription";
import {singleBlogSchemaGenerator} from "@/hooks/schemaGenerator";
import {useMemo} from "react";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import Script from "next/script";

const SingleBlog = ({images, createdTimeStamp, title, content, updatedTimeStamp, url}) => {
    const breadcrumbData = useMemo(() => [{url: '/blog', name: 'وبلاگ ها'}, {url: `/blog/${url}`, name: title}])
    return (
        <>
            <Script
                strategy={'lazyOnload'}
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(singleBlogSchemaGenerator(images, createdTimeStamp, updatedTimeStamp, title))}}
            />
            <Container mt={3}>
                <BreadcrumbGenerator hasEmptyUrl={false} breadcrumb={breadcrumbData}/>
                <Grid container justifyContent={'space-between'}>
                    {
                        images[0]?.image ?
                            <Grid sx={{py: 1}} item xs={12}>
                                <Box
                                    sx={{
                                        aspectRatio: '1/1',
                                        maxWidth : '500px' ,
                                        mx : 'auto' ,
                                        position: 'relative',
                                        textAlign: 'center',
                                        width: '100%'
                                    }}>
                                    <Image
                                        priority
                                        fill
                                        src={images[0]?.image}
                                        alt={title}/>
                                </Box>
                            </Grid>
                            : null
                    }
                    <Grid item xs={12} sx={{py: 1}} display={'flex'} flexDirection={'column'}
                          justifyContent={'space-between'}>
                        <Typography sx={{mb: 1, fontSize: {md:'1.17em' , xs:'14pt'} , lineHeight:'25px'}} component={'h1'} fontWeight={'bold'}>
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
                                    sx={{textAlign: 'center'}}>{timeStampToDate(createdTimeStamp.timestamp)}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default SingleBlog;