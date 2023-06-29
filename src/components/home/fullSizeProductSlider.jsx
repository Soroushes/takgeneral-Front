'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Box} from "@mui/system";
import {Container} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import {FreeMode} from "swiper";
import {BASE_URL} from "../../data/urls";
const FullSizeProductSlider = ({backgroundColor}) => {
    return (
        <Box sx={{backgroundColor: backgroundColor, mb: 5, py : 2}}>
            <Container disableGutters={true} maxWidth={'xl'}>
                <Swiper
                    modules={[FreeMode]}
                    spaceBetween={7}
                    className="mySwiper"
                    slidesPerView={6}
                    breakpoints={{
                        350 : {
                            slidesPerView : 2
                        } ,
                        450 : {
                            slidesPerView : 2.5
                        },
                        500 : {
                            slidesPerView : 3
                        } ,
                        600: {
                            slidesPerView: 3.5
                        },
                        700 : {
                            slidesPerView: 4
                        } ,
                        800: {
                            slidesPerView: 4.5
                        },
                        900 : {
                          slidesPerView : 5
                        },
                        1000: {
                            slidesPerView: 5.5
                        },
                        1100 : {
                          slidesPerView : 6
                        },
                        1200: {
                            slidesPerView: 6.5
                        },
                        1300 : {
                            slidesPerView: 7
                        },
                    }}
                >
                    {
                        [
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

                        ].map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProductPreviewCard title={product.title}
                                                        afterDiscountPrice={product.afterDiscountPrice}
                                                        price={product.price} image={product.image}
                                                        discountPercent={product.discountPercent}
                                                        id={2}
                                                        />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </Box>
    )
}
export default FullSizeProductSlider;