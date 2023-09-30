import SingleBlog from "./singleBlogPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";

const getData = async (blogName) => {
    console.log(`${BASE_URL}blog-detail/${blogName}/`)
    const res = await fetch(`${BASE_URL}blog-detail/${blogName}/`, {cache: 'no-store'})
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
    const {blog} = await getData(params.blogName);
    return (<SingleBlog data={blog} images={blog.blog_images} content={blog.desc} title={blog.title}
                        timeStamp={blog.created_time.timestamp}/>)
}