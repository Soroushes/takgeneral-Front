import {Box} from "@mui/system";
import {Stack, Typography} from "@mui/material";
import PN from "persian-number";

const PriceDiscount = ({discountFont = 'subtitle1', discountPrice, finalPrice , fontSize='h6'}) => {
    return (
        <Stack>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                {discountPrice &&
                    <Box sx={{display: ' flex', gap: .5}}>
                        <Typography variant={discountFont} sx={{textDecoration: "line-through"}}>
                            {PN.convertEnToPe(PN.sliceNumber(Math.trunc(discountPrice)))} تومان
                        </Typography>
                    </Box>
                }
                <Typography component={'span'} variant={fontSize} fontWeight={'bold'} color={'primary'}>
                    {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                    <Typography fontWeight={'bold'} component={'span'} color={'primary'} variant={fontSize}> تومان </Typography>
                </Typography>
            </Box>
        </Stack>
    )
}
export default PriceDiscount;