import ThemeRegistry from "../components/themeRegister";
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";
import '../assets/styles/styles.css';
import Script from "next/script";
const myFont = localFont({
    src: '../assets/font/Takgeneral.woff2',
    display: 'swap',
    variable: '--iranYekan',preload:''
})

export const metadata = {
    title:'enamad',
    description:'55550664'
}
export default async function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa-IR">
        {/*<GoogleTagManager gtmId="AW-11028003241" />*/}
        {/*<Script async={true} dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-11028003241');`}}/>*/}
        <body>
        <NextAppDirEmotionCacheProvider>
            <ThemeRegistry>
                {children}
            </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
        </body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XVTV4M71W6"></Script>
        <Script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XVTV4M71W6');`}}
        />
        </html>
    )
}

