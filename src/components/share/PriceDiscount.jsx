import {Box} from "@mui/system";
import {Stack, Typography} from "@mui/material";
import PN from "persian-number";

const PriceDiscount = ({discountPercent, fontSize, price, finalPrice}) => {
    return (
        <Stack>
            {
                finalPrice !== price ?
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: `${discountPercent ? 'start' : 'center'} `
                    }}>
                        <Typography component={'span'} variant={fontSize} sx={{fontWeight: "bold"}} color={'primary'}>
                            {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                            <Typography component={'span'} color={'primary'} variant={fontSize}> تومان </Typography>
                        </Typography>
                        <Typography component={'span'} sx={{display: 'flex', alignItems: "center"}}
                                    variant={'subtitle1'}>
                            <Box sx={{display: ' flex', gap: .5}}>
                                <Typography
                                    variant={'caption'}
                                    sx={{textDecoration: "line-through"}}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(price)))}</Typography>
                                <Typography sx={{textDecoration: "line-through"}} component={'span'}
                                            variant={'caption'}>تومان </Typography>
                            </Box>
                            {
                                discountPercent ?
                                    <Typography variant={'caption'} sx={{
                                        backgroundColor: 'secondary.main',
                                        color: 'text.muted',
                                        ml: 1,
                                        p: .25,
                                        px: .5,
                                        textAlign: 'center',
                                        borderRadius: 1
                                    }}>{PN.convertEnToPe(Math.trunc(discountPercent))}%</Typography>
                                    :
                                    null
                            }
                        </Typography>
                    </Box>
                    :
                    <Typography component={'span'} fontWeight={'bold'} color={'primary.main'} variant={fontSize}>
                        {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                        <Typography component={'span'} color={'primary.main'} variant={fontSize}>تومان </Typography>
                    </Typography>
            }
        </Stack>
    )
}
export default PriceDiscount;