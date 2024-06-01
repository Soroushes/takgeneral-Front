import {Box} from "@mui/material";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination, Thumbs} from "swiper";
import Image from "next/image";
import 'swiper/swiper.min.css';
import "swiper/css/thumbs";
import 'swiper/css/pagination';

const singleProductImage = ({images, setShowImage}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainImage = images?.find((item) => item.is_main);
    console.log(images)
    return (
        <Box sx={{borderRadius: 2}}>
            <Box sx={{mb: 1}}>
                <Swiper
                    navigation={false}
                    spaceBetween={10}
                    observer={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Thumbs, Pagination]}
                >
                    <SwiperSlide onClick={() => {
                        if (mainImage?.image) {
                            setShowImage({image: mainImage?.image ?? '', show: true})
                        }
                    }}>
                        <Box sx={{width: "100%", textAlign: 'center', aspectRatio: '1/1'}}>
                            {
                                mainImage ?
                                    <Image alt={mainImage?.alt_text ?? mainImage.name} width={300} height={300} style={{width: '100%', height: 'auto'}}
                                           src={mainImage?.image ?? null}/> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        images?.map((item) => {
                            if (!item.is_main) {
                                return (
                                    <SwiperSlide key={item.id} onClick={
                                        ()=>{
                                            if(item?.image){

                                                setShowImage({image : item?.image , show:true})}}
                                    }>
                                        <Box sx={{width: "100%", textAlign: 'center'}}>
                                            <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={item.alt_text ?? item.name} src={item.image}/>
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
                        <Box sx={{width: "100%", textAlign: 'center'}}>
                            {
                                mainImage ? <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={mainImage?.alt_text ?? mainImage.name} src={mainImage.image ?? null}/> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        images?.map((item) => {
                            console.log(item)
                            if (!item.is_main) {
                                return (
                                    <SwiperSlide style={{borderRadius: "8px", padding: '5px'}}
                                                 key={item.image}>
                                        <Box sx={{width: "100%", textAlign: 'center'}}>
                                            <Image width={300} height={300} style={{width: '100%', height: 'auto'}}
                                                   alt={item?.alt_text ?? item.name} src={item.image}/>
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