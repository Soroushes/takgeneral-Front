import Slider from "../components/home/Slider";
import ProductSortSection from "src/components/home/ProductSortSection";
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
const Home = ()=> {
  return (
    <>
      <Slider />
      <ProductSortSection productSortData={TestData} />
    </>
  );
}
export default Home ;



