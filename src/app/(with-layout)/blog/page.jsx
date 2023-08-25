import BlogPage from './blogPage';
import {BASE_URL} from "@/data/urls";

const getData = async () => {
    try {
        const res = await fetch(`${BASE_URL}blogs/`, {next: {revalidate: 60}});
        return res.json()
    }catch (err){
        throw new Error('Failed to fetch data')
    }
}
export default async function Page() {
    const data = await getData();
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}