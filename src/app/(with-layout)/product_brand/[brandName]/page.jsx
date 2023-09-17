import BrandPage from "./brandPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
import LoadingPages from "@/components/share/LoadingPages";
import {Suspense} from "react";

const getData = async (params , searchParams)=>{
    const parameters = new URLSearchParams(searchParams)
    try{
        const res = await fetch(BASE_URL+'brands/'+ params.brandName + '?' + parameters.toString() );
        if(!res.ok){
            notFound();
        }else {
            return res.json();
        }
    }catch (err){
        notFound();
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

