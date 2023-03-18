import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const singleProductAttribute = ()=>{
    return (
        <Box>
            <Typography variant="h6" sx={{fontWeight : 'bold' , mb : 2}} component={'h1'}>فلومتر</Typography>
            <Typography variant="body1" sx={{fontWeight : 'bold' ,  mb : 1}} component={'h1'}>يركي هايااصلي محصول</Typography>
            <Box component={'ul'} sx={{ml : '12px' , display : 'flex'  , flexDirection : 'column', gap : .75}}> 
                <Typography variant="caption"  component={'li'} sx={{listStyleType : 'disc'}}>ويركي هايااصلي محصول</Typography>
                <Typography variant="caption" component={'li'} sx={{listStyleType : 'disc'}}>ويركي هايااصلي محصول</Typography>
            </Box>
            <Typography variant={'body2'} sx={{mt : 2 , color : 'primary.main'}}>{'<< مشاهده همه ويزكي ها '}</Typography>
        </Box>
    )
}
export default singleProductAttribute;