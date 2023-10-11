import CartPage from "@/app/(with-layout)/cart/cartPage";
import {Suspense} from "react";
import LoadingPages from "@/components/share/LoadingPages";
import {domainName} from "@/data/urls";

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
        googleBot : {
            index : false ,
            follow : false ,
        }
    }
}
export default function Page(){
    return(
        <Suspense fallback={<LoadingPages/>}>
            <CartPage/>
        </Suspense>
    )
}