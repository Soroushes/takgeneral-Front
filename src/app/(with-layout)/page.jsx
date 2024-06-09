import Slider from "../../components/home/Slider";
import {BASE_URL, domainName} from "@/data/urls";
import ProductBanners from "../../components/share/productBanners";
import Blogs from "@/components/home/blogs";
import {notFound} from "next/navigation";
import Error from "@/app/error";
import logApi from "@/logApi";
import logRoutes from "@/logRoutes";
import dynamic from "next/dynamic";
export const metadata = {
    title : 'خانه | تک جنرال',
    description:'با تک جنرال نگران نیاز های صنعتی و تجهیزات ابزار دقیق نباشید! تامین کننده و وارد کننده انواع محصولات صنعتی',
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
    logApi(`${BASE_URL}home/`)
    const res = await fetch(`${BASE_URL}home/`,{cache:'default'})
    logApi(`${BASE_URL}home/`)
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
const HomePageCategorySection = dynamic(()=>import('@/components/home/HomePageCategorySection'))
const DiscountProductSlider = dynamic(()=>import('@/components/home/DiscountProductSlider'))

export default async function Page() {
    const data = await getData();
    logRoutes('home')
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
                {/*<ProductBanners sizing={{xs: 12, md: 3.8}}*/}
                {/*                banners={data.mid_banner}/>*/}
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
