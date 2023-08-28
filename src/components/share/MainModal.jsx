import {Dialog, DialogContent, DialogTitle, Divider, Drawer, IconButton, Typography , Box} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from '@mui/icons-material/Close';

const MainModal = ({open, setOpen, title, children, mobileFullHeight, desktopFullScreen}) => {
    return (
        <>
            <Dialog
                PaperProps={{sx: {width: '100%', borderRadius: 4}}}
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
            <Drawer
                PaperProps={{sx: {height: mobileFullHeight ? '100%' : 'auto'}}}
                sx={{display: {md: 'none ', xs: 'block'}}}
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
                        mb: 2

                    }}
                >
                    <Toolbar
                        sx={{
                            padding: "0 !important",
                            display: "flex",
                            justifyContent: "space-between",
                            marginX: "auto",
                            width: '93%',
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
        </>
    )
}
export default MainModal;