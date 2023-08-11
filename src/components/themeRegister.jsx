'use client';
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import NextAppDirEmotionCacheProvider from './emotionCache';
import theme from "../assets/theme/theme";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {SET_DESKTOP_HEIGHT, SET_DEVICE_INFO} from "@/redux/slices/deviceInfo";
import {fetchInfo} from "@/redux/slices/userInfoSlice";
import {fetchCart} from "@/redux/slices/cart";

export default function ThemeRegistry({children}) {
    const resizeTimeOutRef = useRef(null);
    const dispatcher = useDispatch();
    // onresize = () => {
    //     clearTimeout(resizeTimeOutRef.current);
    //     resizeTimeOutRef.current = setTimeout(() => {
    //         dispatcher(SET_DEVICE_INFO());
    //     }, 1000)
    // }
    // dispatcher(SET_DEVICE_INFO());
    // // dispatcher(SET_DESKTOP_HEIGHT(desktopHeaderRef.current.clientHeight));
    // dispatcher(fetchInfo());
    // dispatcher(fetchCart());
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}