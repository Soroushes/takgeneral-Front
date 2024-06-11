import ThemeRegistry from "../components/themeRegister";
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";
import '../assets/styles/styles.css';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'

const myFont = localFont({
    src: '../assets/font/Takgeneral.woff2',
    display: 'swap',
    variable: '--iranYekan',preload:''
})
export default async function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa-IR">
        <head>
            <GoogleTagManager gtmId="AW-11028003241" />
        </head>
        {/*<Script async={true} dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-11028003241');`}}/>*/}
        <body>
        <NextAppDirEmotionCacheProvider>
            <ThemeRegistry>
                {children}
            </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
        </body>
        {/*<Script  defer={true} async={true} id={'gtm'} dangerouslySetInnerHTML={{*/}
        {/*    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5H9B34R');`*/}
        {/*}}/>*/}
        </html>
    )
}
