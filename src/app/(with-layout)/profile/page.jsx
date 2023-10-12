import ProfilePage from "@/app/(with-layout)/profile/profilePage";
import {domainName} from "@/data/urls";
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
        googleBot : {
            index : false ,
            follow : false ,
        }
    }
}
export default function Page(){
    return(<ProfilePage/>)
}