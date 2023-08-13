import {Box, Container, Grid, Typography} from "@mui/material";
import CallIcon from '../../assets/icons/footer/call.svg';
import LocationIcon from '../../assets/icons/footer/location.svg';
import MailIcon from '../../assets/icons/footer/sms.svg';
import TelegramIcon from '../../assets/icons/footer/telegram.svg';
import InstagramIcon from '../../assets/icons/footer/instagram.svg';
import MailIcon2 from '../../assets/icons/footer/light-sms.svg';
import trustImage from '../../assets/images/footer/trustImage.png';
import nationalImage from '../../assets/images/footer/nationalImage.png';
import unionImage from '../../assets/images/footer/unionImage.png';
import logo from '../../../public/fa_logo.jpg';
import Image from "next/image";
import Link from "next/link";
import footerImage from '../../assets/images/footer/footerIcon.png'

const Footer = () => {
    return (
        <Box sx={{backgroundColor: '#FCFCFD', position: 'relative', zIndex: 4, py: 4}}>
            <Container>
                <Box sx={{mt: 2, borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}} display={'flex'}
                     justifyContent={'center'}>
                    <Box sx={{width: {md: '80%', xs: '100% '}, height: 'auto', textAlign: 'center'}}>
                        <Image width={'924px'} height={'152px'} style={{width: '100%', height: 'auto'}}
                               src={footerImage} alt={'footer'}/>
                    </Box>
                </Box>
                <Grid container sx={{justifyContent: 'space-between', display: 'flex', borderBottom: '1px solid #eee'}}>
                    <Grid item xs={12} md={4} pt={1} pb={4}>
                        <Box sx={{height: '100%'}} display={'flex'} flexDirection={'column'}
                             justifyContent={'space-between'} alignItems={{md: 'start', xs: 'center'}} >
                            <Box sx={{mb:1}}>
                                <Image src={logo} width={150} height={50}/>
                            </Box>
                            <Link href={"tel://+989212075118"}>
                                <Box display={'flex'} gap={1} mt={2}>
                                    <Box>
                                        <CallIcon/>
                                    </Box>
                                    <Typography>۰۹۲۱۲۰۷۵۱۱۸</Typography>
                                </Box>
                            </Link>
                            <Box display={'flex'} gap={1} mt={2} >
                                <Box >
                                    <MailIcon/>
                                </Box>
                                <Typography>takgeneral@gmail.com</Typography>
                            </Box>
                            <Box display={'flex'} gap={1} mt={2}>
                                <Box>
                                    <LocationIcon/>
                                </Box>
                                <Typography>تهران، خیابان طالقانی، نبش چهار راه بهار، پلاک 126</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} py={4} >
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
                        <Box display={'flex'} gap={2}>
                            <Box sx={{
                                width: '100%',
                                height: 'auto',
                                mt: 4,
                                background: 'white',
                                borderRadius: 2,
                                boxShadow: 1
                            }}>
                                <Image width={'120px'} height={'132px'} style={{width: '100%', height: 'auto'}}
                                       src={trustImage} alt={''}/>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: 'auto',
                                mt: 4,
                                background: 'white',
                                borderRadius: 2,
                                boxShadow: 1
                            }}>
                                <Image width={'120px'} height={'132px'} style={{width: '100%', height: 'auto'}}
                                       src={nationalImage} alt={''}/>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: 'auto',
                                mt: 4,
                                background: 'white',
                                borderRadius: 2,
                                boxShadow: 1
                            }}>
                                <Image width={'120px'} height={'132px'} style={{width: '100%', height: 'auto'}}
                                       src={unionImage} alt={''}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box display={'flex'} my={2} flexDirection={{md: 'row', xs: 'column-reverse'}}
                     alignItems={{md: 'start', xs: 'center'}} gap={{md: 0, xs: 2}} justifyContent={'space-between'}>
                    <Typography color={'text.muted'} variant={'body1'}>حقوق این سرویس محفوظ و متعلق به شرکت تک جنرال
                        می‌باشد</Typography>
                    <Box display={'flex'}>
                        <TelegramIcon/>
                        <MailIcon2/>
                        <InstagramIcon/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;