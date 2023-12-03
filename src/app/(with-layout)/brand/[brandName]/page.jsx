import BrandPage from "./brandPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";
import {metadataGenerator} from "@/hooks/metadataGenerator";

const getData = async (params, searchParams) => {
    const parameters = new URLSearchParams(searchParams)
    const res = await fetch(BASE_URL + 'brands/' + params.brandName + '?' + parameters.toString() , {next:{revalidate :60}});
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

export async function generateMetadata({params, searchParams}) {
    const result = await getData(params, searchParams);
    if (!result) return;
    return metadataGenerator(result.meta_tag , result.brand.name , `${domainName}/brand/${result.brand.url}` , `${domainName}/brand/${result.brand.url}`,'website')
}

export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    return (
        <BrandPage brand={data.brand} main_banner={data.main_banner} product={data.products} content={data.page_content}
                   current_page={data.current_page} page_count={data.page_count}/>
    )
}

