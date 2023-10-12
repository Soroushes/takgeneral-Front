export const metadataGenerator =(res , title , canonical , url , type)=>{
    console.log(`تک جنرال |${res?.title}`)
    return {
        title: res?.title ? `تک جنرال |${res?.title}` : `تک جنرال | ${title}`,
        description: res?.desc,
        alternates: {
            canonical: canonical
        },
        openGraph: {
            title: res?.og_title ? res?.og_title : (res?.title ? res?.title : title),
            description: res?.og_desc ? res?.og_desc : res?.desc,
            siteName: res?.og_site_name,
            type : type,
            url: url
        },
        robots: {
            index: res.index,
            follow: res.follow,
            googleBot: {
                index: res.index,
                follow: res.follow,
            },
        },
    }
}