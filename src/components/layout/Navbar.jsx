import {Badge, Box, Typography} from '@mui/material';
import ContactIcon from '../../assets/icons/layout/ringing-blue-call.svg';
import BasketIcon from "../../assets/icons/layout/blue-bag.svg";
import User from "../../assets/icons/layout/blue-user.svg";
import HomeIcon from '../../assets/icons/layout/home-navbar-icon.svg';
import ActiveHomeIcon from '../../assets/icons/layout/active-home.svg';
import ActiveBagIcon from '../../assets/icons/layout/active-bag.svg';
import ActiveUserIcon from '../../assets/icons/layout/active-user.svg';
import ActiveContactIcon from '../../assets/icons/layout/blue-active-call.svg';
import Link from "next/link";
import {useEffect, useState} from "react";
import {urls} from "@/data/urls";
import {useSelector} from "react-redux";
import {usePathname} from "next/navigation";
const Navbar = () => {
    const [navbarItems, setNavbarItems] = useState([]);
    const {total_count} = useSelector(state => state.cart);
    const url = usePathname();
    const {phone_number} = useSelector(state => state.userInfo);
    useEffect(() => {
        setNavbarItems([
            {
                name: "خانه",
                icon: <HomeIcon/>,
                activeIcon: <ActiveHomeIcon/>,
                link: urls.home
            },
            {
                name: "سبد خرید",
                icon: <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} color={'primary'} badgeContent={total_count}><BasketIcon/></Badge>,
                activeIcon:<Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} color={'primary'} badgeContent={total_count}><ActiveBagIcon/></Badge>,
                link: urls.cart
            },
            {
                name: "تماس با ما",
                icon: <ContactIcon/>,
                activeIcon: <ActiveContactIcon/>,
                link: urls.contactUs
            },
            phone_number ?
                {
                    name: "حساب کاربری",
                    icon: <User/>,
                    activeIcon: <ActiveUserIcon/>,
                    link: urls.profile
                }:
                {
                    name:'ورود و عضویت',
                    icon: <User/>,
                    activeIcon: <ActiveUserIcon/>,
                    link:urls.login
                }
            ,
        ])
    }, [total_count , phone_number])
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                px:1,
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: '5px 5px 0 0',
            }}>
            {
                navbarItems.map((navItem) => {
                    return (
                        <Box key={navItem.name} sx={{display: "flex", flexDirection: "column", alignItems: "center" , width:'25%'}}>
                            <Link href={navItem.link}>
                                <Typography>{url === navItem.link ? navItem.activeIcon : navItem.icon}</Typography>
                            </Link>
                            <Typography color={'primary'} variant={"body2"}>
                                {navItem.name}
                            </Typography>
                        </Box>
                    )
                })
            }
        </Box>
    );
}
export default Navbar