import {useEffect, useState} from "react";
import WareHouseExist from "../components/icons/warehouseExistIcon.svg";
import FreeSent from "../components/icons/freeSent.svg";
import NotFakeWarranty from "../components/icons/notFakeWarranty.svg";
import SevenDaysBack from "../components/icons/sevenDaysBack.svg";

export const useProductServiceItems = ({freeSent , warranty , sevenDaysBack , wareHouseExist , notFakeWarranty , size})=>{
    const [items , setItems] = useState([]) ;
    useEffect(()=>{
        setItems(
            [
                {
                    title : "موجود در انبار" ,
                    icon : <WareHouseExist/> ,
                    show: wareHouseExist
                },
                {
                    title : "ارسال رایگان" ,
                    icon : <FreeSent/> ,
                    show : freeSent
                },
                {
                    title : "ضمانت اصالت کالا" ,
                    icon : <NotFakeWarranty/> ,
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