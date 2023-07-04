import {createSlice} from "@reduxjs/toolkit";
import Theme from "../../assets/theme/theme";
const initialState = {
    innerWidth : null ,
    isMobile : null ,
    navbarHeight : 55 ,
    mobileHeaderHeight : 55  ,
    desktopHeaderHeight : 100 ,

}
const deviceInfo = createSlice({
    initialState,
    name: "SnakeBar",
    reducers: {
        SET_DEVICE_INFO: (state) => {
            return {
                ...state ,
              innerWidth: window.innerWidth ,
              isMobile : Theme.breakpoints.values.md > window.innerWidth
            }
        },
        SET_DESKTOP_HEIGHT : (state ,action)=>{
            return {
                ...state ,
                desktopHeaderHeight : action.payload
            }
        }
    }
})
export default deviceInfo.reducer ;
export const {SET_DEVICE_INFO , SET_DESKTOP_HEIGHT} = deviceInfo.actions ;