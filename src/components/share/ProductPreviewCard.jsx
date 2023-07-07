import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";
import { urls } from "src/data/urls";
const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price , id ,shadow}) => {
    return (
        <Link href={urls.singleProduct + id}>
            <Stack
                justifyContent={'space-between'}
                sx={{
                    backgroundColor: "#fff",
                    width : "100%" ,
                    px : 2 ,
                    pb : .5,
                    borderRadius: 2,
                    aspectRatio : '1/1.5' ,
                    position: "relative",
                    boxShadow: shadow ? shadow : 0 ,
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
                                height : 30 ,
                                borderRadius : '50%'
                            }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%
                        </Typography> : null
                }
                <Box>
                    <Box textAlign={'center'}>
                        <Image width={140} height={140} style={{transform : 'scale(0.9)' ,transition : 'all .3s' , width : '100%' , aspectRatio : '1/1'}} src={image} alt={title}/>
                    </Box>
                    <Box  sx={{height : {xs : '65px' , md : '78px'} , overflow : "hidden" , display : 'flex' , alignItems : 'center'}}>
                        <Typography
                            component={'h3'}
                            variant="body2"
                            textAlign={'justify'}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <PriceDiscount discountPrice={price} finalPrice={afterDiscountPrice}/>
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
