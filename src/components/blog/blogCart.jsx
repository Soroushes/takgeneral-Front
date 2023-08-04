import {Box, Typography} from "@mui/material";
import Image from "next/image";
import ArrowIcon from '../../assets/icons/single-product/arrow-left.svg';
import ClockIcon from '../../assets/icons/share/Icon.svg';
const BlogCart = ({title , content , image})=>{
    return(
        <Box sx={{p:2, borderRadius:2 , boxShadow:1}}>
            <Box sx={{textAlign:'center' , width:'100%' , borderRadius:7}}>
                <Image width={590} height={290} style={{width:'100%' , height:'auto', borderRadius:7}} src={image} alt={''}/>
            </Box>
            <Typography fontWeight={'bold'} sx={{my:2}}>{title}</Typography>
            <Typography variant={'body2'}>{content}</Typography>
            <Box sx={{display: 'flex' , px:.5 , mt:2, justifyContent: 'space-between'}}>
                <Box display={'flex'} alignItems={'center'}gap={.5}>
                    <ClockIcon/>
                    <Typography variant={'subtitle1'} sx={{textAlign:'center'}}>۱۴۰۲/۰۲/۱۷</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={.5}>
                    <Typography color={'primary'} variant={'subtitle1'}>ادامه مطلب</Typography>
                    <ArrowIcon/>
                </Box>
            </Box>
        </Box>
    )
}
export default BlogCart;