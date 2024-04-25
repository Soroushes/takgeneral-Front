import CartPage from "@/app/(with-layout)/cart/cartPage";
import {domainName} from "@/data/urls";
import logRoutes from "@/logRoutes";

export const metadata = {
    title : 'سبد خرید| تک جنرال',
    alternates: {
        canonical: `${domainName}/cart`
    },
    openGraph:{
        title: 'سبد خرید| تک جنرال'
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
    logRoutes('cart')
    return(
        <CartPage/>
    )
}