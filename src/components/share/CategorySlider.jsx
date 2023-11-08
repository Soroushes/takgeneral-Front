import {Box, Container} from "@mui/material";
import SwiperCustomWrapper from "./SwiperCustomWrapper";
import {SwiperSlide} from "swiper/react";
import OuterImageSection from "./OuterImageSection";
import Link from "next/link";
import {useEffect, useRef} from "react";

const CategorySlider = ({category , mainCategory})=>{
    const slideRef = useRef();
    const sliderRef = useRef();
    const activeSlideIndex = category.findIndex((item)=>mainCategory.url === item.url);
    // useEffect(()=>{
    //     console.log(sliderRef)
    //     sliderRef?.current?.scroll(100 , 0)
    // },[])
    return(
            <Container disableGutters={true} >
                <SwiperCustomWrapper
                    sliderRef={sliderRef}
                    swiperOptions={{initialSlide : activeSlideIndex}}
                    spaceBetween={'15px'}>
                    {
                        category?.map((item) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000} style={{width: 150, padding: '50px 2px'}}>
                                    <Link scroll={false} href={'/category/'+item.url}>
                                        <Box ref={mainCategory.url === item.url ? slideRef : null}>
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