import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container, Pagination, MenuItem, TextField, Button} from "@mui/material";
import ProductPreviewCard from "../../../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import testBanner from '../../../../public/testBanner.png'
import CategoryListGenerator from "../../../components/products/CategoryListGenerator";
import axios from "axios";
import {useRouter} from "next/router";
import MainModal from "../../../components/share/MainModal";
import {useEffect, useRef, useState} from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const sortValueItems = [
    {
        name : "جدیدترین"  ,
        value : "newest"
    },
    {
        name : "گران ترین"  ,
        value : "-price"
    },
    {
        name : "ارزان ترین"  ,
        value : "price"
    }
]

const Category = ({product, brands, current_page, page_count}) => {
    const {query , push , asPath} = useRouter() ;
    const [openFilterModal , setOpenFilterModal] = useState(false) ;
    const [openSortModal , setOpenSortModal] = useState(false) ;
    const [sortValue , setSortValue] = useState('newest');
    const [noQueryPath , setNoQueryPath] = useState(asPath) ;
    const productBoxRef = useRef(null) ;
    useEffect(()=>{
        setNoQueryPath(`/products/${query.category}/${query.categoryType}`)
    },[asPath])
    useEffect(()=>{
        setSortValue('newest')
    },[noQueryPath])
    const handlePaginationChange = (e , value)=>{
        push({
            pathname : noQueryPath ,
            query : {
                ...query ,
                page : value,
            }
        },
            undefined ,
            {scroll : false}
        ).then(()=>{
            productBoxRef.current.scrollIntoView({behavior : "smooth"})
        })
    }
    const handleSortOnchange = (value)=>{
        setSortValue(value) ;
        push({
            pathname : noQueryPath ,
            query : {
                ...query ,
                ordering : value
            }
        },undefined , {scroll : false})
    }
    return (
        <Box sx={{minHeight : "100vh" , backgroundColor : "#fff"}}>
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
                    <Grid item xs={3} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{width: "100%"}}>
                            {
                                brands.length && <CheckBoxFilter key={noQueryPath} subFilter={brands}/>
                            }
                        </Box>
                    </Grid>
                    <Box sx={{width: {xs: '100%', md: '75%'}}}>
                        <Box sx={{mb : 2 , display : {xs : "none" , md : "block"}}}>
                            <TextField
                                sx={{width : "150px"}}
                                size={'small'}
                                select
                                value={sortValue}
                                label="براساس"
                                onChange={(e)=>handleSortOnchange(e.target.value)}
                            >
                                {
                                    sortValueItems.map((sortItem)=>(
                                        <MenuItem key={sortItem.value} variant={'subtitle1'} value={sortItem.value}>{sortItem.name}</MenuItem>
                                    ))
                                }
                            </TextField>
                        </Box>
                        <Box sx={{mb : 2 ,gap : 1, display : {xs : "flex" , md : "none"}}}>
                            <Button size={'small'} onClick={()=>setOpenFilterModal(true)} color={'btnGray'} variant={'contained'}>
                                <FilterAltIcon/>
                                فیلتر
                            </Button>
                            <Button size={'small'} onClick={()=>setOpenSortModal(true)} color={'btnGray'} variant={'contained'}>
                                {
                                    sortValueItems.find((item)=>item.value===sortValue).name
                                }
                                <KeyboardArrowDownIcon/>
                            </Button>
                        </Box>
                        <Grid container sx={{borderRadius: 2, boxShadow: 3 ,  backgroundColor : "#f6f6f6" , p : .2 }}>
                            {
                                product.map((productItem) => (
                                    <Grid key={productItem.id} item sx={{p : .2}} xs={6} sm={4} lg={3}>
                                        <ProductPreviewCard
                                            id={productItem.id}
                                            price={productItem.price} title={productItem.name}
                                            discountPercent={+productItem.discount}
                                            afterDiscountPrice={productItem.final_price}
                                            image={'https://takback.soroushes.tk/media/Group_2073.png'}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Box sx={{display : "flex" , justifyContent : "center" , mt : 4}}>
                            <Pagination onChange={handlePaginationChange} page={current_page} count={page_count} color={'primary'} size={'large'} />
                        </Box>
                    </Box>
                </Grid>
            </Container>
            <MainModal setOpen={setOpenFilterModal} open={openFilterModal} title={'فیلتر'}>
                <CheckBoxFilter key={asPath} subFilter={brands}/>
            </MainModal>
            <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                {
                    sortValueItems.map((sortItem)=>(
                        <MenuItem
                            onClick={()=>{
                                handleSortOnchange(sortItem.value);
                                setOpenSortModal(false) ;
                            }}
                            key={sortItem.value}
                            variant={'subtitle2'}
                            value={sortItem.value}
                            color={sortItem.value === sortValue ? 'primary' : "text"}
                        >
                            {sortItem.name}
                        </MenuItem>
                    ))
                }
            </MainModal>
        </Box>
    )
}
export default Category;

export const getServerSideProps = async ({params, query}) => {
    const {categoryType} = params;
    let productsCategoryData = {} ;
    try {
        const {data} = await axios({
            url: `https://takback.soroushes.tk/${categoryType}/`,
            method: 'GET',
            params: {
                'brand[]': query.brand,
                page: query.page ?? 1,
                page_size: 20,
                ordering : query.ordering
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