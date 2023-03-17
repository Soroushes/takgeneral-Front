import { Box } from "@mui/system";
import { Grid, Container } from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
const singleProduct = () => {
  return (
    <Box sx={{backgroundColor : '#F9F9F9' , pt : 3}}>
      <Container sx={{px : {xs : 4 , sm : 15 , md : 4}}} maxWidth={"xl"}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <SingleProductImage/>
          </Grid>
          <Grid item md={4} xs={12}></Grid>
          <Grid item md={4} xs={12}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default singleProduct;