import {createTheme} from "@mui/material";
const theme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#2A74C9',
            lighter : '#E3EDF8'
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
                    borderRadius : "8px" ,
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
        },
        MuiPaginationItem : {
            styleOverrides : {
                root : {
                    backgroundColor : "#eee" ,
                    "&:hover" : {
                        backgroundColor : "#ccc"
                    }
                }
            }
        }
    }
});
theme.typography.h1 = {
    fontSize : '20px' , 
    fontFamily: "takgeneral "
}
theme.typography.h2 = {
    fontSize : '19px' , 
    fontFamily: "takgeneral "
}
theme.typography.h3 = {
    fontSize : '18px' , 
    fontFamily: "takgeneral "
}
theme.typography.h3 = {
    fontSize : '17px' , 
    fontFamily: "takgeneral "
}
theme.typography.h4 = {
    fontSize : '16px' , 
    fontFamily: "takgeneral "
}
theme.typography.h5 = {
    fontSize : '15px' , 
    fontFamily: "takgeneral "
}
theme.typography.h6 = {
    fontSize : '14px' , 
    fontFamily: "takgeneral "
}
theme.typography.body1 = {
    fontSize : '14px' , 
    fontFamily: "takgeneral "  , 
    [theme.breakpoints.down('md')] :{
        fontSize : '12px'
    }
}
theme.typography.body2 = {
    fontSize : '13px' , 
    fontFamily: "takgeneral " ,
    [theme.breakpoints.down('md')] :{
        fontSize : '11px'
    }
}
theme.typography.subtitle1 = {
    fontSize : '12px' , 
    fontFamily: "takgeneral " ,
    [theme.breakpoints.down('md')] :{
        fontSize : '10px'
    }
}
theme.typography.subtitle2 = {
    fontSize : '11px' , 
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')] :{
        fontSize : '9px'
    }
}
theme.typography.caption = {
    fontSize : '10px' , 
    fontFamily: "takgeneral "
}
theme.typography.overline = {
    fontSize : '9px' , 
    fontFamily: "takgeneral "
}
export default theme;