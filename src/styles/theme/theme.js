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
        } ,
        gray : {
            main : "#C0C0C0" ,
            dark : "#A9A9A9" ,
            light : "#D3D3D3" ,
            lighter : "#E5E4E2" ,
            darker : "#808080"
        }
    } ,
    typography : {
        fontFamily : "takgeneral "
    }
}) ;
export default theme ;