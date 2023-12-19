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
        <AppBar sx={{backgroundColor: "#fff", height: desktopHeaderHeight}}>
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
                            <Link style={{width: '20%'}} href={urls.home}>
                                <Box sx={{
                                    textAlign: 'center',
                                    width: '100%',
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
                                <Button aria-label={'cart'} title={'cart'} onClick={() => router.push(urls.cart)}
                                        size={'medium'} color={'primary'}
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
                            <Box component={'li'}>
                                <Link href={'/'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        <Typography sx={{color: 'text.main'}} variant={'subtitle1'}>خانه</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/contact-us'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography sx={{color: 'text.main'}} variant={'subtitle1'}>تماس
                                            با
                                            ما</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/about-us'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography sx={{color: 'text.main'}} variant={'subtitle1'}>درباره ما</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/blog'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography sx={{color: 'text.main'}} variant={'subtitle1'}>وبلاگ</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            {categories?.map((item) => {
                                return (
                                    <Box key={item.name} component={'li'}>
                                    <Link href={`/category/${item.url}`}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center ",
                                            }}>
                                            {/*{item.icon}*/}
                                            <Typography sx={{color: 'text.main'}} variant={'subtitle1'}>{item.name}</Typography>
                                        </Box>
                                    </Link>
                                    </Box>
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
