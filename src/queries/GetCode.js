import axios from "axios";
export const GetCode = (num) => {
    return (
        axios({
        url: 'http://45.139.10.189/user-register-or-login-send-otp/',
        method: 'POST',
        data: {
            phone_number : num
        }
    })
    )
    
}                                                  