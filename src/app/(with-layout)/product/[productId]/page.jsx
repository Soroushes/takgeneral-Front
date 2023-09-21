import ProductPage from "./productPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import {BreadCrumbSchema} from "@/components/schemas/BreadCrumbSchema";

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
export async function generateMetadata({params : {productId}}) {
    const result = await getData(productId);
    if (!result) return
    return {
        title: result.meta_tag.title ? result.meta_tag.title : result.product.name,
        description: result.meta_tag.desc,
        alternates: {
            canonical: `${domainName}/product/${result.product.id}`
        },
        openGraph: {
            title: result.meta_tag.og_title ? result.meta_tag.og_title : (result.meta_tag.title ? result.meta_tag.title : result.product.name),
            description: result.meta_tag.og_desc ? result.meta_tag.og_desc : result.meta_tag.desc,
            siteName: result.meta_tag.og_site_name,
            url: `${domainName}/product/${result.product.id}`
        }
    }
}

export default async function Page({params: {productId}}) {
    const data = await getData(productId);
    return (
        <>
            <BreadCrumbSchema breadcrumb={data.breadcrumb}/>
            <ProductPage data={data}/>
        </>

    )
}