import CartPage from "@/app/(with-layout)/cart/cartPage";
import {Suspense} from "react";
import LoadingPages from "@/components/share/LoadingPages";

export const metadata = {
    title : 'سبد خرید',
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