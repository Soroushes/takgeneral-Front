'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoryBanner from '../../assets/images/home/home-main-banner.png'
import "swiper/css";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import Image from "next/image";
const Slider = ({slides}) => {
    console.log(slides)
    const {desktopHeaderHeight , mobileHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <Box sx={{height : 400}}>
            <Box sx={{top : {xs: mobileHeaderHeight , md: desktopHeaderHeight}   , height : '410px' , width : '100%'}} left={0} right={0} position={'fixed'} zIndex={1}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    style={{height : '100%'}}
                >
                    <SwiperSlide>
                        <Image fill src={categoryBanner}  alt={''}/>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};
export default Slider;
