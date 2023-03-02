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

const boxStyles = {
    width: 450, px: 3, background: "white", borderRadius: 3, position: "relative",
};
const Login = () => {
    const [validate, setValidate] = useState(false);
    const {count, startTimer, isFinished, resetTimer} = useCounter(55);
    const [tokenCheck , setTokenCheck] = useState(false) ;
    const {palette} = useTheme();
    const {control, handleSubmit, getValues} = useForm({
        defaultValues: {
            phoneNumber: "",
            otp: ""
        }
    });
    const {callApi: phoneApi, loading: phoneLoading} = useAxios();
    const {callApi: otpApi, loading: otpLoading} = useAxios();
    const router = useRouter() ;
    const postPhoneNumber = () => {
        phoneApi({
            url: "user-register-or-login-send-otp",
            method: "POST",
            data: {phone_number: '98' + getValues('phoneNumber')},
            successFunc: (result) => {
                alert(result.code);
                setValidate(true);
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
            }
        })
    }
    const submitForm = () => {
        if (!validate) {
            postPhoneNumber();
        } else {
            postOtpCode();
        }

    }
    useEffect(()=>{
        const token = localStorage.getItem('token') ;
        if (token){
           router.push('/') ;
        }else {
            setTokenCheck(true);
        }
    },[])
    if (!tokenCheck){
        return null ;
    }
    return (
        <Container maxWidth={"lg"} sx={{height: "100%", p: 0}}>
            <Grid sx={{height: "100%"}} container justifyContent={"center"} alignItems={"center"}>
                <Box component={'form'} sx={boxStyles} onSubmit={handleSubmit(submitForm)}>
                    <Box sx={{width: "50%", m: "auto", mb: 6}}>
                        <img
                            style={{width: "100%"}}
                            src="../logo.png"
                            alt="TakgeneralLogo"
                        />
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column ', gap: 1}}>
                        <Typography sx={{mb: 1}} component={"h1"} variant={'h6'}>
                            {validate ? "کد تایید را وارد کنید" : "ورود / ثبت نام"}
                        </Typography>
                        {validate ? null : (<Typography variant={"button"} component={"p"}>
                            سلام!
                        </Typography>)}
                        <Typography variant={"button"} component={"p"}>
                            {validate ? `کد تایید برای شماره ی ${'9336273696'} پیامک شد` : ` شماره موبایل خود را وارد کنید`}
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
                                    render={({field, fieldState}) => (
                                        <OtpInput
                                            hasErrored={!!fieldState.error}
                                            value={field.value}
                                            onChange={field.onChange}
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
                                    sx={{
                                        fontSize: 12, color: "green", cursor: "pointer",
                                    }}>
                                    ارسال مجدد کد
                                </Typography>) : (<Typography sx={{fontSize: 14}}>
                                    مانده تا ارسال مجدد {count}
                                </Typography>)}
                            </Box>
                            <Typography
                                onClick={() => setValidate(false)}
                                sx={{fontSize: 12, color: "red", cursor: "pointer"}}>
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
                                        placeholder={'9111111111'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment sx={{ml: 1}} position="start">
                                                    <Typography sx={{fontSize: 17}}>+98</Typography>
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
                                mt: 3, mb: 6, width: "100%", fontSize: 18, borderRadius: 2,
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
