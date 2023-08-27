import {Box, Container} from "@mui/material";
import Image from "next/image";
import error from '../../assets/images/error/404.png'
const NotFoundPage = ()=>{
     return(<Container>
         <Box>
             <Image src={error} alt={''}/>
         </Box>
     </Container>)
}
export default NotFoundPage