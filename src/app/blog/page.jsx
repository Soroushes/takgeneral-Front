import BlogPage from './blogPage';
import {BASE_URL} from "@/data/urls";
const getData = async ()=>{
    const res = await fetch(`${BASE_URL}blogs/` , {next:{revalidate:60}});
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }else{
        return res.json()
    }
}
export default async function Page(){
    const data = await getData();
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}