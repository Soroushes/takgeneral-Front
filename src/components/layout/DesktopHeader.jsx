import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import {headerItem} from "../../data/profile/userInputData";
import {Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import UserIcon from "../icons/user";
import ShopIcon from '../icons/shopIcon.svg';
import SearchOutlined from "../../components/icons/searchOutlined";
import Link from "next/link";
import {useRouter} from "next/router";

const DesktopHeader = ({token}) => {
    const router = useRouter() ;
    return (
        <AppBar sx={{backgroundColor: "#fff", height: "130px"}}>
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
                            <Box sx={{width: '12%'}}>
                                <img
                                    style={{width: "100%"}}
                                    src="../logo.png"
                                    alt="Takgeneral Logo"
                                />
                            </Box>
                            <Box sx={{width: "40%"}}>
                                <TextField
                                    size={'medium'}
                                    variant={'outlined'}
                                    fullWidth={true}
                                    placeholder={'جستجو در تک جنرال'}
                                    InputProps={{
                                        sx : {backgroundColor : "btnGray.main"} ,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchOutlined/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", gap: 2}}>
                                <Button onClick={()=>router.push('/login')} sx={{py: 1, px: 3, gap: 1}} variant={'contained'} color={'btnGray'}>
                                    <UserIcon/>
                                    ورود و عضویت
                                </Button>
                                <Button sx={{py: 1}} variant={'contained'} color={'btnGray'}>
                                    <ShopIcon/>
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 6,
                            }}>
                            {headerItem.map((item) => {
                                return (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        <Box>{item.icon}</Box>
                                        <Typography>{item.name}</Typography>
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
