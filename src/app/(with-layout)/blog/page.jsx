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
        // googleBot : {
        //     index : true ,
        //     follow : true ,
        // }
    }
}
const getData = async (params , searchParams) => {
    const res = await fetch(`${BASE_URL}blogs/${searchParams.page ? `?page=${searchParams?.page}` :''}`,{next:{revalidate :60}});
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('failed to fetch data !');
    }
}
export default async function Page({params ,searchParams}) {
    const data = await getData(params , searchParams);
    return (
        <BlogPage data={data} blogs={data.blogs} currentPage={data.current_page} pageCount={data.page_count}/>
    )
}