import Link from "next/link";
import {Typography, Box} from "@mui/material";
import {domainName} from "@/data/urls";
import {useMemo} from "react";

const BreadcrumbGenerator = ({breadcrumb , product})=>{
    const allBreadcrumbs = useMemo(()=>{
        let newBreadCrumbs = [...breadcrumb] ;
        if (product){
            newBreadCrumbs.push({name : product.name , url : ''})
        }else {
            const breadCrumbLength = newBreadCrumbs.length ;
            newBreadCrumbs = newBreadCrumbs.map((breadcrumb , index)=>{
                return {
                    ...breadcrumb ,
                    url : index === breadCrumbLength - 1 ? '' : breadcrumb.url
                }
            })
        }
        return newBreadCrumbs ;
    },[breadcrumb])
    const convertBreadcrumb = ()=>{
        const breadcrumbItems = allBreadcrumbs.map((item, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name" : item.name ,
                "item" : item.url ? `${domainName}/category/${item.url}` : ''
            }
        })
        return {
            "@context" : "https://schema.org",
            "@type" : "BreadcrumbList" ,
            "itemListElement" : breadcrumbItems
        }
    }
    return(
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(convertBreadcrumb())}}
            />
            <Box display={'flex'} flexWrap={"wrap"} sx={{py: 3}}>
                <Link href={`/`}>
                    <Box display={'flex'}>
                        <Typography sx={{px:1}} color={'text.muted'} variant={'body2'}>خانه</Typography>
                        /
                    </Box>
                </Link>{
                allBreadcrumbs?.map((item, index) => (
                    <Link key={Math.random() * 1000} href={item.url ? `/category/${item.url}` : ''}>
                        <Box display={'flex'}>
                            {index ? '/' :''}
                            <Typography sx={{px:1}} color={'text.muted'} variant={'body2'}>{item.name}</Typography>
                        </Box>
                    </Link>
                ))
            }
            </Box>
        </>
    )
}
export default BreadcrumbGenerator;