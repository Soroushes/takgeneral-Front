'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
const Slider = ({slides}) => {
    const {desktopHeaderHeight , mobileHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <Box sx={{aspectRatio: {xs:'1.3/1' , md:'4.5/1'}}}>
            <Box sx={{top : {xs: mobileHeaderHeight , md: desktopHeaderHeight}   , aspectRatio: {xs:'1.3/1' , md:'4.5/1'} , width : '100%'}} left={0} right={0} position={'fixed'} zIndex={1}>
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
                                                <Image priority fill src={slide.image}  alt={slide.alt}/>
                                            </Link>
                                        </Box>
                                        <Box sx={{aspectRatio: '1.3/1' , display:{md:'none' , xs:'block'}}}>
                                            <Link href={slide.link_url ?? '/'}>
                                                <Image priority fill src={slide.mobile_image}  alt={slide.alt}/>
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
