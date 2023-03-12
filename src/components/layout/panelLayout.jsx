import {Container, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import ExitIcon from "../../components/icons/exit";
import UserIcon from "../../components/icons/user";
import LocationIcon from "../../components/icons/locationIcon";
import { useDispatch } from "react-redux";
import { fetchInfo } from "src/redux/slices/userInfoSlice";
const PanelLayout = ({children}) => {
    const dispatch = useDispatch();
    const removeToken = ()=>{
        localStorage.removeItem('token') ;
        dispatch(fetchInfo());
    }
    const panelItems = [
        {
            title : 'مشخصات فردی' ,
            icon : <UserIcon/> ,
            activeIcon : <UserIcon active/> ,
            link : "/profile" ,
        },
        {
            title : 'آدرس ها' ,
            icon : <LocationIcon/> ,
            activeIcon: <LocationIcon active/> ,
            link : "/profile/address" ,
        },
        {
            title : 'خروج ' ,
            icon : <ExitIcon/> ,
            link : "/" ,
            onClick : removeToken
        },
    ]
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [])
    return (
        <Container maxWidth={'lg'} sx={{mt: 5}}>
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
                                    <Link key={item.link} href={item.link} onClick={item.onClick?.bind(this)}>
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
                                            <Typography variant={'subtitle2'} sx={{color : active ? "white" : "text.main" , textAlign : "center" , whiteSpace : "nowrap"}}>{item.title}</Typography>
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Grid sx={{backgroundColor: "white", height: 'fit-content', borderRadius: 4}} xs={12} md={8.5} item>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
}
export default PanelLayout;