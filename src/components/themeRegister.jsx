'use client';
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import NextAppDirEmotionCacheProvider from './emotionCache';
import theme from "../assets/theme/theme";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export default function ThemeRegistry({children}) {
    return (
        <NextAppDirEmotionCacheProvider options={{key: 'muirtl', stylisPlugins: [prefixer, rtlPlugin],}}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    {children}
                </Provider>
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}