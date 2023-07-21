'use client'
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import ContactTestIcon from '../../assets/icons/contact-us/sms.svg';
import {Controller , useForm} from "react-hook-form";

const ContactUs = () => {
    const {control , handleSubmit} = useForm();
    const onSubmitForm = ()=>{
        console.log(1)
    }
    return (
        <Container sx={{mt:2}}>
            <Grid container sx={{flexDirection:{xs:'column-reverse' , md:'row'} , justifyContent:'space-between'}}>
                <Grid item md={6} xs={12} sx={{mt:{xs:2 , md:0} , p:{xs:2 , md:0}}}>
                    <Typography fontWeight={'bold'} variant={'h4'}>با ما در تماس باشید</Typography>
                    <Typography variant={'subtitle1'} sx={{mt:2}}>کارشناسان ما در سریع ترین زمان ممکن به درخواست های شما پاسخ خواهند داد.</Typography>
                    <Box justifyContent={'space-between'} display={'flex'} gap={1} sx={{mt: {md:8 , xs:2}}}>
                        <Box sx={{width:'30%'}} display={'flex'} flexDirection={'column'} gap={1} alignItems={'center'}>
                            <ContactTestIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign:'center'}}>takgeneral@gmail.com</Typography>
                        </Box>
                        <Box sx={{width:'30%'}} display={'flex'} flexDirection={'column'} gap={1} alignItems={'center'}>
                            <ContactTestIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign:'center'}}>تهران، خیابان طالقانی، نبش
                                چهار راه بهار، پلاک 126</Typography>
                        </Box>
                        <Box sx={{width:'30%'}} display={'flex'} flexDirection={'column'} gap={1}  alignItems={'center'}>
                            <ContactTestIcon/>
                            <Typography variant={'subtitle1'} sx={{textAlign:'center'}}>۰۹۲۱۲۰۷۵۱۱۸</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Box component={'form'} onSubmit={handleSubmit(onSubmitForm)} sx={{border : {md:'1px solid #eee' , xs:'none'} , p:2 , borderRadius:2}}>
                        <Typography fontWeight={'bold'}>فرم تماس با ما</Typography>
                        <Box sx={{mt:2}}>
                            <Controller
                                name={'name'}
                                control={control}
                                defaultValue={''}
                                rules={{required:'نام و نام خانوادگی اجباری می باشد'}}
                                render={({field , fieldState})=>(
                                    <TextField
                                        placeholder={'نام و نام خانوادگی'}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        fullWidth={true}
                                    />
                                )}/>
                        </Box>
                        <Box sx={{mt:2}}>
                            <Controller
                                name={'number'}
                                control={control}
                                defaultValue={''}
                                rules={{required:'شماره تماس اجباری می باشد'}}
                                render={({field , fieldState})=>(
                                    <TextField
                                        placeholder={'شماره تماس'}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        fullWidth={true}
                                    />
                                )}/>
                        </Box>
                        <Box sx={{mt:2}}>
                            <Controller
                                name={'message'}
                                control={control}
                                defaultValue={''}
                                rules={{required:'پیام اجباری می باشد'}}
                                render={({field , fieldState})=>(
                                    <TextField
                                        placeholder={'متن پیام'}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        fullWidth={true}
                                        multiline={true}
                                        rows={4}
                                    />
                                )}/>
                        </Box>
                        <Button type={'submit'} sx={{mt:2 , borderRadius : 2}} color={'primary'} fullWidth variant={'contained'}>
                            <Typography variant={'body2'} color={'white'}>
                                ارسال پیام
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ContactUs;