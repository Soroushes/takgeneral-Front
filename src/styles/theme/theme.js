import {createTheme} from "@mui/material";

const theme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#0037ff',
            light: '#2a74c9'
        },
        secondary: {
            main: '#ff3d18'
        },
        gray: {
            main: "#C0C0C0",
            dark: "#A9A9A9",
            light: "#D3D3D3",
            lighter: "#eee",
            darker: "#808080"
        },
        text: {
            main: "#505050",
            muted: "#707070"
        }
    },
    typography: {
        fontFamily: "takgeneral " ,
        allVariants: {
            color: "#505050"
        }
    }
});
export default theme;