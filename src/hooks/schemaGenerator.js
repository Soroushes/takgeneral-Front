export const singleBlogSchemaGenerator = (images, createdDate, updatedDate, title) => {
    const imagesArray = images.map((item) => item.image);
    return ({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "image": imagesArray,
        "datePublished": `${createdDate.date}T${createdDate.time}+08:00`,
        "dateModified": `${updatedDate.date}T${updatedDate.time}+08:00`,
    })
}
export const productSchemaGenerator = (name, image, description, brand, rates, offers, reviewCount) => {
    const imagesArray = image.map((item) => item.image);
    const prices = offers.map((item) => item.final_price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    let schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": name,
        "image": imagesArray,
        "description": description,
        "brand": {
            "@type": "Brand",
            "name": brand
        },
        "offers": {
            "@type": "AggregateOffer",
            "offerCount": offers.length,
            "lowPrice": minPrice,
            "highPrice": maxPrice,
            "priceCurrency": "IRR"
        },
    }
    if (reviewCount){
        schema = {
            ...schema ,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rates || 0,
                "reviewCount": reviewCount
            },
        }
    }
    return schema
}