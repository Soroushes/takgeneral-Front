'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoryBanner from '../../assets/images/categoryBanner.png'
import "swiper/css";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
const Slider = () => {
    const {desktopHeaderHeight , mobileHeaderHeight , isMobile} = useSelector(state => state.deviceInfo);
    return (
        <Box height={300}>
            <Box sx={{top : isMobile ? mobileHeaderHeight : desktopHeaderHeight}} right={0} left={0} position={'fixed'} zIndex={1}>
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
                </Swiper>
            </Box>
        </Box>
    );
};
export default Slider;
