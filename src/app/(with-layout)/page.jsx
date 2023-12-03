import Slider from "../../components/home/Slider";
import {BASE_URL, domainName} from "@/data/urls";
import HomePageCategorySection from "../../components/home/HomePageCategorySection";
import ProductBanners from "../../components/share/productBanners";
import DiscountProductSlider from "@/components/home/DiscountProductSlider";
import Blogs from "@/components/home/blogs";
import {notFound} from "next/navigation";
import Error from "@/app/error";
export const metadata = {
    title : 'خانه | تک جنرال',
    alternates: {
        canonical: `${domainName}`
    },
    openGraph:{
        title : 'خانه | تک جنرال'
    },
    robots : {
        index : true ,
        follow : true,
        // googleBot : {
        //     index : true ,
        //     follow : true ,
        // }
    }
}
async function getData() {
    const res = await fetch(`${BASE_URL}home/`,{next:{revalidate :60}})
    if (res.ok) {
        return res.json()
    } else {
        if (res.status === 404) {
            notFound();
        } else {
            throw new Error('failed to fetch data !');
        }
    }
}

export default async function Page() {
    const data = await getData();
    return (
        <>
            <Slider slides={data?.main_banner}/>
            <div style={{
                backgroundColor: '#FCFCFD',
                position: 'relative',
                zIndex: 2,
                borderRadius: '20px 20px 0 0',
                padding: '20px 0 50px 0 '
            }}>
                <HomePageCategorySection mainCategories={data.mother_categories}/>
                <DiscountProductSlider title={'تخفیف ویژه تک جنرال'} products={data.amazing_offer_product}/>
                <ProductBanners sizing={{xs: 12, md: 3.8}}
                                banners={data.mid_banner}/>
                {/*<HighRateCategorySlider products={data.popular_categories}/>*/}
                <ProductBanners sizing={{xs: 12, md: 5.8}} banners={data.end_banner}/>
                <DiscountProductSlider title={'پیشنهادات تک جنرال'} backGroundImage={'linear-gradient(to left, #1B09F9 , #27E1BC)'}
                                       products={data.special_offer_products}/>
                {/*<DifferentProductScaleSlider/>*/}
                {
                    data.new_blogs.length ? <Blogs blogs={data.new_blogs}/> : null
                }
            </div>
        </>
    );
}
