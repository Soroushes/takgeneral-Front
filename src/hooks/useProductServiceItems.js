import {useEffect, useState} from "react";
import WareHouseExist from "../components/icons/warehouseExistIcon.svg";
import WareHouseExistSmall from "../components/icons/warehouseExistSmall.svg";
import FreeSent from "../components/icons/freeSent.svg";
import FreeSentSmall from "../components/icons/freeSentSmall.svg";
import NotFakeWarranty from "../components/icons/notFakeWarranty.svg";
import NotFakeWarrantySmall from "../components/icons/notFakeWarrantySmall.svg";
import SevenDaysBack from "../components/icons/sevenDaysBack.svg";

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
                    icon : <SevenDaysBack/> ,
                    show : warranty
                },
            ]
        )

    },[])
    return items
}