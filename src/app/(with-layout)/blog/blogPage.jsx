'use client'
import {Box, Container, Grid, Pagination, PaginationItem, Typography} from "@mui/material";
import BlogCard from "../../../components/share/blogCard";
import {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const BlogPage = ({blogs, currentPage, pageCount}) => {
    const [pageState, setPageState] = useState(1);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const {push} = useRouter();
    const handlePaginationChange = (e, value) => {
        params.set('page', value)
        push('?' + params)
        setPageState(value);
    }
    useEffect(() => {
        setPageState(currentPage)
    }, [params]);
    return (
        <Container sx={{py: 6}}>
            <Typography variant={'h3'} mt={1} fontWeight={'bold'} sx={{display: {xs: 'block', md: 'none'}}}>
                مجله تک جنرال
            </Typography>
            <Grid sx={{mt: 4}} container gap={1}>
                {
                    blogs?.map((item) => {
                        return (
                            <Grid key={item?.id} item md={4} xs={12} sx={{
                                p: 1,
                                '&:hover': {transform: 'translateY(-2%)'},
                                transition: 'all .5s',
                                minHeight: '360px',
                                borderRadius: 2,
                                boxShadow: 1,
                            }}>
                                <BlogCard blog={item}/>
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
                        onChange={handlePaginationChange}
                        page={pageState}
                        count={pageCount}
                        color={'secondary'}
                        boundaryCount={0}
                        siblingCount={1}
                        renderItem={(item) => {
                            return (
                                (
                                    <PaginationItem
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