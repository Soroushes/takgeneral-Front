import {SET_ALERT} from "../redux/slices/snakeBarSlice";

const useAlert = () => {
    const successAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: {massage}, severity: "success"}))
    }
    const errorAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: {massage}, severity: "error"}))
    }
    const warningAlert = (massage) => {
        dispatch(SET_ALERT({show: true, title: {massage}, severity: "warning"}))
    }
    const forceHideAlert = () => {
        dispatch(SET_ALERT({show: false}));
    }
    return {warningAlert, errorAlert, successAlert , forceHideAlert}
}
export default useAlert;