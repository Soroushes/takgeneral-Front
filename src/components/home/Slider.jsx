import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import {Box} from "@mui/system";
import Image from "next/image";

const Slider = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
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
                            <Box sx={{display : {xs : "none"  , position : "relative", md : "block" }, width :"100%" , aspectRatio : "4/1" , backgroundColor : "gray.lighter"}}><Image alt={''} fill src={slide.pc_image} /></Box>
                            <Box sx={{display : {md : "none"}  , position : "relative", width : "100%" , backgroundColor : "gray.lighter" , aspectRatio : "1.3/1"}}><Image alt={''} fill src={slide.mobile_image} /></Box>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};
export default Slider;
