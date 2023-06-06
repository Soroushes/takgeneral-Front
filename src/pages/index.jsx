import Slider from "../components/home/Slider";
import ProductSortSection from "src/components/home/ProductSortSection";
import axios  from 'axios';
import FullSizeProductSlider from "../components/home/fullSizeProductSlider";
const Home = (props) => {
  return (
    <>
      <Slider slides={props.sliders}/>
      <ProductSortSection productSortData={props.products} />
      <FullSizeProductSlider backgroundColor={'primary.main'}/>
      <FullSizeProductSlider backgroundColor={'primary.light'}/>
    </>
  );
}
export const getStaticProps = async () => {
  let homeData = {} ;
  try {
    const {data} = await axios({
    url: 'http://takback.soroushes.tk/home/',
    method : 'GET'
  })
  homeData = data ;
  } catch (err) {
    console.log('err')
  }
  return {
    props: homeData ,
    revalidate : 60
  }
}

export default Home ;



