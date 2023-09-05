'use client'
import {SwiperSlide} from "swiper/react";
import {Container, Typography , Box} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import SwiperCustomWrapper from "../share/SwiperCustomWrapper";
import DiscountShapeBig from '../../assets/icons/home/discount-shape-big.svg' ;
const DiscountProductSlider = ({products , backGroundImage = 'linear-gradient(to left, #EF4800 , #FF8301)'}) => {
    return (
            <Container disableGutters={true} sx={{backgroundImage: backGroundImage , my : 8 , pt : 4 , pb:  6 , borderRadius : '4px 4px 25px 25px' , position : 'relative'}}>
                <Box top={'-25%'} left={'0'} position={'absolute'}>
                    <DiscountShapeBig/>
                </Box>
                <Box sx={{width : {md : '90%'} , mx : 'auto'}}>
                <Box sx={{mb: 4 , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , gap : 2}}>
                    <Typography sx={{wordSpacing :'3px'}} textAlign={'center'} variant={'h3'} fontWeight={'bold'} color={'white'}>پیشنهادات ویژه تک جنرال </Typography>
                </Box>
                <SwiperCustomWrapper
                navigation={false}>
                    {products.map((data)=>{
                        return(
                            <SwiperSlide key={Math.random()*1000} style={{width : 'auto', marginRight : '16px'}}>
                                <Box sx={{width : {md:200 , xs:170}}}>
                                    <ProductPreviewCard title={data.name} discountPercent={data.min_price.discount} price={data.min_price.price} afterDiscountPrice={data.min_price.final_price} id={data.id} image={data.main_image} />
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