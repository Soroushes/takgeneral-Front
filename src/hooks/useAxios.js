import axios from "axios";
import {useState} from "react";

const BASE_URL = 'https://takback.soroushes.tk/';
export const useAxios = () => {
    const [loading, setLoading] = useState(false);
    const callApi = async ({method = "GET", url, data = {}, token, successFunc}) => {
        try {
            setLoading(true);
            const {data: result} = await axios({
                method,
                url: BASE_URL + url + '/',
                data,
            })
            successFunc(result);
        } catch (err) {
            //todo
            console.log(err)
        }
    }
    return {callApi, loading}
}