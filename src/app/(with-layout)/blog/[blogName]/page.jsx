import SingleBlog from "./singleBlogPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";
import {metadataGenerator} from "@/hooks/metadataGenerator";

const getData = async (blogName) => {
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

export async function generateMetadata({params: {blogName}}) {
    const result = await getData(blogName);
    if (!result) return;
    return metadataGenerator(result?.meta_tag , result.blog.title , result.meta_tag.canonical ? result.meta_tag.canonical : `${domainName}/blog/${result.blog.slug}/` , `${domainName}/blog/${result.blog.slug}` , 'article')
}

export default async function Page({params}) {
    const {blog} = await getData(params.blogName);
    return (<SingleBlog data={blog} images={blog.blog_images} content={blog.desc} title={blog.title}
                        createdTimeStamp={blog.created_time} updatedTimeStamp={blog.updated_time}/>)
}