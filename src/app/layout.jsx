import ThemeRegistry from "../components/themeRegister";
import '../assets/styles/styles.css' ;
import Layout from "../components/layout/Layout";
import localFont from 'next/font/local';
import NextAppDirEmotionCacheProvider from "@/components/emotionCache";
import {BASE_URL} from "@/data/urls";

const myFont = localFont({
    src: '../assets/font/IRANYekan.woff',
    display: 'swap',
    variable: '--iranYekan'
})
export const metadata = {
    title: 'تست لیوت',
    openGraph: {
        locale: 'fa_IR'
    }
}

async function getData() {
    const res = await fetch(`${BASE_URL}all-categories/`, {next: {revalidate: 60}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function RootLayout({children}) {
    // const layoutData = await getData() ;
    return (
        <html className={myFont.variable} dir='rtl' lang="fa_IR">
        <head/>
        <body>
        <NextAppDirEmotionCacheProvider>
            <ThemeRegistry>
                <Layout layoutData={[]}>
                    {children}
                </Layout>
            </ThemeRegistry>
        </NextAppDirEmotionCacheProvider>
        </body>
        </html>
    )
}
