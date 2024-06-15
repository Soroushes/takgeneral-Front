import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";
import {useRouter} from "next/navigation";

const ProductPreviewCard = ({
                                title,
                                discountPercent,
                                image,
                                afterDiscountPrice,
                                price,
                                id,
                                sx,
                                alt = '',
                                url,
                                imagePriority
                            }) => {
    const router = useRouter()
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
                            variant={'body1'}
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
                    <Box textAlign={'center'} sx={{aspectRatio: '1/1'}}>
                        {
                            image &&
                            <Image
                                sizes={'(max-width: 140px) 140px, (max-width: 140px) 50vw, 33vw'}
                                priority={imagePriority}
                                width={140} height={140}
                                style={{transition: 'all .3s', width: '100%', height: 'auto'}}
                                src={image} alt={alt ?? ''}/>
                        }
                    </Box>
                    <Box sx={{overflow: "hidden", display: 'flex', alignItems: 'center', my: {md: 1, xs: 0}}}>
                        <Typography
                            variant="body1"
                            textAlign={'justify'}
                            maxHeight={'40px'}
                        >
                            {title}
                        </Typography>
                    </Box>
                {
                    price ?
                        <>
                            <Box display={{md: 'block', xs: 'none'}}>
                                <PriceDiscount finalPriceBold={true} discountPrice={price} finalPrice={afterDiscountPrice}/>
                            </Box>
                            <Box display={{xs: 'block', md: 'none'}}>
                                <PriceDiscount finalPriceBold={false} discountPrice={price} finalPrice={afterDiscountPrice}/>
                            </Box>
                        </> :
                            <Box onClick={(e) => {
                                e.stopPropagation();
                                router.push("tel://+982177500376");
                            }} display={'flex'} justifyContent={'center'} ><Typography variant={'h5'} component={'p'} textAlign={'center'} color={'primary'}>برای اطلاع از قیمت تماس بگیرید</Typography></Box>
                }
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
