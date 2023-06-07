import {Alert} from "@mui/lab";
import {Snackbar} from "@mui/material";
import {useSelector} from "react-redux";
import useAlert from "../../hooks/useAlert";

const AlertSnakeBar = () => {
    const {title, show, hideDuration, severity} = useSelector(state => state.alert);
    const {forceHideAlert} = useAlert();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        forceHideAlert() ;
    };
    return (
        <>
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "right"}} sx={{display: {xs: 'none', md: "flex"}}}
                      open={show} autoHideDuration={hideDuration} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {title}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: "top", horizontal: "center"}} sx={{display: {xs: 'flex', md: "none"}}}
                      open={show} autoHideDuration={hideDuration} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {title}
                </Alert>
            </Snackbar>
        </>
    )
}
export default AlertSnakeBar;