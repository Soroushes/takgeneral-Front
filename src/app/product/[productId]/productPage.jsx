'use client'
import {Box} from "@mui/system";
import {Grid, Container, Divider} from "@mui/material";
import {useRef, useState} from 'react';
import SingleProductDetails from "../../../components/singleProduct/SingleProductDetails";
import CommentQuestion from "../../../components/singleProduct/Comment&Question";
import SingleProductImage from "../../../components/singleProduct/SingleProductImage";
import SingleProductSellCard from "../../../components/singleProduct/SingleProductSellCard";
import SingleImage from '../../../assets/images/Rectangle 1.png';
const ProductPage = ({data}) => {
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null);
    const [isShowAllDetails, setIsShowAllDetails] = useState(false);
    return (
        <Box sx={{pt: 3, height: '100%'}}>
            <Container maxWidth={'lg'}>
                <Grid container rowGap={5}>
                    <Grid item md={3.5} xs={12}>
                        <SingleProductImage mainImage={SingleImage} otherImage={null}/>
                    </Grid>
                    <Grid item sx={{px: {md: 3}}} md={5.5} xs={12}>
                        {/*<SingleProductAttribute*/}
                        {/*    setShowAllDetails={setIsShowAllDetails} name={data.product.name}*/}
                        {/*    attributes={data.product.attributes.values} attrRef={attributesTableRef}/>*/}
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <SingleProductSellCard
                            opinionRef={opinionTableRef}
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