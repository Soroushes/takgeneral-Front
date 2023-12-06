import ThemeRegistry from "../components/themeRegister";
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";
import '../assets/styles/styles.css' ;
const myFont = localFont({
    src: '../assets/font/IRANYekan.woff',
    display: 'swap',
    variable: '--iranYekan'
})
export const metadata = {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}
export default async function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa-IR">
        <head>
            <script dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5H9B34R');`
            }}/>
        </head>
        <body>
        <NextAppDirEmotionCacheProvider>
            <ThemeRegistry>
                {children}
            </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
        </body>
        </html>
    )
}
