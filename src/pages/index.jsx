import Slider from "../components/home/Slider";
import ProductSortSection from "src/components/home/ProductSortSection";
import axios  from 'axios';
import { useSelector } from "react-redux";
const Home = (props) => {
  return (
    <>
      <Slider slides={props.sliders}/>
      <ProductSortSection productSortData={props.products} />
    </>
  );
}
export const getStaticProps = async () => {
  let homeData = {} ;
  try {
    const {data} = await axios({
    url: 'https://takback.soroushes.tk/home/',
    method : 'GET'
  })
  homeData = data ;
  } catch (err) {
    console.log('err')
  }
  return {
    props: homeData
  }
}

export default Home ;



