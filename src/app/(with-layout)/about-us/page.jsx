import AboutUsPage from "@/app/(with-layout)/about-us/aboutPage";
import {domainName} from "@/data/urls";
import logRoutes from "@/logRoutes";
export const metadata = {
    title : 'درباره ما| تک جنرال',
    alternates: {
        canonical: `${domainName}/about-us`
    },
    openGraph:{
        title: 'درباره ما| تک جنرال'
    },
    robots : {
        index : true ,
        follow : true,
        // googleBot : {
        //     index : true ,
        //     follow : true ,
        // }
    }
}
export default function Page(){
    logRoutes('about us')
    return(
        <AboutUsPage/>
    )
}