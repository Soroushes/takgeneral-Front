import axios from "axios";
import {useState} from "react";

const BASE_URL = 'http://takback.soroushes.tk/';
export const useAxios = () => {
    const [loading, setLoading] = useState(false);
    const callApi = async ({method = "GET", url, data = {}, token, successFunc , errFunc}) => {
        try {
            setLoading(true);
            const {data: result} = await axios({
                method,
                url: BASE_URL + url + '/',
                data,
            })
            successFunc?.(result);
        } catch (err) {
            errFunc?.(err) ;
        }
        setLoading(false)
    }
    return {callApi, loading}
}