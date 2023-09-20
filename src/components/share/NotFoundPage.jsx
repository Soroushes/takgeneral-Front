import {Box, Container} from "@mui/material";
import Error from '../../assets/images/error/404error.png'
import Link from "next/link";
import Image from "next/image";
const NotFoundPage = ()=>{
     return(<Container>
         <Link href={'/'}>
             <Box sx={{ textAlign:'center' ,aspectRatio:'1.6/1'}}>
                 <Image style={{width:'100%' , height:'100%'}} src={Error} alt={''}/>
             </Box>
         </Link>
     </Container>)
}
export default NotFoundPage;