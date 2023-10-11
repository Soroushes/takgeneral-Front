import BlogPage from './blogPage';
import {BASE_URL, domainName} from "@/data/urls";
export const metadata = {
    title : 'بلاگ ها | تک جنرال',
    alternates: {
        canonical: `${domainName}/blog`
    },
    openGraph:{
        title:'بلاگ ها | تک جنرال'
    },
    robots : {
        index : true ,
        follow : true,
        googleBot : {
            index : true ,
            follow : true ,
        }
    }
}
const getData = async () => {
    const res = await fetch(`${BASE_URL}blogs/`, {cache: 'no-store'});
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('failed to fetch data !');
    }
}
export default async function Page() {
    const data = await getData();
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}