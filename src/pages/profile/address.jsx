import PanelLayout from "../../components/layout/panelLayout";
import {useEffect} from "react";
import {useAxios} from "../../hooks/useAxios";

const Address = ()=>{
    const {loading , callApi} =useAxios() ;
    useEffect(()=>{
        callApi({
            url : "user-address" ,
            method : "GET" ,
            token : true ,
            successFunc : (res)=>{
                console.log(res)
            }
        })
    },[])
    return(
        <PanelLayout>

        </PanelLayout>
    )
}
export default Address ;