import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container, Pagination} from "@mui/material";
import ProductPreviewCard from "../../../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import testBanner from '../../../../public/testBanner.png'
import CategoryListGenerator from "../../../components/products/CategoryListGenerator";
import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Category = ({product, brands, current_page, page_count}) => {
    const {query , push , asPath} = useRouter() ;
    const [loading , setLoading] = useState(false) ;
    const handlePaginationChange = (e , value)=>{
        push({
            pathname : `/products/${query.category}/${query.categoryType}` ,
            query : {
                ...query ,
                page : value,
            }
        })
    }
    useEffect(()=>{
        setLoading(false)
    },[asPath])
    return (
        <Box sx={{minHeight : "100vh"}}>
            <Box sx={{
                width: '100%',
                aspectRatio: '8/1',
                position: 'relative',
                p: 0,
                mb: 3,
                display: {xs: "none", md: "block"}
            }}>
                <Image fill alt={''} src={testBanner}/>
            </Box>
            <Box sx={{width: '100%', aspectRatio: '2/1', position: 'relative', p: 0, mb: 3, display: {md: "none"}}}>
                <Image fill alt={''} src={testBanner}/>
            </Box>
            <Container maxWidth={'lg'}>
                <Box sx={{my: 2}}>
                    <CategoryListGenerator setLoading={setLoading} category={'pomp'}/>
                </Box>
                <Grid container>
                    <Grid item xs={3} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{width: "100%"}}>
                            {
                                brands.length && !loading ? <CheckBoxFilter subFilter={brands}/> : null
                            }
                        </Box>
                    </Grid>
                    <Box sx={{width: {xs: '100%', md: '75%'}}}>
                        <Grid container sx={{borderRadius: 2, boxShadow: 3 ,  backgroundColor : "#f6f6f6" , p : .2}}>
                            {
                                product.map((productItem) => (
                                    <Grid key={productItem.id} item sx={{p : .2}} xs={6} sm={4}
                                          lg={3}>
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
                        <Box sx={{display : "flex" , justifyContent : "center" , mt : 2}}>
                            <Pagination onChange={handlePaginationChange} page={current_page} count={page_count} color={'primary'} size={'large'} />
                        </Box>
                    </Box>
                </Grid>
            </Container>
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
                page_size: 8
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