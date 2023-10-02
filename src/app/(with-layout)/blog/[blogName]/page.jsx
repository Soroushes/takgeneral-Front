import SingleBlog from "./singleBlogPage";
import {BASE_URL, domainName} from "@/data/urls";
import {notFound} from "next/navigation";
import Error from "@/app/error";

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

    return {
        title: result.meta_tag.title ? result.meta_tag.title : result.blog.title,
        description: result.meta_tag.desc,
        alternates: {
            canonical: result.meta_tag.canonical ? result.meta_tag.canonical : `${domainName}/blog/${result.blog.slug}/`
        },
        openGraph: {
            title: result.meta_tag.og_title ? result.meta_tag.og_title : (result.meta_tag.title ? result.meta_tag.title : result.blog.title),
            description: result.meta_tag.og_desc ? result.meta_tag.og_desc : result.meta_tag.desc,
            siteName: result.meta_tag.og_site_name,
            url: `${domainName}/blog/${result.blog.slug}`,
            type: 'article'
        },
        robots: {
            index: result.meta_tag.index,
            follow: result.meta_tag.follow,
            googleBot: {
                index: result.meta_tag.index,
                follow: result.meta_tag.follow,
            },
        },
    }
}

export default async function Page({params}) {
    const {blog} = await getData(params.blogName);
    return (<SingleBlog data={blog} images={blog.blog_images} content={blog.desc} title={blog.title}
                        timeStamp={blog.created_time.timestamp}/>)
}