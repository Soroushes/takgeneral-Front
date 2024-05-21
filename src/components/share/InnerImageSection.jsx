import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "@mui/material";

const InnerImageSection = ({name, image , href}) => {
    const {palette} = useTheme();
    return (
        <Link href={href}>
            <Box sx={{borderRadius: 3,border : '1px solid transparent' , p: 1 , '&:hover':{border :`1px solid ${palette.secondary.main}`} , backgroundColor: '#fff'}}>
                <Box sx={{mx: 'auto', width: '80%', mb: 2, textAlign: 'center' }} position={'relative'}>
                    <Image width={100} height={50} style={{width: '100%', height: 'auto'}} src={image} alt={name}/>
                </Box>
                <Typography component={'p'} variant={'subtitle1'} textAlign={'center'}>{name}</Typography>
            </Box>
        </Link>
    )
}
export default InnerImageSection;