import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import PriceDiscount from "./PriceDiscount";
import PN from "persian-number";

const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price , id}) => {
    return (
        <Link href={`/single-product/${id}`}>
            <Stack
                alignItems={'center'}
                justifyContent={'space-between'}
                sx={{
                    backgroundColor: "white",
                    width : "100%" ,
                    px : 2 ,
                    pt : 1 ,
                    pb : 1.5,
                    borderRadius: 2,
                    aspectRatio : "1/1.3" ,
                    position: "relative"
                }}>
                {
                    discountPercent ?
                        <Typography
                            variant={'caption'}
                            sx={{
                                position: 'absolute',
                                left: "10px",
                                top: "10px",
                                color: "#fff",
                                backgroundColor: "secondary.main",
                                borderRadius: 2,
                                p: .5
                            }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%
                        </Typography> : null
                }
                <Box sx={{position: 'relative', aspectRatio: "1/1", width: "70%"}}>
                    <Image fill src={image} alt={title}/>
                </Box>
                <Typography
                    component={'h3'}
                    fontWeight={"bold"}
                    variant="subtitle2"
                    sx={{textAlign: "center" , height : "30%" , overflow : "hidden" ,  display : "flex" , alignItems : "center"}}
                >
                    {title}
                </Typography>
                <PriceDiscount price={price} finalPrice={afterDiscountPrice} fontSize={'subtitle1'}/>
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
