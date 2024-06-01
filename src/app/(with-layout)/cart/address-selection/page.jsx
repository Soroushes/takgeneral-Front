import {domainName} from "@/data/urls";
import dynamic from "next/dynamic";
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
const AddressSelectionPage = dynamic(()=>import("@/app/(with-layout)/cart/address-selection/addressSelectionPage") , {ssr : false})
export default function Page() {
    return (
        <AddressSelectionPage/>
    )

}