import {createSlice} from "@reduxjs/toolkit";
import Theme from "../../assets/theme/theme";
const initialState = {
    innerWidth : null ,
    isMobile : true,
    navbarHeight : 75 ,
    mobileHeaderHeight : 80  ,
    desktopHeaderHeight : 100 ,

}
const deviceInfo = createSlice({
    initialState,
    name: "deviceDetail",
    reducers: {
        SET_DEVICE_INFO: (state) => {
            return {
                ...state ,
              innerWidth: window.outerWidth ,
              isMobile : Theme.breakpoints.values.md > window.outerWidth
            }
        }
    }
})
export default deviceInfo.reducer ;
export const {SET_DEVICE_INFO , SET_DESKTOP_HEIGHT} = deviceInfo.actions ;