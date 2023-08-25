import CartPage from "@/app/(with-layout)/cart/cartPage";
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
        <CartPage/>
    )
}