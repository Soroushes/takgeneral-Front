import ProductPage from "./productPage";
import {BASE_URL} from "@/data/urls";
import LoadingPages from "@/components/share/LoadingPages";
import {Suspense} from "react";
import {notFound} from "next/navigation";

async function getData(productId) {
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {next: {revalidate: 60}})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === 404) {
            notFound();
        }
        throw new Error('Fail to fetch data')
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