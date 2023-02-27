import {createTheme} from "@mui/material";

const theme = createTheme({
    direction : "rtl" ,
    palette : {
        primary : {
            main: '#0037ff',
            light : '#2a74c9'
        },
        secondary : {
            main : '#ff3d18'
        }
    } ,
    typography : {
        fontFamily : "takgeneral "
    }
}) ;
export default theme ;