import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Suggestion from '../icons/suggestion.svg'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const singleProductAttribute = ({attrRef, attributes , name , setShowAllDetails ,opinionRef})=>{
    const scrollToDetails = () => {
        setShowAllDetails(true) ;
        //goToDetails.current?.scrollIntoView({behavior: 'smooth' , block : 'nearest' , inline : 'start' });
        window.scrollTo({
            top :attrRef.current?.offsetTop-150 , 
            behavior : 'smooth'
        })
      };
    const scrollToOpinion=()=>{
        window.scrollTo({
            top :opinionRef.current?.offsetTop-150 , 
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
            <Button variant="contained" onClick={scrollToOpinion} color={'primary'} sx={{p:0 , borderRadius:2}} >
                <Box sx={{width:'100%' , display :'flex' , gap:1 , alignItems :'center'}}>
                    <Box sx={{p:1 , display :'flex' , alignItems :'center', backgroundColor :'primary.dark' , borderRadius: '8px 0 0 8px' }}>
                        <Suggestion/>
                    </Box>
                    <Typography sx={{pr :1 , py:1 }} color={'white'}>نظرات و سوالات کاربران</Typography>
                </Box>
            </Button>
        </Box>
    )
}
export default singleProductAttribute;