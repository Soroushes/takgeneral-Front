import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";

const ProductPreviewCard = ({
                                title,
                                discountPercent,
                                image,
                                afterDiscountPrice,
                                price,
                                id,
                                shadow,
                                sx,
                                alt = '',
                                url,
                                imagePriority
                            }) => {
    return (
        <Link style={{height: '100% !important'}} href={`/product/${id}/${url}`}>
            <Stack
                justifyContent={'space-between'}
                sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                    px: 1.5,
                    pb: 1.5,
                    borderRadius: 4,
                    aspectRatio: '1/1.5',
                    position: "relative",
                    boxShadow: shadow ? shadow : 0,
                    overflow: 'hidden',
                    '&:hover img': {
                        md: {
                            transform: 'scale(0.9) !important'
                        }, xs: 'none'
                    },
                    ...sx
                }}>
                {
                    discountPercent ?
                        <Typography
                            variant={'body2'}
                            color={'text.main'}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                backgroundColor: "secondary.main",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 35,
                                height: 35,
                                borderRadius: '100% 0 0 0 ',
                                zIndex: 3, pl: .5, pt: 1
                            }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%
                        </Typography> : null
                }
                <Box>
                    <Box textAlign={'center'} sx={{aspectRatio: '1/1'}}>
                        {
                            image &&
                            <Image
                                priority={imagePriority}
                                width={140} height={140}
                                style={{transition: 'all .3s', width: '100%', height: 'auto'}}
                                src={image} alt={alt ?? ''}/>
                        }
                    </Box>
                    <Box sx={{overflow: "hidden", display: 'flex', alignItems: 'center', my: {md: 1, xs: 0}}}>
                        <Typography
                            component={'h6'}
                            variant="body2"
                            textAlign={'justify'}
                            maxHeight={'40px'}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box display={{md: 'block', xs: 'none'}}>
                    <PriceDiscount finalPriceBold={true} discountPrice={price} finalPrice={afterDiscountPrice}/>
                </Box>
                <Box display={{xs: 'block', md: 'none'}}>
                    <PriceDiscount finalPriceBold={false} discountPrice={price} finalPrice={afterDiscountPrice}/>
                </Box>
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
