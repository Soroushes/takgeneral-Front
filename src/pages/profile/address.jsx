import PanelLayout from "../../components/layout/panelLayout";
import {useEffect, useState} from "react";
import {useAxios} from "../../hooks/useAxios";
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import dynamic from "next/dynamic"

const AddressPreview = dynamic(() => import("../../components/share/AddressPreview"), {ssr: false})
const AddAddressModalWrapper = dynamic(()=>import("../../components/share/AddAddressModalWrapper") , {ssr : false})
const Address = () => {
    const {callApi} = useAxios();
    const [addresses, setAddresses] = useState([]);
    const [openAddAddressModals , setOpenAddAAddressModals] = useState(true) ;
    useEffect(() => {
        callApi({
            url: "user-address",
            method: "GET",
            token: true,
            successFunc: (res) => {
                setAddresses(res)
            }
        })
    }, []);
    return (
        <PanelLayout>
            <Grid rowGap={4} container>
                {
                    addresses.map((address) => {
                        return (
                            <Grid xs={12} sm={6} lg={4} item>
                                <Box sx={{borderRadius: 4, px: 2}}>
                                    <AddressPreview address={address}/>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <AddAddressModalWrapper open={openAddAddressModals} setOpen={setOpenAddAAddressModals}/>
        </PanelLayout>
    )
}
export default Address;