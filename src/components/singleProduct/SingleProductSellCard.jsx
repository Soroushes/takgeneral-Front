import {Box} from "@mui/system";
import WareHouseExist from '../icons/warehouseExistIcon.svg';
import SevenDaysBack  from '../icons/sevenDaysBack.svg';
import NotFakeWarranty from '../icons/notFakeWarranty.svg';
import FreeSent from '../icons/freeSent.svg';
import {Divider, Stack, Typography} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import PN from "persian-number";
import CartEditionButton from "../share/CartEditionButton";

const SingleProductSellCard = ({ available , freeSent , sevenDaysBack , price , discount , finalPrice , warranty , id})=>{
    const [productDetailItems , setProductDetailItems] = useState([]) ;
    const getProductDetailItems = ()=>{
        setProductDetailItems( [
            {
                title : "موجود در انبار" ,
                show : available ,
                icon : <WareHouseExist/> ,
            },
            {
                title : "ارسال رایگان" ,
                icon : <FreeSent/> ,
                show : freeSent
            },
            {
                title : "ضمانت اصالت کالا" ,
                icon : <NotFakeWarranty/> ,
                show : true
            },
            {
                title : "7 روز ضمانت برگشت کالا" ,
                icon : <SevenDaysBack/> ,
                show : sevenDaysBack
            },
            {
                title : warranty ,
                icon : <SevenDaysBack/> ,
                show : warranty
            },
        ])
    }
    useEffect(()=>{
        getProductDetailItems() ;
    },[])
    return (
        <Box sx={{px : 3 , pb : 3 , backgroundColor : "#EDEFF3" , borderRadius : 2  , display:'flex' , flexDirection :'column'  ,gap:2}}>
            <Box>
            {
                productDetailItems.map((cardData )=>{
                   return(
                       cardData.show ?
                       <Fragment key={cardData.title}>
                           <Typography variant={'body2'} sx={{display : "flex" , alignItems : "center" , gap : 2 , py : 2}}>{cardData.icon} {cardData.title} </Typography>
                           <Divider />
                       </Fragment> : null
                   )
                })
            }
            </Box>
            <Box sx={{display : "flex" , justifyContent : "end" , gap :4 , alignItems:'center' , mt : 3 , px : 2}}>
                <Typography sx={{fontWeight : "bold"}} variant={'body1'}>قیمت کالا</Typography>
                <Stack >
                    {
                        discount ?
                            <>
                                <Typography component={'span'} variant={'h6'} sx={{fontWeight : "bold"}} color={'secondary'}>
                                    {PN.convertEnToPe(PN.sliceNumber(finalPrice))}
                                    <Typography component={'span'} color={'secondary'} variant={'body2'}>تومان </Typography>
                                </Typography>
                                <Typography component={'span'} sx={{ display:'flex' , alignItems : "center"}} variant={'subtitle1'}>
                                    <Typography sx={{textDecoration : "line-through" }}>{PN.convertEnToPe(PN.sliceNumber(price))}</Typography>
                                    <Typography sx={{textDecoration : "line-through"}} component={'span'} variant={'caption'}>تومان </Typography>
                                    <Box sx={{backgroundColor : 'secondary.main' , color : 'white',fontSize:'12px' , ml : 1 , p:.25 ,px:.5 , textAlign:'center', borderRadius :1}}>{PN.convertEnToPe(discount)} % </Box>
                                </Typography>
                            </>
                            :
                            <Typography component={'span'} sx={{fontWeight : "bold"}} variant={'h6'} >
                                {PN.convertEnToPe(PN.sliceNumber(finalPrice))}
                                <Typography component={'span'} variant={'subtitle2'}>تومان </Typography>
                            </Typography>
                    }
                </Stack>
            </Box>
            <Box sx={{display : 'flex' , flexDirection :'column' , alignItems :'end'  , width:'100%'}}>
                <CartEditionButton id={id}/>
            </Box>
        </Box>
    )
}
export default SingleProductSellCard ;