import {domainName} from "@/data/urls";
import AddressSelectionPage from "@/app/(with-layout)/cart/address-selection/addressSelectionPage";



export const metadata = {
    title: 'سبد خرید| تک جنرال',
    alternates: {
        canonical: `${domainName}/cart/address-selection`
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
        <AddressSelectionPage/>
    )

}