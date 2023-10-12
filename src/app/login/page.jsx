import LoginPage from "@/app/login/loginPage";
import {domainName} from "@/data/urls";
export const metadata = {
    title : 'ورود | تک جنرال',
    alternates: {
        canonical: `${domainName}/login`
    },
    openGraph:{
        title : 'ورود | تک جنرال'
    },
    robots : {
        index : false ,
        follow : false,
        googleBot : {
            index : false ,
            follow : false ,
        }
    }
}
export default function Page(){
    return(
        <LoginPage/>
    )
}