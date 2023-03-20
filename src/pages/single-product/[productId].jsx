import axios from "axios";
import { Box } from "@mui/system";
import { Grid, Container } from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
import SingleProductAttribute from '../../components/singleProduct/SingleProductAttribute';
import SingleProductSellCard from "../../components/singleProduct/SingleProductSellCard";
import SingleProductDetails from "src/components/singleProduct/SingleProductDetails";
const singleProduct = (props) => {
  return (
    <Box sx={{backgroundColor : '#F9F9F9' , pt : 3}}>
      <Container sx={{px : {xs : 4 , sm : 15 , md : 4}}} maxWidth={"xl"}>
        <Grid container rowGap={5}>
          <Grid item md={3} xs={12}>
            <SingleProductImage/>
          </Grid>
          <Grid item sx={{px :{ md : 8}}} md={6} xs={12}>
            <SingleProductAttribute/>
          </Grid>
          <Grid item md={3} xs={12}>
            <SingleProductSellCard/>
          </Grid>
          <Grid item md={12} xs={12} >
            <SingleProductDetails/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
  
}
export default singleProduct;
// export const getStaticProps = async ()=>{
//   let productData = {};
//   try{
//     const {data} = await axios({
//       url : '' , 
//       method : 'GET',
//     })
//   productData = data ;
//   }catch(err){
//     consle.log(err)
//   }
//   return {
//     props : productData
//   }
// }