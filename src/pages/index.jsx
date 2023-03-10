import Slider from "../components/home/Slider";
import {useEffect} from 'react'
import ProductSortSection from "src/components/home/ProductSortSection";
import axios  from 'axios';
const TestData = [
  {
    name: "test",
    discription: "this data is just a test",
    imgSrc: "../testSort.png",
  },
  {
    name: "test",
    discription: "this data is just a test",
    imgSrc: "../testSort.png",
  },
  {
    name: "test",
    discription: "this data is just a test",
    imgSrc: "../testSort.png",
  },
  {name : 'test' , discription : 'this data is just a test' ,imgSrc : '../testSort.png' }
];
const Home = (props) => {
  console.log(props)
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



