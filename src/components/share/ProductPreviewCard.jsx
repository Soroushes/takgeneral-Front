import {Stack, Typography ,Box} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";
import {urls} from "src/data/urls";

const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price, id, shadow, sx}) => {
    return (
        <Link href={urls.singleProduct + id}>
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
                    '&:hover img': {
                        md:{
                            transform: 'scale(1) !important'
                        },xs:'none'
                    },
                    ...sx
                }}>
                {
                    discountPercent ?
                        <Typography
                            variant={'caption'}
                            color={'text.main'}
                            sx={{
                                position: 'absolute',
                                left: "10px",
                                top: "10px",
                                backgroundColor: "secondary.main",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                zIndex: 3
                            }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%
                        </Typography> : null
                }
                <Box>
                    <Box textAlign={'center'} sx={{aspectRatio:'1/1'}}>
                        {
                            image &&
                            <Image width={140} height={140}
                                   style={{transform: 'scale(0.9)', transition: 'all .3s', width: '100%', height: 'auto'}}
                                   src={image} alt={title}/>
                        }
                    </Box>
                    <Box sx={{overflow: "hidden", display: 'flex', alignItems: 'center'}}>
                        <Typography
                            component={'h3'}
                            variant="body2"
                            textAlign={'justify'}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box display={{md:'block' , xs:'none'}}>
                    <PriceDiscount  finalPriceBold={true} discountPrice={price} finalPrice={afterDiscountPrice}/>
                </Box>
                <Box display={{xs:'block' , md:'none'}}>
                    <PriceDiscount finalPriceBold={false} discountPrice={price} finalPrice={afterDiscountPrice}/>
                </Box>
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
