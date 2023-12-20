import {BASE_URL} from "@/data/urls";
import LayoutPage from "@/components/layout/LayoutPage";
import Script from "next/script";

const getCategories = async () => {
    try {
        const res = await fetch(`${BASE_URL}all-categories/`);
        if (!res.ok) {
            console.log(res.error())
        } else {
            return (
                res.json()
            )
        }
    } catch (err) {
        console.log(err)
    }
};
export default async function Layout({children}) {
    const categoryNames = await getCategories();
    return (
        <>
            <Script strategy={'lazyOnload'} defer={true} async={true} id={'gtm'} dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5H9B34R');`
            }}/>
            <LayoutPage categoryNames={categoryNames}>{children}</LayoutPage>
        </>
    );
}