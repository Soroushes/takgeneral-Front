import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide} from "swiper/react";
import InnerImageSection from "./InnerImageSection";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import brandImage from '../../assets/images/pentax (1).png';

const BrandSlider = ({brands = []}) => {
    return (
            <Container disableGutters={true}>
                <SwiperCustomWrapper
                     spaceBetween={'15px'}>
                    {
                        brands.map((brand) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={ {width: 160 , padding : '50px 0px' }}>
                                    <InnerImageSection href={'/product_brand/'+ brand.brand__id} name={brand.brand__name} image={brandImage}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>

    )
}
export default BrandSlider;