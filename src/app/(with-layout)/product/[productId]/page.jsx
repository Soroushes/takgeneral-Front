import {BASE_URL} from "@/data/urls";
import {notFound, redirect} from "next/navigation";
import Error from "@/app/error";

async function getData(productId) {
    const res = await fetch(`${BASE_URL}product-detail/${productId}/`, {cache: 'no-store'})
    if (res.ok) {
        return res.json();
    } else {
        if (res.status === 404) {
            notFound();
        } else {
            throw new Error('failed to fetch data !');
        }
    }
}

export default async function Page({params: {productId}, searchParams: {fromSection}}) {
    const data = await getData(productId);
    return redirect(`/product/${productId}/${data.product.url}?fromSection=${fromSection}`);
}