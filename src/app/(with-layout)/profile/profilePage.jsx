'use client';
import {Typography , Box} from "@mui/material";
import CurrentOrder from '../../../assets/icons/profile/currentOrder.svg';
import DeliveredOrder from '../../../assets/icons/profile/deliveredOrder.svg';
import CanceledOrder from '../../../assets/icons/profile/canceledOrder.svg';
import OrderCard from "@/components/profile/OrderCard";
const ProfilePage = ()=>{
    return (
        <Box>
            <Box mb={2} sx={{border:'1px solid #eee' , borderRadius:2 , p:2}} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} flexDirection={{md: 'row', xs: 'column'}} gap={1} alignItems={'center'} justifyContent={{md:'space-between' , xs:'start'}}>
                    <CurrentOrder/>
                    <Typography component={'p'} variant={'subtitle1'} textAlign={'center'}>سفارش هاس جاری (0)</Typography>
                </Box>
                <Box display={'flex'} flexDirection={{md: 'row', xs: 'column'}} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                    <DeliveredOrder/>
                    <Typography component={'p'} textAlign={'center'} variant={'subtitle1'}>تحویل داده شده (0)</Typography>
                </Box>
                <Box display={'flex'} flexDirection={{md: 'row', xs: 'column'}} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                    <CanceledOrder/>
                    <Typography component={'p'} variant={'subtitle1'}  textAlign={'center'}>لغو شده (0)</Typography>
                </Box>
            </Box>
            <OrderCard/>
        </Box>
    )
}
export default ProfilePage;