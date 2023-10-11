import ProductPage from "./productPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound, redirect} from "next/navigation";
import Error from "@/app/error";

async function getData(productId) {
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {cache: 'no-store'})
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
    return {
        title: result.meta_tag.title ? result.meta_tag.title : result.product.name,
        description: result.meta_tag.desc,
        alternates: {
            canonical: `${domainName}/product/${result.product.id}/${result.product.url}`
        },
        openGraph: {
            title: result.meta_tag.og_title ? result.meta_tag.og_title : (result.meta_tag.title ? result.meta_tag.title : result.product.name),
            description: result.meta_tag.og_desc ? result.meta_tag.og_desc : result.meta_tag.desc,
            siteName: result.meta_tag.og_site_name,
            url: `${domainName}/product/${result.product.id}/${result.product.url}` ,
            type: 'website'
        },
        robots: {
            index: result.meta_tag.index,
            follow: result.meta_tag.follow,
            googleBot: {
                index: result.meta_tag.index,
                follow: result.meta_tag.follow,
            },
        },
    }
}

export default async function Page({params: {productId, productSlug}, searchParams: {fromSection}}) {
    const data = await getData(productId);
    if (data.product.url !== productSlug) {
        return (
            redirect(`/product/${productId}/${data.product.url}${fromSection ? `?fromSection=${fromSection}` : ''}`)
        )
    }
    return (
        <ProductPage data={data}/>
    )
}