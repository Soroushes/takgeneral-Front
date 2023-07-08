import { Box } from "@mui/system";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const singleProductImage =({mainImage , otherImage})=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <Box sx={{padding : '15px 15px 7px 15px' , borderRadius : 2}}>
            <Box sx={{mb: 1,  boxShadow : 1}}>
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Thumbs]}
                >
                    <SwiperSlide>
                        <Box sx={{width : "100%" , textAlign : 'center'}}>
                            {
                                mainImage ? <Image width={300} height={300} style={{width : '100%' , height : 'auto'}} alt={'test'} src={mainImage} /> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        otherImage?.map((item)=>{
                            return(
                                <SwiperSlide key={item.id}>
                                    <Box sx={{width : "100%", textAlign : 'center'}}>
                                        <Image width={300} height={300} style={{width : '100%' , height : 'auto'}} alt={'test'} src={''} />
                                    </Box>
                                </SwiperSlide>
                            )
                        },[])
                    }
                </Swiper>
            </Box>
            <Box>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={1}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{borderRadius : "8px"  , padding : '5px'}}>
                        <Box sx={{width : "100%" , textAlign : 'center' , boxShadow : 1}}>
                            {
                                mainImage ? <Image width={300} height={300} style={{width : '100%' , height : 'auto'}} alt={'test'} src={mainImage} /> : null
                            }
                        </Box>
                    </SwiperSlide>
                    {
                        otherImage?.map((item)=>{
                            return(
                                <SwiperSlide style={{borderRadius : "8px" , padding : '5px'}} key={item.id}>
                                    <Box sx={{width : "100%" , textAlign : 'center' , boxShadow : 1}}>
                                        <Image width={300} height={300} style={{width : '100%' , height : 'auto'}} alt={'test'} src={item.image} />
                                    </Box>
                                </SwiperSlide>
                            )
                        },[])
                    }
                </Swiper>
            </Box>
        </Box>
    )
}
export default singleProductImage;