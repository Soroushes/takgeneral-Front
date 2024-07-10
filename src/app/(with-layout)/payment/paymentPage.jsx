'use client'
import {Box, Button, Typography} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {useRouter, useSearchParams} from "next/navigation";
import {urls} from "@/data/urls";
const PaymentPage = ()=>{
    const searchParams = useSearchParams();
    const router = useRouter();
    const payment = searchParams.get('payment-status');
    return(
        payment === 'true' ?
        <Box display={'flex'} justifyContent={'center'}>
            <Box sx={{borderRadius:3 , border:'3px solid' , borderColor:'success.main' ,p:3,mt:4}} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                    <CheckCircleOutlineIcon sx={{width:'100px', height:'100px'}} color={'success'}/>
                    <Typography>پرداخت شما با موفقیت انجام شد</Typography>
                <Button sx={{mt:3}} color={'success'} variant={'outlined'} onClick={()=>{router.push(urls.cart)}}>سبد خرید</Button>

            </Box>
        </Box>:
            <Box display={'flex'} justifyContent={'center'}>
                <Box sx={{borderRadius:3 , border:'3px solid' , borderColor:'error.main' ,p:3,mt:4}} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                    <ErrorOutlineOutlinedIcon sx={{width:'100px', height:'100px'}} color={'error'}/>
                    <Typography>پرداخت شما ناموفق بود</Typography>
                    <Button sx={{mt:3}} color={'error'} variant={'outlined'} onClick={()=>{router.push(urls.cart)}}>سبد خرید</Button>
                </Box>
            </Box>

    )
}
export default PaymentPage;