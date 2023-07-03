import Slider from "../components/home/Slider";
import FullSizeProductSlider from "../components/home/fullSizeProductSlider";
import {BASE_URL} from "../data/urls";
import 'swiper/swiper.css'
import ProductSortSection from "../components/home/ProductSortSection";
async function getData() {
    const res = await fetch(`${BASE_URL}home/`, {next: {revalidate: 60}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const sortItems = [{
        name: 'پمپ و تجهیزات',
        id: 1,
        description: 'good pomp',
        product_image: `${BASE_URL}media/Group_2073.png`
    }, {
        name: 'کولر گازی',
        id: 2,
        description: 'good pomp',
        product_image: `${BASE_URL}media/Group_2073.png`
    }, {
        name: 'نمیدانم اطلاعی ندارم',
        id: 3,
        description: 'good pomp',
        product_image: `${BASE_URL}media/Group_2073.png`
    }, {name: 'خانگی', id: 4, description: 'good pomp', product_image: `${BASE_URL}media/Group_2073.png`}]
    const data = getData();
    // data.products bayad map bokhore dar productsortsection
    return (
        <>
            <Slider slides={data.sliders}/>
            <ProductSortSection sortItems={sortItems}/>
            {/*<FullSizeProductSlider backgroundColor={'primary.main'}/>*/}
            <FullSizeProductSlider backgroundColor={'primary.main'}/>
            <FullSizeProductSlider backgroundColor={'primary.main'}/>
            <FullSizeProductSlider backgroundColor={'primary.main'}/>
        </>
    );
}
