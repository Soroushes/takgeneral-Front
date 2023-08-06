import {Box, Button, MenuItem, TextField, Typography} from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Rating from '@mui/material/Rating';
import PN from "persian-number";

const singleProductAttribute = ({attrRef, attributes, name, setShowAllDetails, opinionRef}) => {
    const scrollToDetails = () => {
        setShowAllDetails(true);
        //goToDetails.current?.scrollIntoView({behavior: 'smooth' , block : 'nearest' , inline : 'start' });
        window.scrollTo({
            top: attrRef.current?.offsetTop - 150,
            behavior: 'smooth'
        })
    };
    const scrollToOpinion = () => {
        window.scrollTo({
            top: opinionRef.current?.offsetTop - 150,
            behavior: 'smooth'
        })
    };
    return (
        <Box>
            <Typography variant="h4" sx={{fontWeight: 'bold', mb: 2}} component={'h1'}>{name}</Typography>
            <Typography variant={'body2'} sx={{my: 1}}>{name}</Typography>
            <Box display={'flex'} alignItems={'center'} gap={4}>
                <Box display={'flex'} alignItems={'center'}>
                    <Rating readOnly size={'small'} sx={{mr: .5}} defaultValue={1} max={1}/>
                    <Typography variant={'subtitle1'}  textAlign={'center'}>{PN.convertEnToPe(PN.sliceNumber(4.5))}</Typography>
                </Box>
                <Button size={'small'} variant={'text'} color={'secondary'} onClick={scrollToOpinion}>
                    <Typography color={'secondary'} variant={'subtitle1'}>
                        دیدگاه کاربران ({PN.convertEnToPe(PN.sliceNumber(27))})
                    </Typography>
                </Button>
            </Box>
            <Box>
                <TextField
                    sx={{width: "150px"}}
                    size={'small'}
                    select
                    value={'sth'}
                    label="براساس"
                    onChange={(e) => handleSortOnchange(e.target.value)}
                >
                    {
                        [{name:'عنوان نوشته', value:'sth'}].map((sortItem) => (
                            <MenuItem key={sortItem.value} variant={'subtitle1'}
                                      value={sortItem.value}>{sortItem.name}</MenuItem>
                        ))
                    }
                </TextField>
            </Box>
            <Box component={'ul'} sx={{display: 'flex', flexDirection: 'column', gap: .75}}>
                {
                    attributes?.map((attr, index) => {
                        if (index > 6) return null
                        return (
                            <Typography key={index} sx={{listStyleType: "disc", listStylePosition: "inside"}}
                                        variant="body1" component={'li'}>{attr.key} : {attr.value}</Typography>
                        )
                    })
                }
            </Box>
            {
                attributes.length ?
                    <Box sx={{display: 'flex', mt: 2}}>
                        <KeyboardDoubleArrowRightIcon sx={{color: 'primary.main'}}/>
                        <Typography variant={'body2'} onClick={scrollToDetails}
                                    sx={{cursor: 'pointer', color: 'primary.main', textAlign: 'center'}}>مشاهده همه
                            ويژگی ها</Typography>
                    </Box>
                    :
                    null
            }
        </Box>
    )
}
export default singleProductAttribute;