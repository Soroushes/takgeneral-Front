'use client'
import { Typography,} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Box} from "@mui/system";
import Image from "next/image";
const SortSection = ({image , description , title}) => {
    return (
            <Paper
                elevation={2}
                sx={{
                    borderRadius: 2,
                    height: "100%",
                    transition: "all .5s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    pb: 2,
                    px: 1,
                    "&:hover img": {
                        transform: "scale(1) !important",
                        marginTop:'-3px'
                    },
                }}>
                <Box sx={{
                    width: "70%",
                    aspectRatio: "1/1",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginTop:'-50px'
                }}>
                    <Image
                        alt={description}
                        fill
                        style={{transition: "transform .5s", transform: "scale(0.9)"}}
                        src={image}/>
                </Box>
                <Box>
                    <Typography
                        sx={{textAlign: "center", color: "text.blue", fontWeight: "bold", fontSize: {xs: 10, lg: 14}}}
                        component={"h2"} variant={"h6"}>
                        {title}
                    </Typography>
                    <Typography
                        component={"p"}
                        sx={{color: "text.muted", textAlign: "center", fontSize: {xs: 9, lg: 13}}}>
                        {description}
                    </Typography>
                </Box>
            </Paper>

)

};
export default SortSection;
