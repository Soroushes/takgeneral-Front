import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import PN from "persian-number";
import Image from "next/image";
import Link from "next/link";

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
                            }}>{Math.trunc(discountPercent)}%
                        </Typography> : null
                }

                <Box sx={{position: 'relative', aspectRatio: "1/1", width: "70%"}}>
                    <Image fill src={image} alt={title}/>
                </Box>
                <Typography
                    component={'h3'}
                    fontWeight={"bold"}
                    sx={{textAlign: "center" , height : "30%" , overflow : "hidden" , fontSize : {xs : "9px" , sm : "11px"} , display : "flex" , alignItems : "center"}}
                >
                    {title}
                </Typography>
                {
                    discountPercent ?
                        <Box sx={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
                            <Box sx={{display: "flex", gap: .5, alignItems: "center"}}>
                                <Typography
                                    fontWeight={'bold'}
                                    component={'span'}
                                    color={'secondary'}
                                    sx={{fontSize : {xs : '13px' , md : "15px"}}}
                                >
                                    {PN.convertEnToPe(PN.sliceNumber(Math.trunc(Math.trunc(afterDiscountPrice))))}
                                </Typography>
                                <Typography component={'span'} color={'secondary'} sx={{fontSize : {xs : '11px' , md : "13px"}}}>تومان</Typography>
                            </Box>
                            <Typography sx={{textDecoration: "line-through" , display : "flex" , alignItems : "center" , fontSize : {xs : '10px' , md : "11px"}}} component={'span'}>
                                {PN.convertEnToPe(PN.sliceNumber(Math.trunc(price)))}
                                <Typography component={'span'} sx={{fontSize : {xs : '10px' , md : "11px"}}}>
                                    تومان
                                </Typography>
                            </Typography>
                        </Box> :
                        <Box sx={{display: "flex", gap: .5, alignItems: "center" , mb : 1.5}}>
                            <Typography component={'span'} color={'primary.dark'} fontWeight={'bold'} sx={{fontSize: {xs : '13px' , md : "15px"}}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(price)))}</Typography>
                            <Typography component={'span'} color={'primary.dark'} sx={{fontSize: {xs : '11px' , md : "13px"}}}>تومان</Typography>
                        </Box>
                }
            </Stack>
        </Link>
    )
}
export default ProductPreviewCard;
