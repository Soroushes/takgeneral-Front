import {BASE_URL, domainName} from "@/data/urls";
import logApi from "@/logApi";

export default async function sitemap() {
    logApi(`${BASE_URL}sitemap`)
    const res = await fetch(`${BASE_URL}sitemap`, {cache: 'no-store'});
    const data = await res.json();
    const finalSitemap = [] ;
    const products = data.products.map((product) => ({
        url: `${domainName}/product/${product.id}/${product.url}`,
        lastModified: product.update_at.date
    }))
    const blogs = data.blogs.map((blog) => ({
        url: `${domainName}/blog/${blog.slug}`,
        lastModified: blog.updated_time.date
    }))
    const brands = data.brands.map((brand)=>({
        url: `${domainName}/brand/${brand.url}`,
        lastModified: brand.update_at.date
    }))
    const categories = data.categories.map((category)=>({
        url: `${domainName}/category/${category.url}`,
        lastModified: category.update_at.date
    }))
    finalSitemap.push(...products);
    finalSitemap.push(...blogs);
    finalSitemap.push(...brands);
    finalSitemap.push(...categories);
    return finalSitemap
}