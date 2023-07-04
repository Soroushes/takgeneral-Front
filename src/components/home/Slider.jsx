'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoryBanner from '../../assets/images/categoryBanner.png'
import "swiper/css";
import {Box} from "@mui/system";
const Slider = () => {
    console.log(categoryBanner)
    return (
        <Box height={300}>
            <Box right={0} left={0} position={'fixed'} top={0} zIndex={1}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide>
                        <Box sx={{
                            background : `url(${categoryBanner.src})` ,
                            height : 320 ,
                            zIndex : 0

                        }}/>
                    </SwiperSlide>
                    {/*{*/}
                    {/*    slides?.map((slide)=>{*/}
                    {/*        return(*/}
                    {/*            <SwiperSlide key={slide.id}>*/}
                    {/*                <Box sx={{display : {xs : "none"  , position : "relative", md : "block" }, width :"100%" , aspectRatio : "24/5" , backgroundColor : "gray.lighter"}}><Image alt={''} fill src={slide.pc_image} /></Box>*/}
                    {/*                <Box sx={{display : {md : "none"}  , position : "relative", width : "100%" , backgroundColor : "gray.lighter" , aspectRatio : "1.3/1"}}><Image alt={''} fill src={slide.mobile_image} /></Box>*/}
                    {/*            </SwiperSlide>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </Swiper>
            </Box>
        </Box>
    );
};
export default Slider;
