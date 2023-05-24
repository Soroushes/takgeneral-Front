import {Box, Button, Divider, Typography , TextField , Grid} from "@mui/material";
import {Fragment, useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import { Controller , useForm } from "react-hook-form";
import axios from "axios";
import { useAxios } from "src/hooks/useAxios";
const Question = ({eachQuestion , productId}) => {
    const [answerIsShow, setAnswerShow] = useState(false);
    const [answerInputIsShow , setAnswerInputIsShow] = useState(false);
    const {loading, callApi} = useAxios();
    const {control ,handleSubmit , getValues, reset} = useForm();
    const show = () => {
        setAnswerShow(prev => !prev);
    };
    const onFormSubmit = async ()=>{
        setAnswerInputIsShow(prev=>!prev);
        if(answerInputIsShow){
            callApi({
                url:'question-reply', 
                method:'post', 
                token:true,
                data:{  
                    question: eachQuestion.question , 
                    content : getValues('newAnswer'), 
                    product: productId
                },
                successFunc:(res)=>{
                    console.log(res);
                    reset();
                }
            })
            // try{
            //     const data = await axios({
            //         url :'https://takback.soroushes.tk/question-reply/',
            //         method:'post',
            //         token:true,
            //         data :{
            //             question: eachQuestion?.question,
            //             content : getValues('newAnswer')
            //         }
            //     })
            //     console.log(data)
            // }catch(err){
            //     console.log(err)
            // }
        }
        
    };
    return (
        <Box component={'form'} onSubmit={handleSubmit(onFormSubmit)} key={eachQuestion.question} sx={{width :'100%' }}>
            <Grid container sx={{display: 'flex', justifyContent: 'space-between', px: 2, mt: 2 , width :'100%'}}>
                <Typography>{eachQuestion.question} </Typography>
            </Grid>
            {
                eachQuestion.answers.length === 0 ? 
                <Box sx={{width:'100%' , mt:1}}>
                    {
                        answerInputIsShow ? 
                        <Controller
                            name="newAnswer"
                            defaultValue={''}
                            control={control}
                            rules={{required:'متن پاسخ خود را وارد کنید'}}
                            render={({field  , fieldState})=>
                                <TextField 
                                fullWidth={true} 
                                label={'پاسخ خود را مطرح کنید'} 
                                value={field.value} 
                                sx={{mt:2 , backgroundColor:'#fff' , borderRadius:2}} 
                                helperText={fieldState.error?.message ?? ''}
                                error={!!fieldState.error?.message}
                                onChange={field.onChange}/>
                            }
                        />:
                        null
                    }
                    <Grid container  >
                        {
                            answerInputIsShow ? 
                            <Grid item xs={12} md={1.5} justifyContent={'end'}>
                            <Button variant="contained" size="small" type="submit" sx={{width:'100%', borderRadius: 1.5, p: 1, px: 2 , mt:1}} color="secondary">
                            ارسال پاسخ
                            </Button>
                            </Grid>
                            :
                            <Grid item  xs={12} md={1.5}>
                                <Button size="small" disabled={answerInputIsShow ? true : false } type="submit" sx={{ width:'100%' , borderRadius: 1.5, p: 1, px: 2 , mt:1}} color="gray">
                                    ثبت پاسخ    
                                </Button>
                            </Grid> 
                        }
                        
                    </Grid>
                </Box>
            :null
            }
           {
            eachQuestion.answers.length !== 0 ?
            <Box sx={{
                backgroundColor: 'gray.lighter',
                p: 2,
                borderRadius: 3,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1 , 
                width:'100%'
            }}>
                {
                    eachQuestion.answers.map((answer, index) => {
                        if (index < 1 || answerIsShow) {
                            return (
                                <Fragment key={index}>
                                    <Typography key={answer} variant="subtitle1" color={'text.muted'} sx={{px: 1, pb: 2}}>{answer}</Typography>
                                    <Divider/>
                                </Fragment>
                            )
                        }
                    })
                }
                {
                    eachQuestion.answers.length >= 2 ?
                        <Box onClick={show}
                             sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"}}>
                            {
                                answerIsShow ? <CloseIcon color={'primary'}/> :
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
                            rules={{required:'متن پاسخ خود را وارد کنید'}}
                            render={({field  , fieldState})=>
                                <TextField 
                                sx={{mt:2 , backgroundColor:'#fff' , borderRadius:2}} 
                                fullWidth={true} 
                                label={'پاسخ خود را مطرح کنید'} 
                                value={field.value} 
                                helperText={fieldState.error?.message ?? ''}
                                error={!!fieldState.error?.message}
                                onChange={field.onChange}/>
                            }
                        />:
                        null
                    }
                <Grid container  >
                        {
                            answerInputIsShow ? 
                            <Grid item xs={12} md={1.5} justifyContent={'end'}>
                            <Button variant="contained" size="small" type="submit" sx={{width:'100%', borderRadius: 1.5, p: 1, px: 2 , mt:1}} color="secondary">
                            ارسال پاسخ
                            </Button>
                            </Grid>
                            :
                            <Grid item  xs={12} md={1.5}>
                                <Button size="small" disabled={answerInputIsShow ? true : false } type="submit" sx={{ width:'100%' , borderRadius: 1.5, p: 1, px: 2 , mt:1}} color="gray">
                                    ثبت پاسخ    
                                </Button>
                            </Grid> 
                        }
                        
                    </Grid>
            </Box>
            :null
           }
            
        </Box>

    )
}
export default Question;