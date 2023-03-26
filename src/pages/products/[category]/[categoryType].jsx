import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container} from "@mui/material";
import ProductPreviewCard from "../../../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import testBanner from '../../../../public/testBanner.png'
import CategoryListGenerator from "../../../components/products/CategoryListGenerator";
import axios from "axios";
const Category = ({product}) => {
    const brandFilter = {
        title: 'برندهای پمپ',
        values: [
            {
                name: 'pentax',
                number: '2'
            },
            {
                name: 'diaselsaz',
                number: '3'
            }
        ]
    }
    return (
        <>
            <Box sx={{width: '100%', aspectRatio: '4.8/1', position: 'relative', p: 0, mb: 3}}>
                <Image fill alt={''} src={testBanner}/>
            </Box>
            <Container maxWidth={'lg'}>
                <Box sx={{my: 2}}>
                    <CategoryListGenerator category={'pomp'}/>
                </Box>
                <Grid container>
                    <Grid container xs={3} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{height: 300, width: "100%"}}>
                            <CheckBoxFilter subFilter={brandFilter}/>
                        </Box>
                    </Grid>
                    <Grid rowGap={4} xs={12} md={9} container sx={{borderRadius: 2, boxShadow: 3}}>
                        {
                            product.map((productItem) => (
                                <Grid key={productItem.id} item sx={{borderBottom: "1px solid #ccc"}} xs={6} sm={4} lg={3}>
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
                </Grid>
            </Container>
        </>
    )
}
export default Category;
export const getServerSideProps = async ({params}) => {
    let productsCategoryData = {}
    try {
        const {data} = await axios({
            url: `https://takback.soroushes.tk/${params.categoryType}/`,
            method: 'GET'
        })
        productsCategoryData = data;
    } catch (err) {
        productsCategoryData = null
    }
    if (!productsCategoryData){
        return {
            notFound : true
        }
    }
    return {
        props: productsCategoryData,
    }
}