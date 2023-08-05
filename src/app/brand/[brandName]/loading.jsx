'use client'
export default function Loading(){
    if(typeof window === "undefined") return null
    return(
        <h1>loading</h1>
    )
}