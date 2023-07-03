import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";

const SwiperCustomWrapper = ({swiperOptions , children , spaceBetween})=>{
    const {isMobile} = useSelector(state => state.deviceInfo) ;
    return (
        <>
            {!isMobile ? (
                <Swiper
                    modules={[FreeMode]}
                    slidesPerView={'auto'}
                    {...swiperOptions}
                    spaceBetween={spaceBetween}
                >
                    {children}
                </Swiper>
            ) : (
                <Box sx={{display : 'flex' , flexWrap : 'nowrap' , overflowX : 'auto' , scrollBehavior : 'smooth' , gap : spaceBetween}}>
                    {children}
                </Box>
            )}
        </>
    )
}
export default SwiperCustomWrapper ;