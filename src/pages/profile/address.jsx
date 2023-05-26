import PanelLayout from "../../components/layout/panelLayout";
import {useEffect, useState} from "react";
import {useAxios} from "../../hooks/useAxios";
import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import dynamic from "next/dynamic"
import AddIcon from '@mui/icons-material/Add';
const AddressPreview = dynamic(() => import("../../components/share/AddressPreview"), {ssr: false})
const AddAddressModalWrapper = dynamic(() => import("../../components/share/AddAddressModalWrapper"), {ssr: false})
const Address = () => {
    const {callApi} = useAxios();
    const [addresses, setAddresses] = useState([]);
    const [openAddAddressModals, setOpenAddAddressModals] = useState(false);
    const getAddress = ()=>{
        callApi({
            url: "user-address",
            method: "GET",
            token: true,
            successFunc: (res) => {
                setAddresses(res)
            }
        })
    }
    useEffect(() => {
       getAddress() ;
    }, []);
    return (
        <PanelLayout>
            <Grid rowGap={4} container>
                {
                    addresses.map((address) => {
                        return (
                            <Grid xs={12} sm={6} lg={4} item>
                                <Box sx={{borderRadius: 4, px: 2}}>
                                    <AddressPreview  address={address}/>
                                </Box>
                            </Grid>
                        )
                    })
                }
                <Grid sx={{px : 2}} xs={12} sm={6} lg={4} item>
                    <Box sx={{
                        width: '100%',
                        aspectRatio: '1/1',
                        borderRadius: 4,
                        backgroundColor: 'gray.lighter',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        flexDirection : "column" ,
                        gap : 2,
                        cursor : 'pointer'
                    }}
                    onClick={()=>{setOpenAddAddressModals(true)}}
                    >
                        <AddIcon fontSize={'large'}/>
                        <Typography variant={'h5'}>افزودن آدرس جدید</Typography>
                    </Box>
                </Grid>
            </Grid>
            <AddAddressModalWrapper getAddress={getAddress} open={openAddAddressModals} setOpen={setOpenAddAddressModals}/>
        </PanelLayout>
    )
}
export default Address;