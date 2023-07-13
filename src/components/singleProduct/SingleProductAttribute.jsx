import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            <Typography variant="h4" sx={{fontWeight : 'bold' , mb : 1}} component={'h1'}>{name}</Typography>
            <Button size={'small'} variant={'text'} color={'secondary'} onClick={scrollToOpinion}>دیدگاه کاربران (27)</Button>
            // todo
            <Box component={'ul'} sx={{display : 'flex'  , flexDirection : 'column', gap : .75}}>
                {
                    Object.keys(attributes)?.forEach((attr , index)=>{
                        if (index  > 6) return null
                        return(
                            <Typography key={index} sx={{listStyleType : "disc" , listStylePosition : "inside"}} variant="body1"  component={'li'} > {attributes[attr].name} : {attributes[attr].value}</Typography>
                        )
                    })
                }
            </Box>
            {
                Object. keys(attributes).length ?
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