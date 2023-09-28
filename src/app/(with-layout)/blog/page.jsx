import BlogPage from './blogPage';
import {BASE_URL} from "@/data/urls";

const getData = async () => {
    try {
        const res = await fetch(`${BASE_URL}blogs/`, {cache:'no-store'});
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('failed to fetch data !');
        }
    } catch (err) {
        console.log(err.message);
    }
}
export default async function Page() {
    const data = await getData();
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}