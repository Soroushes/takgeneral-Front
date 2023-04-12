import {Badge, Box, Typography} from '@mui/material';
import ContactIcon from '../icons/contactIcon';
import HomeIcon from '../icons/homeIcon';
import BasketIcon from "../icons/basketIcon";
import SearchOutlinedIcon from "../icons/searchOutlined";
import Link from "next/link";
import {useEffect, useState} from "react";
import {urls} from "../../data/urls";
import {useSelector} from "react-redux";

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
                name: "جستجو",
                icon: <SearchOutlinedIcon/>,
                link: urls.home
            },
            {
                name: "سبد خرید",
                icon: <Badge anchorOrigin={{vertical: 'top', horizontal: 'left',}} badgeContent={total_count} color="secondary"><BasketIcon/></Badge>,
                link: urls.cart
            },
            {
                name: "تماس با ما",
                icon: <ContactIcon/>,
                link: urls.home
            },
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
                backgroundColor: "gray.lighter"
            }}>
            {
                navbarItems.map((navItem, index) => {
                    return (
                        <Box key={index} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Link href={navItem.link}><Typography>{navItem.icon}</Typography></Link>
                            <Typography color={'text.muted'} variant={"subtitle1"}>
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