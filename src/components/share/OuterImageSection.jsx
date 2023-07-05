'use client'
import {Typography,} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const OuterImageSection = ({image, description, title}) => {
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
                    boxShadow : 2 ,
                    "&:hover img": {
                        transform: "scale(1) !important",
                        marginTop: '-15px'
                    },
                }}>
                <Box sx={{
                    width: '55%',
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
                    <Typography
                        textAlign={'center'}
                        component={"h2"}
                        variant={"h4"}
                        sx={{mt: 2 , mb : 1 , width : '100%'}}
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
                            sx={{width : '100%'}}
                        >
                            {description}
                        </Typography>
                    }
            </Box>
        </Link>
    )

};
export default OuterImageSection;
