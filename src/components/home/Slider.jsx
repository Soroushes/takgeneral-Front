'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
const Slider = ({slides}) => {
    const {desktopHeaderHeight , mobileHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <Box sx={{height : 400}}>
            <Box sx={{top : {xs: mobileHeaderHeight , md: desktopHeaderHeight}   , height : '410px' , width : '100%'}} left={0} right={0} position={'fixed'} zIndex={1}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    style={{height : '100%'}}
                >
                    {
                        slides.map((slide)=>{
                            return(
                                <SwiperSlide key={slide.id}>
                                        <Box sx={{aspectRatio: '4.5/1', display:{md:'block' , xs:'none'}}}>
                                            <Link href={slide.link_url ?? '/'}>
                                                <Image fill src={slide.image}  alt={slide.alt}/>
                                            </Link>
                                        </Box>
                                        <Box sx={{aspectRatio: '1.5/1' , display:{md:'none' , xs:'block'}}}>
                                            <Link href={slide.link_url ?? '/'}>
                                                <Image fill src={slide.mobile_image}  alt={slide.alt}/>
                                            </Link>
                                        </Box>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Box>
        </Box>
    );
};
export default Slider;
