'use client'
import {Container, Typography , Box} from "@mui/material";
import {useSelector} from "react-redux";
import ProductPreviewCard from "../share/ProductPreviewCard";
import {BASE_URL} from "@/data/urls";

const dummyData = [
    {
        title: 'فلومتر مایع و گاز سایز 25 میلی متر مدل',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
        discountPercent: 10
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 9000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
    },
    {
        title: 'asdd َُیشس یشسسی asdasd',
        afterDiscountPrice: 10000000,
        price: 10000000,
        image: `${BASE_URL}media/Group_2073.png`,
    }

]
const DifferentProductScaleSlider = () => {
    const {isMobile} = useSelector(state => state.deviceInfo);
    const itemNumbers = isMobile ? 3 : 5 ;
    return (
        <Container disableGutters={true} sx={{
            backgroundImage: 'linear-gradient(to left, #1B09F9 , #27E1BC)',
            my: 8,
            pt: 4,
            pb: 6,
            borderRadius: '4px 4px 25px 25px',
            position: 'relative'
        }}>
            <Box sx={{width: {md: '90%'}, mx: 'auto'}}>
                <Box sx={{mb: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2}}>
                    <Typography sx={{wordSpacing: '3px'}} textAlign={'center'} variant={'h3'} fontWeight={'bold'} color={'white'}>پیشنهاد ویژه تک جنرال</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    {dummyData.map((item , index) => {
                        if (index > itemNumbers-1) return ;
                        const scaleNumber = Math.abs(-(itemNumbers-1)/2 + index) ;
                        return (
                            <Box key={item.title} sx={{width: {xs : 160 - scaleNumber*30 ,md : 250 - scaleNumber*40}, position : 'relative' , zIndex : 10-scaleNumber , mx:  -.7}}>
                                <ProductPreviewCard
                                    sx={{border : '1px solid #fff'}}
                                    shadow={0}
                                    image={item.image}
                                    id={item.title}
                                    title={item.title}
                                    price={item.price}
                                    afterDiscountPrice={item.afterDiscountPrice}
                                    discountPercent={item.discountPercent}
                                />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}
export default DifferentProductScaleSlider;