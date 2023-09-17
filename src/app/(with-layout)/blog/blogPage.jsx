'use client'
import {Box, Container, Pagination, PaginationItem, Typography} from "@mui/material";
import BlogCards from "../../../components/blog/blogCards";
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
        <Container sx={{mt: 3}}>
            <Typography variant={'h3'} my={3} fontWeight={'bold'} sx={{display: {xs: 'block', md: 'none'}}}>مجله تک
                جنرال</Typography>
            <BlogCards blogs={blogs}/>
            <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4, px: 2}}>
                <Pagination sx={{direction: 'rtl'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState}
                            count={pageCount}
                            color={'secondary'}
                            boundaryCount={0}
                            siblingCount={1}
                            renderItem={(item) => {
                                return (
                                    (
                                        <PaginationItem
                                            slots={{previous: ChevronRightRoundedIcon, next: ChevronLeftRoundedIcon}}
                                            {...item}
                                        />
                                    )
                                )
                            }}
                />
            </Box>
        </Container>
    )
}
export default BlogPage;