import {Alert} from "@mui/lab";
import {Snackbar} from "@mui/material";
import {useSelector} from "react-redux";

const AlertSnakeBar = () => {
    const {title, show, hideDuration, severity} = useSelector(state => state.alert);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        //setOpen(false);
    };
    return (
        <Snackbar anchorOrigin={{vertical : "bottom", horizontal: "center"}} sx={{bottom: {xs : 100 , md : '85%'}}} open={show} autoHideDuration={hideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {title}
            </Alert>
        </Snackbar>
    )
}
export default AlertSnakeBar;