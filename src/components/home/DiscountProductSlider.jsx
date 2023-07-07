'use client'
import {SwiperSlide} from "swiper/react";
import {Box} from "@mui/system";
import {Container, Typography} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import {BASE_URL} from "../../data/urls";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import DiscountShape from '../../assets/icons/home/discount-shape.svg' ;
import DiscountShapeBig from '../../assets/icons/home/discount-shape-big.svg' ;
import {useSelector} from "react-redux";
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
const DiscountProductSlider = () => {
    const {isMobile} = useSelector(state => state.deviceInfo) ;

    return (
            <Container disableGutters={true} sx={{backgroundImage: 'linear-gradient(to left, #EF4800 , #FF8301)' , my : 8 , pt : 6 , pb:  10 , borderRadius : '4px 4px 25px 25px' , position : 'relative'}}>
                <Box top={'-25%'} left={'0'} position={'absolute'}>
                    <DiscountShapeBig/>
                </Box>
                <Box sx={{width : {md : '83%'} , mx : 'auto'}}>
                <Box sx={{mb: 6 , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , gap : 2}}>
                    <DiscountShape/>
                    <Typography sx={{wordSpacing :'3px'}} textAlign={'center'} variant={'h3'} fontWeight={'bold'} color={'white'}>تخفیف ویژه تک جنرال</Typography>
                    <DiscountShape/>
                </Box>
                <SwiperCustomWrapper>
                    {dummyData.map((data , index)=>{
                        return(
                            <SwiperSlide key={Math.random()*1000} style={{width : isMobile ? 175 : 200, marginRight : (!index&&isMobile) ? '30px' : '16px'}}>
                                <ProductPreviewCard title={data.title} discountPercent={data.discountPercent} price={data.price} afterDiscountPrice={data.afterDiscountPrice} id={2} image={data.image} />
                            </SwiperSlide>
                        )
                    })}
                </SwiperCustomWrapper>
                </Box>
            </Container>
    )
}
export default DiscountProductSlider;