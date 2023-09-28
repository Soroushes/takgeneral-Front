import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
import { redirect } from 'next/navigation'
async function getData(productId) {
    try {
        const res = await fetch(`${BASE_URL}product-detail/${productId}/`, { cache: 'no-store'})
        if (res.ok) {
            return res.json();
        }
        let error = new Error('failed to fetch data !')
        error.statusCode = res.status;
        throw (error)
    } catch (err) {
        if (err.statusCode === 404) {
            notFound();
        } else {
            console.log(err.message)
        }
    }
}

export default async function Page({params: {productId}}) {
    const data = await getData(productId);
    return redirect(`/product/${productId}/${data.product.url}`) ;
}