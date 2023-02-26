import '../styles/styles.css' ;
import theme from "@/styles/theme/theme";
import {ThemeProvider} from "@mui/material";
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
