import {Box, Button, Typography} from "@mui/material";
import Massage from "../../assets/icons/message.svg";

const AverageRatingQuestion = () => {
    return (
        <Box sx={{backgroundColor: '#fff', py: 2, borderRadius: 3}} gap={1.5} display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            <Typography>تاکنون نظری ثبت نشده است</Typography>
            <Button sx={{px: 5, py: .5, borderRadius: 2}} variant={'contained'}><Typography color={'#fff'} variant={'subtitle2'} sx={{mr: 1}}>بپرسید</Typography><Massage/></Button>
        </Box>
    )
}
export default AverageRatingQuestion;