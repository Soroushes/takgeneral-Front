import axios from "axios";
import {useState} from "react";
import {useRouter} from "next/router";
import {urls} from "../data/urls";
import useAlert from "./useAlert";
export const BASE_URL = 'http://takback.soroushes.tk/';
export const useAxios = () => {
    const [loading, setLoading] = useState(false);
    const {errorAlert} = useAlert() ;
    const router = useRouter() ;
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
            if (err?.response?.status===401){
                localStorage.removeItem('token')
                router.push(urls.login) ;
            }
            if (err?.response?.status === 429) {
                errorAlert("لطفا لحظاتی دیگر امتحان کنید")
            }
            if (err?.request?.status === 0) {
                errorAlert("وضعیت اینترنت خود را برسی کنید")
            }
        }
        setLoading(false)
    }
    return {callApi, loading}
}