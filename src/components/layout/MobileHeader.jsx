import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box} from '@mui/system';
import LoginIcon from "../icons/LoginIcon.svg";
import HamburgerMenu from "../icons/hamburgerMenu.svg";
import Link from "next/link";
import {useSelector} from "react-redux";
import UserIcon from "../icons/user";
import {Typography} from "@mui/material";

const MobileHeader = () => {
    const {token} = useSelector(state => state.userStatus)
    return (
        <Box>
            <AppBar sx={{backgroundColor: "#fff", height: "80px"}}>
                <Toolbar sx={{height: "100%"}}>
                    <Box
                        sx={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}>
                        <HamburgerMenu/>
                        <Box sx={{m: "auto", height: "100%", py: 1}}>
                            <img
                                style={{height: "100%"}}
                                src="../logo.png"
                                alt="TakgeneralLogo"
                            />
                        </Box>
                        {
                            token ? <Link href={'/profile'}> <Typography><UserIcon/></Typography></Link> :
                                <Link href={'/login'}>
                                    <Typography>
                                        <LoginIcon/>
                                    </Typography>
                                </Link>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default MobileHeader;