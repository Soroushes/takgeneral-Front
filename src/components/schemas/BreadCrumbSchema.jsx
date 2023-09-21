import {domainName} from "@/data/urls";

export const BreadCrumbSchema = ({breadcrumb})=>{
    const convertBreadcrumb = ()=>{
        const breadcrumbItems = breadcrumb.map((item, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name" : item.name ,
                "item" : `${domainName}/test`
            }
        })
        return {
            "@context" : "https://schema.org",
            "@type" : "BreadcrumbList" ,
            "itemListElement" : breadcrumbItems
        }
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(convertBreadcrumb())}}
        />
    )
}