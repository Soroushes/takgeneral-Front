import {Swiper} from "swiper/react";
import {FreeMode} from "swiper";
import {Box} from "@mui/material";
import 'swiper/swiper.css';
import {useRef} from "react";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const SwiperCustomWrapper = ({swiperOptions, children, spaceBetween, navigation = true , sliderRef = null}) => {
    const swiperRef = useRef();
    return (
        <>
            <Box display={{md: 'flex', xs: 'none'}} alignItems={'center'}>
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
                             '&:hover': {backgroundColor: 'secondary.main', color: 'white'}
                         }} onClick={() => swiperRef.current?.slidePrev()}><ChevronRightRoundedIcon/></Box>
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
                             '&:hover': {backgroundColor: 'secondary.main', color: 'white'}
                         }} onClick={() => swiperRef.current?.slideNext()}><ChevronLeftRoundedIcon/></Box>
                }
            </Box>
            <Box display={{xs: 'flex', md: 'none'}} ref={sliderRef} className={'hide-scroll-bar'} sx={{
                flexWrap: 'nowrap',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                gap: spaceBetween,
                overflowY: 'hidden',
                alignItems: 'center',
            }}>
                {children}
            </Box>
        </>
    )
}
export default SwiperCustomWrapper;