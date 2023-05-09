import {Drawer, IconButton, Typography} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {Box} from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from '@mui/icons-material/Close';
const MainModal = ({open , setOpen , title , children , }) => {
    return (
        <Drawer
            sx={{display : {md : 'none'}}}
            transitionDuration={{enter: 500, exit: 500}}
            anchor="bottom"
            open={open}
            onClose={() =>{setOpen(false)}}
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
                        width: "90%",
                        padding: "0 !important" ,
                        display : "flex" ,
                        justifyContent : "space-between" ,
                        marginX: "auto",
                    }}
                >
                    <Typography
                        variant="body1"
                        fontWeight={'bold'}
                    >
                        {title}
                    </Typography>
                    <IconButton sx={{p : 0}} onClick={()=>setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{overflow: "auto" , width : "90%" , mx : 'auto' , my : 1}}>{children}</Box>
        </Drawer>
    )
}
export default MainModal;