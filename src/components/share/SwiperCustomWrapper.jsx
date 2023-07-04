import {Swiper} from "swiper/react";
import {FreeMode, Navigation} from "swiper";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import 'swiper/css/navigation';

const SwiperCustomWrapper = ({swiperOptions , children , spaceBetween})=>{
    const {isMobile} = useSelector(state => state.deviceInfo) ;
    return (
        <>
            {!isMobile ? (
                <Swiper
                    modules={[FreeMode , Navigation]}
                    slidesPerView={'auto'}
                    navigation={true}
                    direction={'horizontal'}
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