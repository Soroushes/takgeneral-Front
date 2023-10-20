import ContactUsPage from "@/app/(with-layout)/contact-us/ContactPage";
import {domainName} from "@/data/urls";
export const metadata = {
    title : 'تماس با ما | تک جنرال',
    alternates: {
        canonical: `${domainName}/contact-us`
    },
    openGraph:{
        title : 'تماس با ما | تک جنرال',
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
    return(
        <ContactUsPage/>
    )
}