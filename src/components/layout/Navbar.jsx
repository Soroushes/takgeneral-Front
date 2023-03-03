import {Box, Typography} from '@mui/material';
import ContactIcon from '../icons/contactIcon';
import HomeIcon from '../icons/homeIcon.svg';
import BasketIcon from "../icons/basketIcon";
import SearchOutlinedIcon from "../icons/searchOutlined";
import Link from "next/link";
const Navbar = () => {
    const navItems = [
      {
        name: "خانه",
        icon: <HomeIcon/> ,
          link : '/'
      },
      {
        name: "جستجو",
        icon: <SearchOutlinedIcon/> ,
          link : "/"
      },
      {
        name: "سبد خرید",
        icon: <BasketIcon/> ,
          link : "/"
      },
      {
        name: "تماس با ما",
        icon: <ContactIcon/> ,
          link : "/"
      },
    ];
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                px : 3 ,
                alignItems: "center",
                width : "100%" ,
                height : "100%" ,
                backgroundColor : "gray.lighter"
            }}>
            {
                navItems.map((navItem, index) => {
                    return (
                        <Box key={index} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Link href={navItem.link}><Typography>{navItem.icon}</Typography></Link>
                            <Typography color={'text.muted'} variant={"caption"}>
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