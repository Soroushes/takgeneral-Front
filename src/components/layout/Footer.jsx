import {Box, Container, Grid, Typography} from "@mui/material";
import CallIcon from '../../assets/icons/footer/call.svg';
import LocationIcon from '../../assets/icons/footer/location.svg';
import MailIcon from '../../assets/icons/footer/sms.svg';
import TelegramIcon from '../../assets/icons/footer/telegram.svg';
import InstagramIcon from '../../assets/icons/footer/instagram.svg';
import WhatsappIcon from '../../assets/icons/footer/whatsapp-1.svg';
import logo from '../../../public/fa_logo.jpg';
import Image from "next/image";
import Link from "next/link";
import PN from "persian-number";
import FactorIcon from '../../assets/icons/footer/factor.svg'
import DeliveryIcon from '../../assets/icons/footer/delivery.svg'
import PhoneIcon from '../../assets/icons/footer/cellPhone.svg'
import ContactIcon from '../../assets/icons/footer/contactIcon.svg'
import {useEffect, useState} from "react";

const Footer = () => {
    const [icons, setIcons] = useState({
        factor: '', delivery: '', phone: '', contact: ''
    })
    useEffect(() => {
        setIcons({
            factor: <FactorIcon/>, delivery: <DeliveryIcon/>, phone: <PhoneIcon/>, contact: <ContactIcon/>
        })
    }, [])
    return (
        <Box width={'100%'} component={'footer'} sx={{backgroundColor: '#FCFCFD', position: 'relative', zIndex: 4, pb: 4, pt: 2}}>
            <Container>
                <Box sx={{mt: 2 , borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}} display={'flex'}
                     justifyContent={'center'}>
                    <Box sx={{width: {md: '80%', xs: '100%'}}} display={'flex'} justifyContent={'space-between'} my={2}>
                        <Box display={'flex'} width={'25%'} gap={1} flexDirection={'column'} alignItems={'center'}>
                            {
                                icons?.factor
                            }
                            <Typography variant={'subtitle1'} textAlign={'center'}>صدور فاکتور و پیش فاکتور</Typography>
                        </Box>
                        <Box display={'flex'} width={'25%'} gap={1} flexDirection={'column'} alignItems={'center'}>
                            {
                                icons?.delivery
                            }
                            <Typography variant={'subtitle1'} textAlign={'center'}>ارسال رایگان</Typography>
                        </Box>
                        <Box display={'flex'} width={'25%'} gap={1} flexDirection={'column'} alignItems={'center'}>
                            {
                                icons?.contact
                            }
                            <Typography variant={'subtitle1'} textAlign={'center'}>مشاوره رایگان</Typography>
                        </Box>
                        <Box display={'flex'} width={'25%'} gap={1} flexDirection={'column'} alignItems={'center'}>
                            {
                                icons?.phone
                            }
                            <Typography variant={'subtitle1'} textAlign={'center'}>پشتیبانی ۲۴ ساعته</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container sx={{justifyContent: 'space-between' , pb:{xs:2 , md:0}, display: 'flex', borderBottom: '1px solid #eee'}}>
                    <Grid item xs={12} md={4} pt={1} pb={4}>
                        <Box sx={{height: '100%'}} display={'flex'} flexDirection={'column'}
                             justifyContent={'space-between'} alignItems={{md: 'start', xs: 'center'}}>
                            <Link href={'/'}>
                                <Box sx={{mb: 1}}>
                                    <Image priority alt={''} src={logo} width={150} height={50}/>
                                </Box>
                            </Link>
                            <Box display={'flex'} mt={2}>
                                <Box mr={1}>
                                    <CallIcon/>
                                </Box>
                                <Link passHref target={'_blank'} href={"tel:989212075118"}>
                                    <Typography>{PN.convertEnToPe('09212075118')} _</Typography>
                                </Link>
                                <Link passHref target={'_blank'} href={"tel:+982177500376"}>
                                    <Typography> {PN.convertEnToPe('02177500376')}</Typography>
                                </Link>
                            </Box>
                            <Link passHref target={'_blank'}
                                  href={'mailto:Takgeneral.com@gmail.com?Subject=Hello%20User'}>
                                <Box display={'flex'} gap={1} mt={2}>
                                    <Box>
                                        <MailIcon/>
                                    </Box>
                                    <Typography>Takgeneral.com@gmail.com</Typography>
                                </Box>
                            </Link>
                            <Link passHref target={'_blank'} href={'https://maps.app.goo.gl/6gatqXgc8vvwEmxf8?g_st=ic'}>
                                <Box display={'flex'} gap={1} mt={2}>
                                    <Box>
                                        <LocationIcon/>
                                    </Box>
                                    <Typography>تهران، خیابان طالقانی، نبش چهار راه بهار،
                                        پلاک {PN.convertEnToPe(126)}</Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} py={4}>
                        <Box height={'100%'} display={'flex'}
                             justifyContent={{md: 'space-between', xs: 'space-around'}}>
                            <Box sx={{height: '100%'}} display={'flex'} justifyContent={'space-between'}
                                 alignItems={{md: 'start', xs: 'center'}} flexDirection={'column'}>
                                <Link href={'/'}>
                                    <Typography fontWeight={'bold'} mb={2}>تک جنرال</Typography>
                                </Link>
                                <Link href={'/about-us'}>
                                    <Typography mb={2}>درباره ما</Typography>
                                </Link>
                                <Link href={'/contact-us'}>
                                    <Typography mb={2}>تماس با ما</Typography>
                                </Link>
                                <Link href={'/blog'}>
                                    <Typography>مجله تک جنرال</Typography>
                                </Link>
                            </Box>
                            <Box sx={{height: '100%'}} display={'flex'} justifyContent={'space-between'}
                                 alignItems={{md: 'start', xs: 'center'}} flexDirection={'column'}>
                                <Typography fontWeight={'bold'} mb={2}>خدمات مشتریان</Typography>
                                <Typography mb={2}>قوانین و مقررات</Typography>
                                <Typography mb={2}>سوالات متداول</Typography>
                                <Typography>پیگیری سفارشات</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display={'flex'} justifyContent={'center'} gap={4}>
                            <Box width={86} height={94} sx={{
                                mt: 4,
                                background: 'white',
                                borderRadius: 2,
                            }}>
                                <img referrerPolicy='origin' width={86} height={94} id='rgvjwlaooeukwlaofukzoeuk' style={{cursor: 'pointer'}}
                                       onClick={()=> {
                                           window.open("https://logo.samandehi.ir/Verify.aspx?id=348468&p=xlaoaodsmcsiaodsgvkamcsi", "Popup", "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")
                                       }}
                                       alt='logo-samandehi'
                                       src='https://logo.samandehi.ir/logo.aspx?id=348468&p=qftishwlaqgwshwlwlbqaqgw'/>
                            </Box>
                            <Box width={86} height={94} sx={{
                                mt: 4,
                                background: 'white',
                                borderRadius: 2,
                            }}>
                                <a referrerPolicy='origin' target='_blank'
                                   href='https://trustseal.enamad.ir/?id=344613&Code=oFIMPdMkR76yp32fW0aU'>
                                    <img referrerPolicy='origin' width={86} height={94}
                                         src='https://trustseal.enamad.ir/logo.aspx?id=344613&Code=oFIMPdMkR76yp32fW0aU'
                                         alt=''
                                         style={{cursor: 'pointer'}}
                                    /></a>
                            </Box>
                            {/*<Box sx={{*/}
                            {/*    width: '100%',*/}
                            {/*    height: 'auto',*/}
                            {/*    mt: 4,*/}
                            {/*    background: 'white',*/}
                            {/*    borderRadius: 2,*/}
                            {/*    boxShadow: 1*/}
                            {/*}}>*/}
                            {/*    <Image width={84} height={94} style={{width: '100%', height: 'auto'}}*/}
                            {/*           src={unionImage} alt={''}/>*/}
                            {/*</Box>*/}
                        </Box>
                    </Grid>
                </Grid>
                <Box display={'flex'} my={2} flexDirection={{md: 'row', xs: 'column-reverse'}}
                     alignItems={{md: 'start', xs: 'center'}} gap={{md: 0, xs: 2}} justifyContent={'space-between'}>
                    <Typography color={'text.muted'} variant={'body1'}>حقوق این سرویس محفوظ و متعلق به شرکت تک جنرال
                        می‌باشد</Typography>
                    <Box display={'flex'}>
                        <Link passHref target={'_blank'} href={'https://t.me/atworkk'}>
                            <TelegramIcon/>
                        </Link>
                        <Link passHref target={'_blank'} href={'https://instagram.com/_u/tak_general/'}>
                            <InstagramIcon/>
                        </Link>
                        <Link passHref target={'_blank'} href={"https://wa.me/989212075118"}>
                            <WhatsappIcon/>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;