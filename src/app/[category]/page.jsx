import {BASE_URL} from "../../data/urls";
import CategoryPage from "./categoryPage";

async function getData(params, searchParams) {
    const res = await fetch(BASE_URL + `products/${+params.category}/?` + new URLSearchParams({
        'brand[]': +(searchParams?.brand),
        page : searchParams.page ?? 1,
        page_size : 20,
        ordering: searchParams.ordering

    }), {next: {revalidate: 60}})
    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }
    return res.json();
}

export default async function Page({params, searchParams}) {
    const data = await getData(params, searchParams);
    console.log(params);
    return <CategoryPage childCategory={data.sub_category} category={params.category} data={data} brands={data.brands} current_page={1} page_count={5}/>
    //return <CategoryPage data={data} brands={data.brands} product={data.product} current_page={data.current_page} page_count={data.page_count}/>
}