'use client';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {fetchInfo, LOGOUT} from "@/redux/slices/userInfoSlice";
import {urls} from "@/data/urls";
import LocationIcon from "../../../assets/icons/profile/location.svg";
import ActiveLocationIcon from "../../../assets/icons/profile/active-location.svg";
import ExitIcon from "../../../assets/icons/profile/logout.svg";
import {Button, Container, Grid, Typography, Box} from "@mui/material";
import MainModal from "../../../components/share/MainModal";
import Link from "next/link";
import ProfileCircle from "@/assets/icons/profile/profile-circle.svg";
import ActiveProfileCircle from '../../../assets/icons/profile/active-profile-circle.svg';
import Menu from '../../../assets/icons/profile/menu.svg';
import ActiveMenu from '../../../assets/icons/profile/active-menu.svg';
import Receipt from '../../../assets/icons/profile/receipt.svg';
import ActiveReceipt from '../../../assets/icons/profile/active-receipt.svg';
import ActiveFavorite from '../../../assets/icons/profile/active-like.svg';
import Favorite from '../../../assets/icons/profile/like.svg';
import Comments from '../../../assets/icons/profile/messages.svg';
import ActiveComments from '../../../assets/icons/profile/active-messages.svg';
import Edit from '../../../assets/icons/profile/edit-2.svg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

export default function Layout({children}) {
    const dispatch = useDispatch();
    const [openExitModal, setOpenExitModal] = useState(false);
    const {full_name} = useSelector(state => state.userInfo)
    const router = useRouter();
    const pathName = usePathname()
    const removeToken = () => {
        console.log(1)
        dispatch(LOGOUT());
        dispatch(fetchInfo());
        router.push('/');
    }
    const panelItems = [{
        title: 'پنل کاربری' , icon: <Menu/> , activeIcon: <ActiveMenu/> , link: urls.profile,
    },{
        title: 'مشخصات فردی', icon: <ProfileCircle/>, activeIcon: <ActiveProfileCircle/>, link: urls.individualProfile,
    },{
        title: 'سفارش های من',icon:<Receipt/> , activeIcon: <ActiveReceipt/>,link:''
    }, {
        title: 'محصولات مورد علاقه',icon: <Favorite/>, activeIcon: <ActiveFavorite/>, link:urls.favoriteProduct
    },{
        title: 'آدرس ها', icon: <LocationIcon/>, activeIcon: <ActiveLocationIcon/>, link: urls.ProfileAddress,
    },{
        title:'دیدگاه ها',icon: <Comments/>,activeIcon: <ActiveComments/>,link:''
    }]
    useEffect(() => {
        // todo get token from redux
        const token = localStorage.getItem('token');
        if (!token) {
            router.push(urls.login);
        }
    }, [])
    return (<>
            <Container maxWidth={'lg'} sx={{mt: {xs: 1, md: 5}}}>
                <Grid container justifyContent={'space-between'}>
                    <Grid xs={12} md={3} item>
                        <Box>
                            {
                                pathName === urls.profile &&
                                <Box sx={{border:'1px solid #eee' , borderRadius:2}} mb={2} px={2} py={3} justifyContent={'space-between'} display={'flex'}>
                                    <Typography component={'p'} variant={'subtitle1'}>نام و نام خانوادگی : {full_name}</Typography>
                                    <Link href={'/profile/individual-profile'}><Edit/></Link>
                                </Box>
                            }
                            <Box sx={{
                                cursor: "pointer",
                                mb: 2,
                                display: pathName === urls.profile ? 'flex': {md:"flex" , xs:'none'},
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                overflowX: 'auto'
                            }}>
                                {panelItems.map((item) => {
                                    const active = pathName === item.link;
                                    return (<Link key={item.title} href={item.link ?? ''}
                                                  onClick={item.onClick?.bind(this)}>
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Box sx={{
                                                display: "flex",
                                                height: "100%",
                                                gap: 1,
                                                py: 2,
                                                px: active ? 0 : 1.5,
                                                borderRadius: 3,
                                                alignItems: "center",
                                            }}>
                                                {active && <Box height={'30px'} width={'6px'} sx={{
                                                    backgroundColor: 'secondary.main', borderRadius: '0px 5px 5px 0px'
                                                }}/>}
                                                {active ? item.activeIcon : item.icon}
                                                <Typography component={'p'} variant={'subtitle1'} sx={{
                                                    color: active ? "primary.main" : "text.main",
                                                    textAlign: "center",
                                                    whiteSpace: "nowrap"
                                                }}>{item.title}</Typography>
                                            </Box>
                                            {
                                                !active &&
                                                <ChevronLeftRoundedIcon sx={{mr:2}} fontSize={'small'}/>
                                            }
                                        </Box>
                                    </Link>)
                                })}
                                <Box onClick={() => {
                                    setOpenExitModal(true);
                                }} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            height: "100%",
                                            py: 2,
                                            px: 2,
                                            gap: 1,
                                            borderRadius: 3,
                                            alignItems: "center",
                                        }}>
                                        <ExitIcon/>
                                        <Typography component={'p'} variant={'subtitle1'} sx={{
                                            color: "text.main", textAlign: "center", whiteSpace: "nowrap"
                                        }}>خروج</Typography>
                                    </Box>
                                    <ChevronLeftRoundedIcon  sx={{mr:2}} fontSize={'small'}/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{height: 'fit-content', borderRadius: 4}} xs={12} md={8.5} item>
                        {children}
                    </Grid>
                </Grid>
            </Container>
            <MainModal setOpen={setOpenExitModal} open={openExitModal} title={'خروج از حساب کاربری'}>
                <Box sx={{pb: 4, pt: 2, px: 3}}>
                    <Typography component={'p'} variant={'h6'}>آیا نسبت به خروج از حساب کاربری خود اطمینان دارید ؟ </Typography>
                    <Box sx={{mt: 3}} justifyContent={'end'} gap={2} display={'flex'}>
                        <Button onClick={() => setOpenExitModal(false)} size={'large'}
                                variant={'outlined'}>بازگشت</Button>
                        <Button onClick={removeToken} size={'large'} variant={'contained'}
                                color={'secondary'}>خروج</Button>
                    </Box>
                </Box>
            </MainModal>
        </>)
}