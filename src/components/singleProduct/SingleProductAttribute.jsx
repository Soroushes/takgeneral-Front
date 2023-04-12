import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const singleProductAttribute = ({attrRef, attributes , name , setShowAllDetails })=>{
    console.log(typeof(attributes.length))
    const scrollToDetails = () => {
        setShowAllDetails(true) ;
        //goToDetails.current?.scrollIntoView({behavior: 'smooth' , block : 'nearest' , inline : 'start' });
        window.scrollTo({
            top :attrRef.current?.offsetTop-150 , 
            behavior : 'smooth'
        })
      };
    return (
        <Box>
            <Typography variant="h4" sx={{fontWeight : 'bold' , mb : 3}} component={'h1'}>{name}</Typography>
            {
                attributes.length !== 0 ? 
                <Typography variant="subtitle1" sx={{fontWeight : 'bold' ,  mb : 2}} component={'h1'}>ویژگی های اصلی محصول</Typography>
                    :
                null

            }
            <Box component={'ul'} sx={{display : 'flex'  , flexDirection : 'column', gap : .75}}>
                {
                    attributes.map((attr , index)=>{
                        if (index  > 6) return null
                        return(
                            <Typography  key={attr.id} sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="body1"  component={'li'} > {attr.title} : {attr.value}</Typography>
                        )
                    })
                }
            </Box>
            {
                attributes.length !== 0 ? 
                <Box sx={{display : 'flex' , mt : 2 }}>
                    <KeyboardDoubleArrowRightIcon sx={{color : 'primary.main'}}/>
                    <Typography variant={'body2'} onClick={scrollToDetails} sx={{ cursor : 'pointer', color : 'primary.main' , textAlign :'center'}}>مشاهده همه ويژگی ها</Typography>
                </Box>
                :
                null
            }
            
        </Box>
    )
}
export default singleProductAttribute;