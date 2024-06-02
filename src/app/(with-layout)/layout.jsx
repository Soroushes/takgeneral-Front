import {BASE_URL} from "@/data/urls";
import LayoutPage from "@/components/layout/LayoutPage";
import logApi from "@/logApi";
import logRoutes from "@/logRoutes";

const getCategories = async () => {
    try {
        logApi(`${BASE_URL}all-categories/`)
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
    console.log(categoryNames)
    logRoutes('layout')
    return (
        <>
            <LayoutPage categoryNames={categoryNames}>{children}</LayoutPage>
        </>
    );
}