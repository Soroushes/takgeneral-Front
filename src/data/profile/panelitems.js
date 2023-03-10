import ExitIcon from "../../components/icons/exit";
import UserIcon from "../../components/icons/user";
import LocationIcon from "../../components/icons/locationIcon";
const removeToken = ()=>{
    localStorage.removeItem('token') ;
}
export const panelItems = [
    {
        title : 'مشخصات فردی' ,
        icon : <UserIcon/> ,
        activeIcon : <UserIcon active/> ,
        link : "/profile" ,
    },
    {
        title : 'آدرس ها' ,
        icon : <LocationIcon/> ,
        activeIcon: <LocationIcon active/> ,
        link : "/profile/address" ,
    },
    {
        title : 'خروج ' ,
        icon : <ExitIcon/> ,
        link : "/" ,
        onClick : removeToken
    },
]