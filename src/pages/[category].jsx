import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container, Pagination, MenuItem, TextField, Button, Typography, Divider} from "@mui/material";
import ProductPreviewCard from "../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import testBanner from '../../public/testBanner.png'
import CategoryListGenerator from "../components/products/CategoryListGenerator";
import axios from "axios";
import {BASE_URL} from "../hooks/useAxios";
import {useRouter} from "next/router";
import MainModal from "../components/share/MainModal";
import {useEffect, useRef, useState} from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Paper from "@mui/material/Paper";

const sortValueItems = [
    {
        name: "جدیدترین",
        value: "newest"
    },
    {
        name: "گران ترین",
        value: "-price"
    },
    {
        name: "ارزان ترین",
        value: "price"
    }
]

const Category = ({product, brands, current_page, page_count}) => {
    const {query, push, asPath} = useRouter();
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [sortValue, setSortValue] = useState('newest');
    const [noQueryPath, setNoQueryPath] = useState(asPath);
    const productBoxRef = useRef(null);
    useEffect(() => {
        setNoQueryPath(`/${query.category}/`)
    }, [asPath])
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handlePaginationChange = (e, value) => {
        push({
                pathname: noQueryPath,
                query: {
                    ...query,
                    page: value,
                }
            },
            undefined,
            {scroll: false}
        ).then(() => {
            productBoxRef.current.scrollIntoView({behavior: "smooth"})
        })
    }
    const handleSortOnchange = (value) => {
        console.log(query);
        setSortValue(value);
        push({
            pathname: noQueryPath,
            query: {
                ...query,
                ordering: value
            }
        }, undefined, {scroll: false})
    }
    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "#fff"}}>
            <Box sx={{
                width: '100%',
                aspectRatio: '8/1',
                position: 'relative',
                p: 0,
                display: {xs: "none", md: "block"}
            }}>
                <Image fill alt={''} src={testBanner}/>
            </Box>
            <Box sx={{width: '100%', aspectRatio: '3/1', position: 'relative', p: 0, display: {md: "none"}}}>
                <Image fill alt={''} src={testBanner}/>
            </Box>
            <Container ref={productBoxRef} maxWidth={'lg'}>
                <Box sx={{my: 2}}>
                    <CategoryListGenerator category={'pomp'}/>
                </Box>
                <Grid container>
                    <Grid item xs={3.5} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{width: "100%"}}>
                            <Paper elevation={3} sx={{p: 2, borderRadius: 2}}>
                                <CheckBoxFilter key={noQueryPath} subFilter={brands}/>
                            </Paper>
                        </Box>
                    </Grid>
                    <Box sx={{width: {xs: '100%', md: '70%'}}}>
                        <Box sx={{mb: 2, display: {xs: "none", md: "block"}}}>
                            <TextField
                                sx={{width: "150px"}}
                                size={'small'}
                                select
                                value={sortValue}
                                label="براساس"
                                onChange={(e) => handleSortOnchange(e.target.value)}
                            >
                                {
                                    sortValueItems.map((sortItem) => (
                                        <MenuItem key={sortItem.value} variant={'subtitle1'}
                                                  value={sortItem.value}>{sortItem.name}</MenuItem>
                                    ))
                                }
                            </TextField>
                        </Box>
                        <Box sx={{mb: 2, gap: 1, display: {xs: "flex", md: "none"}}}>
                            <Button size={'small'} onClick={() => setOpenFilterModal(true)} color={'btnGray'}
                                    variant={'contained'}>
                                <FilterAltIcon/>
                                فیلتر
                            </Button>
                            <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnGray'}
                                    variant={'contained'}>
                                {
                                    sortValueItems.find((item) => item.value === sortValue).name
                                }
                                <KeyboardArrowDownIcon/>
                            </Button>
                        </Box>
                        <Grid container sx={{borderRadius: 2, boxShadow: 3, backgroundColor: "#f6f6f6", p: .2}}>
                            {
                                product.map((productItem) => (
                                    <Grid key={productItem.id} item sx={{p: .2}} xs={6} sm={4} lg={3}>
                                        <ProductPreviewCard
                                            id={productItem.id}
                                            price={productItem.price} title={productItem.name}
                                            discountPercent={+productItem.discount}
                                            afterDiscountPrice={productItem.final_price}
                                            image={`${BASE_URL}media/Group_2073.png`}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
                            <Pagination onChange={handlePaginationChange} page={current_page} count={page_count}
                                        color={'primary'} size={'large'}/>
                        </Box>
                    </Box>
                </Grid>
            </Container>
            <MainModal setOpen={setOpenFilterModal} open={openFilterModal} title={'فیلتر'}>
                <Box sx={{px : 2}}>
                    <CheckBoxFilter key={asPath} subFilter={brands}/>
                </Box>
            </MainModal>
            <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                {
                    sortValueItems.map((sortItem) => (
                        <>
                            <Typography
                                onClick={() => {
                                    handleSortOnchange(sortItem.value);
                                    setOpenSortModal(false);
                                }}
                                sx={{py : 1.5 , px : 3}}
                                key={sortItem.value}
                                value={sortItem.value}
                                color={sortItem.value === sortValue ? 'primary' : "text"}
                            >
                                {sortItem.name}
                            </Typography>
                            <Divider />
                        </>
                    ))
                }
            </MainModal>
        </Box>
    )
}
export default Category;

export const getServerSideProps = async ({params, query}) => {
    const {category} = params;
    console.log(query)
    let productsCategoryData = {};
    try {
        const {data} = await axios({
            url: BASE_URL+category +'/',
            method: 'GET',
            params: {
                'brand[]': query.brand,
                page: query.page ?? 1,
                page_size: 20,
                ordering: query.ordering
            }
        })
        productsCategoryData = data;
    } catch (err) {
        productsCategoryData = null
    }
    if (!productsCategoryData) {
        return {
            notFound: true
        }
    }
    return {
        props: productsCategoryData,
    }
}