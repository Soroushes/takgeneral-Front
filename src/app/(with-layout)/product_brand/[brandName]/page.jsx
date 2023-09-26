import BrandPage from "./brandPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import LoadingPages from "@/components/share/LoadingPages";
import {Suspense} from "react";

const getData = async (params , searchParams)=>{
    const parameters = new URLSearchParams(searchParams)
    try{
        const res = await fetch(BASE_URL+'brands/'+ params.brandName + '?' + parameters.toString()  , { cache: 'no-store'});
        if(res.ok){
            return res.json();
        }else {
            let error = new Error('failed to fetch data !');
            error.statusCode = res.status;
            throw error;
        }
    }catch (err){
        if(err.statusCode === 404){
            notFound();
        }else {
            console.log(err.message)
        }
    }
}
export async function generateMetadata({params, searchParams}) {
    const result = await getData(params, searchParams);
    if (!result) return ;
     return {
        title: result.meta_tag.title ? result.meta_tag.title : result.brand.name,
        description: result.meta_tag.desc,
        alternates: {
            canonical: `${domainName}/product_brand/${result.brand.url}`
        },
        openGraph: {
            title: result.meta_tag.og_title ? result.meta_tag.og_title : (result.meta_tag.title ? result.meta_tag.title : result.brand.name),
            description: result.meta_tag.og_desc ? result.meta_tag.og_desc : result.meta_tag.desc,
            siteName: result.meta_tag.og_site_name,
            // type : result.meta_tag.og_type,
            url: `${domainName}/product_brand/${result.brand.url}`
        }
    }
}
export default async function Page ({params , searchParams}){
    const data = await getData(params , searchParams);
    return(
        <Suspense fallback={<LoadingPages/>}>
            <BrandPage data={data} main_banner={data.main_banner} product={data.products} content={data.page_content} current_page={data.current_page} page_count={data.page_count}/>
        </Suspense>
    )
}

