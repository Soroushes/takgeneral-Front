'use client'
import {Box, Container, Grid, Pagination, PaginationItem, Typography} from "@mui/material";
import BlogCard from "../../../components/share/blogCard";
import {useSearchParams} from "next/navigation";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import Link from "next/link";
const breadcrumbData = [{url : '/blog' , name : 'وبلاگ ها'}]
const BlogPage = ({blogs, currentPage, pageCount}) => {
    const searchParams = useSearchParams();
    const newURLSearchParams = new URLSearchParams(searchParams);
    const handlePaginationChange = (e , value)=>{
        newURLSearchParams.set('page', value)
        return newURLSearchParams.toString();
    }
    return (
        <Container sx={{pb: 6}}>
            <BreadcrumbGenerator breadcrumb={breadcrumbData} hasEmptyUrl={false}/>
            <Typography component={'h1'} variant={'h3'} mt={1} fontWeight={'bold'} textAlign={'center'}>
                مجله تک جنرال
            </Typography>
            <Grid sx={{mt: 4}} container>
                {
                    blogs?.map((item) => {
                        return (
                            <Grid sx={{p:.5 , minHeight: '360px'}} key={item?.id} item md={4} xs={12} >
                                <Box sx={{
                                    p: 1,
                                    '&:hover': {transform: 'translateY(-2%)'},
                                    transition: 'all .5s',
                                    borderRadius: 2,
                                    height:'100%',
                                    backgroundColor:'#fff'
                                }}>
                                    <BlogCard blog={item}/>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
            {
                pageCount > 1 ? <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4, px: 2}}>
                    <Pagination
                        sx={{direction: 'rtl'}}
                        shape={'rounded'}
                        page={currentPage}
                        count={pageCount}
                        color={'secondary'}
                        boundaryCount={0}
                        siblingCount={1}
                        renderItem={(item) => {
                            return (
                                (
                                    <PaginationItem
                                        component={Link}
                                        href={`/blog?${handlePaginationChange(this ,item.page)}`}

                                        slots={{
                                            previous: ChevronRightRoundedIcon,
                                            next: ChevronLeftRoundedIcon
                                        }}
                                        {...item}
                                    />
                                )
                            )
                        }}
                    />
                </Box> : null
            }
        </Container>
    )
}
export default BlogPage;