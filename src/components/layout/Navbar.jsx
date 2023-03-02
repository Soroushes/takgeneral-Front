import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import {Box, Typography, useTheme} from '@mui/material';
import ContactIcon from '../icons/contactIcon.svg';
import HomeIcon from '../icons/homeIcon.svg';
import SearchIcon from "../icons/searchIcon.svg";
import BasketIcon from "../icons/basketIcon.svg";
const Navbar = () => {
    const navItems = [
      {
        name: "خانه",
        icon: <HomeIcon />,
      },
      {
        name: "جستجو",
        icon: <SearchIcon fontSize={"large"} />,
      },
      {
        name: "سبد خرید",
        icon: <BasketIcon fontSize={"large"} />,
      },
      {
        name: "تماس با ما",
        icon: <ContactIcon fontSize={"large"} />,
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
                            {navItem.icon}
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