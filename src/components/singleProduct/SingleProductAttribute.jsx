import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const singleProductAttribute = ({goToDetails, attributes , name})=>{
    const handleClick = () => {
        //goToDetails.current?.scrollIntoView({behavior: 'smooth' , block : 'nearest' , inline : 'start' });
        window.scrollTo({
            top :goToDetails.current?.offsetTop-150 , 
            behavior : 'smooth'
        })
      };
    return (
        <Box>
            <Typography variant="h6" sx={{fontWeight : 'bold' , mb : 3}} component={'h1'}>{name}</Typography>
            <Typography variant="body1" sx={{fontWeight : 'bold' ,  mb : 2}} component={'h1'}>ویژگی های اصلی محصول</Typography>
            <Box component={'ul'} sx={{display : 'flex'  , flexDirection : 'column', gap : .75}}>
                {
                    attributes.map((attr , index)=>{
                        if (index  > 6) return null
                        return(
                            <Typography  key={attr.id} sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="caption"  component={'li'} > {attr.title} : {attr.value}</Typography>
                        )
                    })
                }
            </Box>
            <Box sx={{display : 'flex' , mt : 2 }}>
            <KeyboardDoubleArrowRightIcon sx={{mt :'-2px' ,color : 'primary.main'}}/>
            <Typography variant={'body2'} onClick={handleClick} sx={{ cursor : 'pointer', color : 'primary.main' , textAlign :'center'}}>{'مشاهده همه ويژگی ها '}</Typography>
            </Box>
        </Box>
    )
}
export default singleProductAttribute;