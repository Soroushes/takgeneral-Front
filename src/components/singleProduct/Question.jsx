import {Box, Button, Typography} from "@mui/material";
import QuestionIcon from '../../assets/icons/single-product/message-question.svg';
import LeftArrow from '../../assets/icons/single-product/blue-arrow-left.svg';
import AnswerIcon from '../../assets/icons/single-product/blue-message.svg';

const Question = ({eachQuestion, addAnswer}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(eachQuestion.created_at.timestamp * 1000);
    return (
        <Box key={eachQuestion.id} sx={{width: '100%'}}>
            <Box sx={{borderBottom: '1px solid #f4f4f4', pb: 1}} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={1}>
                    <Box sx={{width: '20px', height: '20px'}}><QuestionIcon/></Box>
                    <Typography>{eachQuestion.content}</Typography>
                </Box>
                <Typography sx={{minWidth: '80px', textAlign: 'end'}} variant={'body1'}
                            color={'text.muted'}>{date}</Typography>
            </Box>

            {eachQuestion.replys.length ?
                <Box display={'flex'} justifyContent={'space-between'} sx={{mt:2}} gap={1}>
                    <Box sx={{width: '20px', height: '20px' , pt:.8}}><AnswerIcon/></Box>
                    <Box sx={{width:'100%'}}>
                        {eachQuestion.replys.map((answer, index) => {
                            const answerDate = Intl.DateTimeFormat('fa', {
                                useGrouping: false, year: "numeric", month: "long", day: "numeric"
                            }).format(answer.created_at.timestamp * 1000);
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
                                                color={'text.muted'}>{answerDate}</Typography>
                                </Box>
                            )
                        })}
                        <Button variant={'text'} onClick={addAnswer} sx={{mt: 2, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer'}}>
                            <Typography variant={'subtitle1'} color={'primary'}>ثبت پاسخ جدید</Typography>
                            <LeftArrow/>
                        </Button>
                    </Box>
                </Box>
                :
                <Button variant={'text'} onClick={addAnswer} sx={{mt: 2, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer'}}>
                    <Typography variant={'subtitle1'} color={'primary'}>ثبت پاسخ جدید</Typography>
                    <LeftArrow/>
                </Button>

            }

        </Box>
    )
}
export default Question;