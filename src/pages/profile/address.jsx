import PanelLayout from "../../components/layout/panelLayout";
import {useEffect, useState} from "react";
import {useAxios} from "../../hooks/useAxios";
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import dynamic from "next/dynamic"
const MapShowDetails = dynamic(() => import("../../components/share/MapShowDetails"), { ssr:false })
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
            <Grid rowGap={4} container>
                <Grid xs={6} md={4} item sx={{px : 2}}>
                    <Box sx={{aspectRatio : '1/1' , borderRadius : 4}}>
                        <MapShowDetails/>
                    </Box>
                </Grid>
                <Grid xs={6} md={4} item sx={{px : 2}}>
                    <Box sx={{aspectRatio : '1/1'}}>
                        <MapShowDetails/>
                    </Box>
                </Grid>
            </Grid>
        </PanelLayout>
    )
}
export default Address ;