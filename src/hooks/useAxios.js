import axios from "axios";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { SET_ALERT } from "../redux/slices/snakeBarSlice";
const BASE_URL = 'https://takback.soroushes.tk/';
export const useAxios = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const callApi = async ({method = "GET", url, data = {}, token, successFunc, errFunc}) => {
        try {
            const accessToken = localStorage.getItem('token');
            setLoading(true);
            const {data: result} = await axios({
                method,
                url: BASE_URL + url + '/',
                data,
                headers: {
                    Authorization: token ? 'Bearer ' + accessToken : null
                }
            })
            successFunc?.(result);
        } catch (err) {
            errFunc?.(err);
            console.log(err)
            if (err?.response?.status === 429) {
                dispatch(SET_ALERT({ show: true, title: "لطفا تا لحظاتی دیگر صبر کنید", severity: "error" }))
            }
            if (err?.request?.status === 0) {
                dispatch(SET_ALERT({ show: true, title: "لطفا به اینترنت متصل شوید", severity: "error" }))                
            }
        }
        setLoading(false)
    }
    return {callApi, loading}
}