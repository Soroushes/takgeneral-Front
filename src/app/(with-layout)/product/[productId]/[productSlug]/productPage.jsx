'use client'
import {Container, Divider, Grid, Typography , Box} from "@mui/material";
import {useRef, useState} from 'react';
import SingleProductDetails from "../../../../../components/singleProduct/SingleProductDetails";
import CommentQuestion from "../../../../../components/singleProduct/Comment&Question";
import SingleProductImage from "../../../../../components/singleProduct/SingleProductImage";
import SingleProductSellCard from "../../../../../components/singleProduct/SingleProductSellCard";
import SingleProductAttribute from "@/components/singleProduct/SingleProductAttribute";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import SwiperCustomWrapper from "@/components/share/SwiperCustomWrapper";
import ProductPreviewCard from "@/components/share/ProductPreviewCard";
import {SwiperSlide} from "swiper/react";

const ProductPage = ({data}) => {
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null);
    const [isShowAllDetails, setIsShowAllDetails] = useState(false);
    const [productOptions, setProductOptions] = useState(data?.product.options.product_variant[0]);
    return (
        <Box sx={{height: '100%'}}>
            <Container maxWidth={'lg'}>
                <BreadcrumbGenerator product={data?.product} breadcrumb={data?.breadcrumb}/>
                <Grid container rowGap={5}>
                    <Grid item md={3.75} xs={12}>
                        <SingleProductImage images={data?.product.all_images} />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <SingleProductAttribute
                            pdf={data?.product.pdf}
                            id={data?.product.id}
                            available={productOptions?.product_available}
                            comments={data?.comments}
                            rate={data?.avg_rate.avg_rate}
                            options={data?.product.options}
                            productOptions={productOptions}
                            setOptions={setProductOptions}
                            opinionRef={opinionTableRef}
                            setShowAllDetails={setIsShowAllDetails} name={data?.product.name}
                            attributes={data?.product.attributes} attrRef={attributesTableRef}/>
                    </Grid>
                    <Grid item md={3.25} xs={12}>
                        <SingleProductSellCard
                            minPrice={productOptions?.min_price}
                            madeIn={productOptions?.made_in}
                            key={productOptions?.id}
                            available={productOptions?.product_available}
                            price={productOptions?.price}
                            finalPrice={productOptions?.final_price}
                            warranty={productOptions?.warranty}
                            freeSent={productOptions?.free_send}
                            id={productOptions?.id}
                        />
                    </Grid>
                    <Grid ref={attributesTableRef} sx={{mt: 4}} item xs={12}>
                        <SingleProductDetails content={data?.page_content.desc} setShowAllDetails={setIsShowAllDetails} IsShowAllDetails={isShowAllDetails}
                                              details={data?.product.attributes}/>
                    </Grid>
                    <Grid ref={opinionTableRef} sx={{mt: 4}} item xs={12}>
                        <Divider sx={{my: 3, display: {md: 'none'}}}/>
                        <CommentQuestion image={data?.product.all_images} rate={data?.avg_rate} comments={data?.comments} productId={data?.product.id}
                                         questions={data?.questions}/>
                    </Grid>
                    {
                        data?.similar_product.length ?
                        <Grid item xs={12} mb={5}>
                            <Box sx={{width:'auto' , display:'flex',mx:2 , my:3}}>
                                <Typography fontWeight={'bold'} sx={{ borderBottom:'1px solid #ff8301' }}>محصولات مشابه</Typography>
                            </Box>
                            <SwiperCustomWrapper navigation={false}>
                                {
                                    data?.similar_product.map((item) => {
                                        return (
                                            <SwiperSlide key={Math.random() * 1000} style={{width:'200px' ,  marginRight : '16px'}}>
                                                <ProductPreviewCard
                                                    url={item.url}
                                                    title={item.name} id={item.id} image={item.main_image}
                                                                    price={item.min_price.price}
                                                                    afterDiscountPrice={item.min_price.final_price}
                                                                    discountPercent={item.min_price.discount}/>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </SwiperCustomWrapper>
                        </Grid> : null
                    }
                </Grid>
            </Container>
        </Box>
    )
}
export default ProductPage;