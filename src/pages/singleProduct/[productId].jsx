import { Box } from "@mui/system";
import { Grid, Container, Typography } from "@mui/material";
import SingleProductImage from '../../components/singleProduct/SingleProductImage'
const singleProduct = () => {
  return (
    <Box sx={{backgroundColor : 'gray.lighter' , pt : 3}}>
      <Container sx={{px : 7}} maxWidth={"xl"}>
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