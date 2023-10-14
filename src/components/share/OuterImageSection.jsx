'use client'
import {Typography, useTheme, Box} from "@mui/material";
import Image from "next/image";

const OuterImageSection = ({
                               image,
                               description,
                               isActive,
                               title,
                               shadow = 1,
                               descriptionVariant = 'subtitle1',
                               titleVariant = 'h4',
    alt = ''
                           }) => {
    const {palette} = useTheme();
    return (
        <Box
            sx={{
                border : `1px solid ${isActive ? palette.secondary.main : 'transparent'}`,
                borderRadius: 2,
                transition: "all .5s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                gap: 1,
                boxShadow: shadow,
                "&:hover img": {
                    md: {
                        transform: "scale(1) !important",
                        marginTop: '-10px'
                    }, xs: 'none'
                },
            }}>
            <Box sx={{
                width: {md: "55%", xs: '70%'},
                display: "flex",
                justifyContent: "center",
                marginTop: '-45px',
                aspectRatio: '1/1'
            }}>
                <Image
                    alt={alt}
                    width={120}
                    height={120}
                    style={{transition: "all .5s", transform: "scale(0.9)", width: '100%', height: 'auto'}}
                    src={image}/>
            </Box>
            <Typography
                textAlign={'center'}
                component={"h5"}
                variant={titleVariant}
                sx={{mb: 1, width: '100%'}}
                overflow={'hidden'}
                textOverflow={'ellipsis'}
                whiteSpace={'nowrap'}
            >
                {title}
            </Typography>
            {
                description &&
                <Typography
                    variant={descriptionVariant}
                    component={"p"}
                    color={'text.muted'}
                    textAlign={'center'}
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    whiteSpace={'nowrap'}
                    sx={{width: '100%'}}
                >
                    {description}
                </Typography>
            }
        </Box>
    )

};
export default OuterImageSection;
