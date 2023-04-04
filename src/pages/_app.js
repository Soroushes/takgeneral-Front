import '../styles/styles.css' ;
import theme from "../styles/theme/theme";
import {ThemeProvider} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import Layout from "../components/layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import Head from "next/head";
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const cssCache = createCache({
    key: 'css',
    prepend: true
})
export default function App({Component, pageProps}) {
    return (
        <CacheProvider value={cssCache}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
                              integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossOrigin=""/>
                        <Head>
                            <meta name="viewport"
                                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                            <title>فروشگاه اینترنتی تک جنرال</title>
                        </Head>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </ThemeProvider>
            </CacheProvider>
        </CacheProvider>
    )
}
