import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {Container} from "@mui/material";
import {SwiperSlide } from "swiper/react";
import BrandName from "./BrandName";
import {Box} from "@mui/material";
import {Navigation} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const BrandSlider = ({brands})=>{
    return(
        <Box>
            <Container disableGutters={true}>
                <SwiperCustomWrapper modules={[Navigation]} navigation={true} spaceBetween={15}>
                    {
                        brands.map((brand)=>{
                            return(
                                <SwiperSlide key={Math.random()*1000} style={{width : 175 }}>
                                    <BrandName name={brand.name} image={brand.image}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>
        </Box>

    )
}
export default  BrandSlider;