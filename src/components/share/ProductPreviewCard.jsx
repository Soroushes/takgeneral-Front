import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import PN from "persian-number";

const ProductPreviewCard = ({title, discountPercent, image, afterDiscountPrice, price}) => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{
                backgroundColor: "white",
                px: {xs: 2, md: 5},
                py: {xs : 2 , md : 4},
                borderRadius: 2,
                height: {xs: '350px', md: "400px"} ,
                position : "relative"
            }}>
            <Typography sx={{position : 'absolute' , left : "10px" , top : "10px" , color : "#fff" , backgroundColor : "secondary.main" , borderRadius : 2 , p : .5}}>{discountPercent}%</Typography>
            <img style={{aspectRatio: "1/1"}} src={image} alt={title}/>
            <Typography component={'h3'} variant={'body2'} sx={{fontWeight: "bold", textAlign: "center"}}>{title}</Typography>
            {
                afterDiscountPrice ?
                    <Box sx={{display : "flex"  ,flexDirection : 'column' , alignItems : "center"}}>
                        <Box sx={{display : "flex" , gap : 1 , alignItems : "center"}}>
                            <Typography component={'span'} color={'secondary'} variant={'h6'}>{PN.convertEnToPe(PN.sliceNumber(afterDiscountPrice))}</Typography>
                            <Typography component={'span'} color={'secondary'} variant={'subtitle2'}>تومان</Typography>
                        </Box>
                        <Box sx={{display : "flex" , gap : .7 , alignItems : "center"}}>
                            <Typography component={'span'} variant={'subtitle1'}>{PN.convertEnToPe(PN.sliceNumber(price))}</Typography>
                            <Typography component={'span'} variant={'caption'}>تومان</Typography>
                        </Box>
                    </Box> : null
            }
        </Stack>
    )
}
export default ProductPreviewCard;
