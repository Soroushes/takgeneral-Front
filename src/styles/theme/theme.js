import {createTheme} from "@mui/material";
const theme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#2A74C9',
        },
        secondary: {
            main: '#E94040'
        },
        gray: {
            main: "#C0C0C0",
            dark: "#A9A9A9",
            light: "#ccc",
            lighter: "#eee",
            darker: "#808080"
        },
        btnGray: {
            main: "#EFF1F5",
            contrastText: "#505050"
        },
        text: {
            main: "#505050",
            blue : "#032A8E" ,
            muted: "#707070", 
            white: '#fff', 
            lightBlue : '#CDE1FF'
        }
    },
    typography: {
        fontFamily: "takgeneral ",
        allVariants: {
            color: "#505050"
        }
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#909090",
                    
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius : "15px" ,
                    "&.Mui-disabled" : {
                        backgroundColor : "#eee"
                    },
                }

            }
            
        },
        MuiTabs:{
            styleOverrides :{
                root : {
                    '.Mui-selected' :{
                        backgroundColor : '#2A74C9' ,
                        color : 'white !important'
                    }
                }
            }
        },MuiSkeleton:{
            styleOverrides:{
                root:{
                    transform :'scale(1)'
                }
            }
        }
    }
});
export default theme;