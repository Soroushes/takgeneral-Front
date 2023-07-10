import {Box, Button, Typography} from "@mui/material";
import Massage from "../../assets/icons/message.svg";
import {useRouter} from "next/navigation";

const AverageRatingQuestion = ({isLoggedIn, openAddQuestion , productId}) => {
    const Router = useRouter();
    const AddQuestion = () => {
        if (isLoggedIn) {
            openAddQuestion((prev) => !prev);
        } else {
            Router.push(`/login?from=product/${productId}`)
        }
    }
    return (
        <Box sx={{backgroundColor: '#fff', py: 2, borderRadius: 3, px: 2}} gap={1.5} display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            <Typography variant={'body1'} sx={{textAlign:'center' , mb:4}}>درباره این کالا سوالی دارید؟ سوال خود را ثبت کنید.</Typography>
            <Button onClick={AddQuestion} sx={{height: 40, borderRadius: 2, width: '95%'}}
                    variant={'contained'}><Typography color={'white'} variant={'body1'} sx={{mr: 1}}>بپرسید</Typography><Massage/></Button>
        </Box>
    )
}
export default AverageRatingQuestion;