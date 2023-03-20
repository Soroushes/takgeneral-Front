import axios from "axios";
import {Box} from "@mui/system";
import {Grid, Container} from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
import SingleProductAttribute from '../../components/singleProduct/SingleProductAttribute';
import SingleProductSellCard from "../../components/singleProduct/SingleProductSellCard";
import SingleProductDetails from "src/components/singleProduct/SingleProductDetails";
import {useRouter} from "next/router";

const singleProduct = (props) => {
    const router = useRouter();
    return (
        router.isFallback ? null :
            <Box sx={{backgroundColor: '#F9F9F9', pt: 3}}>
                <Container sx={{px: {xs: 4, sm: 15, md: 1, lg: 4}}} maxWidth={"xl"}>
                    <Grid container rowGap={5}>
                        <Grid item md={4} lg={3} xs={12}>
                            <SingleProductImage mainImage={props.main_image} otherImage={props.other_images}/>
                        </Grid>
                        <Grid item sx={{px: {md: 3}}} md={4} lg={6} xs={12}>
                            <SingleProductAttribute name={props.name} attributes={props.attributes}/>
                        </Grid>
                        <Grid item md={4} lg={3} xs={12}>
                            <SingleProductSellCard
                                available={props.product_available}
                                price={props.price}
                                finalPrice={props.final_price}
                                discount={props.discount}
                                warranty={props.warranty}
                                sevenDaysBack={props.seven_days_back}
                                freeSent={props.free_send}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container disableGutters maxWidth={'xl'} sx={{px : {lg : 4}}}>
                    <Grid sx={{mt : 4}} item md={12} xs={12}>
                        <SingleProductDetails/>
                    </Grid>
                </Container>
            </Box>
    )

}
export default singleProduct;

export async function getStaticPaths() {
    return {
        paths: [{params: {productId: '2'}}],
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