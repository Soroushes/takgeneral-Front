import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import {Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import UserIcon from "../icons/user";
import SearchOutlined from "../../components/icons/searchOutlined";
import ShopIcon from '../icons/ShopIcon.svg';
import {useRouter} from "next/router";
import {headerItem} from "../../data/header";
import Link from "next/link";
import { useSelector } from "react-redux";
const DesktopHeader = ({status , size}) => {
    const router = useRouter();
    return (
        <AppBar sx={{backgroundColor: "#fff", height: `${size}px`}}>
            <Toolbar sx={{height: "100%"}}>
                <Container maxWidth={'xl'} sx={{height: "100%"}}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            justifyContent: "space-evenly",
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                            <Box sx={{width: '11%'}}>
                               <Link href={'/'}>
                                   <img
                                       style={{width: "100%"}}
                                       src="../logo.png"
                                       alt="Takgeneral Logo"
                                   />
                               </Link>
                            </Box>
                            <Box sx={{width: "40%"}}>
                                <TextField
                                    size={'medium'}
                                    variant={'outlined'}
                                    fullWidth={true}
                                    placeholder={'?????????? ???? ???? ??????????'}
                                    InputProps={{
                                        sx: {backgroundColor: "btnGray.main", height: "100%"},
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchOutlined/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", gap: 2 }}>
                                {
                                    status.phone_number == '' && status.full_name == '' ?
                                        <Button onClick={() => router.push('/login')} sx={{py: 1, px: 3, gap: 1}} variant={'contained'} color={'btnGray'}>
                                            <UserIcon/>
                                            ???????? ?? ??????????
                                        </Button>
                                        :
                                        <Button onClick={()=>router.push('/profile')} sx={{py: 1, px: 3, gap: 1}} variant={'contained'} color={'btnGray'}>
                                            <UserIcon/>
                                            <Typography>{status.full_name == '' ? status.phone_number : status.full_name}</Typography>
                                        </Button>
                                }
                                <Button sx={{py: 1}} variant={'contained'} color={'btnGray'}>
                                    <ShopIcon/>
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
                                    <Link key={item.name} href={'/'}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center ",
                                            }}>
                                            {item.icon}
                                            <Typography component={'li'}>{item.name}</Typography>
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
