import PanelLayout from "../../components/layout/panelLayout";
import {useEffect} from "react";
import {useAxios} from "../../hooks/useAxios";
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import dynamic from "next/dynamic"

const MapShowDetails = dynamic(() => import("../../components/share/MapShowDetails"), {ssr: false})
const Address = () => {
    const {callApi} = useAxios();
    useEffect(() => {
        callApi({
            url: "user-address",
            method: "GET",
            token: true,
            successFunc: (res) => {
                console.log(res)
            }
        })
    }, []);
    return (
        <PanelLayout>
            <Grid rowGap={4} container>
                <Grid xs={12} sm={6} lg={4} item>
                    <Box sx={{borderRadius: 4 , px : 2}}>
                        <MapShowDetails/>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} lg={4} item>
                    <Box sx={{borderRadius: 4, px: 2}}>
                        <MapShowDetails/>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} lg={4} item>
                    <Box sx={{borderRadius: 4, px: 2}}>
                        <MapShowDetails/>
                    </Box>
                </Grid>
            </Grid>
        </PanelLayout>
    )
}
export default Address;