import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";
import {metadataGenerator} from "@/hooks/metadataGenerator";
import logApi from "@/logApi";
import logRoutes from "@/logRoutes";
import dynamic from "next/dynamic";
async function getData(params, searchParams) {
    let brands = searchParams.brand ?? [];
    delete searchParams.brand;
    const parameters = new URLSearchParams(searchParams);
    if (typeof brands !== 'object') {
        brands = Array(brands);
    }
    brands.map((brand) => {
        parameters.append('brand[]', brand)
    })
    logApi(BASE_URL + `products/${params.category}/?` + parameters.toString())
    const res = await fetch(BASE_URL + `products/${params.category}/?` + parameters.toString(),{cache:'default'})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === 404 || (res.status === 500 && searchParams.page === '0')) {
            notFound();
        } else {
            throw new Error('failed to fetch data !');
        }
    }
}

export async function generateMetadata({params, searchParams}) {
    const result = await getData(params, searchParams);
    return metadataGenerator(result?.meta_tag , result?.main_category?.name , `${domainName}/category/${result?.main_category?.url}` , `${domainName}/category/${result?.main_category?.url}` , 'website');
}
const ChildCategoryPage = dynamic(()=>import('./childCategoryPage'))
const ParentCategoryPage = dynamic(()=>import('./parentCategoryPage'))

export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    logRoutes(`category : ${params.category}`)
    return (
        <>
            {data.product ?
                <ChildCategoryPage
                    main_banner={data.main_banner}
                    content={data.page_content.desc} childCategory={data.sub_category}
                    products={data.product}
                    data={data} main_category={data?. main_category} breadcrumb={data.breadcrumb} brands={data.brands} current_page={data.current_page}
                    page_count={data.page_count}
                />
                :
                <ParentCategoryPage
                    data={data}
                    content={data.page_content.desc}
                    other_banner={data.other_banner}
                    main_banner={data.main_banner}
                    main_category={data.main_category} breadcrumb={data.breadcrumb}
                    subCategory={data.sub_category} brands={data.brands}
                />
            }
        </>
    )
}