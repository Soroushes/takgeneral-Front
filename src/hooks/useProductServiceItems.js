import {useEffect, useState} from "react";
import WareHouseExist from "../assets/icons/warehouseExistIcon.svg";
import WareHouseExistSmall from "../assets/icons/warehouseExistSmall.svg";
import FreeSent from "../assets/icons/freeSent.svg";
import FreeSentSmall from "../assets/icons/freeSentSmall.svg";
import NotFakeWarranty from "../assets/icons/notFakeWarranty.svg";
import Warranty from "../assets/icons/warranty.svg";
import NotFakeWarrantySmall from "../assets/icons/notFakeWarrantySmall.svg";
import SevenDaysBack from "../assets/icons/sevenDaysBack.svg";

export const useProductServiceItems = ({freeSent , warranty , sevenDaysBack , wareHouseExist , notFakeWarranty , smallSize})=>{
    const [items , setItems] = useState([]) ;
    useEffect(()=>{
        setItems(
            [
                {
                    title : "موجود در انبار" ,
                    icon : smallSize ? <WareHouseExistSmall/> : <WareHouseExist/> ,
                    show: wareHouseExist
                },
                {
                    title : "ارسال رایگان" ,
                    icon : smallSize ? <FreeSentSmall/> : <FreeSent/> ,
                    show : freeSent
                },
                {
                    title : "ضمانت اصالت کالا" ,
                    icon : smallSize ? <NotFakeWarrantySmall/> : <NotFakeWarranty/> ,
                    show : notFakeWarranty
                },
                {
                    title : "7 روز ضمانت برگشت کالا" ,
                    icon : <SevenDaysBack/> ,
                    show: sevenDaysBack
                },
                {
                    title : warranty ,
                    icon : <Warranty/> ,
                    show : warranty
                },
            ]
        )

    },[])
    return items
}