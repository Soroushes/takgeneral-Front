import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Input,
  TextField, useTheme,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useState} from "react";
import {phoneValidator} from "../helpers/phoneValidator";
import {useCounter} from "@/hooks/useCounter";
import OtpInput from "react18-input-otp";
import axios from "axios";
const boxStyles = {
  width: 450,
  px: 3,
  background: "white",
  borderRadius: 3,
  position: "relative",
};
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validate, setValidate] = useState(false);
  const {count, startTimer , isFinished} = useCounter(5);
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");
  const { palette } = useTheme();
  const getCode = async () => {
    try {
      const code = await axios({
        url: 'http://45.139.10.189/user-register-or-login-send-otp/',
        method: 'POST',
        data: { phone_number: phoneNumber }
      })
      console.log(code.data)
      
    } catch (err) {
      console.log(err)
    }
  };
  const getResult = async()=>{
    try{
      const result = await axios({
        url: 'http://45.139.10.189/user-verify-otp/',
        method: 'POST', 
        data: {
          phone_number: phoneNumber, 
          code : otp
        }
      })
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }
  const onSubmit = () => {
    if (validate) {
      getResult();
    }else{
      getCode();
      setValidate(true);
      startTimer();
    }
  };
  return (
    <Container maxWidth={"lg"} sx={{height: "100%", p: 0}}>
      <Grid
        sx={{height: "100%"}}
        container
        justifyContent={"center"}
        alignItems={"center"}>
        <Box sx={boxStyles}>
          <Box sx={{width: "50%", m: "auto", mb: 6}}>
            <img
              style={{width: "100%"}}
              src="../logo.png"
              alt="TakgeneralLogo"
            />
          </Box>
          <Box sx={{display : 'flex' ,flexDirection : 'column ' , gap : 1}}>
            <Typography sx={{mb : 1}} component={"h1"} variant={'h6'} >
              {validate ? "کد تایید را وارد کنید" : "ورود / ثبت نام"}
            </Typography>
            {validate ? null : (
              <Typography variant={"button"} component={"p"}>
                سلام!
              </Typography>
            )}
            <Typography variant={"button"} component={"p"}>
              {validate
                ? `کد تایید برای شماره ی ${phoneNumber} پیامک شد`
                : ` شماره موبایل خود را وارد کنید`}
            </Typography>
            {validate ? (
              <>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                  <OtpInput
                      containerStyle={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      direction: "ltr",
                    }}
                    inputStyle={{height: 50, backgroundColor :palette.gray.lighter , width: 50 , borderRadius : "10px" , border : `1px solid ${palette.gray.dark}` , }}
                    onChange={setOtp}
                    numInputs={5}
                    value={otp}
                    focusStyle={{border : `1px solid ${palette.primary.main}`}}
                    shouldAutoFocus
                    isInputNum={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                  }}>
                  {isFinished ? (
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "green",
                        cursor: "pointer",
                      }}>
                      ارسال مجدد کد
                    </Typography>
                  ) : (
                    <Typography sx={{fontSize: 14}}>
                      مانده تا ارسال مجدد{count}
                    </Typography>
                  )}
                </Box>
                <Typography
                  sx={{fontSize: 12, color: "red", cursor: "pointer"}}>
                  اصلاح شماره موبایل
                </Typography>
              </>
            ) : (
              <TextField
                error={error}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                hiddenLabel
                sx={{mb: 1, mt: 1}}
                id="filled-hidden-label-normal"
                variant="filled"
                fullWidth
              />
            )}
          </Box>
          {error && (
            <Typography
              component={"p"}
              variant={"body2"}
              style={{color: "red"}}>
              لطفا شماره تلفن را به درستی وارد کنید
            </Typography>
          )}

          <Box>
            <Button
              onClick={onSubmit}
              sx={{
                background: "primary",
                mt: 3,
                mb: 6,
                width: "100%",
                fontSize: 20,
                borderRadius: 2,
              }}
              variant={"contained"}>
              تایید
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};
export default Login;
