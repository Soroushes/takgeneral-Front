import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Box  , Typography ,useTheme} from '@mui/material';
const Navbar = () => {
        const {palette} = useTheme();
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
        }}>
        <Box
          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <HomeOutlinedIcon fontSize={"large"} />
          <Typography sx={{color: palette.gray.darker}} variant={"caption"}>
            خانه
          </Typography>
        </Box>
        <Box
          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SearchOutlinedIcon fontSize={"large"} />
          <Typography variant={"caption"}>جستجو</Typography>
        </Box>
        <Box
          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <LocalGroceryStoreOutlinedIcon fontSize={"large"} />
          <Typography variant={"caption"}>سبد خرید</Typography>
        </Box>
        <Box
          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <PhoneInTalkOutlinedIcon fontSize={"large"} />
          <Typography variant={"caption"}>تماس با ما</Typography>
        </Box>
      </Box>
    );
}
export default Navbar