import {Box} from "@mui/material";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination, Thumbs} from "swiper";
import Image from "next/image";
import 'swiper/swiper.css';
import "swiper/css/thumbs";
import 'swiper/css/pagination';

const singleProductImage = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainImage = images.find((item)=>item.is_main);
    return (
        <Box sx={{borderRadius: 2}}>
            <Box sx={{mb: 1, boxShadow: 1}}>
                <Swiper
                    navigation={false}
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
                                           src={mainImage.image ?? null}/> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        images?.map((item) => {
                            if(!item.is_main){
                                return (
                                    <SwiperSlide key={Math.random() * 1000}>
                                        <Box sx={{width: "100%", textAlign: 'center'}}>
                                            <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={'test'} src={item.image}/>
                                        </Box>
                                    </SwiperSlide>
                                )
                            }
                        })
                    }
                </Swiper>
            </Box>
            <Box>
                <Swiper
                    navigation={false}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={1}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{borderRadius: "8px", padding: '5px'}}>
                        <Box sx={{width: "100%", textAlign: 'center', boxShadow: 1}}>
                            {
                                mainImage ? <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={'test'} src={mainImage.image ?? null}/> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        images?.map((item) => {
                            if(!item.is_main) {
                                return (
                                    <SwiperSlide style={{borderRadius: "8px", padding: '5px'}} key={Math.random() * 1000}>
                                        <Box sx={{width: "100%", textAlign: 'center', boxShadow: 1}}>
                                            <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={'test'} src={item.image}/>
                                        </Box>
                                    </SwiperSlide>
                                )
                            }
                        })
                    }
                </Swiper>
            </Box>
        </Box>
    )
}
export default singleProductImage;