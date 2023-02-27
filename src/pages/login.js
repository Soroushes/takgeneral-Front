import {Box, Button, Container, Grid, Typography, Input} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useEffect, useState} from "react";
import {phoneValidator} from "../helpers/phoneValidator";
import PhoneLogin from "@/components/login/PhoneLogin";
import {useCounter} from "@/hooks/useCounter";
import OtpInput from "react18-input-otp";

const boxStyles = {
    width: 450,
    px: 3,
    background: "white",
    borderRadius: 3,
    position: "relative"
}
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validate, setValidate] = useState(true);
    const {count, startTimer} = useCounter(120);
    console.log(count)
    const [error, setError] = useState(false);
    const [otp, setOtp] = useState('');
    const [res, setRes] = useState('');
    const getRes = async () => {

    }
    const onSubmit = () => {
        getRes();
    };
    useEffect(() => {
        console.log('effect')
        startTimer();
    }, [])
    return (
        <Container maxWidth={"lg"} sx={{height: "100%", p: 0}}>
            <Grid sx={{height: "100%"}} container justifyContent={'center'} alignItems={'center'}>
                <Box sx={boxStyles}>
                    <Box sx={{width: "50%", m: "auto", mb: 6}}>
                        <img style={{width: "100%"}} src="../logo.jpg" alt="TakgeneralLogo"/>
                    </Box>
                    {
                        validate ?
                            <>
                                <Typography component={'h1'} variant={'subtitle2'} style={{marginBottom: 10}}>کد تایید
                                    را وارد کنید</Typography>
                                <Typography component={'p'} variant={'subtitle2'} style={{marginBottom: 10}}>کد تایید
                                    برای شماره ی {phoneNumber} پیامک شد </Typography>
                                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                        <OtpInput containerStyle={{display : "flex" ,width : "100%" , justifyContent : "space-between"}} inputStyle={{height : 50 , width : 50}} onChange={setOtp} numInputs={5} dir={'ltr'} value={otp} autoFocus={true} inputClassName={'otp-input'} isInputNum={true}/>
                                </Box>
                            </>
                            :
                            <PhoneLogin error={error} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                    }
                    {
                        error &&
                        <Typography component={'p'} variant={'body2'} style={{color: "red"}}>لطفا شماره تلفن را به درستی
                            وارد کنید</Typography>
                    }
                    <Box>
                        <Button onClick={onSubmit}
                                sx={{
                                    background: 'primary',
                                    mt: 3,
                                    mb: 6,
                                    width: '100%',
                                    fontSize: 20,
                                    borderRadius: 2
                                }} variant={'contained'}>تایید</Button>
                    </Box>
                </Box>
            </Grid>
        </Container>
    )
}
export default Login;


