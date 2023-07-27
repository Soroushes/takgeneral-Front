import { Container} from "@mui/material";
import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {FreeMode, Navigation} from "swiper";
import {SwiperSlide} from "swiper/react";
import OuterImageSection from "./OuterImageSection";
import pompSectionImage from '../../assets/images/pomp 1.png';

const CategorySlider = ({category , selfId})=>{
    return(
            <Container disableGutters={true} sx={{mt:3}}>
                <SwiperCustomWrapper
                    swiperOptions={{
                        modules: [Navigation, FreeMode],
                        navigation: true
                    }}
                    spaceBetween={'15px'}>
                    {
                        category?.map((item) => {
                            console.log(+selfId , item.id);
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 150, padding: '50px 2px'}}>
                                    <OuterImageSection isActive={+selfId === item.id} href={'cat/'+item.id} descriptionVariant={'subtitle2'} titleVariant={'h6'} title={item.name} image={pompSectionImage}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>
    )
}
export default CategorySlider;