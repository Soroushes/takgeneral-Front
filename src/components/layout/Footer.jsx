import {Box, Container, Grid, Typography} from "@mui/material";
import Logo from '../../assets/icons/footer/Logo.svg'
import CallIcon from '../../assets/icons/footer/call.svg';
import LocationIcon from '../../assets/icons/footer/location.svg';
import MailIcon from '../../assets/icons/footer/sms.svg';
import TelegramIcon from '../../assets/icons/footer/send-2.svg';
import InstagramIcon from '../../assets/icons/footer/instagram.svg';
import MailIcon2 from '../../assets/icons/footer/sms1.svg';
import trustImage from '../../assets/images/footer/trustImage.png';
import nationalImage from '../../assets/images/footer/nationalImage.png';
import unionImage from '../../assets/images/footer/unionImage.png';
import footerImage from '../../assets/images/footer/footerIcon.png';
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <Container>
            <Grid container sx={{mt:5  , justifyContent:'space-between' , display:'flex'}}>
                <Grid item xs={12} sx={{mt:2, borderTop:'1px solid #eee' , borderBottom:'1px solid #eee'}} display={'flex'} justifyContent={'center'}>
                    <Box sx={{width:{md:'80%' , xs:'100% '} , height:'auto' , textAlign:'center'}}>
                        <Image width={'924px'} height={'152px'} style={{width:'100%' , height:'auto'}} src={footerImage} alt={'footer'}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{borderBottom:'1px solid #eee'}} py={4}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={{md:'start' , xs:'center'}}>
                        <Box sx={{mb:1}}>
                            <Logo/>
                        </Box>
                        <Link href={"tel://+989212075118"}>
                            <Box display={'flex'} gap={1} mt={2}>
                                <CallIcon/>
                                <Typography>۰۹۲۱۲۰۷۵۱۱۸</Typography>
                            </Box>
                        </Link>
                        <Box display={'flex'} gap={1} mt={2}>
                            <MailIcon/>
                            <Typography>takgeneral@gmail.com</Typography>
                        </Box>
                        <Box display={'flex'} gap={1} mt={2}>
                            <LocationIcon/>
                            <Typography>تهران، خیابان طالقانی، نبش چهار راه بهار، پلاک 126</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} py={4} sx={{borderBottom:'1px solid #eee'}}>
                    <Box height={'100%'} display={'flex'} justifyContent={{md:'space-between' , xs:'space-around'}} >
                        <Box sx={{height:'100%'}} display={'flex'} justifyContent={'space-between'} alignItems={{md:'start' , xs:'center'}} flexDirection={'column'}>
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
                        <Box sx={{height:'100%'}} display={'flex'} justifyContent={'space-between'} alignItems={{md:'start' , xs:'center'}} flexDirection={'column'}>
                            <Typography fontWeight={'bold'} mb={2}>خدمات مشتریان</Typography>
                            <Typography mb={2}>قوانین و مقررات</Typography>
                            <Typography mb={2}>سوالات متداول</Typography>
                            <Typography>پیگیری سفارشات</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display={'flex'} gap={2}>
                        <Box sx={{width:'100%' , height:'auto' , mt:4 , background:'white', borderRadius:2 , boxShadow:1}}>
                            <Image width={'120px'} height={'132px'} style={{width:'100%' , height:'auto'}} src={trustImage} alt={''}/>
                        </Box>
                        <Box sx={{width:'100%' , height:'auto' , mt:4, background:'white', borderRadius:2, boxShadow:1}}>
                            <Image width={'120px'} height={'132px'} style={{width:'100%' , height:'auto'}} src={nationalImage} alt={''}/>
                        </Box>
                        <Box sx={{width:'100%' , height:'auto' , mt:4, background:'white', borderRadius:2, boxShadow:1}}>
                            <Image width={'120px'} height={'132px'} style={{width:'100%' , height:'auto'}} src={unionImage} alt={''}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} my={2}>
                    <Box display={'flex'} flexDirection={{md:'row'  ,xs:'column-reverse'}} alignItems={{md:'start' , xs:'center'}} gap={{md:0 , xs:2}} justifyContent={'space-between'}>
                        <Typography color={'text.muted'} variant={'body1'}>حقوق این سرویس محفوظ و متعلق به شرکت تک جنرال می‌باشد</Typography>
                        <Box display={'flex'}>
                            <TelegramIcon/>
                            <MailIcon2/>
                            <InstagramIcon/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Footer;