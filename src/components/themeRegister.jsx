'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './emotionCache';
import theme from "../assets/theme/theme";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export default function ThemeRegistry({ children }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    {children}
                </Provider>
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}