'use client';
import {useAxios} from "@/hooks/useAxios";
import {useEffect, useState} from "react";
import {Grid, Typography, Box, Button} from "@mui/material";
import dynamic from "next/dynamic";
import AddressCard from "@/components/share/AddressCard";
import AddLocation from "@/assets/icons/cart/location-add.svg";
import Link from "next/link";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const AddAddressModalWrapper = dynamic(() => import("../../../../components/share/AddAddressModalWrapper"), {ssr: false})
const AddressPage = () => {
    const {callApi} = useAxios();
    const [addresses, setAddresses] = useState([]);
    const [openAddAddressModals, setOpenAddAddressModals] = useState(false);
    const getAddress = () => {
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
        getAddress();
    }, []);
    return (
        <>
            <Grid container mb={2} rowGap={1} justifyContent={'space-between'} alignItems={'center'} display={'flex'}>
                <Grid item xs={6}>
                    <Typography fontWeight={'bold'}>آدرس های من</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display:{md:'none' , xs:'flex'} , justifyContent:'end'}}>
                        <Link scroll={false} href={'/profile'}>
                            <Button sx={{borderRadius: 1.5}}>برگشت<ChevronLeftRoundedIcon/></Button>
                        </Link>
                </Grid>
                <Grid item xs={12} md={6} justifyContent={'end'} display={'flex'}>
                    <Button onClick={() => {
                        setOpenAddAddressModals(true)
                    }} size={'small'} sx={{borderRadius: 2, px: 1.5, maxHeight: '35px !important' , display:{}}}
                            variant={'contained'} color={'secondary'}>
                        <Typography variant={'body2'} pr={1} color={'white'}>افزودن آدرس
                            جدید</Typography>
                        <AddLocation/>
                    </Button>
                </Grid>
            </Grid>
            <Box>
                {
                    addresses.map((address) => {
                        return (
                            <AddressCard key={address.id} address={address} selectable={false} getAddress={getAddress}/>
                        )
                    })
                }
            </Box>
            <AddAddressModalWrapper getAddress={getAddress} open={openAddAddressModals}
                                    setOpen={setOpenAddAddressModals}/>
        </>
    )
}
export default AddressPage;