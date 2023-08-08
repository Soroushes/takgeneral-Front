'use client'
import {Box, Container, Grid, Typography} from "@mui/material";
import FactorIcon from '../../assets/icons/footer/factor.svg';
import CellPhoneIcon from '../../assets/icons/footer/cellPhone.svg';
import ContactIcon from '../../assets/icons/footer/contact.svg';
import DeliveryIcon from '../../assets/icons/footer/delivery.svg';
import Logo from '../../assets/icons/footer/Logo.svg'
import CallIcon from '../../assets/icons/footer/call.svg';
import LocationIcon from '../../assets/icons/footer/location.svg';
import MailIcon from '../../assets/icons/footer/sms.svg';
import TelegramIcon from '../../assets/icons/footer/send-2.svg';
import InstagramIcon from '../../assets/icons/footer/instagram.svg';
import MailIcon2 from '../../assets/icons/footer/sms1.svg';
import image1 from '../../assets/images/footer/image1.png';
import image2 from '../../assets/images/footer/image2.png';
import image3 from '../../assets/images/footer/image3.png';
import Image from "next/image";
const Footer = () => {
    return (
        <Box sx={{position : 'relative' , zIndex : 3 , backgroundColor : '#FCFCFD'}}>
            <Container>
                <Grid container sx={{justifyContent:'space-between' , display:'flex'}}>
                    <Grid item xs={12} sx={{mt:2, borderTop:'1px solid #eee' , borderBottom:'1px solid #eee'}} display={'flex'} justifyContent={'center'}>
                        <Box sx={{width: {md:'70%' , xs:'100%'}, py:3}} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
                                <FactorIcon/>
                                <Typography>صدور فاکتور و پیش فاکتور</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
                                <DeliveryIcon/>
                                <Typography>ارسال رایگان</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
                                <ContactIcon/>
                                <Typography>مشاوره رایگان</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
                                <CellPhoneIcon/>
                                <Typography>پشتیبانی ۲۴ ساعته</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{borderBottom:'1px solid #eee'}} py={4}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={{md:'start' , xs:'center'}}>
                            <Logo/>
                            <Box display={'flex'} gap={1} mt={2}>
                                <CallIcon/>
                                <Typography>۰۹۲۱۲۰۷۵۱۱۸</Typography>
                            </Box>
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
                            <Box sx={{height:'100%'}} display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
                                <Typography fontWeight={'bold'} mb={2}>تک جنرال</Typography>
                                <Typography mb={2}>درباره ما</Typography>
                                <Typography mb={2}>تماس با ما</Typography>
                                <Typography>مجله تک جنرال</Typography>
                            </Box>
                            <Box sx={{height:'100%'}} display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
                                <Typography fontWeight={'bold'} mb={2}>تک جنرال</Typography>
                                <Typography mb={2}>درباره ما</Typography>
                                <Typography mb={2}>تماس با ما</Typography>
                                <Typography>مجله تک جنرال</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display={'flex'}>
                            <Box sx={{width:'100%' , height:'auto' , mt:4}}>
                                <Image style={{width:'120px' , height:'132px'}} src={image1} alt={''}/>
                            </Box>
                            <Box sx={{width:'100%' , height:'auto' , mt:4}}>
                                <Image style={{width:'120px' , height:'132px'}} src={image2} alt={''}/>
                            </Box>
                            <Box sx={{width:'100%' , height:'auto' , mt:4}}>
                                <Image style={{width:'120px' , height:'132px'}} src={image3} alt={''}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} my={2}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography color={'text.muted'} variant={'body2'}>حقوق این سرویس محفوظ و متعلق به شرکت تک جنرال می‌باشد</Typography>
                            <Box display={'flex'}>
                                <TelegramIcon/>
                                <MailIcon2/>
                                <InstagramIcon/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Footer;