import SingleBlog from "./singleBlogPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";

const getData = async (id) => {
    const res = await fetch(`${BASE_URL}blog-detail/${+id}/`, {cache: 'no-store'})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === 404) {
            notFound();
        } else {
            throw new Error('failed to fetch data !');
        }
    }
}
export default async function Page({params}) {
    const data = await getData(params.blogId);
    return (<SingleBlog data={data} images={data.blog_images} content={data.desc} title={data.title}
                        timeStamp={data.created_time.timestamp}/>)
}