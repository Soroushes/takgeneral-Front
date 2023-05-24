import {createTheme} from "@mui/material";
const primary = "#3b319b" ;
const primaryDark = '#29226c' ;
const primaryLight = '#4e41d5' ;
const secondary = '#ffe27b' ;
const textBlack = '#303030'
const theme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: primary,
            dark : primaryDark ,
            contrastText : '#fff' ,
            light : primaryLight
        },
        secondary: {
            main: secondary,
            contrastText : "#333" ,
            light : secondary ,
            dark : secondary
        },
        gray: {
            main: "#A9A9A9",
            dark: "#c0c0c0",
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
            blue: "#032A8E",
            muted: "#707070",
            white: '#fff',
            lightBlue: '#CDE1FF'
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
                    borderRadius: "8px",
                    "&.Mui-disabled": {
                        backgroundColor: "#eee"
                    },
                }

            }

        },
        MuiRatingIcon: {
            styleOverrides: {
                root: {
                    direction: 'ltr'
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    '.Mui-selected': {
                        backgroundColor: secondary,
                        color: '#303030 !important'
                    }
                }
            }
        }, MuiSkeleton: {
            styleOverrides: {
                root: {
                    transform: 'scale(1)'
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    backgroundColor: "#eee",
                    "&:hover": {
                        backgroundColor: "#ccc"
                    }
                }
            }
        },
    }
});
theme.typography.h1 = {
    fontSize: '20px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h2 = {
    fontSize: '19px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h3 = {
    fontSize: '18px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h3 = {
    fontSize: '17px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h4 = {
    fontSize: '16px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h5 = {
    fontSize: '15px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.h6 = {
    fontSize: '14px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
theme.typography.body1 = {
    fontSize: '14px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')]: {
        fontSize: '12px'
    }
}
theme.typography.body2 = {
    fontSize: '13px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')]: {
        fontSize: '11px'
    }
}
theme.typography.subtitle1 = {
    fontSize: '12px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')]: {
        fontSize: '10px'
    }
}
theme.typography.subtitle2 = {
    fontSize: '11px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')]: {
        fontSize: '9px'
    }
}
theme.typography.caption = {
    fontSize: '10px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral ",
    [theme.breakpoints.down('md')]: {
        fontSize: '8px'
    }
}
theme.typography.overline = {
    fontSize: '9px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "takgeneral "
}
export default theme;