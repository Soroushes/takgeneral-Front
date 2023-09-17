import Slider from "../../components/home/Slider";
import {BASE_URL} from "@/data/urls";
import HomePageCategorySection from "../../components/home/HomePageCategorySection";
import ProductBanners from "../../components/share/productBanners";
import HighRateCategorySlider from "../../components/home/highRateCategorySlider";
import {Suspense} from "react";
import LoadingPages from "../../components/share/LoadingPages";
import DiscountProductSlider from "@/components/home/DiscountProductSlider";
import Blogs from "@/components/home/blogs";
import {notFound} from "next/navigation";
async function getData() {
    try{
        const res = await fetch(`${BASE_URL}home/`, {next: {revalidate: 60}})
        if (!res.ok) {
            notFound();
        }
        return res.json()
    }catch (err){
        notFound();
    }
}
export default async function Page() {
    const data = await getData();
    return (
        <Suspense fallback={<LoadingPages/>}>
            <Slider slides={data.sliders}/>
            <div style={{
                backgroundColor: '#fff',
                position: 'relative',
                zIndex: 2,
                borderRadius: '20px 20px 0 0',
                padding: '20px 0 '
            }}>
                <HomePageCategorySection mainCategories={data.mother_categories}/>
                <DiscountProductSlider data={data} products={data.amazing_offer_product}/>
                <ProductBanners sizing={{xs: 12, md: 3.8}}
                                banners={data.mid_banner}/>
                <HighRateCategorySlider products={data.popular_categories}/>
                <ProductBanners sizing={{xs: 12, md: 5.8}} banners={data.end_banner}/>
                <DiscountProductSlider backGroundImage={'linear-gradient(to left, #1B09F9 , #27E1BC)'} products={data.special_offer_products}/>
                {/*<DifferentProductScaleSlider/>*/}
                <Blogs blogs={data?.new_blogs}/>
            </div>
        </Suspense>
    );
}
