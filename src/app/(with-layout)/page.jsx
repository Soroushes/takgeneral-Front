import Slider from "../../components/home/Slider";
import {BASE_URL} from "@/data/urls";
import anPic from '../../assets/images/home/homeCategoryImage.png'
import HomePageCategorySection from "../../components/home/HomePageCategorySection";
import testBanner from '../../assets/images/home/homeBanner.png'
import ProductBanners from "../../components/share/productBanners";
import HighRateCategorySlider from "../../components/home/highRateCategorySlider";
import {Suspense} from "react";
import LoadingPages from "../../components/share/LoadingPages";
import DiscountProductSlider from "@/components/home/DiscountProductSlider";
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
            title: 'ابزار دقیق',
            image: anPic
        },
        {
            title: 'ابزار دقیق',
            image: anPic
        }, {
            title: 'ابزار دقیق',
            image: anPic
        },
        {
            title: 'ابزار دقیق',
            image: anPic
        },

    ];
    const data = getData();
    // data.products bayad map bokhore dar productsortsection
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
                <HomePageCategorySection categories={fakeSortData}/>
                <DiscountProductSlider/>
                <ProductBanners sizing={{xs: 12, md: 3.8}}
                                banners={[{src: testBanner}, {src: testBanner}, {src: testBanner}]}/>
                <HighRateCategorySlider/>
                <ProductBanners sizing={{xs: 12, md: 5.8}} banners={[{src: testBanner}, {src: testBanner}]}/>
                {/*<DifferentProductScaleSlider/>*/}
            </div>
        </Suspense>
    );
}