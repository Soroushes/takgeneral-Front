import {domainName} from "@/data/urls";
import FavoriteProductPage from "@/app/(with-layout)/profile/favorite-product/FavoriteProductPage";
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
    return(<FavoriteProductPage/>)
}