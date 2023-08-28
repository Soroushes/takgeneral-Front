import BrandPage from "./brandPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
const getData = async (params , searchParams)=>{
    const parameters = new URLSearchParams(searchParams)
    const res = await fetch(BASE_URL+'brands/'+ params.brandName + '?' + parameters.toString() );
    if(!res.ok){
        if (res.status === 404){
            notFound() ;
        }
        throw new  Error('Failed to fetch data')
    }else {
        return res.json();
    }
}
export default async function Page ({params , searchParams}){
    const data = await getData(params , searchParams);
    const parameters = new URLSearchParams(searchParams)
    console.log(BASE_URL+'brands/'+ params.brandName + '?' + parameters.toString())
    return(
        <BrandPage data={data} product={data.products} current_page={data.current_page} page_count={data.page_count}/>
    )
}

