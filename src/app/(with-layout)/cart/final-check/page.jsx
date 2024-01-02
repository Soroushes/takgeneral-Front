import {domainName} from "@/data/urls";
import FinalCheckPage from "@/app/(with-layout)/cart/final-check/finalCheckPage";



export const metadata = {
    title: 'سبد خرید| تک جنرال',
    alternates: {
        canonical: `${domainName}/cart/final-check`
    },
    openGraph: {
        title: 'سبد خرید| تک جنرال'
    },
    robots: {
        index: false,
        follow: false,
        // googleBot : {
        //     index : false ,
        //     follow : false ,
        // }
    }
}
export default function Page() {
    return (
        <FinalCheckPage/>
    )

}