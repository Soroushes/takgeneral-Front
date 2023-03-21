import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import PN from "persian-number";
import Image from "next/image";

const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price}) => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{
                backgroundColor: "white",
                width : "100%" ,
                px : 2 ,
                py : 2 ,
                borderRadius: 2,
                aspectRatio : "1/1.5" ,
                position: "relative"
            }}>
            <Typography sx={{
                position: 'absolute',
                left: "10px",
                top: "10px",
                color: "#fff",
                backgroundColor: "secondary.main",
                borderRadius: 2,
                p: .5
            }}>{discountPercent}%</Typography>
            <Box sx={{position: 'relative', aspectRatio: "1/1", width: "70%"}}>
                <Image fill src={image} alt={title}/>
            </Box>
            <Typography
                component={'h3'}
                variant={'body2'}
                sx={{textAlign: "center"}}
            >
                {title}
            </Typography>
            {
                afterDiscountPrice ?
                    <Box sx={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
                        <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
                            <Typography
                                fontWeight={'bold'}
                                component={'span'}
                                color={'secondary'}
                                variant={'body1'}>
                                {PN.convertEnToPe(PN.sliceNumber(afterDiscountPrice))}
                            </Typography>
                            <Typography component={'span'} color={'secondary'} variant={'caption'}>تومان</Typography>
                        </Box>
                        <Typography sx={{textDecoration: "line-through" , display : "flex" , alignItems : "center"}} component={'span'} variant={'subtitle2'}>
                            {PN.convertEnToPe(PN.sliceNumber(price))}
                            <Typography component={'span'} variant={'caption'}>
                                تومان
                            </Typography>
                        </Typography>
                    </Box> :
                    <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
                        <Typography component={'span'} color={'primary.dark'} fontWeight={'bold'}
                                    variant={'h6'}>{PN.convertEnToPe(PN.sliceNumber(price))}</Typography>
                        <Typography component={'span'} color={'primary.dark'} variant={'subtitle2'}>تومان</Typography>
                    </Box>
            }
        </Stack>
    )
}
export default ProductPreviewCard;
