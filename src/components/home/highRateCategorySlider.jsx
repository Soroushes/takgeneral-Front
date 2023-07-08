'use client'
import {SwiperSlide} from "swiper/react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import {BASE_URL} from "../../data/urls";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import HighRateBanner from '../../assets/images/home/highRateSilderPic.png'
import {useSelector} from "react-redux";
import Image from "next/image";

const dummyData = [
    {
        title: 'فلومتر مایع و گاز سایز 25 میلی متر مدل خطی LZB-VA تمام استیل',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
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
            <Box sx={{
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
            <SwiperCustomWrapper>
                <SwiperSlide style={{width: isMobile ? 320 : 370}}>
                    <Box sx={{position: 'relative', height: {xs : 450 , md : 500}}}>
                        <Image fill src={HighRateBanner}/>
                    </Box>
                </SwiperSlide>
                    {dummyData.map((data, index) => {
                        return (
                            <SwiperSlide key={Math.random() * 1000} style={{width: isMobile ? 170 : 200,  marginRight : !index ? isMobile ? '-120px' : '-150px' : '15px'}}>
                                <Box marginTop={5}>
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