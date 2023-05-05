import {Box, Button, Typography} from "@mui/material";
import {Grid} from "@mui/material";
import { Fragment, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
const SingleProductQuestion =({eachQuestion})=>{
    const [answerIsShow , setAnswerShow] = useState(false);
    const [number , setNumber] = useState('')
    const show =(num)=>{
        setAnswerShow( prev=>!prev);
        setNumber(num)
    }
    return(
        
                    <Fragment key={eachQuestion.question}>
                        <Grid container sx={{display:'flex' , justifyContent:'space-between' , px:2 , mt:2}}>
                            <Typography>{eachQuestion.question} </Typography>
                        </Grid>
                        <Button size="small" sx={{justifyContent:'start' , borderRadius:1.5 , p:1 , px:2}} color="gray">ثبت پاسخ </Button>
                        <Box sx={{backgroundColor : 'gray.lighter' , p:2 , borderRadius:3 , mt:2 , display:'flex'  , flexDirection:'column' ,gap:2}}>
                            {
                                eachQuestion.answers.map((answer , index)=>{
                                    if(index <1  || (answerIsShow && eachQuestion.num === number)){
                                        return(
                                            <Typography key={answer} variant="subtitle1" sx={{px:1 , color:'text.muted'}}>{answer}</Typography>
                                        )
                                    }
                                   
                                })
                                
                            }
                            {
                                eachQuestion.answers.length >=3 ? 
                                <Box onClick={show.bind(this , eachQuestion.num)} sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"}}>
                                    {
                                    answerIsShow && eachQuestion.num === number ? <CloseIcon color={'primary'}/> : <KeyboardArrowDownIcon color={'primary'}/>
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
                                        answerIsShow && eachQuestion.num === number ? 'نشان دادن کمتر' : "مشاهده کامل پاسخ ها"
                                    }
                                    </Typography>
                                </Box>
                                :
                                ''
                            }
                            <Typography variant="subtitle1" sx={{px:1}}>لوزم ایپسون</Typography>
                            <Button size="small" sx={{justifyContent:'start' ,width:'110px !important' , borderRadius:2}} color="gray">ثبت پاسخ جدید</Button>
                        </Box>
                    </Fragment>
                
    )
}
export default SingleProductQuestion;