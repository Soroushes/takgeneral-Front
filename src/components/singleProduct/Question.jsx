import {Box, Button, Divider, Typography, TextField, Grid} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import {Controller, useForm} from "react-hook-form";
import {useAxios} from "src/hooks/useAxios";
import QuestionIcon from '../icons/questionMark.svg' ;

const Question = ({eachQuestion}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false,
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(eachQuestion.created_at.timestamp * 1000);
    const [answerIsShow, setAnswerShow] = useState(false);
    const [answerInputIsShow, setAnswerInputIsShow] = useState(false);
    const {loading, callApi} = useAxios();
    const {control, handleSubmit, getValues, reset} = useForm();
    const show = () => {
        setAnswerShow(prev => !prev);
    };
    const openAnswerInput = () => {
        setAnswerInputIsShow(prev => !prev);
    };
    const onFormSubmit = async () => {
        callApi({
            url: 'question-reply',
            method: 'post',
            token: true,
            data: {
                question: eachQuestion.id,
                content: getValues('newAnswer')

            },
            successFunc: () => {
                reset();
                setAnswerInputIsShow(prev => !prev);
            }
        })
    };
    return (
        <Box component={'form'} onSubmit={handleSubmit(onFormSubmit)} key={eachQuestion.id} sx={{width: '100%'}}>
            <Box>
                <Box sx={{display : 'flex' , flexDirection : {xs : "column" , md : 'row'} , alignItems : 'center' , gap : 2}}>
                    <QuestionIcon/>
                    <Typography>{eachQuestion.content} </Typography>
                </Box>
                <Typography component={'p'} textAlign={'end'} variant={'caption'}>{date}</Typography>
            </Box>
            {
                !eachQuestion.replys.length ?
                    <Box sx={{width: '100%', mt: 1}}>
                        {
                            answerInputIsShow ?
                                <Controller
                                    name="newAnswer"
                                    defaultValue={''}
                                    control={control}
                                    rules={{required: 'متن پاسخ خود را وارد کنید'}}
                                    render={({field, fieldState}) =>
                                        <TextField
                                            fullWidth={true}
                                            label={'پاسخ خود را مطرح کنید'}
                                            value={field.value}
                                            sx={{mt: 2, borderRadius: 2}}
                                            helperText={fieldState.error?.message ?? ''}
                                            error={!!fieldState.error?.message}
                                            onChange={field.onChange}
                                            autoFocus/>
                                    }
                                /> :
                                null
                        }
                        <Grid container>
                            {
                                answerInputIsShow ?
                                    <Grid item xs={12} md={1} justifyContent={'end'}>
                                        <Button variant="contained" size="small" type="submit"
                                                sx={{width: '100%', borderRadius: 1.5, fontSize: '12px', p: 1, mt: 1}}
                                        >
                                            ارسال پاسخ
                                        </Button>
                                    </Grid>
                                    :
                                    <Grid item xs={12} md={1}>
                                        <Button variant={'contained'} onClick={openAnswerInput}
                                                sx={{width: '100%', fontSize: '12px', borderRadius: 1.5, p: 1, mt: 1}}
                                                color="gray">
                                            ثبت پاسخ
                                        </Button>
                                    </Grid>
                            }

                        </Grid>
                    </Box>
                    : null
            }
            {
                eachQuestion.replys.length ?
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
                        {
                            eachQuestion.replys.map((answer, index) => {
                                const answerDate = Intl.DateTimeFormat('fa', {
                                    useGrouping: false,
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }).format(answer.created_at.timestamp * 1000);
                                const show = index < 1 || answerIsShow
                                return (
                                    <Box sx={{display: show ? 'block' : 'none'}} key={index}>
                                        <Box display={"flex"} width={'100%'} justifyContent={'space-between'}>
                                            <Typography key={answer} variant="subtitle1" color={'text.muted'}
                                                        sx={{px: 1, pb: 2}}>{answer.content}</Typography>
                                            <Typography variant={'caption'}>{answerDate}</Typography>
                                        </Box>
                                        <Divider/>
                                    </Box>
                                )
                            })
                        }
                        {
                            eachQuestion.replys.length >= 2 ?
                                <Box onClick={show}
                                     sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"}}>
                                    {
                                        answerIsShow ? <CloseIcon sx={{px: .5}} color={'primary'}/> :
                                            <KeyboardArrowDownIcon color={'primary'}/>
                                    }
                                    <Typography
                                        variant={"body2"}
                                        color={'primary'}
                                        sx={{
                                            cursor: "pointer",
                                            textAlign: "center",
                                        }}
                                    >
                                        {
                                            answerIsShow ? 'نشان دادن کمتر' : "مشاهده کامل پاسخ ها"
                                        }
                                    </Typography>
                                </Box>
                                :
                                null
                        }
                        {
                            answerInputIsShow ?
                                <Controller
                                    name="newAnswer"
                                    defaultValue={''}
                                    control={control}
                                    rules={{required: 'متن پاسخ خود را وارد کنید'}}
                                    render={({field, fieldState}) =>
                                        <TextField
                                            sx={{mt: 2, borderRadius: 2}}
                                            fullWidth={true}
                                            label={'پاسخ خود را مطرح کنید'}
                                            value={field.value}
                                            helperText={fieldState.error?.message ?? ''}
                                            error={!!fieldState.error?.message}
                                            onChange={field.onChange}
                                            autoFocus
                                        />
                                    }
                                /> :
                                null
                        }
                        <Grid container>
                            {
                                answerInputIsShow ?
                                    <Grid item xs={12} md={1} justifyContent={'end'}>
                                        <Button variant="contained" size="small" type="submit"
                                                sx={{width: '100%', fontSize: '12px', borderRadius: 1.5, p: 1, mt: 1}}
                                        >
                                            ارسال پاسخ
                                        </Button>
                                    </Grid>
                                    :
                                    <Grid item xs={12} md={1}>
                                        <Button variant={'contained'} disabled={answerInputIsShow}
                                                onClick={openAnswerInput}
                                                sx={{fontSize: '12px', width: '100%', borderRadius: 1.5, mt: 1}}
                                                color="gray">
                                            ثبت پاسخ
                                        </Button>
                                    </Grid>
                            }
                        </Grid>
                    </Box>
                    : null
            }

        </Box>

    )
}
export default Question;