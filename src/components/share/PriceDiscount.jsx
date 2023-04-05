import {Box} from "@mui/system";
import { Stack, Typography} from "@mui/material";
import PN from "persian-number";
const PriceDiscount =({discount , fontSize , isDiscountNear , price , finalPrice})=>{
    return(
        <Stack >
                    {
                        discount ?
                            <Box sx={{display:'flex' , flexDirection :'column' ,  alignItems :`${isDiscountNear ? 'start' :'center'} `}}>
                                <Typography component={'span'} variant={fontSize} sx={{fontWeight : "bold"}} color={'secondary'}>
                                    {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                                    <Typography component={'span'} color={'secondary'} variant={fontSize}>تومان </Typography>
                                </Typography>
                                <Typography component={'span'} sx={{ display:'flex' , alignItems : "center" }} variant={'subtitle1'}>
                                    <Typography sx={{textDecoration : "line-through" }}>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(price)))}</Typography>
                                    <Typography sx={{textDecoration : "line-through"}} component={'span'} variant={fontSize}>تومان </Typography>
                                    {
                                        isDiscountNear ? 
                                        <Box sx={{backgroundColor : 'secondary.main' , color : 'white',fontSize:'10px' , ml : 1 , p:.25 ,px:.5 , textAlign:'center', borderRadius :1}}>{PN.convertEnToPe(Math.trunc(discount))} % </Box>
                                            :
                                        null
                                    }
                                </Typography>
                            </Box>
                            :
                            <Typography component={'span'} sx={{fontWeight : "bold"}} variant={fontSize} >
                                {PN.convertEnToPe(PN.sliceNumber(Math.trunc(finalPrice)))}
                                <Typography component={'span'} variant={fontSize}>تومان </Typography>
                            </Typography>
                    }
                </Stack>
    )
}
export default PriceDiscount;