import {Swiper} from "swiper/react";
import {FreeMode} from "swiper";
import {Box} from "@mui/system";
import {useSelector} from "react-redux";
import 'swiper/swiper.css';
import {useRef} from "react";
import ArrowLeft from "../../assets/icons/share/arrow-left.svg";
import ArrowRight from "../../assets/icons/share/arrow-right.svg";

const SwiperCustomWrapper = ({swiperOptions, children, spaceBetween, navigation = true}) => {
    const {isMobile} = useSelector(state => state.deviceInfo);
    const swiperRef = useRef();
    return (
        <>
            {!isMobile ? (
                <Box display={'flex'} alignItems={'center'}>
                    {
                        navigation &&
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}
                             sx={{
                                 backgroundColor: 'white',
                                 boxShadow: 3,
                                 mr: '-10px',
                                 height: 40,
                                 width: 40,
                                 borderRadius: 2,
                                 transition: 'all .3s',
                                 position: 'relative',
                                 zIndex: '3',
                                 '&:hover': {backgroundColor: 'secondary.main'}
                             }} onClick={() => swiperRef.current?.slidePrev()}><ArrowRight/></Box>
                    }
                    <Swiper
                        centerInsufficientSlides={false}
                        centeredSlides={false}
                        centeredSlidesBounds={false}
                        style={{width: '100%'}}
                        modules={[FreeMode]}
                        slidesPerView={'auto'}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={false}
                        {...swiperOptions}
                        spaceBetween={spaceBetween}
                    >
                        {children}
                    </Swiper>
                    {
                        navigation &&
                        <Box display={'flex'} className={''} alignItems={'center'} justifyContent={'center'}
                             sx={{
                                 backgroundColor: 'white',
                                 aspectRatio: "1/1",
                                 boxShadow: 3,
                                 ml: '-10px',
                                 height: 40,
                                 width: 40,
                                 borderRadius: 2,
                                 transition: 'all .3s',
                                 position: 'relative',
                                 zIndex: '3',
                                 '&:hover': {backgroundColor: 'secondary.main'}
                             }} onClick={() => swiperRef.current?.slideNext()}><ArrowLeft/>
                        </Box>
                    }
                </Box>
            ) : (
                <Box className={'hide-scroll-bar'} sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: spaceBetween,
                    overflowY: 'hidden',
                    alignItems: 'center'
                }}>
                    {children}
                </Box>
            )}
        </>
    )
}
export default SwiperCustomWrapper;