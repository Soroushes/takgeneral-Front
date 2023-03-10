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
    <Container sx={{mt: 6}}>
      <Grid rowGap={4} container>
        {productSortData.map((sortItem) => {
          return (
            <Grid key={sortItem.name} item md={3} xs={12} sx={{px: 2}}>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: 2,
                  p: 2,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <img style={{maxWidth: "100%"}} src={sortItem.imgSrc}></img>
                  <Typography componenet={"h1"} color={"primary"}>
                    {sortItem.name}
                  </Typography>
                  <Typography
                    componenet={"p"}
                    sx={{color: "text.muted", textAlign: "center"}}>
                    {sortItem.discription}
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
