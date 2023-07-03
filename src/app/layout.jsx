'use client'
import Layout from "../components/layout/Layout";
import {Provider, useDispatch} from "react-redux";
import {store} from "../redux/store";
import theme from "../assets/theme/theme";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {useEffect, useState} from "react";
import '../assets/styles/styles.css' ;


export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const cssCache = createCache({
    key: 'css',
    prepend: true
})

export default function RootLayout({children}) {
    const [mounted , setMounted] = useState(false) ;
    useEffect(()=>{
        setMounted(true) ;
    },[])
    return (
        <html dir='rtl' lang="fa">
        <body>
        <CacheProvider value={cssCache}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        {mounted && <Layout>
                            {children}
                        </Layout>}
                    </Provider>
                </ThemeProvider>
            </CacheProvider>
        </CacheProvider>
        </body>
        </html>
    )
}
