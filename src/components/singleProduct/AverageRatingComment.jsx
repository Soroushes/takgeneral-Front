import {Box, Button, Rating, Typography} from "@mui/material";
import Massage from '../../assets/icons/single-product/message.svg';
import PN from "persian-number";
import {useRouter} from "next/navigation";
const AverageRatingComment = ({average, openAddComment , isLoggedIn , productId}) => {
    const Router = useRouter();
    const addComment = () => {
        if(isLoggedIn) {
            openAddComment((prev) => !prev);
        }else{
            Router.push(`/login?from=product/${productId}?fromSection=comment`)
        }
    };
    return (
        <Box sx={{backgroundColor: '#fff', py: 2, borderRadius: 3, boxShadow: 1}} gap={1.5} display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            {
                average ?
                    <>
                        <Typography variant={'h5'}>میانگین امتیازات کاربران</Typography>
                        <Box sx={{display: 'flex', gap: .5}}>
                            <Typography color={'primary'} fontWeight={'bold'} variant={'h1'}>{PN.convertEnToPe(4.5)}</Typography>
                            <Typography>از {PN.convertEnToPe(5)}</Typography>
                        </Box>
                    </> :
                    <Typography sx={{textAlign:'center' ,px:5}} variant={'h5'}>تا کنون نظری ثبت نشده,  اولین نظر را شما ثبت کنید</Typography>
            }

            <Rating sx={{mb: 3 , mt:1}} value={average} readOnly size={'small'}/>
            <Button onClick={addComment} sx={{ height : 40, borderRadius: 2 , width : '90%'}} variant={'contained'}>
                <Typography
                color={'white'}
                variant={'body1'}
                sx={{mr: 1 }}>افزودن
                    دیدگاه
                </Typography>
                <Massage/>
            </Button>

        </Box>
    )
}
export default AverageRatingComment;