import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";
import { urls } from "src/data/urls";
const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price , id}) => {
    return (
        <Link href={urls.singleProduct + id}>
            <Stack
                justifyContent={'space-between'}
                sx={{
                    backgroundColor: "#fff",
                    width : "100%" ,
                    px : 2 ,
                    pt : 1 ,
                    pb : 1.5,
                    borderRadius: 2,
                    height : '300px',
                    position: "relative" ,
                    '&:hover img' : {
                        transform : 'scale(1) !important'
                    }
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
                                display : 'flex' ,
                                justifyContent : 'center' ,
                                alignItems : 'center' ,
                                width : 30 ,
                                aspectRatio : '1/1' ,
                                borderRadius : '50%'
                            }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%
                        </Typography> : null
                }
                <Box sx={{position: 'relative', aspectRatio: "1/1", width: "85%" , mx : 'auto'}}>
                    <Image style={{transform : 'scale(0.9)' ,transition : 'all .3s'}} fill src={image} alt={title}/>
                </Box>
                <Box  sx={{height : '78px' , overflow : "hidden" , display : 'flex' , alignItems : 'center'}}>
                    <Typography
                        component={'h3'}
                        variant="body1"
                        textAlign={'justify'}
                    >
                        {title}
                    </Typography>
                </Box>
                <PriceDiscount discountPrice={price} finalPrice={afterDiscountPrice}/>
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
