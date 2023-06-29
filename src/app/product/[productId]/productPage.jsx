'use client'
import {Box} from "@mui/system";
import {Grid, Container, Divider} from "@mui/material";
import {useRef, useState} from 'react';
import SingleProductDetails from "../../../components/singleProduct/SingleProductDetails";
import CommentQuestion from "../../../components/singleProduct/Comment&Question";
import SingleProductImage from "../../../components/singleProduct/SingleProductImage";
import SingleProductAttribute from "../../../components/singleProduct/SingleProductAttribute";
import SingleProductSellCard from "../../../components/singleProduct/SingleProductSellCard";

const ProductPage = ({data}) => {
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null)
    const [isShowAllDetails, setIsShowAllDetails] = useState(false)
    console.log(data);
    return (
        <Box sx={{pt: 3, height: '100%'}}>
            <Container maxWidth={'xl'}>
                <Grid container rowGap={5}>
                    <Grid item sm={6} md={5} lg={3.3} xs={12}>
                        {data.product.main_image ?
                            <SingleProductImage mainImage={data.product.main_image}
                                                otherImage={data.product.other_images}/> : null
                        }
                    </Grid>
                    <Grid item sx={{px: {sm: 3}}} sm={6} md={7} lg={5.2} xs={12}>
                        <SingleProductAttribute
                            setShowAllDetails={setIsShowAllDetails} name={data.product.name}
                            attributes={data.product.attributes} attrRef={attributesTableRef}
                            opinionRef={opinionTableRef}/>
                    </Grid>
                    <Grid item sm={12} lg={3.5} xs={12}>
                        <SingleProductSellCard
                            available={data.product.product_available}
                            price={data.product.price}
                            finalPrice={data.product.final_price}
                            discount={data.product.discount}
                            warranty={data.product.warranty}
                            sevenDaysBack={data.product.seven_days_back}
                            freeSent={data.product.free_send}
                            id={data.product.id}
                        />
                    </Grid>
                </Grid>
                <Grid ref={attributesTableRef} sx={{mt: 4}} item md={12} xs={12}>
                    <SingleProductDetails setShowAllDetails={setIsShowAllDetails} IsShowAllDetails={isShowAllDetails}
                                          details={data.product.attributes}/>
                </Grid>
                <Grid ref={opinionTableRef} sx={{mt: 4}} item md={12} xs={12}>
                    <Divider sx={{my: 3, display: {md: 'none'}}}/>
                    <CommentQuestion rate={data.avg_rate} comments={data.comments} productId={data.product.id}
                                     questions={data.questions}/>
                </Grid>
            </Container>
        </Box>
    )
}
export default ProductPage;