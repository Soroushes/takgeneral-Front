import {Box, Button, Typography} from "@mui/material";
import Massage from "../../assets/icons/single-product/message.svg";
import {useRouter} from "next/navigation";
const AverageRatingQuestion = ({isLoggedIn, openAddQuestion , productId}) => {
    const Router = useRouter();
    const AddQuestion = () => {
        if (isLoggedIn) {
            openAddQuestion((prev) => !prev);
        } else {
            Router.push(`/login?from=product/${productId}?fromSection=question`)
        }
    }
    return (
        <Box sx={{backgroundColor: '#fff', py: 2, borderRadius: 3, px: 1}} gap={1.5} display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            <Typography component={'p'} variant={'h5'} sx={{textAlign:'center', px:{md:1 , xs:10} , mb:4}}>درباره این کالا سوالی دارید؟ سوال خود را ثبت کنید.</Typography>
            <Button onClick={AddQuestion} sx={{height: 40, borderRadius: 2, width: '95%'}}
                    variant={'contained'}><Typography color={'white'} variant={'body1'} sx={{mr: 1}}>بپرسید</Typography><Massage/></Button>
        </Box>
    )
}
export default AverageRatingQuestion;