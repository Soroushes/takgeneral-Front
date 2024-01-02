import {domainName} from "@/data/urls";
import dynamic from "next/dynamic";
export const metadata = {
    title : ' پروفایل | تک جنرال',
    alternates: {
        canonical: `${domainName}/profile`
    },
    openGraph:{
        title : ' پروفایل | تک جنرال',
    },
    robots : {
        index : false ,
        follow : false,
        // googleBot : {
        //     index : false ,
        //     follow : false ,
        // }
    }
}
const AddressPage = dynamic(()=>import('@/app/(with-layout)/profile/address/addressPage'),  {ssr : false})
export default function Page(){
    return(<AddressPage/>)
}