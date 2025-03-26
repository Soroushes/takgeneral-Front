import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HamburgerMenu from "../../assets/icons/layout/hamburgerMenu.svg";
import Link from "next/link";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, TextField, Typography} from "@mui/material";
import {useState} from "react";
import logo from '../../../public/logo.png'
import Image from "next/image";
import {urls} from "src/data/urls";
import XIcon from '../../assets/icons/layout/x-shape.svg';
import {Controller, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import MessageIcon from '../../assets/icons/layout/sms.svg';
import TelegramIcon from '../../assets/icons/layout/send-2.svg';
import InstagramIcon from '../../assets/icons/layout/instagram.svg';
import WhatsappIcon from '../../assets/icons/layout/whatsapp.svg';
import RingingCall from '../../assets/icons/layout/call-calling.svg';
import Call from '../../assets/icons/layout/call.svg';
import LocationIcon from '../../assets/icons/layout/location2.svg';
import CallIcon from '../../assets/icons/footer/call.svg';


const MobileHeader = ({categories}) => {
    const {mobileHeaderHeight} = useSelector(state => state.deviceInfo);
    const {control} = useForm();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const toggleSearch = () => {
        setOpenSearch(prev => !prev)
    }
    const toggleDrawer = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerIsOpen(prev => !prev);
    };

    return (
        <AppBar sx={{backgroundColor: "#fff", height: `${mobileHeaderHeight}px`}}>
            <Toolbar sx={{height: '100%'}}>
                {
                    openSearch ?
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                justifyContent: 'center',
                                alignItems: "center",
                                gap: 2,
                                width: "100%",
                            }}>
                            <Controller
                                control={control}
                                name={'searchInput'}
                                defaultValue={''}
                                render={({field}) => (
                                    <TextField sx={{width: '80%'}} size={'small'} placeholder={'جستجو در تک جنرال'}
                                               value={field.value} onChange={field.onChange}/>
                                )}
                            />
                            <Box onClick={toggleSearch}>
                                <XIcon/>
                            </Box>
                        </Box>
                        :
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                justifyContent: 'space-between',
                                alignItems: "center",
                                width: "100%",
                            }}>
                            <Box sx={{width:{xs:'50%',sm:'20%'},}}>
                                <HamburgerMenu onClick={toggleDrawer}/>
                            </Box>
                            <Drawer
                                anchor={"left"}
                                open={drawerIsOpen}
                                onClose={() => setDrawerIsOpen(false)}
                                transitionDuration={500}
                                sx={{height: '100%'}}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: 'space-between',
                                        width: "300px",
                                        height: '100%',
                                        px: 3,
                                        py: 2
                                    }}>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <Box display={'flex'} justifyContent={'center'}>
                                            <Box sx={{
                                                textAlign: 'center',
                                                width: '50%',
                                                position: 'relative',
                                                aspectRatio: '5.6/1'
                                            }}>
                                                <Image
                                                    priority
                                                    style={{marginBottom: '15px'}}
                                                    src={logo}
                                                    fill
                                                    alt="Takgeneral Logo"
                                                />
                                            </Box>
                                        </Box>
                                        <Link onClick={() => {
                                            setDrawerIsOpen(false)
                                        }} style={{display: 'block', width: "100%"}} href={'/'}>
                                            <Box
                                                sx={{
                                                    py: 1.5,
                                                    display: 'flex',
                                                    width: "100%",
                                                    gap: 1,
                                                    alignItems: 'center'
                                                }}
                                            >

                                                <Typography variant={'body2'}>خانه</Typography>
                                            </Box>
                                        </Link>
                                        <Link onClick={() => {
                                            setDrawerIsOpen(false)
                                        }} style={{display: 'block', width: "100%"}} href={'/contact-us'}>
                                            <Box
                                                sx={{
                                                    py: 1.5,
                                                    display: 'flex',
                                                    width: "100%",
                                                    gap: 1,
                                                    alignItems: 'center'
                                                }}
                                            >

                                                <Typography variant={'body2'}>تماس با ما</Typography>
                                            </Box>
                                        </Link>
                                        <Link onClick={() => {
                                            setDrawerIsOpen(false)
                                        }} style={{display: 'block', width: "100%"}} href={'/about-us'}>
                                            <Box
                                                sx={{
                                                    py: 1.5,
                                                    display: 'flex',
                                                    width: "100%",
                                                    gap: 1,
                                                    alignItems: 'center'
                                                }}
                                            >

                                                <Typography variant={'body2'}>درباره ما</Typography>
                                            </Box>
                                        </Link>
                                        <Link onClick={() => {
                                            setDrawerIsOpen(false)
                                        }} style={{display: 'block', width: "100%"}} href={'/blog'}>
                                            <Box
                                                sx={{
                                                    py: 1.5,
                                                    display: 'flex',
                                                    width: "100%",
                                                    gap: 1,
                                                    alignItems: 'center'
                                                }}
                                            >

                                                <Typography variant={'body2'}>وبلاگ</Typography>
                                            </Box>
                                        </Link>
                                        <Typography sx={{py: 1, fontWeight: 'bold'}} variant='h4'>دسته بندی های تک جنرال</Typography>
                                        {categories?.map((item) => {
                                            return (
                                               item.children.length ? (
                                                   <Accordion key={item.name} sx={{backgroundColor: "#fff", boxShadow: 'none', p: 0}}>
                                                       <AccordionSummary
                                                           sx={{p: 0}}
                                                           // expandIcon={<ExpandMoreIcon/>}
                                                       >
                                                           <Link onClick={() => {
                                                               setDrawerIsOpen(false)
                                                           }} href={`/category/${item.url}`}>
                                                               <Typography>{item.name}</Typography>
                                                           </Link>
                                                       </AccordionSummary>
                                                       <AccordionDetails sx={{p: 0}}>
                                                           <Box>
                                                               {
                                                                   item.children.map((child) => {
                                                                       return (
                                                                           <Link key={child.id} onClick={() => {
                                                                               setDrawerIsOpen(false)
                                                                           }} href={`/category/${child.url}`}>
                                                                               <Typography mb={2}>{child.name}</Typography>
                                                                           </Link>
                                                                       )
                                                                   })
                                                               }
                                                           </Box>
                                                       </AccordionDetails>
                                                   </Accordion>
                                               ) : (
                                                   <Box key={item.name} py='15px'>
                                                       <Link onClick={() => {
                                                           setDrawerIsOpen(false)
                                                       }} href={`/category/${item.url}`}>
                                                           <Typography>{item.name}</Typography>
                                                       </Link>
                                                   </Box>
                                               )

                                            )
                                        })}
                                    </Box>
                                    <Box textAlign={'center'} sx={{borderTop: '1px solid #eee'}}>
                                        <Box display={'flex'} gap={1} justifyContent={'center'} mb={1} mt={2}>
                                            <Link passHref target={'_blank'}
                                                  href={'https://instagram.com/_u/tak_general/'}>
                                                <InstagramIcon/>
                                            </Link>
                                            <Link passHref target={'_blank'} href={'https://wa.me/989212075118'}>
                                                <WhatsappIcon/>
                                            </Link>
                                            <Link passHref target={'_blank'}
                                                  href={'mailto:takgeneral.com@gmail.com?Subject=Hello%20User'}>
                                                <MessageIcon/>
                                            </Link>
                                            <Link passHref target={'_blank'} href={'https://t.me/atworkk'}>
                                                <TelegramIcon/>
                                            </Link>
                                            <Link passHref target={'_blank'} href={'tel:989212075118'}>
                                                <RingingCall/>
                                            </Link>
                                            <Link passHref target={'_blank'} href={'tel:+982177500376'}>
                                                <Call/>
                                            </Link>
                                            <Link passHref target={'_blank'}
                                                  href={'https://maps.app.goo.gl/6gatqXgc8vvwEmxf8?g_st=ic'}>
                                                <LocationIcon/>
                                            </Link>
                                        </Box>
                                        <Typography component={'p'} variant={'subtitle2'}>حقوق این سرویس محفوظ و متعلق
                                            به شرکت تک جنرال
                                            می‌باشد</Typography>
                                    </Box>
                                </Box>
                            </Drawer>
                            <Link style={{width: '100%'}} href={urls.home}>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Box sx={{
                                        textAlign: 'center',
                                        width: '55%',
                                        position: 'relative',
                                        aspectRatio: '5.6/1'
                                    }}>
                                        <Image
                                            priority
                                            src={logo}
                                            fill
                                            alt="Takgeneral Logo"
                                        />
                                    </Box>
                                </Box>
                            </Link>
                            {/*<Box onClick={toggleSearch}>*/}
                            {/*    <SearchIcon/>*/}
                            {/*</Box>*/}
                            <Box sx={{width:{xs:'60%',sm:'20%'},display:'flex',justifyContent:'end'}}>
                                {/*<Link title={'09212075118'} aria-label={`${PN.convertEnToPe('09212075118')}`} passHref target={'_blank'} href={"tel:989212075118"}>*/}
                                {/*    <Typography fontWeight={'bold'} variant={'subtitle1'}>{PN.convertEnToPe('09212075118')}</Typography>*/}
                                {/*</Link>*/}
                                {/*<Link title={'02177500376'} aria-label={PN.convertEnToPe('02177500376')} passHref target={'_blank'} href={"tel:+982177500376"}>*/}
                                {/*    <Typography fontWeight={'bold'} variant={'subtitle1'}>{PN.convertEnToPe('02177500376')}</Typography>*/}
                                {/*</Link>*/}
                                <Button fullWidth sx={{px:0}} size={'small'} variant={'contained'}>
                                    <CallIcon fill='white'/>
                                    <Link title={'09212075118'} passHref target={'_blank'} href={"tel://+989212075118"}>مشاوره رایگان</Link>
                                </Button>
                            </Box>
                        </Box>

                }
            </Toolbar>
        </AppBar>
    );
};
export default MobileHeader;
