import {Box, Typography} from '@mui/material';
import ContactIcon from '../icons/contactIcon.svg';
import homeIcon from '../icons/homeIcon.svg';
import SearchIcon from "../icons/searchIcon.svg";
import BasketIcon from "../icons/basketIcon.svg";
const Navbar = () => {
    const navItems = [
      {
        name: "خانه",
        icon: homeIcon
      },
      {
        name: "جستجو",
        icon: SearchIcon
      },
      {
        name: "سبد خرید",
        icon: BasketIcon
      },
      {
        name: "تماس با ما",
        icon: ContactIcon
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
                            <Box>
                                <img src={navItem.icon} alt=""/>
                            </Box>
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