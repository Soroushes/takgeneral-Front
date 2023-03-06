import {Container, Grid, Typography, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import UserIcon from "../icons/user";
import Link from "next/link";
import ExitIcon from "../icons/exit";

const PanelLayout = ({children})=>{
    const router = useRouter() ;
    const dispatch = useDispatch() ;
    useEffect(()=>{
        const token = localStorage.getItem('token') ;
        if (!token){
            router.push('/login') ;
        }
    },[])
    const exitFromAcc = ()=>{
        localStorage.removeItem('token') ;
        router.push('/');
    }
   return(
       <Container disableGutters maxWidth={'lg'} sx={{mt : 2}}>
           <Grid container justifyContent={'space-between'} >
               <Grid sx={{position : "relative"}} xs={2} item>
                   <Box sx={{position : "absolute" , cursor : "pointer" , display : "flex" , flexDirection : "column" , top : 0 , left : 0 , right : 0 , backgroundColor : 'gray.lighter', borderRadius : 4 , p : 2}}>
                       <Link href={'/profile'}>
                           <Box sx={{display : "flex" ,py : 2  , gap : 1 , alignItems : "center" , justifyContent : {xs : "center" ,  md : 'start'}}}>
                               <UserIcon/>
                               <Typography sx={{display : {xs : "none" , md : "block"}}}>مشخصات فردی</Typography>
                           </Box>
                       </Link>
                           <Box onClick={exitFromAcc} sx={{display : "flex" , py : 2 , borderTop : 1  , gap : 1 , alignItems : "center" , justifyContent : {xs : "center" , md : 'start'}}}>
                               <ExitIcon/>
                               <Typography sx={{display : {xs : "none" , md : "block"}}}>خروج</Typography>
                           </Box>
                   </Box>
               </Grid>
               <Grid sx={{backgroundColor : "white" , height : 'fit-content' , borderRadius : 4 , pr:2}} xs={9.5} item>
                   {children}
               </Grid>
           </Grid>
       </Container>
   )
}
export default PanelLayout ;