import {Box, Button, Rating, Typography} from "@mui/material";
import Massage from '../../assets/icons/message.svg';
import PN from "persian-number";

const AverageRatingComment = ({average, openAddComment}) => {
    const addComment = () => {
        openAddComment((prev) => !prev);
    };
    return (
        <Box sx={{backgroundColor: '#fff', py: 2, borderRadius: 3, boxShadow: 1}} gap={1.5} display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            {
                average !== 0 ?
                    <>
                        <Typography>میانگین امتیازات کاربران</Typography>
                        <Box sx={{display: 'flex', gap: .5}}>
                            <Typography color={'primary'} fontWeight={'bold'} variant={'h1'}>{PN.convertEnToPe(4.5)}</Typography>
                            <Typography>از {PN.convertEnToPe(5)}</Typography>
                        </Box>
                    </> :
                    <Typography>تاکنون نظری ثبت نشده است</Typography>
            }

            <Rating sx={{mb: 3}} value={average} readOnly size={'small'}/>
            <Button onClick={addComment} sx={{ height : 35, borderRadius: 2 , width : '90%'}} variant={'contained'}>
                <Typography
                color={'white'}
                variant={'body2'}
                sx={{mr: 1 }}>افزودن
                    دیدگاه
                </Typography>
                <Massage/>
            </Button>

        </Box>
    )
}
export default AverageRatingComment;