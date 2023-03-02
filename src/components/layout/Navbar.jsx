import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import {Box, Typography, useTheme} from '@mui/material';
import ContactIcon from  '../icons/contactIcon.svg' ;
const Navbar = () => {
    const {palette} = useTheme();
    const navItems = [
        {
            name: 'خانه',
            icon: <ContactIcon />
        },
        {

            name: 'جستجو',
            icon: <SearchOutlinedIcon fontSize={"large"}/>
        },
        {
            name: 'سبد خرید',
            icon: <LocalGroceryStoreOutlinedIcon fontSize={"large"}/>
        },
        {
            name: 'تماس با ما',
            icon: <PhoneInTalkOutlinedIcon fontSize={"large"}/>
        }
    ]
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