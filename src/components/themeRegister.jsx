'use client';
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme from "../assets/theme/theme";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchInfo} from "@/redux/slices/userInfoSlice";
import {fetchCart} from "@/redux/slices/cart";

export default function ThemeRegistry({children}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchInfo())
        dispatch(fetchCart())
    },[])
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}