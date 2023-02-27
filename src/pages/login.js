import {Box, Button, Container, Grid, Typography ,  Input} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from "react";
import Counter from "@/components/login/Counter";
import { phoneValidator } from "../helpers/phoneValidator";
import PhoneLogin from "@/components/login/PhoneLogin";
import { GetCode } from './../queries/GetCode';

const Login = () => {
   const [phoneNumber , setPhoneNumber] = useState('') ;
    const [validate , setValidate] = useState(false) ;
    const [error , setError] = useState(false) ;
    const [otp , setOtp] = useState('') ;
  const [res, setRes] = useState('');
  const getRes = async ()=>{
          let result = await GetCode(phoneNumber);
          setRes(result);
        }
    const onSubmit = ()=>{
        if (!phoneValidator(phoneNumber)) setError(true) ;
        else {
          const newNum = phoneNumber.substring(1)
          setPhoneNumber(98+newNum)
          setError(false);
          setValidate(true);
          getRes();
      };
    };
    console.log(phoneNumber)
  const boxStyles = {
    width: {
      xs: "100%",
      sm: 550
    },
    background: "white",
    px: {
      xs: 4,
      sm: 7
    },
    border: 1,
    borderColor: "#eee",
    borderRadius: 3,
    position: "relative"
}
    return(
        <Container maxWidth={"lg"} sx={{height : "100%" , p:0 }}>
            <Grid sx={{height : "100%" }} container justifyContent={'center'} alignItems={'center'}>
                <Box sx={boxStyles}>
                    <Box sx={{width : "40%" , m : "auto" , mb : 6}}>
                        <img style={{width : "100%"}} src="../logo.png" alt="TakgeneralLogo"/>
                        <KeyboardBackspaceIcon sx={{position : "absolute" , left : 20 , top : 25}} fontSize={'large'}/>
                    </Box>
                    {
                        validate ?
                            <>
                                <Typography component={'h1'} variant={'subtitle2'} style={{ marginBottom : 10}}>کد تایید را وارد کنید</Typography>
                                <Typography component={'p'}  variant={'subtitle2'} style={{ marginBottom : 10}}>کد تایید برای شماره ی {phoneNumber} پیامک شد </Typography>
                                <Box sx={{display : "flex" , justifyContent : "space-between"}}>
                                    <Input onChange={setOtp} value={otp} dir={'ltr'} autoFocus={true} inputClassName={'otp-input'}/>
                                </Box>
                                <Counter/>
                            </>
                             :
                            <PhoneLogin error={error} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                    }
                    {
                        error && <Typography component={'p'} variant={'body2'} style={{color : "red" }}>لطفا شماره تلفن را به درستی وارد کنید</Typography>
                    }
                    <Box sx={{px : 7}}>
                        <Button onClick={onSubmit} 
                        sx={{background : 'primary' , mt : 15 , mb : 6 , width : '100%' , fontSize : 20 , borderRadius : 2}} variant={'contained'}>تایید</Button>
                    </Box>
                </Box>
            </Grid>
        </Container>
  )
}
export default Login ;


