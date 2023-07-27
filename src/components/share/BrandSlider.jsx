import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide} from "swiper/react";
import InnerImageSection from "./InnerImageSection";
import {FreeMode, Navigation} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import brandImage from '../../assets/images/pentax (1).png';

const BrandSlider = ({brands}) => {
    return (
            <Container disableGutters={true} sx={{px:2}}>
                <SwiperCustomWrapper
                    swiperOptions={{
                        modules : [Navigation, FreeMode] ,
                        navigation : true
                    }}
                     spaceBetween={'15px'}>
                    {
                        brands.map((brand) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 160 , padding : '50px 0'}}>
                                    <InnerImageSection href={'/brand/'+ brand.brand__id} name={brand.brand__name} image={brandImage}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>

    )
}
export default BrandSlider;