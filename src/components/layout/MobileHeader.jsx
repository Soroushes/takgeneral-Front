import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box} from '@mui/system';
import LoginIcon from "../icons/LoginIcon.svg";
import HamburgerMenu from "../icons/hamburgerMenu.svg";
import Link from "next/link";

const MobileHeader = () => {
    return (
        <Box>
            <AppBar sx={{backgroundColor: "gray.lighter"}}>
                <Toolbar position="static" sx={{height: "100%"}}>
                    <Box
                        sx={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}>
                        <HamburgerMenu/>
                        <Box sx={{m: "auto", width: {xs: "45%", sm: "50%"}}}>
                            <img
                                style={{width: "100%"}}
                                src="../logo.png"
                                alt="TakgeneralLogo"
                            />
                        </Box>
                        <Link href={'/login'}>
                            <LoginIcon/>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default MobileHeader;