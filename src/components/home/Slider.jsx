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
    <Container fluid sx={{textAlign: "center", pt: 2}}>
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
          <img src="../test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../test.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
export default Slider;
