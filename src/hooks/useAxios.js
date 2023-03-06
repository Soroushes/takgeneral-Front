import axios from "axios";
import {useState} from "react";

const BASE_URL = 'https://takback.soroushes.tk/';
export const useAxios = () => {
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
        }
        setLoading(false)
    }
    return {callApi, loading}
}