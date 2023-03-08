import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {
    Container
} from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
                clickable: true,
                dynamicBullets: true,

            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../test.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../test.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../test.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../test.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../test.png"/>
            </SwiperSlide>
        </Swiper>
    );
};
export default Slider;
