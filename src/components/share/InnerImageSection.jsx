import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const InnerImageSection = ({name, image , href}) => {
    return (
        <Link href={href}>
            <Box sx={{borderRadius: 3, p: 1, backgroundColor: '#fff', boxShadow: 2}}>
                <Box sx={{mx: 'auto', width: '80%', mb: 2, textAlign: 'center'}} position={'relative'}>
                    <Image width={100} height={50} style={{width: '100%', height: 'auto'}} src={image} alt={name}/>
                </Box>
                <Typography textAlign={'center'}>{name}</Typography>
            </Box>
        </Link>
    )
}
export default InnerImageSection;