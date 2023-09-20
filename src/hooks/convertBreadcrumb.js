import {domainName} from "@/data/urls";

export const convertBreadcrumb = (breadcrumb) => {
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