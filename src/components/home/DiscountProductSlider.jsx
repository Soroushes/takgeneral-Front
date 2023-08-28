'use client'
import {SwiperSlide} from "swiper/react";
import {Container, Typography , Box} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import DiscountShape from '../../assets/icons/home/discount-shape.svg' ;
import DiscountShapeBig from '../../assets/icons/home/discount-shape-big.svg' ;
import anPic from "@/assets/images/home/homeCategoryImage.png";
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

];
const DiscountProductSlider = () => {
    return (
            <Container disableGutters={true} sx={{backgroundImage: 'linear-gradient(to left, #EF4800 , #FF8301)' , my : 8 , pt : 4 , pb:  6 , borderRadius : '4px 4px 25px 25px' , position : 'relative'}}>
                <Box top={'-25%'} left={'0'} position={'absolute'}>
                    <DiscountShapeBig/>
                </Box>
                <Box sx={{width : {md : '90%'} , mx : 'auto'}}>
                <Box sx={{mb: 4 , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , gap : 2}}>
                    <DiscountShape/>
                    <Typography sx={{wordSpacing :'3px'}} textAlign={'center'} variant={'h3'} fontWeight={'bold'} color={'white'}>تخفیف ویژه تک جنرال</Typography>
                    <DiscountShape/>
                </Box>
                <SwiperCustomWrapper
                navigation={false}
                >
                    {dummyData.map((data)=>{
                        return(
                            <SwiperSlide key={Math.random()*1000} style={{width : 'auto', marginRight : '16px'}}>
                                <Box sx={{width : {md:200 , xs:170}}}>
                                    <ProductPreviewCard title={data.title} discountPercent={data.discountPercent} price={data.price} afterDiscountPrice={data.afterDiscountPrice} id={2} image={data.image} />
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </SwiperCustomWrapper>
                </Box>
            </Container>
    )
}
export default DiscountProductSlider;