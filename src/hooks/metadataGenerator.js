export const metadataGenerator =(res , title , canonical , url , type , other , ogImage)=>{
    const siteNameTitle = `${res.title ? res.title : title} | تک جنرال `;
    return {
        title: siteNameTitle,
        description: res?.desc,
        alternates: {
            canonical: res.canonical ? res.canonical : canonical
        },
        openGraph: {
            title: res?.og_title ? res?.og_title : siteNameTitle,
            description: res?.og_desc ? res?.og_desc : res?.desc,
            siteName: res?.og_site_name,
            type : type,
            url: url,
            image: ogImage ?? undefined
        },
        robots: {
            index: res.index,
            follow: res.follow,
            // googleBot: {
            //     index: res.index,
            //     follow: res.follow,
            // },
        },
        other: other ?? undefined

    }
}