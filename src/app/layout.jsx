import ThemeRegistry from "../components/themeRegister";
import '../assets/styles/styles.css' ;
import Layout from "../components/layout/Layout";
import localFont from 'next/font/local';
const myFont = localFont({
    src: '../assets/font/IRANYekan.woff',
    display: 'swap',
    variable : '--iranYekan'
})
export default function RootLayout({children}) {
    return (
        <html className={myFont.variable} dir='rtl' lang="fa">
        <head/>
        <body>
        <ThemeRegistry>
            {/*<Layout>*/}
                {children}
            {/*</Layout>*/}
        </ThemeRegistry>
        </body>
        </html>
    )
}
