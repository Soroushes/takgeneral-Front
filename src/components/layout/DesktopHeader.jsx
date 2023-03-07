import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Box} from "@mui/system";
import {headerItem} from "../../data/profile/userInputData";
import {Typography, useTheme} from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchOutlined from "../icons/searchOutlined";
import UserIcon from "../icons/user";
import ShopIcon from '../icons/shopIcon.svg';
const DesktopHeader = ({token}) => {
  const {palette} = useTheme();
  return (
    <AppBar sx={{backgroundColor: "#fff", height: "150px", pt: 2}}>
      <Toolbar sx={{height: "100%"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              height: "40%",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Box sx={{height: "100%"}}>
              <img
                style={{height: "100%"}}
                src="../logo.png"
                alt="Takgeneral Logo"
              />
            </Box>
            <Box>
              <Stack spacing={2} sx={{width: 300}}>
                <Autocomplete
                  sx={{backgroundColor: "#EFF1F5", border: "1px solid #D0DCEA" , borderRadius: 1}}
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  //options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={
                        <Box sx={{display: "flex", gap: 1}}>
                          <SearchOutlined />
                          <Typography
                            sx={{
                              color: palette.text.muted,
                            }}>
                            جستجو در تکجنرال
                          </Typography>
                        </Box>
                      }
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Stack>
            </Box>
            <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#EFF1F5",
                  border: "1px solid #D0DCEA",
                    borderRadius: 1,
                  p: 1
                }}>
                <Typography>
                  <UserIcon />
                </Typography>
                <Typography>ورود / عضویت</Typography>
              </Box>
              <Typography
                sx={{backgroundColor: "#EFF1F5", border: "1px solid #D0DCEA" ,borderRadius: 1 , p:1.2 ,px : 1.5,  display : 'flex' , alignItems : 'center'}}>
                <ShopIcon />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "50%",
              alignItems: "center",
              gap: 3,
            }}>
            {headerItem.map((item) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    height: "50%",
                    gap: 1,
                    alignItems: "center ",
                  }}>
                  <Box>{item.icon}</Box>
                  <Typography>{item.name}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default DesktopHeader;
