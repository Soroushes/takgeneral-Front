import {Box, Container} from "@mui/material";
import Error from '../../assets/icons/share/404.svg'
import Link from "next/link";
const NotFoundPage = ()=>{
     return(<Container>
         <Link href={'/'}>
             <Box sx={{width:'100%' , height:'100%' , textAlign:'center'}}>
                 <Error/>
             </Box>
         </Link>
     </Container>)
}
export default NotFoundPage