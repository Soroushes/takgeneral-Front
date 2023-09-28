import SingleBlog from "./singleBlogPage";
import {BASE_URL} from "@/data/urls";
import {notFound} from "next/navigation";
const getData = async (id)=>{
    const res = await fetch(`${BASE_URL}blog-detail/${+id}/`, {cache:'no-store'})
    try {
        if(res.ok){
            return(
                res.json()
            )
        }else{
            let error = new Error('Failed to fetch data !');
            error.statusCode = res.status;
            throw error;
        }
    }catch (err){
        if(err.statusCode === 404){
            notFound();
        }else{
            console.log(err.message);
        }
    }
}
export default async function Page({params}) {
    const data = await getData(params.blogId);
    return (<SingleBlog data={data} images={data.blog_images} content={data.desc} title={data.title} timeStamp={data.created_time.timestamp}/>)
}