import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import {Box} from "@mui/system";

const Slider = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{
                clickable: true,
                dynamicBullets: true,

            }}
        >
            {
                slides?.map((slide)=>{
                    return(
                        <SwiperSlide key={slide.id}>
                            <Box sx={{display : {xs : "none" , md : "block"}}}><img style={{width : "100%" , display : "block"}} src={slide.pc_image} /></Box>
                            <Box sx={{display : {md : "none"}}}><img style={{width : "100%" , display : "block"}} src={slide.mobile_image} /></Box>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};
export default Slider;
