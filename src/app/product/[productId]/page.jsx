import ProductPage from "./productPage";
import {BASE_URL} from "../../../data/urls";
async function getData(productId) {
    console.log(`${BASE_URL}product-detail/${productId}/`)
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {next : {revalidate : 60}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page({params : {productId}}){
    const data = await getData(productId) ;
    return <ProductPage data={data}/>
}