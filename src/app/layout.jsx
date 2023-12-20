import ThemeRegistry from "../components/themeRegister";
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";
import '../assets/styles/styles.css';

const myFont = localFont({
    src: '../assets/font/Takgeneral.woff2',
    display: 'swap',
    variable: '--iranYekan'
})
export default async function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa-IR">
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
