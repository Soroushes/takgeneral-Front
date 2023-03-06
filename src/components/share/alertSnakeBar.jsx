import {Alert} from "@mui/lab";
import {Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {SET_ALERT} from "../../redux/slices/snakeBarSlice";

const AlertSnakeBar = () => {
    const {title, show, hideDuration, severity} = useSelector(state => state.alert);
    const dispatch = useDispatch();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(SET_ALERT({show : false})) ;
    };
    return (
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} sx={{bottom: {xs: 100, md: '85%'}}}
                  open={show} autoHideDuration={hideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {title}
            </Alert>
        </Snackbar>
    )
}
export default AlertSnakeBar;