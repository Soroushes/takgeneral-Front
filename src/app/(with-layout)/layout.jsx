import {BASE_URL} from "@/data/urls";
import LayoutPage from "@/components/layout/LayoutPage";
const getCategories = async ()=>{
    try{
        const res = await fetch(`${BASE_URL}all-categories/` );
        if(!res.ok){
            console.log(res.error())
        }else{
            return(
                res.json()
            )
        }
    }catch (err) {
        console.log(err)
    }
};
export default async function Layout({children}) {
    const categoryNames = await getCategories();
    return (
        <LayoutPage categoryNames={categoryNames}>{children}</LayoutPage>
    );
}