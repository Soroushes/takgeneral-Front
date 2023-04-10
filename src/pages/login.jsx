import {
    Box, Container, Grid, Typography, Input, TextField, useTheme, InputAdornment,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {useEffect, useState} from "react";
import {useCounter} from "../hooks/useCounter";
import OtpInput from "react18-input-otp";
import {useAxios} from "../hooks/useAxios";
import {useForm, Controller} from "react-hook-form";
import {useRouter} from "next/router";
import Link from "next/link";
import {SET_ALERT} from "../redux/slices/snakeBarSlice";
import {useDispatch} from "react-redux";
import { fetchInfo } from 'src/redux/slices/userInfoSlice';
const boxStyles = {
    width: 450, px: 3, background: "white", borderRadius: 3, position: "relative",
};
const Login = () => {
    const [validate, setValidate] = useState(false);
    const {count, startTimer, isFinished, resetTimer} = useCounter(55);
    const {palette} = useTheme();
    const router = useRouter() ;
    const dispatch = useDispatch() ;
    const {control, handleSubmit, getValues , setValue} = useForm({
        defaultValues: {
            phoneNumber: "",
            otp: ""
        }
    });
    const {callApi: phoneApi, loading: phoneLoading} = useAxios();
    const {callApi: otpApi, loading: otpLoading} = useAxios();
    const postPhoneNumber = () => {
        phoneApi({
            url: "user-register-or-login-send-otp",
            method: "POST",
            data: {phone_number: '98' + getValues('phoneNumber')},
            successFunc: (result) => {
                alert(result.code);
                setValidate(true);
                setValue("otp", "") ;
                resetTimer();
                startTimer();
            }
        })
    };
    const postOtpCode = async () => {
        otpApi({
            url: 'user-verify-otp',
            method: 'POST',
            data: {phone_number: '98' + getValues('phoneNumber'), code: getValues('otp')},
            successFunc: (res) => {
                localStorage.setItem('token' , res.token.access) ;
                router.push('/profile') ;
            }
            , errFunc: (err) => {
                if(err?.response?.status === 403){
                    dispatch(SET_ALERT({show : true , title :"کد وارد شده صحیح نمیباشد" , severity : "error"}))
                }
            }
        })
    }
    const submitForm = () => {
        if (!validate) {
            postPhoneNumber();
        } else {
            postOtpCode();
            dispatch(fetchInfo())
        }
    }
    useEffect(()=>{
        const token = localStorage.getItem('token') ;
        // if (token){
        //     router.push('/') ;
        // }
    },[])
    return (
        <Container maxWidth={"lg"} sx={{height: "75vh", p: 0}} disableGutters>
            <Grid sx={{height: "100%"}} container justifyContent={"center"} alignItems={"center"}>
                <Box component={'form'} sx={boxStyles} onSubmit={handleSubmit(submitForm)}>
                    <Box sx={{width: "50%", m: "auto", mb: 6}}>
                        <Link href={'/'}>
                            <img
                                style={{width: "100%"}}
                                src="../logo.png"
                                alt="Takgeneral Logo"
                            />
                        </Link>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column ', gap: 1}}>
                        <Typography sx={{mb: 1}} component={"h1"} variant={'h6'}>
                            {validate ? "کد تایید را وارد کنید" : "ورود / ثبت نام"}
                        </Typography>
                        {validate ? null : (<Typography variant={"body2"} component={"p"}>
                            سلام!
                        </Typography>)}
                        <Typography variant={"body2"} component={"p"}>
                            {validate ? `کد تایید برای شماره ی ${getValues('phoneNumber')} پیامک شد` : ` شماره موبایل خود را وارد کنید`}
                        </Typography>
                        {validate ? (<>
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Controller
                                    name="otp"
                                    rules={{
                                        required: "لطفا کد ارسال شده را وارد کنید",
                                        minLength: {value: 5, message: "لطفا کد ارسال شده را وارد کنید"},
                                        maxLength: {value: 5, message: "لطفا کد ارسال شده را وارد کنید"}
                                    }}
                                    control={control}
                                    render={({ field, fieldState }) =>
                                        (
                                        <OtpInput
                                            hasErrored={!!fieldState.error}
                                            value={field.value}
                                            onChange={(value)=>{
                                              field.onChange(value);
                                              if (value.length === 5) {
                                                  submitForm();
                                              }
                                            }}
                                            containerStyle={{
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "space-between",
                                                direction: "ltr",
                                            }}
                                            inputStyle={{
                                                height: 50,
                                                backgroundColor: palette.gray.lighter,
                                                width: 50,
                                                borderRadius: "10px",
                                                border: 'none'
                                            }}
                                            numInputs={5}
                                            focusStyle={{border: `1px solid ${palette.primary.main}`}}
                                            shouldAutoFocus
                                            isInputNum={true}
                                        />
                                    )}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex", justifyContent: "space-between", my: 2,
                                }}>
                                {isFinished ? (<Typography
                                    onClick={postPhoneNumber}
                                    variant="subtitle1"
                                    sx={{
                                         color: "green", cursor: "pointer",
                                    }}>
                                    ارسال مجدد کد
                                </Typography>) : (<Typography variant="body1">
                                    مانده تا ارسال مجدد {count}
                                </Typography>)}
                            </Box>
                            <Typography
                                onClick={() => {setValidate(false)}}
                                variant="subtitle1"
                                sx={{color: "red", cursor: "pointer"}}>
                                اصلاح شماره موبایل
                            </Typography>
                        </>) : (
                            <Controller
                                name="phoneNumber"
                                control={control}
                                rules={{
                                    required: "شماره تلفن را وارد کنید",
                                    pattern: {
                                        value: /^9[0-3,9]\d{8}$/,
                                        message: "لطفا شماره تلفن را به درستی وارد کنید"
                                    }
                                }}
                                render={({field, fieldState}) => (
                                    <TextField
                                        dir={'ltr'}
                                        onChange={(e) => {
                                            let phoneNumber = e.target.value.replace(/^[0-8].*/, '');
                                            phoneNumber = phoneNumber.replace(/\D+/, '');
                                            field.onChange(phoneNumber)
                                        }}
                                        type={'tel'}
                                        placeholder={'9xxxxxxxxx'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment sx={{ml: 1}} position="start">
                                                    <Typography variant="h3" >+98</Typography>
                                                </InputAdornment>
                                            )
                                        }}
                                        helperText={fieldState.error?.message}
                                        value={field.value}
                                        error={!!fieldState.error}
                                        fullWidth
                                        hiddenLabel
                                        sx={{my: 1}}
                                        variant={'filled'}
                                    />
                                )}
                            />
                        )}
                    </Box>
                    <Box>
                        <LoadingButton
                            loading={otpLoading || phoneLoading}
                            type={'submit'}
                            sx={{
                                mt: 3, mb: 6, width: "100%", fontSize: 17, borderRadius: 2,
                            }}
                            variant={"contained"}>
                            تایید
                        </LoadingButton>
                    </Box>
                </Box>
            </Grid>
        </Container>);
};
export default Login;
