import Slider from "../components/home/Slider";
import ProductSortSection from "src/components/share/ProductSortSection";
import FullSizeProductSlider from "../components/home/fullSizeProductSlider";
import {BASE_URL} from "../data/urls";
import 'swiper/swiper.css'
async function getData() {
    const res = await fetch(`${BASE_URL}home/`, {next: {revalidate: 60}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Page(){
    const data = getData() ;
    return (
        <>
            <Slider slides={data.sliders}/>
            <ProductSortSection productSortData={data.products} />
            <FullSizeProductSlider backgroundColor={'primary.main'}/>
            <FullSizeProductSlider backgroundColor={'primary.light'}/>
        </>
    );
}
