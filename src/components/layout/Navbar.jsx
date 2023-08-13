import {Badge, Box, Typography} from '@mui/material';
import ContactIcon from '../../assets/icons/layout/ringing-blue-call.svg';
import BasketIcon from "../../assets/icons/layout/blue-bag.svg";
import User from "../../assets/icons/layout/blue-user.svg";
import Link from "next/link";
import {useEffect, useState} from "react";
import {urls} from "@/data/urls";
import {useSelector} from "react-redux";
import HomeIcon from '../../assets/icons/layout/home-navbar-icon.svg';
const Navbar = () => {
    const [navbarItems, setNavbarItems] = useState([]);
    const {total_count} = useSelector(state => state.cart)
    useEffect(() => {
        setNavbarItems([
            {
                name: "خانه",
                icon: <HomeIcon/>,
                link: urls.home
            },
            {
                name: "سبد خرید",
                icon: <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} color={'primary'} badgeContent={total_count}><BasketIcon/></Badge>,
                link: urls.cart
            },
            {
                name: "تماس با ما",
                icon: <ContactIcon/>,
                link: urls.contactUs
            },
            {
                name: "حساب کاربری",
                icon: <User/>,
                link: urls.profile
            }
        ])
    }, [total_count])
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                boxShadow:3
            }}>
            {
                navbarItems.map((navItem, index) => {
                    return (
                        <Box key={index} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Link href={navItem.link}><Typography>{navItem.icon}</Typography></Link>
                            <Typography color={'primary'} variant={"subtitle1"}>
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