import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import {Badge, Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import UserIcon from "../icons/user";
import SearchOutlined from "../../components/icons/searchOutlined";
import ShopIcon from '../icons/ShopIcon.svg';
import {useRouter} from "next/router";
import {headerItem} from "../../data/header";
import Link from "next/link";
import logo from '../../../public/logo.png' ;
import Image from "next/image";
import {urls} from "../../data/urls";
import {useSelector} from "react-redux";
const DesktopHeader = ({status, desktopHeaderRef}) => {
    const router = useRouter();
    const {total_count} = useSelector(state => state.cart)
    return (
        <AppBar ref={desktopHeaderRef} sx={{backgroundColor: "#fff"}}>
            <Toolbar>
                <Container maxWidth={'xl'}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
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
                                <Image width={125} height={35} alt={'تک جنرال لوگو'} src={logo}/>
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
                                    status.phone_number ?
                                        <Button onClick={() => router.push(urls.profile)} sx={{px: 3, gap: 1, py: .8}}
                                                variant={'contained'} color={'btnGray'}>
                                            <UserIcon/>
                                            <Typography
                                                variant={'body2'}>{status.full_name ?? status.phone_number}</Typography>
                                        </Button>
                                        :
                                        <Button onClick={() => router.push(urls.login)} sx={{px: 3, gap: 1, py: .8}}
                                                size={'small'} variant={'contained'} color={'btnGray'}>
                                            <UserIcon/>
                                            <Typography variant={'subtitle2'}>ورود و عضویت</Typography>
                                        </Button>
                                }
                                <Button onClick={() => router.push(urls.cart)} size={'small'} sx={{p: 0}}
                                        variant={'contained'} color={'btnGray'}>
                                    <Badge anchorOrigin={{vertical: 'top', horizontal: 'left',}}
                                           badgeContent={total_count} color="primary">
                                        <ShopIcon/>
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
                            {headerItem.map((item) => {
                                return (
                                    <Link key={item.name} href={item.link}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center ",
                                            }}>
                                            {item.icon}
                                            <Typography sx={{color :'text.main'}} variant={'subtitle1'} component={'li'}>{item.name}</Typography>
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
