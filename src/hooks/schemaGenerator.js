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
    return({
        "@context" : "https://schema.org/" ,
        "@type" : "Product" ,
        "name" : name ,
        "image" : image ,
        "description":description,
        "brand":{
          "@type":"Brand" ,
          "name":brand
        },
        "aggregateRating":{
          "@type":"AggregateRating",
          "ratingValue":rates,
          "reviewCount":'5'
        },
        "offers":{
          "@type":"AggregateOffer",
          "offerCount":offers.discount,
          "lowPrice":'',
          "highPrice":'',
          "priceCurrency":"IRR"
        },
    })
}