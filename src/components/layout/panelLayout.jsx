import {Button, Container, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import ExitIcon from "../../components/icons/exit";
import UserIcon from "../../components/icons/user";
import LocationIcon from "../../components/icons/locationIcon";
import { useDispatch } from "react-redux";
import { fetchInfo } from "src/redux/slices/userInfoSlice";
import { urls } from "src/data/urls";
import MainModal from "../share/MainModal";
const PanelLayout = ({children}) => {
    const dispatch = useDispatch();
    const [openExitModal , setOpenExitModal] = useState(false);
    const router = useRouter() ;
    const removeToken = ()=>{
        localStorage.removeItem('token') ;
        dispatch(fetchInfo());
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
        {
            title : 'خروج ' ,
            icon : <ExitIcon/> ,
            onClick : ()=>setOpenExitModal(true)
        },
    ]
    useEffect(() => {
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
                                    const active = router.pathname===item.link ;
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
                                                backgroundColor : active ? "primary.light" : ""
                                            }}>
                                                {active ? item.activeIcon : item.icon}
                                                <Typography variant={'subtitle1'} sx={{color : active ? "white" : "text.main" , textAlign : "center" , whiteSpace : "nowrap"}}>{item.title}</Typography>
                                            </Box>
                                        </Link>
                                    )
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid sx={{backgroundColor: "white", height: 'fit-content', borderRadius: 4}} xs={12} md={9} item>
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
export default PanelLayout;