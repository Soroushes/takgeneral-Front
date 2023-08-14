import SingleBlog from "./singleBlogPage";
import {BASE_URL} from "@/data/urls";
const getData = async (id)=>{
    const res = await fetch(`${BASE_URL}blog-detail/${+id}/`, {next:{revalidate:60}})
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }else{
        return(
            res.json()
        )
    }
}
export default async function Page({params}) {
    const data = await getData(params.blogId);
    return (<SingleBlog data={data} images={data.blog_images} title={data.title} timeStamp={data.created_time.timestamp}/>)
}