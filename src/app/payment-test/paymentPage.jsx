'use client'
import {Box, Button, Container, Grid, Typography} from "@mui/material";

const PaymentPage = ()=>{
    return(
        <Container>
            <Grid mt={4} container justifyContent={'center'}>
                <Grid item xs={12} md={8} sx={{border:'3px solid' , borderColor:'success.main' , p:3 , borderRadius:2 , display:'flex' , flexDirection:'column' , alignItems:'center'}}>
                    <Typography variant={'h4'} textAlign={'center'} sx={{fontWeight:'bold' }}>تراکنس با موفقیت انجام شد</Typography>
                    <Box width={'70%'}>
                        <Box my={2} display={'flex'} justifyContent={'space-between'}>
                            <Typography>مبلغ</Typography>
                            <Typography>10000</Typography>
                        </Box>
                        <Box mb={2} display={'flex'} justifyContent={'space-between'}>
                            <Typography>تاریخ</Typography>
                            <Typography>10000</Typography>
                        </Box>
                        <Box mb={2} display={'flex'} justifyContent={'space-between'}>
                            <Typography>ساعت</Typography>
                            <Typography>10000</Typography>
                        </Box>
                        <Button fullWidth color={'success'} variant={'contained'}>بازگشت به خانه</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default PaymentPage;