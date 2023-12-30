import {domainName} from "@/data/urls";
import IndividualPage from "@/app/(with-layout)/profile/individual-profile/IndividualPage";
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
export default function Page(){
    return(<IndividualPage/>)
}