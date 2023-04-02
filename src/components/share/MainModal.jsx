import {Drawer, IconButton, Typography} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {Box} from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from '@mui/icons-material/Close';
const MainModal = ({open , setOpen , title , children}) => {
    return (
        <Drawer
            transitionDuration={{enter: 500, exit: 500}}
            anchor="bottom"
            open={open}
            onClose={() =>{setOpen(false)}}
        >
            <AppBar
                sx={{
                    position: "relative",
                    background: '#f2f2f2',
                    borderRadius: "20px 20px 0 0",
                    boxShadow: "none",
                    height: "65px",
                }}
            >
                <Toolbar
                    sx={{
                        width: "93%",
                        padding: "0 !important" ,
                        display : "flex" ,
                        justifyContent : "space-between" ,
                        marginX: "auto",
                    }}
                >
                    <Typography
                        variant="body1"
                        color="#000"
                        sx={{
                            marginLeft: "10px",
                        }}
                    >
                        {title}
                    </Typography>
                    <IconButton onClick={()=>setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{overflow: "auto"}}>{children}</Box>
        </Drawer>
    )
}
export default MainModal;