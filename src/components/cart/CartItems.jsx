import { Box, Grid, Typography , Stack } from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PN from "persian-number";
import mobile from '../../../public/mobile.png'
import Image from "next/image";
const CartItems = ()=>{
    return(
        <Grid container sx={{display :'flex' , rowGap :2 , backgroundColor :'white', borderRadius :3  , width :'100%' , p :2}}>
            <Grid item lg={6} md={12} xs={12}>
                <Box sx={{display :'flex' , gap:2 , justifyContent :'start' , alignItems:'center'}}>
                    <Image src={mobile}width={120} height={70} />
                    <Typography sx={{fontSize : '12px'}}>لئو AQm75 پمپ آب خانگی محیطی 1 اسب</Typography>
                </Box>
                <Box>description</Box>
                <Box>others</Box>
            </Grid>
            <Grid lg={4} md={6} xs={6} item sx={{display :'flex' , alignItems :'center', justifyContent :'start' , width :{lg :'50%' , md :'100%'}}}>
                <CartEditionButton fromCart={true} id={2}/>
            </Grid>
            <Grid lg={2} md={6} xs={6} item sx={{display :'flex' , alignItems :'center' , justifyContent:'end'}}>
            <Stack >
                            
                            <Typography component={'span'} sx={{fontWeight : "bold"}} variant={'subtitle2'} >
                                {PN.convertEnToPe(PN.sliceNumber(400000))}
                                <Typography component={'span'} variant={'subtitle2'}>تومان </Typography>
                            </Typography>
                    
                </Stack>

            </Grid>
        </Grid>
    )
}
export default CartItems;