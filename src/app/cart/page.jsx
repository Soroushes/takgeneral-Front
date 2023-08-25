import CartPage from "@/app/cart/cartPage";
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