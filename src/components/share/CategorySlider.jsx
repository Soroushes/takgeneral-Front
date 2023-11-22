import {Box, Container} from "@mui/material";
import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {SwiperSlide} from "swiper/react";
import OuterImageSection from "./OuterImageSection";
import Link from "next/link";

const CategorySlider = ({category , mainCategory})=>{
    const activeSlideIndex = category.findIndex((item)=>mainCategory.url === item.url);
    return(
            <Container disableGutters={true} >
                <SwiperCustomWrapper
                    swiperOptions={{initialSlide : activeSlideIndex}}
                    spaceBetween={'15px'}
                    useSwiper={true}
                >
                    {
                        category?.map((item) => {
                            return (
                                <SwiperSlide key={item.url} style={{width: 150, padding: '50px 2px'}}>
                                    <Link scroll={false} href={'/category/'+item.url}>
                                        <Box>
                                            <OuterImageSection isActive={mainCategory.url === item.url} descriptionVariant={'subtitle2'} titleVariant={'h6'} title={item.name} image={item.image}/>
                                        </Box>
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