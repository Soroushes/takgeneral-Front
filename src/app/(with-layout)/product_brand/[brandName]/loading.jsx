'use client'
import LoadingPages from "@/components/share/LoadingPages";
export default function Loading(){
    if(typeof window === "undefined") return null
    return(
        <LoadingPages/>
    )
}