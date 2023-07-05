import Slider from "../components/home/Slider";
import FullSizeProductSlider from "../components/home/fullSizeProductSlider";
import {BASE_URL} from "../data/urls";
import 'swiper/swiper.css' ;
import anPic from '../assets/images/an.png'
import HomePageCategorySection from "../components/home/HomePageCategorySection";
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
                <FullSizeProductSlider backgroundColor={'primary.main'}/>
                <FullSizeProductSlider backgroundColor={'primary.main'}/>
                <FullSizeProductSlider backgroundColor={'primary.main'}/>
            </div>
        </>
    );
}
