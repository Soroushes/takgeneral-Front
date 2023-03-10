import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/system";
const ProductSortSection = ({productSortData}) => {
  return (
    <Container maxWidth={'xl'} sx={{mt: 15}}>
      <Grid rowGap={4} container>
        {productSortData.map((sortItem) => {
          return (
            <Grid item key={sortItem.id} md={3} xs={12} sx={{px: 2}}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  height: "70%",
                  padding: "0 40px 40px 40px",
                  transition: "transform .5s",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  "&:hover h2": {
                    color: "white",
                  },
                  "&:hover p": {
                    color: "text.lightBlue",
                  },
                  "&:hover img": {
                    transform: "scale(1.1) ",
                  },
                }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transform: "translate(0 , -30%)",
                    gap: 2,
                  }}>
                  <img
                    style={{maxWidth: "100%", transition: "transform .5s"}}
                    src={sortItem.product_image}></img>
                  <Typography component={"h2"} variant={"h6"} color={"primary"}>
                    {sortItem.name}
                  </Typography>
                  <Typography
                    component={"p"}
                    variant={"subtitle2"}
                    sx={{color: "text.muted", textAlign: "center"}}>
                    {sortItem.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default ProductSortSection;
