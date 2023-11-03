import {useState} from "react";

export const useIcons = (iconObject)=>{
    const [icon , setIcon] = useState(iconObject);
    return icon
}