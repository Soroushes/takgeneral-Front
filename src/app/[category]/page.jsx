import {BASE_URL} from "../../data/urls";
import CategoryPage from "./categoryPage";

async function getData(params) {
    console.log(params)
    const res = await fetch(BASE_URL+params.category +'/' , {next : {revalidate : 60}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page ({params}){
    const data = await getData(params) ;
    console.log(data);
    return <CategoryPage brands={data.brands} product={data.product} current_page={data.current_page} page_count={data.page_count}/>
}