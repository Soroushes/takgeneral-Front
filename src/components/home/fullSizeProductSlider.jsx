import {Swiper, SwiperSlide} from "swiper/react";
import {Box} from "@mui/system";
import {Container, Typography} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";
import 'swiper/css' ;
import {useEffect, useState} from "react";
import {FreeMode} from "swiper";
const FullSizeProductSlider = () => {
    const [startPosition , setStartPosition] = useState(null) ;
    const [canScroll , setCanScroll] = useState(true) ;
    useEffect(()=>{
        if (window.innerWidth > 500) return
        if (canScroll)document.body.style.overflow = 'auto' ;
        else document.body.style.overflow = 'hidden'
    },[canScroll]) ;
    const touchMoving = (e)=>{
        Math.abs((e.touches.currentX - startPosition)) > 5 ? setCanScroll(false) : null
    }
    return (
        <Box sx={{backgroundColor: "primary.main", mb: 5, py: {xs: 2, md: 8}}}>
            <Container disableGutters={true} sx={{display: "flex"}} maxWidth={'xl'}>
                <Swiper
                    touchStartPreventDefault={true}
                    touchStartForcePreventDefault={true}
                    freeMode={{
                        enabled : true ,
                        momentum : true ,
                    }}
                    modules={[FreeMode]}
                    direction={'horizontal'}
                    className="mySwiper"
                    slidesPerView={1.7}
                    touchAngle={30}
                    resistance={false}
                    // onMomentumBounce={}
                   /* onTouchMove={touchMoving}
                    onTouchEnd={()=>{
                        setStartPosition(null) ;
                        setCanScroll(true)
                    }}
                    onTouchStart={(e)=> {
                        setStartPosition(e.touches.startX)
                    }}*/
                    breakpoints={{
                        400: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 2.5
                        },
                        768: {
                            slidesPerView: 3.5
                        },
                        1000: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 5
                        }
                    }}
                >
                    <SwiperSlide style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: ' 0 40px'
                    }}>
                        <Typography>مشاهده همه</Typography>
                        <img style={{width: "100%"}} src={"https://www.digikala.com/statics/img/svg/amazing-typo.svg"}
                             alt=""/>
                    </SwiperSlide>
                    {
                        [
                            {
                                title: 'فلومتر مایع و گاز سایز 25 میلی متر مدل خطی LZB-VA تمام استیل',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png'
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png',
                                discountPercent: 10
                            },
                            {
                                title: 'asdd َُیشس یشسسی asdasd',
                                afterDiscountPrice: 9000000,
                                price: 10000000,
                                image: 'https://takback.soroushes.tk/media/Group_2073.png'
                            }

                        ].map((product, index) => {
                            return (
                                <SwiperSlide style={{height: "100%", paddingLeft: '20px', width: '150px !important'}}
                                             key={index}>
                                    <ProductPreviewCard title={product.title}
                                                        afterDiscountPrice={product.afterDiscountPrice}
                                                        price={product.price} image={product.image}
                                                        discountPercent={product.discountPercent}/>
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