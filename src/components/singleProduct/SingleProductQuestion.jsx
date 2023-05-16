import {Box, Button, Divider, Typography} from "@mui/material";
import {Grid} from "@mui/material";
import {Fragment, useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

const SingleProductQuestion = ({eachQuestion}) => {
    const [answerIsShow, setAnswerShow] = useState(false);
    const show = () => {
        setAnswerShow(prev => !prev);
    }
    return (
        <Fragment key={eachQuestion.question}>
            <Grid container sx={{display: 'flex', justifyContent: 'space-between', px: 2, mt: 2}}>
                <Typography>{eachQuestion.question} </Typography>
            </Grid>
            <Button size="small" sx={{justifyContent: 'start', borderRadius: 1.5, p: 1, px: 2}} color="gray">
                ثبت پاسخ
            </Button>
            <Box sx={{
                backgroundColor: 'gray.lighter',
                p: 2,
                borderRadius: 3,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                {
                    eachQuestion.answers.map((answer, index) => {
                        if (index < 1 || answerIsShow) {
                            return (
                                <>
                                    <Typography key={answer} variant="subtitle1" color={'text.muted'} sx={{px: 1, pb: 2}}>{answer}</Typography>
                                    <Divider/>
                                </>
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
                <Button size="small" sx={{justifyContent: 'start', width: '110px !important', borderRadius: 2}} color="gray">
                    ثبت پاسخ جدید
                </Button>
            </Box>
        </Fragment>

    )
}
export default SingleProductQuestion;