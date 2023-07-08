import {Box, Container} from "@mui/material";
import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {FreeMode, Navigation} from "swiper";
import {SwiperSlide} from "swiper/react";
import OuterImageSection from "./OuterImageSection";
const CategorySlider = ({category})=>{
    return(
        <Box>
            <Container disableGutters={true}>
                <SwiperCustomWrapper
                    swiperOptions={{
                        modules: [Navigation, FreeMode],
                        navigation: true
                    }}
                    spaceBetween={'15px'}>
                    {
                        category.map((item) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 150, padding: '50px 0'}}>
                                    <OuterImageSection descriptionVariant={'subtitle2'} titleVariant={'h6'}  title={item.name} image={item.image}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>
        </Box>
    )
}
export default CategorySlider;