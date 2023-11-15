'use client'
import {Container, Grid, Typography, Box} from "@mui/material";
import {useEffect, useRef, useState} from 'react';
import SingleProductDetails from "../../../../../components/singleProduct/SingleProductDetails";
import CommentQuestion from "../../../../../components/singleProduct/Comment&Question";
import SingleProductImage from "../../../../../components/singleProduct/SingleProductImage";
import SingleProductSellCard from "../../../../../components/singleProduct/SingleProductSellCard";
import SingleProductAttribute from "@/components/singleProduct/SingleProductAttribute";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import SwiperCustomWrapper from "@/components/share/SwiperCustomWrapper";
import ProductPreviewCard from "@/components/share/ProductPreviewCard";
import {SwiperSlide} from "swiper/react";
import {useRouter, useSearchParams} from "next/navigation";
import {productSchemaGenerator} from "@/hooks/schemaGenerator";
import Image from "next/image";

const ProductPage = ({data}) => {
    const attributesTableRef = useRef(null);
    const opinionTableRef = useRef(null);
    const [isShowAllDetails, setIsShowAllDetails] = useState(false);
    const [productOptions, setProductOptions] = useState(data?.product.options.product_variant[0]);
    const [imageIsShow , setImageIsShow] = useState({image :'', show:false})
    const searchParams = useSearchParams();
    const {push} = useRouter();
    const from = searchParams.get('fromSection');
    const params = new URLSearchParams(searchParams);
    useEffect(() => {
        if (from === 'like') {
            window.scrollTo({
                top: opinionTableRef.current?.offsetTop - 150,
                behavior: 'smooth'
            })
        }
        params.delete('fromSection');
        push(`?${params}`, {scroll: false});
    }, []);
    const handleImage = ()=> {
        setImageIsShow({image:'' , show:false})
    }
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(productSchemaGenerator(data?.product.name, data?.product.all_images, data?.meta_tag.desc, data?.product.brand, data?.avg_rate.avg_rate, data?.product.options.product_variant , data.comments.length))}}
            />
            <Box sx={{height: '100%' , width:'100%'}}>
                {
                    imageIsShow.show &&
                    <Box sx={{backgroundColor:'rgba(0,0,0,.2)' , position:'fixed' , width: '100%' , height:'100%' , zIndex:1201 ,display :'flex' , justifyContent:'center' }}>
                        <SwiperCustomWrapper swiperOptions={{sx: {display:'flex' , alignItems:'center'}}}>
                            <SwiperSlide onClick={handleImage} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <Box display={{md: 'block', xs: 'none' , borderRadius:2}}>
                                    <Image alt={''} width={400} height={400} style={{borderRadius:'3%'}} src={imageIsShow?.image ?? null}/>
                                </Box>
                                <Box display={{md: 'none', xs: 'block'}}>
                                    <Image alt={''} width={300} height={300} style={{borderRadius:'3%'}} src={imageIsShow?.image ?? null}/>
                                </Box>
                            </SwiperSlide>
                            {
                                data?.product?.all_images.map((item)=>{
                                    if(item.image !== imageIsShow?.image){
                                        return(
                                            <SwiperSlide onClick={handleImage}>
                                                <Box display={{md: 'block', xs: 'none'}}>
                                                    <Image alt={''} width={400} height={400}  style={{borderRadius:'3%'}} src={item?.image ?? null}/>
                                                </Box>
                                                <Box display={{md: 'none', xs: 'block'}}>
                                                    <Image alt={''} width={300} height={300} style={{borderRadius:'3%'}} src={item?.image ?? null}/>
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    }
                                })
                            }
                        </SwiperCustomWrapper>
                    </Box>
                }
                <Container maxWidth={'lg'}>
                    <BreadcrumbGenerator
                        product={data?.product}
                        breadcrumb={data?.breadcrumb.map(item => ({
                            ...item,
                            url: `/category/${item.url}`
                        }))}/>
                    <Grid container rowGap={3}>
                        <Grid item md={3.75} xs={12}>
                            <SingleProductImage setShowImage={setImageIsShow} images={data?.product.all_images}/>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <SingleProductAttribute
                                productStaus={productOptions?.inventory_status}
                                pdf={data?.product.pdf}
                                id={data?.product.id}
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
                                available={productOptions?.product_available}
                                price={productOptions?.price}
                                finalPrice={productOptions?.final_price}
                                warranty={productOptions?.warranty}
                                freeSent={productOptions?.free_send}
                                id={productOptions?.id}
                            />
                        </Grid>
                        <Grid ref={attributesTableRef} sx={{mt: 4}} item xs={12}>
                            <SingleProductDetails content={data?.page_content.desc}
                                                  setShowAllDetails={setIsShowAllDetails}
                                                  IsShowAllDetails={isShowAllDetails}
                                                  details={data?.product.attributes}/>
                        </Grid>
                        <Grid ref={opinionTableRef} item xs={12}>
                            <CommentQuestion image={data?.product.all_images} rate={data?.avg_rate}
                                             comments={data?.comments} productId={data?.product.id}
                                             questions={data?.questions}/>
                        </Grid>
                        {
                            data?.similar_product.length ?
                                <Grid item xs={12} mb={5}>
                                    <Box sx={{width: 'auto', display: 'flex', mx: 2, my: 3}}>
                                        <Typography fontWeight={'bold'} sx={{borderBottom: '1px solid #ff8301'}}>محصولات
                                            مشابه</Typography>
                                    </Box>
                                    <SwiperCustomWrapper navigation={false}>
                                        {
                                            data?.similar_product.map((item) => {
                                                return (
                                                    <SwiperSlide key={Math.random() * 1000}
                                                                 style={{width: '200px', marginRight: '16px'}}>
                                                        <ProductPreviewCard
                                                            url={item.url}
                                                            title={item.name} id={item.id}
                                                            image={item.main_image?.image}
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
        </>
    )
}
export default ProductPage;