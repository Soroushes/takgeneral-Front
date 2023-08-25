'use client'
import {Box} from "@mui/system";
import {Grid, Container, Divider} from "@mui/material";
import {useRef, useState} from 'react';
import SingleProductDetails from "../../../../components/singleProduct/SingleProductDetails";
import CommentQuestion from "../../../../components/singleProduct/Comment&Question";
import SingleProductImage from "../../../../components/singleProduct/SingleProductImage";
import SingleProductSellCard from "../../../../components/singleProduct/SingleProductSellCard";
import SingleImage from '../../../../assets/images/single-product-image.png';
import SingleProductAttribute from "@/components/singleProduct/SingleProductAttribute";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
const ProductPage = ({data}) => {
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null);
    const [isShowAllDetails, setIsShowAllDetails] = useState(false);
    const [productOptions , setProductOptions] = useState(data.product.options.product_variant[0]);
    return (
        <Box sx={{pt: 3, height: '100%'}}>
            <Container maxWidth={'lg'}>
                <BreadcrumbGenerator product={data.product} breadcrumb={data.breadcrumb}/>

                <Grid container rowGap={5}>
                    <Grid item md={3.75} xs={12}>
                        <SingleProductImage mainImage={SingleImage} otherImage={null}/>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <SingleProductAttribute
                            options={data.product.options}
                            productOptions={productOptions}
                            setOptions={setProductOptions}
                            opinionRef={opinionTableRef}
                            setShowAllDetails={setIsShowAllDetails} name={data.product.name}
                            attributes={data.product.attributes} attrRef={attributesTableRef}/>
                    </Grid>
                    <Grid item md={3.25} xs={12}>
                        <SingleProductSellCard
                            key={productOptions.id}
                            available={productOptions.product_available}
                            price={productOptions.price}
                            finalPrice={productOptions.final_price}
                            warranty={productOptions.warranty}
                            freeSent={productOptions.free_send}
                            id={productOptions.id}
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