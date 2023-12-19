'use client'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {Box, Button, Checkbox, Collapse, Container, Grid, RadioGroup, TextField, Typography} from "@mui/material";
import PaymentCard from "@/components/share/PaymentCard";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import {Controller, useFormContext} from "react-hook-form";
import AddLocation from '../../../../assets/icons/cart/location-add.svg';
import {useAxios} from "@/hooks/useAxios";
import AddressCard from "@/components/share/AddressCard";
import AddAddressModalWrapper from "@/components/share/AddAddressModalWrapper";
import Link from "next/link";

const AddressSelectionPage = () => {
    const {isLoggedIn, profile_complete, loading} = useSelector(state => state.userInfo);
    const [addresses, setAddresses] = useState([]);
    const [openAddAddressModals, setOpenAddAddressModals] = useState(false);
    const [inputIsOpen, setInputIsOpen] = useState(false);
    const {control , setValue , getValues} = useFormContext();
    const {push} = useRouter();
    const {callApi} = useAxios();
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
        if (loading) return
        if (!isLoggedIn) {
            push('/login?from=cart/address-selection')
        } else if (!profile_complete) {
            push('/profile?from=/cart/address-selection')
        } else getAddress();
    }, [loading]);
    const onSubmitForm = () => {
        const selectedMapId = getValues('map');
        console.log(selectedMapId)
        const selectedMap = addresses.find(item=>item.id === +selectedMapId);
        setValue('selectedMap', selectedMap);
        push('/cart/final-check');
    };
    return (
        <>
            {
                loading ? <h1>hi</h1> :
                    <Box
                        sx={{pt: 2, minHeight: "80vh", display: 'flex'}}>
                        <Container>
                            <Grid container>
                                <Grid width={'100%'} item md={8} lg={8.5} xs={12}>
                                    <Box sx={{borderBottom: '1px solid #eee', pb: 1, pt: 1}} display={'flex'}
                                         justifyContent={'space-between'}>
                                        <Box>
                                            <Typography variant={'h1'} fontWeight={'bold'}>آدرس گیرنده</Typography>
                                        </Box>
                                        <Link href={'/cart'}>
                                            <Button sx={{borderRadius: 1.5}}>برگشت<ChevronLeftRoundedIcon/></Button>
                                        </Link>
                                    </Box>
                                    <Box display={'flex'} sx={{py: 2}} justifyContent={'space-between'}>
                                        <Box display={'flex'} alignItems={'center'}>
                                            <Controller
                                                name={'myself'}
                                                control={control}
                                                render={({field}) =>
                                                    <Checkbox
                                                        checked={field?.value}
                                                        value={field?.value}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            setInputIsOpen((prev) => !prev)
                                                        }}
                                                        variant={'outlined'}
                                                    />
                                                }
                                            />
                                            <Typography>گیرنده خودم هستم</Typography>
                                        </Box>
                                        <Button onClick={() => {
                                            setOpenAddAddressModals(true)
                                        }} size={'small'} sx={{borderRadius: 2, px: 1.5, maxHeight: '35px !important'}}
                                                variant={'contained'} color={'secondary'}>
                                            <Typography variant={'body2'} pr={1} color={'white'}>افزودن آدرس
                                                جدید</Typography>
                                            <AddLocation/>
                                        </Button>
                                    </Box>
                                    <Collapse sx={{width: '100%'}} in={inputIsOpen}>
                                        <Grid container justifyContent={'space-between'}>
                                            <Grid item md={5.5} xs={12}>
                                                <Controller control={control} rules={{required: 'نام گیرنده اجباری می باشد'}} render={({field}) => <TextField
                                                    sx={{mb: 2}} fullWidth={true}
                                                    placeholder={'نام و نام خانوادگی گیرنده'} value={field.value}
                                                    onChange={field.onChange}/>} name={'name'}/>
                                            </Grid>
                                            <Grid item md={5.5} xs={12}>
                                                <Controller control={control} rules={{required: 'شماره تماس اجباری می باشد'}} render={({field}) => <TextField
                                                    sx={{mb: 2}} fullWidth={true}
                                                    placeholder={'شماره تلفن گیرنده'} value={field.value}
                                                    onChange={field.onChange}/>} name={'phone'}/>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                    <Controller render={({field}) =>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            value={field.value ?? ''}
                                            rules={{required: 'آدرس اجباری می باشد'}}
                                            onChange={field.onChange}
                                        >
                                            {
                                                addresses.map((address) => {
                                                    return (
                                                        <AddressCard getAddress={getAddress} selectable={true}
                                                                     key={address.title} address={address}/>
                                                    )
                                                })
                                            }
                                        </RadioGroup>
                                    } name={'map'} control={control}/>
                                </Grid>
                                <PaymentCard submitFn={onSubmitForm} button={'ادامه تایید آدرس'}/>
                            </Grid>
                        </Container>
                    </Box>
            }
            <AddAddressModalWrapper getAddress={getAddress} open={openAddAddressModals}
                                    setOpen={setOpenAddAddressModals}/>
        </>

    )
}
export default AddressSelectionPage;