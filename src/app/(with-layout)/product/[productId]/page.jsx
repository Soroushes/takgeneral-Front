import ProductPage from "./productPage";
import {BASE_URL} from "@/data/urls";
import LoadingPages from "@/components/share/LoadingPages";
import {Suspense} from "react";
import {notFound} from "next/navigation";

async function getData(productId) {
    try {
        const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {next: {revalidate: 60}})
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
    return (
        <Suspense fallback={<LoadingPages/>}>
            <ProductPage data={data}/>
        </Suspense>
    )
}