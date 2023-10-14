export const singleBlogSchemaGenerator = (images , createdDate , updatedDate , title)=>{
    const imagesArray = images.map((item)=>item.image);
    return({
        "@context" : "https://schema.org" ,
        "@type" : "NewsArticle" ,
        "headline" : title ,
        "image" : imagesArray ,
        "datePublished" : `${createdDate.date}T${createdDate.time}+08:00` ,
        "dateModified" : `${updatedDate.date}T${updatedDate.time}+08:00` ,
    })
}
export const productSchemaGenerator =(name , image , description , brand , rates , offers)=>{
    const imagesArray = image.map((item)=>item.image);
     const prices = offers.map((item)=>item.final_price);
     const maxPrice = Math.max(...prices);
     const minPrice = Math.min(...prices);
    return({
        "@context" : "https://schema.org/" ,
        "@type" : "Product" ,
        "name" : name ,
        "image" : imagesArray ,
        "description":description,
        "brand":{
          "@type":"Brand" ,
          "name":brand
        },
        "aggregateRating":{
          "@type":"AggregateRating",
          "ratingValue":rates || 0,
          "reviewCount":''
        },
        "offers":{
          "@type":"AggregateOffer",
          "offerCount":offers.length,
          "lowPrice":minPrice,
          "highPrice":maxPrice,
          "priceCurrency":"IRR"
        },
    })
}