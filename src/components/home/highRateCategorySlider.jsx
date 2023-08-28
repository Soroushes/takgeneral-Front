'use client'
import {SwiperSlide} from "swiper/react";
import {Typography , Box} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import HighRateBanner from '../../assets/images/home/highRateSilderPic.png'
import {useSelector} from "react-redux";
import Image from "next/image";
import anPic from '../../assets/images/home/homeCategoryImage.png'

const dummyData = [
    {
        title: 'فلومتر مایع و گاز سایز 25 میلی متر مدل خطی LZB-VA تمام استیل',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: anPic,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: anPic,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: anPic,
    }

]
const HighRateCategorySlider = () => {
    const {isMobile} = useSelector(state => state.deviceInfo);
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
                    {dummyData.map((data, index) => {
                        return (
                            <SwiperSlide key={Math.random() * 1000} style={{width:'auto', marginRight : !index ? (isMobile ? '-120px' : '-150px') : '15px'}}>
                                <Box sx={{width: {md: 200, xs: 170}}} marginTop={5}>
                                    <ProductPreviewCard title={data.title} discountPercent={data.discountPercent}
                                                        price={data.price} afterDiscountPrice={data.afterDiscountPrice}
                                                        id={2}
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