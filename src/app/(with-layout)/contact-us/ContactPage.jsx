'use client'
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import MailIcon from '../../../assets/icons/contact-us/sms.svg';
import LocationIcon from '../../../assets/icons/contact-us/location.svg';
import CallIcon from '../../../assets/icons/contact-us/call.svg'
import {Controller, useForm} from "react-hook-form";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import Link from "next/link";
import PN from "persian-number";

const breadcrumbData = [{url: '/contact-us', name: 'تماس با ما'}]
const ContactUsPage = () => {
    const {control, handleSubmit} = useForm();
    const onSubmitForm = () => {
    }
    return (
        <Container>
            <BreadcrumbGenerator breadcrumb={breadcrumbData} hasEmptyUrl={false}/>
            <Grid container
                  sx={{flexDirection: {xs: 'column', md: 'row'}, gap: {xs: 4, md: 0}, justifyContent: 'space-between'}}>
                <Grid item md={6} xs={12} sx={{px: {xs: 2, md: 0}}}>
                    <Typography component={'h1'} fontWeight={'bold'} variant={'h2'}>با ما در تماس باشید</Typography>
                    <Typography variant={'body1'} sx={{mt: 3}}>کارشناسان ما با پشتیبانی {PN.convertEnToPe(24)} ساعته در
                        سریع ترین زمان ممکن به درخواست های شما
                        پاسخ خواهند داد.</Typography>
                    <Grid container rowGap={2} justifyContent={'space-between'} display={'flex'} sx={{mt: {md: 12, xs: 2}}}>
                        <Grid item md={4} xs={6}>
                            <Link passHref target={'_blank'}
                                  href={'mailto:Takgeneral.com@gmail.com?Subject=Hello%20User'}>
                                <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                                    <Box sx={{
                                        backgroundColor: '#fff',
                                        aspectRatio: '1/1',
                                        p: 1.5,
                                        boxShadow: 1,
                                        borderRadius: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MailIcon/>
                                    </Box>
                                    <Typography
                                        sx={{fontSize: {md: 13, xs: 10, textAlign: 'center'}}}>Takgeneral@gmail.Com</Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Link passHref target={'_blank'} href={'https://maps.app.goo.gl/6gatqXgc8vvwEmxf8?g_st=ic'}>
                                <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                                    <Box sx={{
                                        backgroundColor: '#fff',
                                        aspectRatio: '1/1',
                                        p: 1.5,
                                        boxShadow: 1,
                                        borderRadius: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <LocationIcon/>
                                    </Box>
                                    <Typography sx={{fontSize: {md: 13, xs: 11, textAlign: 'center'}}}>تهران، خیابان
                                        طالقانی، نبش
                                        چهار راه بهار، پلاک {PN.convertEnToPe(126)}</Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Link passHref target={'_blank'} href={"tel://+989212075118"}>
                                <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                                    <Box sx={{
                                        backgroundColor: '#fff',
                                        aspectRatio: '1/1',
                                        p: 1.5,
                                        boxShadow: 1,
                                        borderRadius: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <CallIcon/>
                                    </Box>
                                    <Typography sx={{
                                        fontSize: {
                                            md: 13,
                                            xs: 11,
                                            textAlign: 'center'
                                        }
                                    }}>{PN.convertEnToPe('09212075118')}</Typography>
                                </Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{mt: {xs: 5, md: 0}, pt: 1}} item md={4.5} xs={12}>
                    <Box component={'form'} onSubmit={handleSubmit(onSubmitForm)}
                         sx={{border: {md: '1px solid #eee', xs: 'none'}, p: {md: 2, xs: 0}, pt: 3, borderRadius: 2}}>
                        <Typography sx={{mt: '-25px', mb: {xs: 4, md: 0}}} variant={'h2'} fontWeight={'bold'}>فرم تماس
                            با ما</Typography>
                        <Box sx={{mt: 2}}>
                            <Controller
                                name={'name'}
                                control={control}
                                defaultValue={''}
                                rules={{required: 'نام و نام خانوادگی اجباری می باشد'}}
                                render={({field, fieldState}) => (
                                    <TextField
                                        sx={{
                                            "& fieldset": {border: '1px solid #eee'},
                                        }}
                                        placeholder={'نام و نام خانوادگی'}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        fullWidth={true}
                                    />
                                )}/>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Controller
                                name={'number'}
                                control={control}
                                defaultValue={''}
                                rules={{required: 'شماره تماس اجباری می باشد'}}
                                render={({field, fieldState}) => (
                                    <TextField
                                        sx={{
                                            "& fieldset": {border: '1px solid #eee'},
                                        }}
                                        placeholder={'شماره تماس'}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        fullWidth={true}
                                    />
                                )}/>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Controller
                                name={'message'}
                                control={control}
                                defaultValue={''}
                                rules={{required: 'پیام اجباری می باشد'}}
                                render={({field, fieldState}) => (
                                    <TextField
                                        sx={{
                                            "& fieldset": {border: '1px solid #eee', '&:hover': 'none'},
                                            '&:hover': 'none'
                                        }}
                                        InputProps={{
                                            sx: {'&:hover': 'none'}

                                        }}
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
                        <Button size={'large'} type={'submit'} sx={{mt: 2, borderRadius: 2}} color={'primary'}
                                fullWidth variant={'contained'}>
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
export default ContactUsPage;