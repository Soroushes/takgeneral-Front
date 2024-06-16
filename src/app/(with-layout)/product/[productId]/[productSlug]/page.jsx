import {BASE_URL, domainName} from "@/data/urls";
import {notFound, redirect} from "next/navigation";
import Error from "@/app/error";
import {metadataGenerator} from "@/hooks/metadataGenerator";
import logApi from "@/logApi";
import logRoutes from "@/logRoutes";
import dynamic from "next/dynamic";

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
    const finalPrices = result?.product?.options?.product_variant.map((product)=>product.final_price)
    const prices = result?.product?.options?.product_variant.map((product)=>product.price)
    const lowestFinalPrice = Math.min(...finalPrices)
    const lowestPrice = Math.min(...prices)
    const availability = result?.product?.options?.product_variant.find((product)=>product.Inventory_number)
    const warranty = result?.product?.options?.product_variant.find((product)=>product.warranty)
    let images = []
    result?.product?.all_images.map((image)=>{
        images.push(...images , {url: image.image , width:600 , height:600})
    })
    if (!result) return undefined
    const other = {product_price : lowestFinalPrice , product_old_price : lowestPrice , product_id : result?.product?.id , product_name :  result?.product?.name , availability : availability.Inventory_number ? 'instock' : 'outstock' , guarantee : warranty?.warranty }
    return metadataGenerator(result?.meta_tag , result.product.name , `${domainName}/product/${result.product.id}/${result.product.url}` , `${domainName}/product/${result.product.id}/${result.product.url}` ,'website' , other ,images)
}

const ProductPage = dynamic(import('./productPage'));

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