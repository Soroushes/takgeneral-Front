import Slider from "../components/home/Slider";
import DiscountProductSlider from "../components/home/DiscountProductSlider";
import {BASE_URL} from "../data/urls";
import anPic from '../assets/images/an.png'
import HomePageCategorySection from "../components/home/HomePageCategorySection";
import testBanner from '../assets/images/1.png'
import ProductBanners from "../components/share/productBanners";
import HighRateCategorySlider from "../components/home/highRateCategorySlider";
import DifferentProductScaleSlider from "../components/home/DifferentProductScaleBannerSlider";
async function getData() {
    const res = await fetch(`${BASE_URL}home/`, {next: {revalidate: 60}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page() {
    const fakeSortData = [
        {
            title : 'ابزار دقیق' ,
            image : anPic
        },
        {
            title : 'ابزار دقیق' ,
            image : anPic
        },{
            title : 'ابزار دقیق' ,
            image : anPic
        },
        {
            title : 'ابزار دقیق' ,
            image : anPic
        },

    ]
    const data = getData();
    // data.products bayad map bokhore dar productsortsection
    return (
        <>
            <Slider slides={data.sliders}/>
            <div style={{backgroundColor : '#fff' , position : 'relative' , zIndex : 2 , borderRadius : '20px' , padding : '20px 0 '}}>
                <HomePageCategorySection categories={fakeSortData}/>
                <DiscountProductSlider/>
                <ProductBanners sizing={{xs : 12 , md : 3.8}} banners={[{src : testBanner} , {src: testBanner} , {src : testBanner}]}/>
                <HighRateCategorySlider/>
                <ProductBanners sizing={{xs : 12 , md : 5.8}} banners={[{src : testBanner} , {src: testBanner}]}/>
                <DifferentProductScaleSlider/>
            </div>
        </>
    );
}
