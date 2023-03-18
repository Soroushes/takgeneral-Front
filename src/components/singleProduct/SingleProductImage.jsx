import { Box } from "@mui/system";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Paper from "@mui/material/Paper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const singleProductImage =()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <Paper elevation={8} sx={{p : 2 , borderRadius : 2}}>
               <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Box><img style={{ width: '100%'  , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-1.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-2.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-3.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-4.jpg" /></Box>
              </SwiperSlide>
            </Swiper>
            <Swiper
            //sx={{display : 'flex' , justifyContent : 'center'}}
              onSwiper={setThumbsSwiper}
              spaceBetween={1}
              slidesPerView={4}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-1.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-2.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-3.jpg" /></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box><img style={{ width: '100%' , borderRadius :4}} src="https://swiperjs.com/demos/images/nature-4.jpg" /></Box>
              </SwiperSlide>
            </Swiper>
        </Paper>
    )
}
export default singleProductImage;