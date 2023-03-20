import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const singleProductAttribute = ()=>{
    return (
        <Box>
            <Typography variant="h6" sx={{fontWeight : 'bold' , mb : 3}} component={'h1'}>فلومتر مایع و گاز سایز 50 میلی متر مدل خطی LZB-VA تمام استیل</Typography>
            <Typography variant="body1" sx={{fontWeight : 'bold' ,  mb : 2}} component={'h1'}>ویژگی های اصلی محصول</Typography>
            <Box component={'ul'} sx={{display : 'flex'  , flexDirection : 'column', gap : .75}}>
                <Typography sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > ویژگی هاي اصلي محصول</Typography>
                <Typography sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > ویژگی هاي اصلي محصول</Typography>
                <Typography sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > ویژگی هاي اصلي محصول</Typography>
                <Typography sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > ویژگی هاي اصلي محصول</Typography>
                <Typography sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > ویژگی هاي اصلي محصول</Typography>
            </Box>
            <Box sx={{display : 'flex' , mt : 2 }}>
            <KeyboardDoubleArrowRightIcon sx={{mt :'-2px' ,color : 'primary.main'}}/>
            <Typography variant={'body2'} sx={{ color : 'primary.main' , textAlign :'center'}}>{'مشاهده همه ويژگی ها '}</Typography>
            </Box>
        </Box>
    )
}
export default singleProductAttribute;