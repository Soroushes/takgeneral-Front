import '../styles/styles.css' ;
import theme from "../styles/theme/theme";
import {ThemeProvider} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import Layout from "../components/layout/Layout";
import {useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import {store} from "../redux/store";

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function App({Component, pageProps}) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </ThemeProvider>
        </CacheProvider>
    )
}
