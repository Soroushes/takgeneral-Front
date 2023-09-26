import {Box, Container} from "@mui/material";
import Error from '../../assets/images/error/404error.png'
import Link from "next/link";
import Image from "next/image";
const NotFoundPage = ()=>{
     return(
         <Container sx={{minHeight : '50vh' , display : 'flex' , alignItems : 'center' , justifyContent:'center'}}>
             <Link href={'/'}>
                 <Box sx={{textAlign: 'center'}}>
                     <Image style={{width : '100%' , height : 'auto'}} src={Error} alt={''}/>
                 </Box>
             </Link>
        </Container>
     )
}
export default NotFoundPage;