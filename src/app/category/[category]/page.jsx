import {BASE_URL} from "../../../data/urls";
import ChildCategoryPage from "./childCategoryPage";
import ParentCategoryPage from './parentCategoryPage';


export const metadata = {
    description : 'تست تست تست تست' ,
    openGraph : {
        type : 'article'
    }
}
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
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    } else {
        return res.json();
    }
}


export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    return (
        data.product ?
            <ChildCategoryPage
                content={data.page_content.desc} childCategory={data.sub_category}
                products={data.product} category={params.category}
                data={data} brands={data.brands} current_page={data.current_page}
                page_count={data.page_count}
            />
            :
            <ParentCategoryPage subCatecory={data.sub_category} brands={data.brands}/>
    )
}