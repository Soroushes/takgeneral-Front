import { Container} from "@mui/material";
import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {SwiperSlide} from "swiper/react";
import OuterImageSection from "./OuterImageSection";
import Link from "next/link";

const CategorySlider = ({category , selfId})=>{
    return(
            <Container disableGutters={true} >
                <SwiperCustomWrapper
                    spaceBetween={'15px'}>
                    {
                        category?.map((item) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 150, padding: '50px 2px'}}>
                                    <Link scroll={false} href={'/category/'+item.url}>
                                        <OuterImageSection isActive={+selfId === item.id} descriptionVariant={'subtitle2'} titleVariant={'h6'} title={item.name} image={item.image}/>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </SwiperCustomWrapper>
            </Container>
    )
}
export default CategorySlider;