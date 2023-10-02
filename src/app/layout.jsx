import ThemeRegistry from "../components/themeRegister";
import '../assets/styles/styles.css' ;
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";

const myFont = localFont({
    src: '../assets/font/IRANYekan.woff',
    display: 'swap',
    variable: '--iranYekan'
})
export default async function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa_IR">
        <head/>
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
