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
                           discountedPriceBold = false,
                           justify = 'column' ,
                            justifyContent = 'space-between'
                       }) => {
    return (
            <Box sx={{
                width:'100%',
                display: 'flex',
                flexDirection: justify,
                alignItems: align,
                justifyContent :justifyContent,
                gap: gap,
            }}>
                {discountPrice !== finalPrice &&
                        <Typography fontWeight={discountedPriceBold?  'bold' : 'normal'} color={discountedPriceColor} variant={discountedPriceFont} sx={{textDecoration: "line-through"}}>
                            {PN.convertEnToPe(PN.sliceNumber(Math.trunc(discountPrice)))} تومان
                        </Typography>
                }
                <Typography fontWeight={finalPriceBold?  'bold' : 'normal'} component={'span'} variant={fontSize} color={finalPriceColor}>
                    {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                    <Typography fontWeight={finalPriceBold?  'bold' : 'normal'} component={'span'} color={finalPriceColor} variant={fontSize}> تومان </Typography>
                </Typography>
            </Box>
    )
}
export default PriceDiscount;