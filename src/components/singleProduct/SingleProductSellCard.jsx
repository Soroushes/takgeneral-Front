import {Box} from "@mui/system";
import WareHouseExist from '../icons/warehouseExistIcon.svg';
import SevenDaysBack  from '../icons/sevenDaysBack.svg';
import NotFakeWarranty from '../icons/notFakeWarranty.svg';
import FreeSent from '../icons/freeSent.svg';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
const SingleProductSellCard = ()=>{
    const [items , setItems] = useState([]) ;
    const getItems = ()=>{
        setItems( [
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
        getItems() ;
    },[])
    return (
        <Box sx={{px : 3 , height : 500 , backgroundColor : "#EDEFF3" , borderRadius : 2}}>
            {
                items.map((cardData , index)=>{
                   return(
                       <Typography key={index} sx={{display : "flex" , alignItems : "center" , gap : 2 , py : 2 , borderBottom : '1px solid #ADADAD'}}>{cardData.icon} {cardData.title} </Typography>
                   )
                })
            }

        </Box>
    )
}
export default SingleProductSellCard ;