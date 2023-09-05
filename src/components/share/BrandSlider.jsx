import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide} from "swiper/react";
import InnerImageSection from "./InnerImageSection";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BrandSlider = ({brands = []}) => {
    return (
            <Container disableGutters={true}>
                <SwiperCustomWrapper
                     spaceBetween={'15px'}>
                    {
                        brands?.map((brand) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={ {width: 160 , padding : '50px 0px' }}>
                                    <InnerImageSection href={'/product_brand/'+ brand.id} name={brand.name} image={brand.logo}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>

    )
}
export default BrandSlider;