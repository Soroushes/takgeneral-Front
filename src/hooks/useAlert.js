import {SET_ALERT} from "@/redux/slices/snakeBarSlice";
import {useDispatch} from "react-redux";

const useAlert = () => {
    const dispatch = useDispatch();
    const successAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: massage, severity: "success"}))
    }
    const errorAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: massage, severity: "error"}))
    }
    const warningAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: massage, severity: "warning"}))
    }
    const forceHideAlert = () => {
        dispatch(SET_ALERT({show: false}));
    }
    return {warningAlert, errorAlert, successAlert , forceHideAlert}
}
export default useAlert;