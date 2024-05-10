import ProductPage from "./productPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound, redirect} from "next/navigation";
import Error from "@/app/error";
import {metadataGenerator} from "@/hooks/metadataGenerator";
import logApi from "@/logApi";
import logRoutes from "@/logRoutes";

async function getData(productId) {
    logApi(`${BASE_URL}product-detail/${productId}/`)
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`,{cache:'no-store'})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === 404) {
            notFound();
        } else {
            throw new Error('failed to fetch data !');
        }
    }
}

export async function generateMetadata({params: {productId}}) {
    const result = await getData(productId);
    if (!result) return
    return metadataGenerator(result?.meta_tag , result.product.name , `${domainName}/product/${result.product.id}/${result.product.url}` , `${domainName}/product/${result.product.id}/${result.product.url}` ,'website')
}

export default async function Page({params: {productId, productSlug}, searchParams: {fromSection}}) {
    const data = await getData(productId);
    logRoutes(`product ${productId}`)
    if (data.product.url !== productSlug) {
        return (
            redirect(`/product/${productId}/${data.product.url}${fromSection ? `?fromSection=${fromSection}` : ''}`)
        )
    }
    return (
        <ProductPage data={data}/>
    )
}