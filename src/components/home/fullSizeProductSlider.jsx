import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation} from "swiper";
import {Box} from "@mui/system";
import {Container, Typography} from "@mui/material";
import ProductPreviewCard from "../share/ProductPreviewCard";

const FullSizeProductSlider = ()=>{
    return(
        <Box sx={{backgroundColor : "primary.main" , mb : 5 , py : 8 }}>
            <Container maxWidth={'xl'}>
                <Swiper
                    spaceBetween={20}
                    observer={true}
                    observeParents={true}
                    resizeObserver={true}
                    updateOnWindowResize={true}
                    navigation={true}
                    freeMode={true}
                    className="mySwiper"
                    slidesPerView={1.5}
                    modules={[FreeMode , Navigation]}
                    breakpoints={{
                        400: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 2.5
                        },
                        768: {
                            slidesPerView: 3.5
                        },
                        1000 : {
                            slidesPerView : 4
                        },
                        1200: {
                            slidesPerView: 5
                        }
                    }}
                >
                    <SwiperSlide style={{display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column" , height : "100%"}}>
                        <img className={'mt-2 w-100'} src={"https://www.digikala.com/statics/img/svg/amazing-typo.svg"} alt=""/>
                        <Typography className={'text-center m-0 text-white'}>مشاهده همه</Typography>
                    </SwiperSlide>
                    {
                        [
                            {title : 'asdd َُیشس یشسسی asdasdasa ssad sadasd asd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'},
                            {title : 'asdd َُیشس یشسسی asdasd' , afterDiscountPrice :215222525  , price : 54353435 , image : 'https://takback.soroushes.tk/media/Group_2073.png'}

                        ].map((product , index)=>{
                            return(
                                <SwiperSlide style={{height : "100%"}} key={index}>
                                    <ProductPreviewCard title={product.title} afterDiscountPrice={product.afterDiscountPrice} price={product.price} image={product.image}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </Box>
    )
}
export default FullSizeProductSlider ;