import SingleBlog from "./singleBlogPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
const getData = async (id)=>{
    const res = await fetch(`${BASE_URL}blog-detail/${+id}/`, {next:{revalidate:60}})
    try {
        if(res.ok){
            return(
                res.json()
            )
        }else{
            notFound();
            throw new Error('Failed to fetch data')
        }
    }catch (err){
        notFound();
    }
}
export default async function Page({params}) {
    const data = await getData(params.blogId);
    return (<SingleBlog data={data} images={data.blog_images} content={data.desc} title={data.title} timeStamp={data.created_time.timestamp}/>)
}