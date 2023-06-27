import {
    Dialog,
    DialogContent,
    DialogTitle, Divider,
    Drawer,
    IconButton,
    Typography
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {Box} from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import theme from "../../assets/theme/theme";

const MainModal = ({open, setOpen, title, children, mobileFullHeight, desktopFullScreen}) => {
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(window.innerWidth);
        if (open) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "";
        }
    }, [open])
    return (
        innerWidth ?
            <>
                {
                    window.innerWidth >= theme.breakpoints.values.md ? (
                        <Dialog
                            PaperProps={{sx: {width: '100%', aspectRatio: desktopFullScreen ? '1/1' : ''}}}
                            sx={{display: {xs: 'none ', md: 'block'}}}
                            maxWidth={desktopFullScreen ? 'md' : 'sm'}
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            <DialogTitle sx={{px: 4}} fontWeight={'bold'} variant={'h6'}>
                                {title}
                            </DialogTitle>
                            <Divider/>
                            <DialogContent sx={{p: 0}}>
                                {children}
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <Drawer
                            PaperProps={{sx: {height: mobileFullHeight ? '100%' : 'auto'}}}
                            sx={{display: {md: 'none'}}}
                            transitionDuration={{enter: 500, exit: 500}}
                            anchor="bottom"
                            open={open}
                            onClose={() => {
                                setOpen(false)
                            }}
                        >
                            <AppBar
                                sx={{
                                    position: "relative",
                                    backgroundColor: 'gray.lighter',
                                    boxShadow: "none",
                                    height: "65px",
                                }}
                            >
                                <Toolbar
                                    sx={{
                                        padding: "0 !important",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginX: "auto",
                                        width: '90%',
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        fontWeight={'bold'}
                                    >
                                        {title}
                                    </Typography>
                                    <IconButton sx={{p: 0}} onClick={() => setOpen(false)}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <Box sx={{overflow: "auto", width: '100%', mx: 'auto', height: '100%'}}>{children}</Box>
                        </Drawer>
                    )
                }
            </>
            : null
    )
}
export default MainModal;