import Link from "next/link";
import {Typography, Box} from "@mui/material";
import {domainName} from "@/data/urls";
import {useMemo} from "react";
import Script from "next/script";

const BreadcrumbGenerator = ({breadcrumb, product, hasEmptyUrl = true}) => {
    const allBreadcrumbs = useMemo(() => {
        let newBreadCrumbs = [{url: '/', name: 'خانه'}, ...breadcrumb];
        if (product) {
            newBreadCrumbs.push({name: product.name, url: ''})
        } else if (hasEmptyUrl) {
            const breadCrumbLength = newBreadCrumbs.length;
            newBreadCrumbs = newBreadCrumbs.map((breadcrumb, index) => {
                return {
                    ...breadcrumb,
                    url: index === breadCrumbLength - 1 ? '' : breadcrumb.url
                }
            })
        }
        return newBreadCrumbs;
    }, [breadcrumb])
    const convertBreadcrumb = () => {
        const breadcrumbItems = allBreadcrumbs.map((item, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url ? `${domainName}${item.url}` : ''
            }
        })
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems
        }
    }
    return (
        <>
            <Script
                strategy={'lazyOnload'}
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(convertBreadcrumb())}}
            />
            <Box display={'flex'} flexWrap={"wrap"} sx={{py: 3}}>
                {
                    allBreadcrumbs?.map((item, index) => (
                        <Link key={item.url} href={item.url ?? ''}>
                            <Box display={'flex'}>
                                {index ? '/' : ''}
                                <Typography sx={{px: 1}} color={'text.muted'} variant={'body2'}>{item.name}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Box>
        </>
    )
}
export default BreadcrumbGenerator;