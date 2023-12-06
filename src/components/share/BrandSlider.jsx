import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide} from "swiper/react";
import InnerImageSection from "./InnerImageSection";

const BrandSlider = ({brands = []}) => {
    return (
            <Container sx={{px:{md:0 , xs:2}}} disableGutters={true}>
                <SwiperCustomWrapper
                     spaceBetween={'15px'}>
                    {
                        brands?.map((brand) => {
                            return (
                                <SwiperSlide key={brand.name} style={ {width: 160 , padding : '50px 0px' }}>
                                    <InnerImageSection href={'/brand/'+ brand.url} name={brand.name} image={brand.logo}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>

    )
}
export default BrandSlider;