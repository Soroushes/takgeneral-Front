import ExitIcon from "../../components/icons/exit";
import UserIcon from "../../components/icons/user";
const removeToken = ()=>{
    localStorage.removeItem('token') ;
}
export const panelItems = [
    {
        title : 'مشخصات فردی' ,
        icon : <UserIcon/> ,
        link : "/profile" ,
    },
    {
        title : 'خروج' ,
        icon : <ExitIcon/> ,
        link : "/" ,
        onClick : removeToken
    },
]