import ProductPage from "./productPage";
import {BASE_URL} from "@/data/urls";
async function getData(productId) {
    try {
        const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {next : {revalidate : 60}})
        if (!res.ok) {
            throw new Error('Failed to fetch data') ;
        }
        return res.json()
    }catch (err){
        console.log(err)
    }

}
export default async function Page({params : {productId}}){
    const data = await getData(productId) ;
    return <ProductPage data={data}/>
}