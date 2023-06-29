'use client'
import {
    Container,
    Typography,
    Grid,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/system";
import Image from "next/image";

const ProductSortSection = ({productSortData}) => {
    return (
        <Container maxWidth={'lg'} sx={{my: 3}}>
            <Typography sx={{mb : 3}} textAlign={'center'} component={'h2'} variant={'body2'}>دسته بندی محصولات</Typography>
            <Grid rowGap={3} container>
                {productSortData?.map((sortItem) => {
                    return (
                        <Grid item key={sortItem.id} sm={3} xs={6} sx={{px: 1}}>
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: 2,
                                    height: "100%",
                                    transition: "all .5s",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent : "end" ,
                                    alignItems: "center",
                                    pb : 2 ,
                                    px : 2 ,
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
                                <Box sx={{width: "70%", aspectRatio : "1/1" , position : "relative" , display : "flex" , justifyContent : "center"}}>
                                    <Image
                                        alt={sortItem.description}
                                        fill
                                        style={{transition: "transform .5s" , transform : "scale(0.9)"}}
                                        src={sortItem.product_image}/>
                                </Box>
                                <Box>
                                    <Typography
                                        component={"p"}
                                        sx={{color: "text.muted", textAlign: "center" , fontSize : {xs : 9 , lg : 13}}}>
                                        {sortItem.description}
                                    </Typography>
                                    <Typography sx={{textAlign: "center" , color : "text.blue" , fontWeight : "bold" , fontSize : {xs : 10 , lg : 14}}} component={"h2"} variant={"h6"}>
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
