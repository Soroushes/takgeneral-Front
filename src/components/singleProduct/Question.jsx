import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import QuestionIcon from '../../assets/icons/single-product/message-question.svg';
import LeftArrow from '../../assets/icons/single-product/arrow-left.svg';
import AnswerIcon from '../../assets/icons/single-product/message-2.svg';

const Question = ({eachQuestion, addAnswer}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(eachQuestion.created_at.timestamp * 1000);
    const [answerIsShow, setAnswerShow] = useState(false);
    const show = () => {
        setAnswerShow(prev => !prev);
    }
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
                            const show = index < 1 || answerIsShow
                            return (
                                <Box sx={{
                                    display: show ? 'flex' : 'none',
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
                        {eachQuestion.replys.length >= 2 ?
                            <Button variant={'text'} onClick={show} sx={{
                                mt: 2, pl: 0
                            }}>
                                {answerIsShow ? <CloseIcon sx={{px: .5}} color={'primary'}/> :
                                    <KeyboardArrowDownIcon color={'primary'}/>}
                                <Typography
                                    variant={"body2"}
                                    color={'primary'}
                                    sx={{
                                        cursor: "pointer", textAlign: "center",
                                    }}
                                >
                                    {answerIsShow ? 'نشان دادن کمتر' : "مشاهده کامل پاسخ ها"}
                                </Typography>
                            </Button> : null}
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