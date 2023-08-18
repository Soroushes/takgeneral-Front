import {Box, Button, Typography} from "@mui/material";
import QuestionIcon from '../../assets/icons/single-product/message-question.svg';
import AnswerIcon from '../../assets/icons/single-product/blue-message.svg';
import {timeStampToDate} from "@/hooks/timeStampToDate";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const Question = ({eachQuestion, addAnswer}) => {
    return (
        <Box key={eachQuestion.id} sx={{width: '100%'}}>
            <Box sx={{borderBottom: '1px solid #f4f4f4', pb: 1}} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={1}>
                    <Box sx={{width: '20px', height: '20px'}}><QuestionIcon/></Box>
                    <Typography>{eachQuestion.content}</Typography>
                </Box>
                <Typography sx={{minWidth: '80px', textAlign: 'end'}} variant={'body1'}
                            color={'text.muted'}>{timeStampToDate(eachQuestion.created_at.timestamp)}</Typography>
            </Box>

            {eachQuestion.replys.length ?
                <Box display={'flex'} justifyContent={'space-between'} sx={{mt:2}} gap={1}>
                    <Box sx={{width: '20px', height: '20px' , pt:.8}}><AnswerIcon/></Box>
                    <Box sx={{width:'100%'}}>
                        {eachQuestion.replys.map((answer, index) => {
                            return (
                                <Box sx={{
                                    display:'flex',
                                    justifyContent: 'space-between',
                                    mb:1
                                }} key={index}>
                                    <Box display={'flex'} gap={1}>
                                        {
                                            true ?
                                                <Button sx={{
                                                    backgroundColor: 'primary.lighter',
                                                    height: '32px',
                                                    '&:hover': {backgroundColor: 'primary.lighter'}
                                                }} disableRipple size={'small'}>فروشگاه</Button> :
                                                <Button disabled size={'small'}>مشتری</Button>
                                        }
                                        <Typography sx={{textAlign:'start'}} display={'flex'} alignItems={'center'}>{answer.content}</Typography>
                                    </Box>
                                    <Typography sx={{minWidth: '80px' , height:'32px' , justifyContent:'end' ,display:'flex' ,alignItems:'center'}}  variant={'body2'}
                                                color={'text.muted'}>{timeStampToDate(answer.created_at.timestamp)}</Typography>
                                </Box>
                            )
                        })}
                        <Button variant={'text'} onClick={addAnswer} sx={{mt: 2, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer'}}>
                            <Typography variant={'subtitle1'} color={'primary'}>ثبت پاسخ جدید</Typography>
                            <ChevronLeftRoundedIcon fontSize={'small'}/>
                        </Button>
                    </Box>
                </Box>
                :
                <Button variant={'text'} onClick={addAnswer} sx={{mt: 2, display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <Typography variant={'subtitle1'} color={'primary'}>ثبت پاسخ جدید</Typography>
                    <ChevronLeftRoundedIcon fontSize={'small'}/>
                </Button>

            }

        </Box>
    )
}
export default Question;