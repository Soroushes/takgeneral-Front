import {Box} from "@mui/system";
import WareHouseExist from '../icons/warehouseExistIcon.svg';
import SevenDaysBack  from '../icons/sevenDaysBack.svg';
import NotFakeWarranty from '../icons/notFakeWarranty.svg';
import FreeSent from '../icons/freeSent.svg';
import {Divider, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import BasketIcon from "../icons/basketIcon";
import PN from "persian-number";
const SingleProductSellCard = ()=>{
    const [productDetailItems , setProductDetailItems] = useState([]) ;
    const getProductDetailItems = ()=>{
        setProductDetailItems( [
            {
                title : "موجود در انبار" ,
                icon : <WareHouseExist/> ,
            },
            {
                title : "ارسال رایگان" ,
                icon : <FreeSent/> ,
            },
            {
                title : "ضمانت اصالت کالا" ,
                icon : <NotFakeWarranty/> ,
            },
            {
                title : "7 روز ضمانت برگشت کالا" ,
                icon : <SevenDaysBack/> ,
            },
        ])
    }
    useEffect(()=>{
        getProductDetailItems() ;
    },[])
    return (
        <Box sx={{px : 3 , pb : 3 , backgroundColor : "#EDEFF3" , borderRadius : 2}}>
            {
                productDetailItems.map((cardData , index)=>{
                   return(
                       <>
                           <Typography key={index} sx={{display : "flex" , alignItems : "center" , gap : 2 , py : 2}}>{cardData.icon} {cardData.title} </Typography>
                           <Divider />
                       </>
                   )
                })
            }
            <Box sx={{display : "flex" , justifyContent : "space-between" , mt : 3 , px : 2}}>
                <Typography sx={{fontWeight : "bold"}} variant={'body1'}>قیمت کالا</Typography>
                <Stack gap={1}>
                    {
                        'aad' ?
                            <>
                                <Typography component={'span'} variant={'h6'} sx={{fontWeight : "bold"}} color={'secondary'}>
                                    {PN.convertEnToPe(PN.sliceNumber(15220000))}
                                    <Typography component={'span'} color={'secondary'} variant={'body2'}>تومان </Typography>
                                </Typography>
                                <Typography component={'span'} sx={{textDecoration : "line-through"}} variant={'subtitle1'}>
                                    {PN.convertEnToPe(PN.sliceNumber(15220000))}
                                    <Typography component={'span'} variant={'body2'}>تومان </Typography>
                                </Typography>
                            </>
                            :
                            <Typography component={'span'} sx={{fontWeight : "bold"}} variant={'h6'} >
                                {PN.convertEnToPe(PN.sliceNumber(15220000))}
                                <Typography component={'span'} variant={'body2'}>تومان </Typography>
                            </Typography>
                    }
                </Stack>
            </Box>
            <LoadingButton fullWidth sx={{p : 1.5 , borderRadius : 3 , mt : 2 , display : "flex" , gap : 1 , justifyContent : 'center' , alignItems : "center"}} variant={'contained'} color={'secondary'}><BasketIcon/>  افزودن به سبد خرید </LoadingButton>
        </Box>
    )
}
export default SingleProductSellCard ;