import BlogPage from './blogPage';
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";

const getData = async () => {
    try {
        const res = await fetch(`${BASE_URL}blogs/`, {next: {revalidate: 60}});
        if(res.ok){
            return res.json();
        }else{
            throw new Error('Failed to fetch data')
        }
    }catch (err){
        notFound();
    }
}
export default async function Page() {
    const data = await getData();
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}