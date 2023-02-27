import '../styles/styles.css' ;
import theme from "@/styles/theme/theme";
import {ThemeProvider} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App({ Component, pageProps }) {

  return <CacheProvider value={cacheRtl}><ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider></CacheProvider>
}
