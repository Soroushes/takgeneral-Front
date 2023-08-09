import {Box} from "@mui/system";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs, Pagination} from "swiper";
import Image from "next/image";
import {useSelector} from "react-redux";
import testSlider from '../../assets/images/single-product-main-image.png' ;
import 'swiper/swiper.css' ;
import "swiper/css/thumbs";
import 'swiper/css/pagination';
const singleProductImage = ({mainImage}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {isMobile} = useSelector(state => state.deviceInfo);
    const otherImage = [
        testSlider,
        testSlider
    ]
    return (
        <Box sx={{ borderRadius: 2}}>
            <Box sx={{mb: 1, boxShadow: 1}}>
                <Swiper
                    navigation={true}
                    spaceBetween={10}
                    observer={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Thumbs, Pagination]}
                >
                    <SwiperSlide>
                        <Box sx={{width: "100%", textAlign: 'center'}}>
                            {
                                mainImage ?
                                    <Image width={300} height={300} style={{width: '100%', height: 'auto'}} alt={'test'}
                                           src={mainImage}/> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        otherImage?.map(() => {
                            return (
                                <SwiperSlide key={Math.random() * 1000}>
                                    <Box sx={{width: "100%", textAlign: 'center'}}>
                                        <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                               alt={'test'} src={testSlider}/>
                                    </Box>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Box>
            {
                !isMobile &&
                <Box>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={1}
                        slidesPerView={4}
                        watchSlidesProgress={true}
                        modules={[Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{borderRadius: "8px", padding: '5px'}}>
                            <Box sx={{width: "100%", textAlign: 'center', boxShadow: 1}}>
                                {
                                    mainImage ? <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                       alt={'test'} src={mainImage}/> : null
                                }
                            </Box>
                        </SwiperSlide>
                        {
                            otherImage?.map(() => {
                                return (
                                    <SwiperSlide style={{borderRadius: "8px", padding: '5px'}} key={Math.random() * 1000}>
                                        <Box sx={{width: "100%", textAlign: 'center', boxShadow: 1}}>
                                            <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={'test'} src={testSlider}/>
                                        </Box>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Box>
            }

        </Box>
    )
}
export default singleProductImage;