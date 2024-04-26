'use client'
import ErrorImage from '../../../../assets/images/error/500_server.png';
import Link from "next/link";
import {Box, Container} from "@mui/material";
import Image from "next/image";
export default function Error(){
    return(
        <Container sx={{minHeight : '50vh' , display : 'flex' , alignItems : 'center' , justifyContent:'center'}}>
            <Link href={'/'}>
                <Box sx={{textAlign: 'center'}}>
                    <Image style={{width : '100%' , height : 'auto'}} src={ErrorImage} alt={''}/>
                </Box>
            </Link>
        </Container>
    )
}