import {Box} from "@mui/system";
import Link from "next/link";
import {Typography} from "@mui/material";

const BreadcrumbGenerator = ({breadcrumb , product})=>{
    return(
        <Box display={'flex'} sx={{py: 3}}>
            <Link href={`/`}>
                <Box display={'flex'}>
                    <Typography sx={{px:1}} color={'text.muted'} variant={'body2'}>خانه</Typography>
                    /
                </Box>
            </Link>{
            breadcrumb?.map((item, index) => (
                <Link key={Math.random() * 1000} href={`category/${item.id}`}>
                    <Box display={'flex'}>
                        {index ? '/' :''}
                        <Typography sx={{px:1}} color={'text.muted'} variant={'body2'}>{item.name}</Typography>
                    </Box>
                </Link>
            ))
        }{
                product ?
                    <Link href={`product/${product.id}`}>
                        <Box display={'flex'}>
                            /
                            <Typography sx={{px:1}} color={'text.muted'} variant={'body2'}>{product.name}</Typography>
                        </Box>
                    </Link> : null
        }
        </Box>
    )
}
export default BreadcrumbGenerator;