import {Box, Button, MenuItem, TextField, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';
import PN from "persian-number";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Link from "next/link";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const singleProductAttribute = ({attrRef , pdf, attributes, name, setShowAllDetails, opinionRef , productOptions , setOptions , options , comments , rate , id}) => {
    console.log(productOptions)
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
            top: opinionRef?.current?.offsetTop - 150,
            behavior: 'smooth'
        })
    };
    const handleSortOnchange = (value)=>{
        setOptions(value)
    }
    return (
        <Box px={3}>
            <Typography variant="h4" sx={{fontWeight: 'bold', mb: 2}} component={'h1'}>{name}</Typography>
            <Typography variant={'body2'} sx={{my: 1}}>شناسه محصول : {id}-{productOptions.id}</Typography>
            <Box display={'flex'} alignItems={'center'} gap={4}>
                <Box display={'flex'} alignItems={'center'}>
                    <Rating readOnly size={'small'} sx={{mr: .5}} defaultValue={1} max={1}/>
                    <Typography variant={'subtitle1'}
                                textAlign={'center'}>{PN.convertEnToPe(PN.sliceNumber(rate ?? 0))}</Typography>
                </Box>
                <Button size={'small'} variant={'text'} color={'secondary'} onClick={scrollToOpinion}>
                    <Typography color={'secondary'} variant={'subtitle1'}>
                        دیدگاه کاربران ({PN.convertEnToPe(PN.sliceNumber(comments?.length))})
                    </Typography>
                </Button>
            </Box>
            {
                !options?.no_option &&
                <Box mt={3} display={'flex'} alignItems={'center'} gap={4}>
                    <Typography>{options?.name} :</Typography>
                    <TextField
                        sx={{
                            width: "150px", "& fieldset": {border: '1px solid #eee'},
                        }}
                        size={'small'}
                        select
                        defaultValue={productOptions}
                        onChange={(e) => handleSortOnchange(e.target.value)}
                    >
                        {
                            options?.product_variant.map((sortItem) => (
                                <MenuItem key={sortItem.option_value} variant={'subtitle1'}
                                          value={sortItem}>{sortItem.option_value}</MenuItem>
                            ))
                        }
                    </TextField>
                </Box>
            }
            <Box component={'ul'} sx={{display: 'flex', flexDirection: 'column', gap: .75, mt: 1}}>
                {
                    attributes?.map((attr, index) => {
                        if (index >= 3) return null
                        return (
                            <Typography key={index}
                                        variant="body1" component={'li'}>{attr.specification} : {attr.value}
                                 </Typography>
                        )
                    })
                }
            </Box>
            <Box display={'flex'} alignItems={'center'} mt={2} justifyContent={'space-between'}>
                <Box sx={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}  onClick={scrollToDetails}>
                    <Typography variant={'body2'}
                                sx={{ color: 'primary.main', textAlign: 'center'}}>مشاهده
                        بیشتر</Typography>
                    <ExpandMoreRoundedIcon color={'primary'}/>
                </Box>
                {
                    pdf ?
                        <Link href={pdf} passHref target="_blank">
                            <Button variant={'contained'} size={'small'} sx={{borderRadius:2}}><Typography color={'white'} variant={'body2'} mr={1}>دانلود کاتالوگ</Typography><CloudDownloadIcon/></Button>
                        </Link>:null
                }
            </Box>
        </Box>
    )
}
export default singleProductAttribute;