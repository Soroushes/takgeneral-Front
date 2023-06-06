import {Box, Divider, Grid, Typography} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from "react-hook-form";
import {useAxios} from "src/hooks/useAxios";
import QuestionIcon from '../icons/questionMark.svg';
import AnswerButton from "./AnswerButton";

const Question = ({eachQuestion}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(eachQuestion.created_at.timestamp * 1000);
    const [answerIsShow, setAnswerShow] = useState(false);
    const [answerInputIsShow, setAnswerInputIsShow] = useState(false);
    const [questionIsShow, setQuestionIsShow] = useState(false);
    const {callApi} = useAxios();
    const {control, handleSubmit, getValues, reset} = useForm();

    const show = () => {
        setAnswerShow(prev => !prev);
    };
    const openAnswerInput = () => {
        setAnswerInputIsShow(prev => !prev);
    };
    const onFormSubmit = async () => {
        callApi({
            url: 'question-reply', method: 'post', token: true, data: {
                question: eachQuestion.id, content: getValues('newAnswer')

            }, successFunc: () => {
                reset();
                setAnswerInputIsShow(prev => !prev);
            }
        })
    };
    return (<Box component={'form'} onSubmit={handleSubmit(onFormSubmit)} key={eachQuestion.id} sx={{width: '100%'}}>
            <Grid container
                  sx={{
                      display: 'flex',
                      flexDirection: {md: 'row', xs: 'column'},
                      alignItems: {md: 'start', xs: 'center'},
                      flexWrap: 'noWrap',
                      gap: 1.5
                  }}>
                <Grid item md={.5}><QuestionIcon/></Grid>
                <Grid item>
                    <Typography>
                        {eachQuestion.content}
                    </Typography>
                </Grid>

            </Grid>
            {eachQuestion.replys.length ? <Box sx={{
                backgroundColor: 'gray.lighter',
                p: 2,
                borderRadius: 3,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                width: '100%'
            }}>
                <Typography fontWeight={'bold'} color={'text.muted'} sx={{mb: 2}}>پاسخ : </Typography>
                {eachQuestion.replys.map((answer, index) => {
                    const answerDate = Intl.DateTimeFormat('fa', {
                        useGrouping: false, year: "numeric", month: "long", day: "numeric"
                    }).format(answer.created_at.timestamp * 1000);
                    const show = index < 1 || answerIsShow
                    return (<Box sx={{display: show ? 'block' : 'none'}} key={index}>
                            <Box display={"flex"} width={'100%'} justifyContent={'space-between'}>
                                <Typography key={answer} variant="subtitle1" color={'text.muted'}
                                            sx={{px: 1, pb: 2}}>{answer.content}</Typography>
                                <Typography variant={'caption'}>{answerDate}</Typography>
                            </Box>
                            <Divider/>
                        </Box>)
                })}
                {eachQuestion.replys.length >= 2 ? <Box onClick={show} sx={{
                    display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"
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
                </Box> : null}
                <AnswerButton setAnswerInputIsShow={setAnswerInputIsShow} answerInputIsShow={answerInputIsShow}
                              control={control}/>
            </Box> : <Box sx={{width: '100%', mt: 1}}>
                <AnswerButton setAnswerInputIsShow={setAnswerInputIsShow} date={date}
                              answerInputIsShow={answerInputIsShow}
                              control={control}/>
            </Box>

            }

        </Box>

    )
}
export default Question;