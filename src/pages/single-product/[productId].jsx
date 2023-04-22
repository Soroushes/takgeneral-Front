import axios from "axios";
import {Box} from "@mui/system";
import {Grid, Container} from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
import SingleProductAttribute from '../../components/singleProduct/SingleProductAttribute';
import SingleProductSellCard from "../../components/singleProduct/SingleProductSellCard";
import SingleProductDetails from "src/components/singleProduct/SingleProductDetails";
import SingleProductOpinion from "src/components/singleProduct/SingleProductOpinion";
import MainLoading from "src/components/singleProduct/MainLoading";
import {useRouter} from "next/router";
import {useRef, useState} from 'react';

const singleProduct = (props) => {
    //console.log(props)
    const router = useRouter();
    const attributesTableRef = useRef(null);
    const loading = router.isFallback;
    const [isShowAllDetails, setIsShowAllDetails] = useState(false)
    return (
        <Box sx={{backgroundColor: '#F9F9F9', pt: 3 , height:'100%'}}>
            {
                loading ? <MainLoading/> :
                <Container sx={{px: {md: 20, lg: 8}}} maxWidth={'xl'}>
                    <Grid container rowGap={5}>
                        <Grid item sm={6} md={5} lg={3.3} xs={12}>
                            <SingleProductImage mainImage={props.main_image} otherImage={props.other_images}/>
                        </Grid>
                        <Grid item sx={{px: 3}} sm={6} md={7} lg={5.2} xs={12}>
                            <SingleProductAttribute setShowAllDetails={setIsShowAllDetails} name={props.name} attributes={props.attributes} attrRef={attributesTableRef}/>
                        </Grid>
                        <Grid item sm={12} lg={3.5} xs={12}>
                            <SingleProductSellCard
                                available={props.product_available}
                                price={props.price}
                                finalPrice={props.final_price}
                                discount={props.discount}
                                warranty={props.warranty}
                                sevenDaysBack={props.seven_days_back}
                                freeSent={props.free_send}
                                id={props.id}
                            />
                        </Grid>
                    </Grid>
                </Container>
            }
            <Container sx={{px: {md: 20, lg: 8}}} maxWidth={'xl'}>
                <Grid sx={{mt: 4}} item md={12} xs={12}>
                    <SingleProductOpinion/>
                </Grid>
            </Container>
            <Container ref={attributesTableRef} disableGutters sx={{px: {md: 20, lg: 8}}} maxWidth={'xl'}>
                <Grid sx={{mt: 4}} item md={12} xs={12}>
                    {
                        loading ? null :
                            <SingleProductDetails setShowAllDetails={setIsShowAllDetails} IsShowAllDetails={isShowAllDetails} details={props.attributes}/>
                    }
                </Grid>
            </Container>
        </Box>
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