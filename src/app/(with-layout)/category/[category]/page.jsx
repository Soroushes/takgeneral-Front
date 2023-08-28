import {BASE_URL, domainName} from "@/data/urls";
import ChildCategoryPage from "./childCategoryPage";
import ParentCategoryPage from './parentCategoryPage';
import {notFound} from "next/navigation";

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
    const res = await fetch(BASE_URL + `products/${params.category}/?` + parameters.toString()
        , {next: {revalidate: 60}})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === '404') {
            notFound();
        }
        throw new Error('Fail to fetch data')
    }
    throw new Error('Fail to fetch data')
}
export async function generateMetadata({params , searchParams}) {
    const result = await getData(params , searchParams);
    return {
        title: result?.meta_tag?.title ? result.meta_tag.title : result.main_category?.name,
        description: result.meta_tag?.desc,
        alternates: {
            canonical: `${domainName}/category/${result.main_category?.id}`
        },
        openGraph: {
            title: result?.meta_tag?.og_title ? result.meta_tag.og_title : (result.meta_tag?.title ? result.meta_tag.title : result.main_category?.name),
            description: result.meta_tag?.og_desc ? result.meta_tag.og_desc : result.meta_tag?.desc,
            siteName: result.meta_tag?.og_site_name,
            // type : result.meta_tag.og_type,
            url: `${domainName}/category/${result.main_category?.id}`
        }
    }
}

export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    return (
        data.product ?
            <ChildCategoryPage
                content={data.page_content.desc} childCategory={data.sub_category}
                products={data.product} category={params.category}
                data={data} breadcrumb={data.breadcrumb} brands={data.brands} current_page={data.current_page}
                page_count={data.page_count}
            />
            :
            <ParentCategoryPage main_category={data.main_category} breadcrumb={data.breadcrumb}
                                subCategory={data.sub_category} brands={data.brands}/>
    )
}