import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HamburgerMenu from "../../assets/icons/layout/hamburgerMenu.svg";
import Link from "next/link";
import {Drawer, Typography , TextField , Box} from "@mui/material";
import {useState} from "react";
import {headerItem} from "@/data/header";
import logo from '../../../public/logo.png'
import Image from "next/image";
import {urls} from "src/data/urls";
import SearchIcon from '../../assets/icons/layout/search-normal.svg';
import XIcon from '../../assets/icons/layout/x-shape.svg';
import {Controller, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
const MobileHeader = ({layoutData}) => {
    const {mobileHeaderHeight} = useSelector(state => state.deviceInfo);
    const {control} = useForm();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [openSearch , setOpenSearch] = useState(false);
    const toggleSearch =()=>{
        setOpenSearch(prev => !prev)
    }
    const toggleDrawer = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerIsOpen(prev => !prev);
    };

    return (
        <AppBar sx={{backgroundColor: "#fff", height: `${mobileHeaderHeight}px`}}>
            <Toolbar sx={{height: '100%'}}>
                    {
                        openSearch ?
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    gap:2,
                                    width: "100%",
                                }}>
                                <Controller
                                    control={control}
                                    name={'searchInput'}
                                    defaultValue={''}
                                    render={({field})=>(
                                        <TextField sx={{width:'80%'}} size={'small'} placeholder={'جستوجو در تک جنرال'} value={field.value} onChange={field.onChange}/>
                                    )}
                                />
                                <Box onClick={toggleSearch}>
                                    <XIcon/>
                                </Box>
                            </Box>
                            :
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: 'space-between',
                                    alignItems: "center",
                                    width: "100%",
                                }}>
                                <HamburgerMenu onClick={toggleDrawer}/>
                                <Drawer
                                    anchor={"left"}
                                    open={drawerIsOpen}
                                    onClose={() => setDrawerIsOpen(false)}
                                    transitionDuration={500}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            width: "300px",
                                            px: 3,
                                            py: 1
                                        }}>
                                        <Image
                                            width={125} height={25}
                                            src={logo}
                                            alt="Takgeneral Logo"
                                        />
                                        {headerItem.map((item, id) => {
                                            return (
                                                <Link onClick={() => {
                                                    setDrawerIsOpen(false)
                                                }} style={{display: 'block', width: "100%"}} key={id} href={'/category'}>
                                                    <Box
                                                        sx={{
                                                            borderBottom: "1px solid #ccc",
                                                            py: 2.5,
                                                            display: 'flex',
                                                            width: "100%",
                                                            gap: 1,
                                                            alignItems: 'center'
                                                        }}
                                                    >

                                                        <Typography variant={'body2'} component={'li'}>{item.name}</Typography>
                                                    </Box>
                                                </Link>
                                            )
                                        })}
                                    </Box>
                                </Drawer>
                                <Link href={urls.home}>
                                    <Image
                                        width={125} height={25}
                                        src={logo}
                                        alt="TakgeneralLogo"
                                    />
                                </Link>
                                <Box onClick={toggleSearch}>
                                    <SearchIcon/>
                                </Box>
                            </Box>

                    }
            </Toolbar>
        </AppBar>
    );
};
export default MobileHeader;
