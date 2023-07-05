import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide} from "swiper/react";
import BrandName from "./BrandName";
import {Box} from "@mui/material";
import {FreeMode, Navigation} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SortSection from "./SortSection";

const SectionSlider = ({sections , innerImage}) => {
    return (
        <Box>
            <Container disableGutters={true}>
                <SwiperCustomWrapper
                    swiperOptions={{
                        modules : [Navigation, FreeMode] ,
                        navigation : true
                    }}
                     spaceBetween={'15px'}>
                    {
                        sections.map((section) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 175 , padding : '50px 0'}}>
                                    {
                                        innerImage ?
                                            <BrandName name={section.name} image={section.image}/>:
                                            <SortSection image={section.image} title={section.name}/>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>
        </Box>

    )
}
export default SectionSlider;