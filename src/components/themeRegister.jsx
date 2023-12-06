'use client';
import '../assets/styles/styles.css' ;
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme from "../assets/theme/theme";

export default function ThemeRegistry({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}