import axios from "axios";
import {Box} from "@mui/system";
import {Grid, Container, Divider} from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
import SingleProductAttribute from '../../components/singleProduct/SingleProductAttribute';
import SingleProductSellCard from "../../components/singleProduct/SingleProductSellCard";
import SingleProductDetails from "src/components/singleProduct/SingleProductDetails";
import SingleProductComment from "src/components/singleProduct/SingleProductComment";
import SingleProductLoading from "src/components/singleProduct/SingleProductLoading";
import SingleProductAddComment from "src/components/singleProduct/SingleProductAddComment";
import {useRouter} from "next/router";
import {useRef, useState} from 'react';

const singleProduct = (props) => {
    const router = useRouter();
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null)
    const loading = router.isFallback;
    const [isShowAllDetails, setIsShowAllDetails] = useState(false)
    return (
        loading ? <SingleProductLoading/> : (
            <Box sx={{backgroundColor: '#F9F9F9', pt: 3, height: '100%'}}>
                <Container maxWidth={'xl'}>
                    <Grid container rowGap={5}>
                        <Grid item sm={6} md={5} lg={3.3} xs={12}>
                            <SingleProductImage mainImage={props.product.main_image} otherImage={props.product.other_images}/>
                        </Grid>
                        <Grid item sx={{px: {sm : 3}}} sm={6} md={7} lg={5.2} xs={12}>
                            <SingleProductAttribute
                                setShowAllDetails={setIsShowAllDetails} name={props.product.name}
                                attributes={props.product.attributes} attrRef={attributesTableRef}
                                opinionRef={opinionTableRef}/>
                        </Grid>
                        <Grid item sm={12} lg={3.5} xs={12}>
                            <SingleProductSellCard
                                available={props.product.product_available}
                                price={props.product.price}
                                finalPrice={props.product.final_price}
                                discount={props.product.discount}
                                warranty={props.product.warranty}
                                sevenDaysBack={props.product.seven_days_back}
                                freeSent={props.product.free_send}
                                id={props.product.id}
                            />
                        </Grid>
                    </Grid>
                    <Grid ref={attributesTableRef} sx={{mt: 4}} item md={12} xs={12}>
                        <SingleProductDetails setShowAllDetails={setIsShowAllDetails}
                                              IsShowAllDetails={isShowAllDetails} details={props.product.attributes}/>
                    </Grid>
                    <Grid sx={{mt: 4}} item md={12} xs={12}>
                        <SingleProductAddComment rate={props.avg_rate}/>
                        {/*<SingleProductAddQuestion/>*/}
                    </Grid>
                    <Grid ref={opinionTableRef} sx={{mt: 4}} item md={12} xs={12}>
                        <Divider sx={{my: 3, display: {md: 'none'}}}/>
                        <SingleProductComment rate={props.avg_rate} comments={props.comments}/>
                    </Grid>
                </Container>
            </Box>
        )
    )

}
export default singleProduct;

export async function getStaticPaths() {
    return {
        paths: [{params: {productId: '1'}}],
        fallback: true,
    }
}

export const getStaticProps = async ({params}) => {
    let productData = null;
    try {
        const {data} = await axios({
            url: `https://takback.soroushes.tk/product-detail/${params.productId}/`,
            method: 'GET',
        })
        productData = data;
    } catch (err) {
        console.log(err)
    }
    if (!productData) {
        return {
            notFound: true
        }
    }
    return {
        props: productData,
        revalidate: 60
    }
}