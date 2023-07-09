import {Swiper} from "swiper/react";
import {FreeMode} from "swiper";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import 'swiper/swiper.css' ;
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
                <Box className={'hide-scroll-bar'} sx={{display : 'flex' , flexWrap : 'nowrap' , overflowX : 'auto' , scrollBehavior : 'smooth' , gap : spaceBetween , overflowY : 'hidden' , alignItems : 'center'}}>
                    {children}
                </Box>
            )}
        </>
    )
}
export default SwiperCustomWrapper ;