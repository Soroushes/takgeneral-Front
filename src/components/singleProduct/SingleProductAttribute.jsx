import { Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            <Typography variant={'body2'} sx={{mt : 2 , color : 'primary.main'}}>{'مشاهده همه ويژگی ها '}</Typography>
        </Box>
    )
}
export default singleProductAttribute;