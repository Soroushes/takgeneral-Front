import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Badge, Box, Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import UserIcon from "../../assets/icons/layout/user";
import SearchOutlined from "../../assets/icons/layout/searchOutlined";
import BluBag from '../../assets/icons/layout/blue-bag.svg';
import Link from "next/link";
import logo from '../../../public/logo.png';
import Image from "next/image";
import {urls} from "@/data/urls";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";

const DesktopHeader = ({categories}) => {
    const {phone_number} = useSelector(state => state.userInfo);
    const router = useRouter();
    const {total_count} = useSelector(state => state.cart)
    const {desktopHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <AppBar sx={{backgroundColor: "#fff", height: desktopHeaderHeight, boxShadow: 1}}>
            <Toolbar sx={{height: '100% !important'}}>
                <Container maxWidth={'lg'}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            justifyContent: 'space-between',
                            width: "100%",
                            height: "100%",
                            py: 1,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                            <Link href={urls.home}>
                                <Image priority width={180} height={32} alt={'تک جنرال لوگو'} src={logo}/>
                            </Link>
                            <Box sx={{width: "40%"}}>
                                <TextField
                                    size={'small'}
                                    variant={'outlined'}
                                    fullWidth={true}
                                    placeholder={'جستجو در تک جنرال'}
                                    InputProps={{
                                        sx: {backgroundColor: "btnGray.main", height: "100%", fontSize: 14},
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchOutlined/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", gap: 2}}>
                                {
                                    phone_number ?
                                        <Button onClick={() => router.push(urls.profile)}
                                                sx={{px: 2, gap: 1, py: .8, borderRadius: 2}} variant={'outlined'}>
                                            حساب کاربری
                                            <UserIcon/>
                                        </Button>
                                        :
                                        <Button onClick={() => router.push(urls.login)}
                                                sx={{px: 2, gap: 1, py: .8, borderRadius: 2}} variant={'contained'}>
                                            ورود/عضویت
                                            <UserIcon/>
                                        </Button>
                                }
                                <Button onClick={() => router.push(urls.cart)} size={'medium'} color={'primary'}
                                        sx={{p: 0, borderRadius: 2.5, border: '1px solid primary', width: 'auto'}}
                                        variant={'outlined'}>
                                    <Badge anchorOrigin={{vertical: 'top', horizontal: 'left',}}
                                           badgeContent={total_count} color="primary">
                                        <BluBag/>
                                    </Badge>
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            component={'ul'}
                            sx={{
                                display: "flex",
                                gap: 6,
                            }}>
                            <Link href={'/'}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center ",
                                    }}>
                                    <Typography sx={{color: 'text.main'}} variant={'subtitle1'}
                                                component={'li'}>خانه</Typography>
                                </Box>
                            </Link>
                            <Link href={'/contact-us'}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center ",
                                    }}>
                                    {/*{item.icon}*/}
                                    <Typography sx={{color: 'text.main'}} variant={'subtitle1'} component={'li'}>تماس با
                                        ما</Typography>
                                </Box>
                            </Link>
                            <Link href={'/about-us'}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center ",
                                    }}>
                                    {/*{item.icon}*/}
                                    <Typography sx={{color: 'text.main'}} variant={'subtitle1'} component={'li'}>درباره
                                        ما</Typography>
                                </Box>
                            </Link>
                            <Link href={'/blog'}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center ",
                                    }}>
                                    {/*{item.icon}*/}
                                    <Typography sx={{color: 'text.main'}} variant={'subtitle1'}
                                                component={'li'}>وبلاگ</Typography>
                                </Box>
                            </Link>
                            {categories?.map((item) => {
                                return (
                                    <Link key={item.name} href={`/category/${item.url}`}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center ",
                                            }}>
                                            {/*{item.icon}*/}
                                            <Typography sx={{color: 'text.main'}} variant={'subtitle1'}
                                                        component={'li'}>{item.name}</Typography>
                                        </Box>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default DesktopHeader;
