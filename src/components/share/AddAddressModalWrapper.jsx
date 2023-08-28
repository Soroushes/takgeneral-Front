'use client'
import {useRef, useState} from "react";
import {useAxios} from "@/hooks/useAxios";
import {useForm, Controller} from "react-hook-form";
import MainModal from "./MainModal";
import {MapContainer, useMap} from "react-leaflet";
import {Button, Divider, Grid, TextField, Typography , Box} from "@mui/material";
import MapControl from "./MapControl";
import {addressFormData} from "@/data/profile/addressFormData";
import LoadingButton from "@mui/lab/LoadingButton";

const AddAddressModalWrapper = ({open , setOpen , getAddress}) => {
    const position = [35.701817, 51.428526];
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const {callApi, loading} = useAxios();
    const {handleSubmit, control, setValue} = useForm();
    const submitAddress = (value) => {
        callApi({
            method: 'POST',
            url: 'user-address',
            data: value,
            token: true,
            successFunc: () => {
                getAddress?.()
                setOpenAddressModal(false);
                setOpen(false);
                setOpenSearchModal(false);
            }
        })
    }
    return (
        <>
            <MainModal setOpen={setOpen} title={'انتخاب آدرس بر روی نقشه'} open={open} mobileFullHeight={true} desktopFullScreen={true}>
                <MapContainer
                    style={{
                        width: "100%",
                        zIndex: "10",
                        height: "100%",
                        position: "relative",
                    }}
                    zoomControl={false}
                    center={position}
                    zoom={18}
                >
                    <MapControl/>
                    <MapSearchModal open={openSearchModal} setOpen={setOpenSearchModal}/>
                    <MapSearchPart
                        setOpenAddressModal={setOpenAddressModal}
                        setOpenSearchModal={setOpenSearchModal}
                        setValue={setValue}
                    />
                </MapContainer>
            </MainModal>
            <MainModal title={'ثبت مشخصات آدرس'} setOpen={setOpenAddressModal} open={openAddressModal}
                       desktopFullScreen={false}>
                <Box sx={{p: 4}}>
                    <Grid onSubmit={handleSubmit(submitAddress)} component={'form'} justifyContent={'space-between'}
                          container>
                        {
                            addressFormData.map((address) => (
                                <Controller
                                    name={address.name}
                                    defaultValue={''}
                                    rules={address.rules}
                                    control={control}
                                    render={({field, fieldState}) => (
                                        <Grid sx={{mb: 3}} xs={12} md={address.name === 'full_address' ? 12 : 5.5} item>
                                            <TextField
                                                onChange={field.onChange}
                                                value={field.value}
                                                error={!!fieldState.error?.message}
                                                helperText={fieldState.error?.message}
                                                placeholder={address.label}
                                                {...address.otherProps}
                                                fullWidth
                                            />
                                        </Grid>
                                    )
                                    }
                                />
                            ))
                        }
                        <Grid item xs={12}>
                            <LoadingButton loading={loading} type={'submit'} fullWidth size={'large'} variant={'contained'}>
                                تایید
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Box>
            </MainModal>
        </>
    )
}
export default AddAddressModalWrapper ;


export const MapSearchModal = ({open, setOpen}) => {
    const {callApi} = useAxios();
    const [items, setItems] = useState([]);
    const map = useMap();
    const searchTimeout = useRef(null);
    const valueOnChange = (e) => {
        clearTimeout(searchTimeout.current);
        if (!e.target.value) return setItems([]);
        searchTimeout.current = setTimeout(() => {
            callApi({
                method: 'post',
                url: "location",
                data: {
                    lat: map.getCenter().lat,
                    lng: map.getCenter().lng,
                    term: e.target.value
                },
                successFunc: (res) => {
                    setItems(res.items)
                }
            })
        }, 1000)
    }
    const selectAddress = (location) => {
        setOpen(false);
        map.flyTo({lat: location.y, lng: location.x}, 16)
    }
    return (
        <MainModal title={'جستجو'} open={open} desktopFullScreen={false} setOpen={setOpen} mobileFullHeight={true}>
            <Box sx={{p: 2, height: 600}}>
                <TextField
                    placeholder={'نام محل مورد نظر را وارد کنید'}
                    variant={'outlined'}
                    fullWidth={true}
                    onChange={valueOnChange}
                    sx={{mb: 2}}
                    autoFocus={true}
                />
                {
                    items.map((item) => {
                        return (
                            <Box key={item.location.x}>
                                <Typography
                                    onClick={selectAddress.bind(this, item.location)}
                                    sx={{my: 3, cursor: 'pointer'}}
                                    variant={'body1'}>{item.region} - {item.title}</Typography>
                                <Divider/>
                            </Box>
                        )
                    })
                }
            </Box>
        </MainModal>
    )
}
export const MapSearchPart = ({setOpenSearchModal, setValue, setOpenAddressModal}) => {
    const map = useMap();
    return (
        <Box sx={{backgroundColor: '#fff', zIndex: 999}} position={'absolute'} bottom={0} right={0} left={0}
             p={2}>
            <TextField onClick={() => setOpenSearchModal(true)} placeholder={'جستجو کنید'} inputProps={{readOnly: true}}
                       fullWidth/>
            <Button
                onClick={() => {
                    setOpenAddressModal(true)
                    setValue('lt', map.getCenter().lat)
                    setValue('lng', map.getCenter().lng)
                }}
                size={'large'}
                sx={{mt: 2}}
                variant={'contained'}
                fullWidth
            >
                انتخاب آدرس
            </Button>
        </Box>
    )
}