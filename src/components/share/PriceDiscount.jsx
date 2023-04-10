import {Box} from "@mui/system";
import {Stack, Typography} from "@mui/material";
import PN from "persian-number";

const PriceDiscount = ({discountPercent, fontSize, price, finalPrice}) => {
    return (
        <Stack>
            {
                finalPrice!==price ?
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: `${discountPercent ? 'start' : 'center'} `
                    }}>
                        <Typography component={'span'} variant={fontSize} sx={{fontWeight: "bold"}} color={'secondary'}>
                            {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                            <Typography component={'span'} color={'secondary'} variant={fontSize}>تومان </Typography>
                        </Typography>
                        <Typography component={'span'} sx={{display: 'flex', alignItems: "center"}} variant={'subtitle1'}>
                            <Typography
                                variant={fontSize}
                                sx={{textDecoration: "line-through"}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(price)))}</Typography>
                            <Typography sx={{textDecoration: "line-through"}} component={'span'} variant={fontSize}>تومان </Typography>
                            {
                                discountPercent ?
                                    <Box sx={{
                                        backgroundColor: 'secondary.main',
                                        color: 'white',
                                        fontSize: '10px',
                                        ml: 1,
                                        p: .25,
                                        px: .5,
                                        textAlign: 'center',
                                        borderRadius: 1
                                    }}>{PN.convertEnToPe(Math.trunc(discountPercent))} % </Box>
                                    :
                                    null
                            }
                        </Typography>
                    </Box>
                    :
                    <Typography component={'span'} sx={{fontWeight: "bold"}} variant={fontSize}>
                        {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                        <Typography component={'span'} variant={fontSize}>تومان </Typography>
                    </Typography>
            }
        </Stack>
    )
}
export default PriceDiscount;