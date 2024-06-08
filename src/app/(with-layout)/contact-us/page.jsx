import ContactUsPage from "@/app/(with-layout)/contact-us/ContactPage";
import {domainName} from "@/data/urls";
import logRoutes from "@/logRoutes";
export const metadata = {
    title : 'تماس با ما | تک جنرال',
    description:'شما میتوانید با تماس با کارشناسان مجموعه تک جنرال تمام نیاز های مهندسی و تجهیزات ابزار دقیق خود را استعلام بگیرید',
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
    logRoutes('contact us')
    return(
        <ContactUsPage/>
    )
}