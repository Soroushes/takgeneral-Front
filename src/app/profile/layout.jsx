'use client' ;
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {LOGOUT} from "@/redux/slices/userInfoSlice";
import UserIcon from "../../assets/icons/layout/user";
import {urls} from "@/data/urls";
import LocationIcon from "../../assets/icons/layout/locationIcon";
import ExitIcon from "../../assets/icons/layout/exit";
import {Button, Container, Grid, Typography ,Box} from "@mui/material";
import MainModal from "../../components/share/MainModal";
import Link from "next/link";

export default function Layout ({children}) {
    const dispatch = useDispatch();
    const [openExitModal , setOpenExitModal] = useState(false);
    const router = useRouter() ;
    const pathName = usePathname()
    const removeToken = ()=>{
        dispatch(LOGOUT()) ;
        router.push('/');
    }
    const panelItems = [
        {
            title : 'مشخصات فردی' ,
            icon : <UserIcon/> ,
            activeIcon : <UserIcon active/> ,
            link : urls.profile ,
        },
        {
            title : 'آدرس ها' ,
            icon : <LocationIcon/> ,
            activeIcon: <LocationIcon active/> ,
            link : urls.ProfileAddress ,
        },
    ]
    useEffect(() => {
        // todo get token from redux
        const token = localStorage.getItem('token');
        if (!token) {
            router.push(urls.login);
        }
    }, [])
    return (
        <>
            <Container maxWidth={'lg'} sx={{mt: {xs : 1 , md : 5}}}>
                <Grid container justifyContent={'space-between'}>
                    <Grid xs={12} md={3} lg={2.5} item>
                        <Box sx={{
                            cursor: "pointer",
                            mb: 2,
                            display: "flex",
                            flexDirection: {xs: "row", md: "column"},
                            backgroundColor: 'gray.lighter',
                            borderRadius: 4,
                            overflowX :{xs : 'scroll' , md : 'auto'}
                        }}>
                            {
                                panelItems.map((item) => {
                                    const active = pathName===item.link ;
                                    return (
                                        <Link key={item.title} href={item.link ?? ''} onClick={item.onClick?.bind(this)}>
                                            <Box sx={{
                                                display: "flex",
                                                height : "100%" ,
                                                flexDirection: {xs: "column", md: "row"},
                                                py: 2,
                                                px : 2 ,
                                                gap: 1,
                                                borderRadius : 3 ,
                                                alignItems: "center",
                                                justifyContent: {xs: "center", md: 'start'} ,
                                                backgroundColor : active ? "primary.main" : ""
                                            }}>
                                                {active ? item.activeIcon : item.icon}
                                                <Typography variant={'subtitle1'} sx={{color : active ? "white" : "text.main" , textAlign : "center" , whiteSpace : "nowrap"}}>{item.title}</Typography>
                                            </Box>
                                        </Link>
                                    )
                                })
                            }
                            <Box
                                onClick={()=>{
                                    setOpenExitModal(true) ;
                                }}
                                sx={{
                                display: "flex",
                                height : "100%" ,
                                flexDirection: {xs: "column", md: "row"},
                                py: 2,
                                px : 2 ,
                                gap: 1,
                                borderRadius : 3 ,
                                alignItems: "center",
                                justifyContent: {xs: "center", md: 'start'} ,
                            }}>
                                <ExitIcon/>
                                <Typography variant={'subtitle1'} sx={{color : "text.main" , textAlign : "center" , whiteSpace : "nowrap"}}>خروج</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{backgroundColor: "white", height: 'fit-content', borderRadius: 4}} xs={12} md={8} lg={9} item>
                        {children}
                    </Grid>
                </Grid>
            </Container>
            <MainModal setOpen={setOpenExitModal} open={openExitModal} title={'خروج از حساب کاربری'} >
                <Box sx={{pb : 4 , pt : 2 , px : 3}}>
                    <Typography variant={'h6'}>آیا نسبت به خروج از حساب کاربری خود اطمینان دارید ؟ </Typography>
                    <Box sx={{mt : 3}} justifyContent={'end'} gap={2} display={'flex'}>
                        <Button onClick={()=>setOpenExitModal(false)} size={'large'} variant={'outlined'}>بازگشت</Button>
                        <Button onClick={removeToken} size={'large'} variant={'contained'} color={'secondary'}>خروج</Button>
                    </Box>
                </Box>
            </MainModal>
        </>
    )
}