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
        <Container maxWidth={'xl'} sx={{my: {xs : 3 , md : 10 , lg : 17}}} disableGutters>
            <Grid rowGap={3} container>
                {productSortData?.map((sortItem) => {
                    return (
                        <Grid item key={sortItem.id} md={3} xs={6} sx={{px: 1}}>
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: 2,
                                    height: "100%",
                                    transition: "transform .5s",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent : "end" ,
                                    alignItems: "center",
                                    pb : 2 ,
                                    px : {sm : 8 , md : 4},
                                    gap : 1,
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
                                        transform: "scale(1) !important",
                                    },
                                }}>
                                <Box sx={{width: "100%", mt: {xs : 0 , md : "-90px" }, height : {xs : 'auto' , md: "150px" , lg : "200px"} , display : "flex" , flexDirection : "column" , justifyContent : "end" }}>
                                    <img
                                        style={{width: "100%", transition: "transform .5s" , transform : "scale(0.9)"}}
                                        src={sortItem.product_image}/>
                                </Box>
                                <Box>
                                    <Typography
                                        component={"p"}
                                        sx={{color: "text.muted", textAlign: "center" , fontSize : {xs : 12 , lg : 16}}}>
                                        {sortItem.description}
                                    </Typography>
                                    <Typography sx={{textAlign: "center" , color : "text.blue" , fontWeight : "bold" , fontSize : {xs : 15 , lg : 20}}} component={"h2"} variant={"h6"}>
                                        {sortItem.name}
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
