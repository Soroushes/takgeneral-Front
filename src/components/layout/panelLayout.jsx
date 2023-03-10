import {Container, Grid, Typography, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useRouter} from "next/router";
import UserIcon from "../icons/user";
import Link from "next/link";
import ExitIcon from "../icons/exit";
import {panelItems} from "../../data/profile/panelitems";

const PanelLayout = ({children})=>{
    const router = useRouter() ;
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
       <Container maxWidth={'lg'} sx={{mt : 5}}>
           <Grid container justifyContent={'space-between'} >
               <Grid xs={12} md={3} lg={2.5} item>
                   <Box sx={{cursor : "pointer" , mb : 2 , justifyContent : "space-between" , display : "flex" , flexDirection : {xs : "row" , md : "column"} , backgroundColor : 'gray.lighter', borderRadius : 4 , px : 2 , p : {md : 2}}}>
                       {
                         panelItems.map((item)=>(
                             <Link href={item.link} onClick={item.onClick?.bind(this)}>
                                 <Box  sx={{display : "flex" , flexDirection : {xs : "column" , md : "row"}, py : 2  , gap : 1 , alignItems : "center" , justifyContent : {xs : "center" ,  md : 'start'}}}>
                                     {item.icon}
                                     <Typography>{item.title}</Typography>
                                 </Box>
                             </Link>
                         ))
                       }
                   </Box>
               </Grid>
               <Grid sx={{backgroundColor : "white" , height : 'fit-content' , borderRadius : 4}} xs={12} md={8.5} item>
                   {children}
               </Grid>
           </Grid>
       </Container>
   )
}
export default PanelLayout ;