'use client'
import {Typography,} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const SortSection = ({image, description, title}) => {
    return (
        <Link href={'/'}>
            <Box
                sx={{
                    borderRadius: 2,
                    transition: "all .5s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    pb: 1,
                    px: 1,
                    boxShadow : '0 20px 50px rgba(0,0,0,9%)' ,
                    "&:hover img": {
                        transform: "scale(1) !important",
                        marginTop: '-15px'
                    },
                }}>
                <Box sx={{
                    width: {md: "55%", xs: '70%'},
                    aspectRatio: "1/1",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: '-25px'
                }}>
                    <Image
                        alt={description}
                        fill
                        style={{transition: "all .5s", transform: "scale(0.9)"}}
                        src={image}/>
                </Box>
                <Box>
                    <Typography
                        textAlign={'center'}
                        component={"h2"}
                        variant={"h4"}
                        sx={{mb: 1}}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        whiteSpace={'nowrap'}
                    >
                        {title}
                    </Typography>
                    {
                        description &&
                        <Typography
                            variant={'subtitle1'}
                            component={"p"}
                            color={'text.muted'}
                            textAlign={'center'}
                            overflow={'hidden'}
                            textOverflow={'ellipsis'}
                            whiteSpace={'nowrap'}
                        >
                            {description}
                        </Typography>
                    }

                </Box>
            </Box>
        </Link>
    )

};
export default SortSection;
