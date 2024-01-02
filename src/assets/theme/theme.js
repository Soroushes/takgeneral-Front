import {createTheme, styled, Switch} from "@mui/material";
const primary = "#1b09f9";
const primaryDark = '#1206c0' ;
const secondary = '#ff8301' ;
const success = '#00966D';
const red = '#f00'
const textBlack = '#101010' ;
const lineHeight = ['17px','20px','25px']
    const theme = createTheme({
        direction: "rtl",
        palette: {
            primary: {
                main: primary,
                dark : primaryDark ,
                lighter:'#1B09F91A',
                contrastText : '#fff' ,
            },
            secondary: {
                main: secondary,
                contrastText : '#fff' ,
            },
            success :{
                main:success
            },
            error:{
              main:red
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
            btnLightGray:{
              main:'#707070',
              contained:'#505050'
            },
            text: {
                main: "#303030",
                blue: "#032A8E",
                muted: "#707070",
                white: '#fff',
                lightBlue: '#CDE1FF'
            }
        },
        typography: {
            fontFamily: "var(--iranYekan) ",
            allVariants: {
                color: "#505050"
            }
        },
    shadows :[
        'none' ,
        '0 8px 50px rgba(0,0,0,5%)',
        '0 20px 50px rgba(0,0,0,9%)',
         '0px 20px 50px 0px rgba(0,0,0,16%)',



],
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
        // MuiTextField:{
        //   styleOverrides:{
        //       root:{
        //           '&:hover fieldset': {
        //               borderColor: '#ccc',
        //           }
        //       }
        //   }
        // },
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
                        color: '#303030 !important',
                        borderBottom: `1px solid ${secondary}`
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
export const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42   ,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: theme.palette.primary,
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 18,
        height: 18,
    },
    '& .MuiSwitch-track': {
        borderRadius: 21 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

theme.typography.h1 = {
    fontSize: '20px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    lineHeight : lineHeight[1] ,
    [theme.breakpoints.down('md')]: {
        fontSize: '18px'
    }
}
theme.typography.h2 = {
    fontSize: '19px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    lineHeight : lineHeight[1] ,
    [theme.breakpoints.down('md')]: {
        fontSize: '17px'
    }
}
theme.typography.h3 = {
    fontSize: '18px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    lineHeight : lineHeight[1] ,
    [theme.breakpoints.down('md')]: {
        fontSize: '16px'
    }
}
theme.typography.h3 = {
    fontSize: '17px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    lineHeight : lineHeight[1] ,
    [theme.breakpoints.down('md')]: {
        fontSize: '15px'
    }
}
theme.typography.h4 = {
    fontSize: '16px',
    fontWeight: "normal",
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    lineHeight : lineHeight[1] ,
    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
}
theme.typography.h5 = {
    fontSize: '15px',
    fontWeight: "normal",
    color: textBlack,
    lineHeight : lineHeight[1] ,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '13px'
    }

}
theme.typography.h6 = {
    fontSize: '14px',
    fontWeight: "normal",
    color: textBlack,
    lineHeight : lineHeight[1] ,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '12px'
    }
}
theme.typography.body1 = {
    fontSize: '14px',
    fontWeight: "normal",
    lineHeight : lineHeight[1] ,
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '12px'
    }
}
theme.typography.body2 = {
    fontSize: '13px',
    fontWeight: "normal",
    lineHeight : lineHeight[1] ,
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '11px'
    }
}
theme.typography.subtitle1 = {
    fontSize: '12px',
    fontWeight: "normal",
    lineHeight : lineHeight[0] ,
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '10px'
    }
}
theme.typography.subtitle2 = {
    fontSize: '11px',
    fontWeight: "normal",
    lineHeight : lineHeight[0] ,
    color: textBlack,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '9px'
    }
}
theme.typography.caption = {
    fontSize: '10px',
    fontWeight: "normal",
    color: textBlack,
    lineHeight : lineHeight[0] ,
    fontFamily: "var(--iranYekan) ",
    [theme.breakpoints.down('md')]: {
        fontSize: '8px'
    }
}
theme.typography.overline = {
    fontSize: '9px',
    fontWeight: "normal",
    lineHeight : lineHeight[0] ,
    color: textBlack,
    fontFamily: "var(--iranYekan) "
}
export default theme;