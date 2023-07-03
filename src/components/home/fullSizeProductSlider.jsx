'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Box} from "@mui/system";
import {Container} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import {FreeMode} from "swiper";
import {BASE_URL} from "../../data/urls";
import {useSelector} from "react-redux";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
const dummyData =           [
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
    }

]
const FullSizeProductSlider = ({backgroundColor}) => {
    return (
        <Box sx={{backgroundColor: backgroundColor, mb: 5, py : 2}}>
            <Container disableGutters={true}>
                <SwiperCustomWrapper spaceBetween={'10px'}>
                    {dummyData.map((data)=>{
                        return(
                            <SwiperSlide key={Math.random()*1000} style={{width : 185}}>
                                <ProductPreviewCard title={data.title} discountPercent={data.discountPercent} price={data.price} afterDiscountPrice={data.afterDiscountPrice} id={2} image={data.image} />
                            </SwiperSlide>
                        )
                    })}
                </SwiperCustomWrapper>
            </Container>
        </Box>
    )
}
export default FullSizeProductSlider;