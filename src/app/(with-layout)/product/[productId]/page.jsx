import ProductPage from "./productPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
async function getData(productId) {
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {next : {revalidate : 60}})
    if (!res.ok) {
        if (res.status === '404') {
            notFound()
        }
        throw new Error('Failed to fetch data') ;
    }
    return res.json()
}
export default async function Page({params : {productId}}){
    const data = await getData(productId) ;
    return <ProductPage data={data}/>
}