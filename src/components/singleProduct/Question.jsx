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
    const {callApi} = useAxios();
    const {control, handleSubmit, getValues, reset} = useForm();
    const show = () => {
        setAnswerShow(prev => !prev);
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
            <Grid container rowGap={1}>
                <Grid item xs={12} md={.5} justifyContent={'center'} display={'flex'}><QuestionIcon/></Grid>
                <Grid item xs={12} md={11.5}><Typography>{eachQuestion.content}</Typography></Grid>
            </Grid>
            {eachQuestion.replys.length ? (<Box>
                        <Typography sx={{px: 2}} component={'p'} textAlign={'end'} variant={'caption'}>{date}</Typography>
                        <Box sx={{
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
                                    <Grid container>
                                        <Grid item md={11} xs={12}>
                                            <Typography key={answer} variant="subtitle1" color={'text.muted'}
                                                        sx={{px: 1, pb: 2}}>{answer.content}</Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12} display={'flex'} justifyContent={'end'}>
                                            <Typography variant={'caption'}>{answerDate}</Typography>
                                        </Grid>
                                    </Grid>
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
                        </Box>
                    </Box>

                ) :

                <Box sx={{width: '100%', mt: 1}}>
                    <AnswerButton
                        setAnswerInputIsShow={setAnswerInputIsShow}
                        date={date}
                        answerInputIsShow={answerInputIsShow}
                        control={control}
                    />
                </Box>

            }

        </Box>

    )
}
export default Question;