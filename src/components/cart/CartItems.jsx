import {Box, Grid, Typography, Stack} from "@mui/material";
import CartEditionButton from "../share/CartEditionButton";
import PN from "persian-number";
import mobile from '../../../public/mobile.png'
import Image from "next/image";
const CartItems = () => {
    return (
        <Grid container rowGap={2} sx={{borderRadius: 3, p: 2, mb: 4, backgroundColor: "#fff"}}>
            <Grid item lg={6} xs={12}>
                <Box sx={{display: 'flex', gap: 2, alignItems: {lg: "center"}}}>
                    <Image width={100} height={100} src={mobile}/>
                    <Box>
                        <Typography sx={{fontSize: '12px', mb: 1}}>لئو AQm75  پمپ آب خانگی محیطی 1  پمپ آب خانگی محیطی 1  پمپ آب خانگی محیطی 1 اسب</Typography>
                        <Box sx={{display: {lg: 'none'}}}>
                            <Typography>descriptionssssssssssss</Typography>
                            <Typography>description</Typography>
                            <Typography>description</Typography>
                            <Typography>description</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid lg={6} xs={12} item sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <CartEditionButton fromCart={true} id={2}/>
                <Stack>
                    {/*<Typography component={'span'} sx={{fontWeight: "bold"}} variant={'subtitle2'}>*/}
                    {/*    {PN.convertEnToPe(PN.sliceNumber(400000))}*/}
                    {/*    <Typography component={'span'} variant={'subtitle2'}>تومان </Typography>*/}
                    {/*</Typography>*/}
                    <Typography component={'span'} variant={'h6'} sx={{fontWeight: "bold"}} color={'secondary'}>
                        {PN.convertEnToPe(PN.sliceNumber(5000000000))}
                        <Typography component={'span'} color={'secondary'} variant={'body2'}>تومان </Typography>
                    </Typography>
                    <Typography component={'span'} sx={{display: 'flex', alignItems: "center"}} variant={'subtitle1'}>
                        <Typography
                            sx={{textDecoration: "line-through"}}>{PN.convertEnToPe(PN.sliceNumber(5000000000))}</Typography>
                        <Typography sx={{textDecoration: "line-through"}} component={'span'}
                                    variant={'caption'}>تومان </Typography>
                        <Box sx={{
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontSize: '12px',
                            ml: 1,
                            p: .25,
                            px: .5,
                            textAlign: 'center',
                            borderRadius: 1
                        }}>{PN.convertEnToPe(10)} % </Box>
                    </Typography>
                </Stack>
            </Grid>
            <Grid sx={{display: {lg: 'flex', xs: "none"}}} item lg={12}>
                <Box gap={3} display={'flex'}>
                    <Typography>description</Typography>
                    <Typography>description</Typography>
                    <Typography>description</Typography>
                    <Typography>description</Typography>
                    <Typography>description</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
export default CartItems;