import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {
    Container
} from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {
                slides.map((slide)=>{
                    return(
                        <SwiperSlide key={slide.id}>
                            <img style={{ width: "100%" }} src={slide.pc_image } />
                        </SwiperSlide>
                    )
                })
            }
            {/* <SwiperSlide>
                <img style={{width: "100%"}} src="../sliderTest.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../sliderTest.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../sliderTest.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../sliderTest.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: "100%"}} src="../sliderTest.png"/>
            </SwiperSlide> */}
        </Swiper>
    );
};
export default Slider;
