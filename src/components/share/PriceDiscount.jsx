import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import PN from "persian-number";

const PriceDiscount = ({
                           discountedPriceFont = 'subtitle1',
                           discountPrice,
                           finalPrice,
                           fontSize = 'h6',
                           gap = 0,
                           align = 'start',
                           finalPriceColor = 'primary',
                           discountedPriceColor = 'text.main',
                            finalPriceBold = false ,
                            discountedPriceBold = false
                       }) => {
    return (
            <Box sx={{
                width:'100%',
                display: 'flex',
                flexDirection: {md:'column' , xs:'row'},
                alignItems: align,
                justifyContent :'space-between',
                gap: gap
            }}>
                {discountPrice !== finalPrice &&
                    <Box sx={{display: ' flex', gap: .5}}>
                        <Typography fontWeight={discountedPriceBold?  'bold' : 'normal'} color={discountedPriceColor} variant={discountedPriceFont}
                                    sx={{textDecoration: "line-through"}}>
                            {PN.convertEnToPe(PN.sliceNumber(Math.trunc(discountPrice)))} تومان
                        </Typography>
                    </Box>
                }
                <Typography fontWeight={finalPriceBold?  'bold' : 'normal'} component={'span'} variant={fontSize} color={finalPriceColor}>
                    {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                    <Typography fontWeight={finalPriceBold?  'bold' : 'normal'} component={'span'} color={finalPriceColor} variant={fontSize}> تومان </Typography>
                </Typography>
            </Box>
    )
}
export default PriceDiscount;