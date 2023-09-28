'use client'
import {SwiperSlide} from "swiper/react";
import {Typography , Box} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import HighRateBanner from '../../assets/images/home/highRateSilderPic.png'
import Image from "next/image";

const HighRateCategorySlider = ({products}) => {
    return (
        <Box sx={{
            my: 8,
            backgroundColor: ' #97CBEF',
            position: 'relative',
            borderRadius: '50px 50px 0 0',
            overflow: 'hidden'
        }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: {xs: 25, md: 55},
                left: 0,
                right: 0,
                zIndex: 2,
            }}>
                <Typography sx={{wordSpacing : '2px'}} textAlign={'center'} variant={'h3'} fontWeight={'bold'}
                            color={'white'}>محبوب ترین های کولر گازی</Typography>
            </Box>
            <SwiperCustomWrapper
            navigation={false}
            >
                <SwiperSlide style={{width: 'auto'}}>
                    <Box sx={{width: {xs:320 , md:370},position: 'relative', height: {xs : 450 , md : 500}}}>
                        <Image alt={''} fill src={HighRateBanner}/>
                    </Box>
                </SwiperSlide>
                    {products?.map((data, index) => {
                        return (
                            <SwiperSlide key={Math.random() * 1000} style={{width:'auto', marginRight : !index ? '-135px' : '15px'}}>
                                <Box sx={{width: {md: 200, xs: 170}}} marginTop={5}>
                                    <ProductPreviewCard title={data.name} discountPercent={data.min_price?.discount}
                                                        price={data.min_price?.price} afterDiscountPrice={data.min_price?.final_price}
                                                        id={data.id}
                                                        image={data.image}/>
                                </Box>
                            </SwiperSlide>
                        )
                    })}
            </SwiperCustomWrapper>
        </Box>
    )
}
export default HighRateCategorySlider;