import {BASE_URL, domainName} from "@/data/urls";
import ChildCategoryPage from "./childCategoryPage";
import ParentCategoryPage from './parentCategoryPage';
import {notFound} from "next/navigation";
import Error from "@/app/error";

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
    const res = await fetch(BASE_URL + `products/${params.category}/?` + parameters.toString(), {cache: 'no-store'})
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
    return {
        title: result?.meta_tag?.title ? result?.meta_tag.title : result?.main_category?.name,
        description: result?.meta_tag?.desc,
        alternates: {
            canonical: `${domainName}/category/${result?.main_category?.url}`
        },
        openGraph: {
            title: result?.meta_tag?.og_title ? result?.meta_tag.og_title : (result?.meta_tag?.title ? result?.meta_tag.title : result?.main_category?.name),
            description: result?.meta_tag?.og_desc ? result?.meta_tag.og_desc : result?.meta_tag?.desc,
            siteName: result?.meta_tag?.og_site_name,
            type : 'website',
            url: `${domainName}/category/${result?.main_category?.url}`
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

export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    return (
        <>
            {data.product ?
                <ChildCategoryPage
                    main_banner={data.main_banner}
                    content={data.page_content.desc} childCategory={data.sub_category}
                    products={data.product} category={params.category}
                    data={data} breadcrumb={data.breadcrumb} brands={data.brands} current_page={data.current_page}
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