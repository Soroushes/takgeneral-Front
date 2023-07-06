'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoryBanner from '../../assets/images/categoryBanner.png'
import "swiper/css";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import Image from "next/image";
const Slider = () => {
    const {desktopHeaderHeight , mobileHeaderHeight , isMobile} = useSelector(state => state.deviceInfo);
    return (
        <Box sx={{height : 400}}>
            <Box sx={{top : isMobile ? mobileHeaderHeight : desktopHeaderHeight , height : '410px'}} right={0} left={0} position={'fixed'} zIndex={1}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    style={{height : '100%'}}
                >
                    <SwiperSlide>
                        <Image fill src={categoryBanner} />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};
export default Slider;
