import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import QuestionIcon from '../../assets/icons/single-product/message-question.svg';
import LeftArrow from '../../assets/icons/single-product/arrow-left.svg';
import AnswerIcon from '../../assets/icons/single-product/message-2.svg';
import MainModal from "../share/MainModal";
import AddAnswerModal from "./modals/AddAnswerModal";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
const Question = ({eachQuestion , productId}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(eachQuestion.created_at.timestamp * 1000);
    const {isLoggedIn} = useSelector(state=>state.userInfo);
    const Router = useRouter();
    const [answerIsShow, setAnswerShow] = useState(false);
    const [answerIsOpen , setAnswerIsOpen] = useState(false);
    const show = () => {
        setAnswerShow(prev => !prev);
    };
    const addAnswer =()=>{
        if(isLoggedIn){
            setAnswerIsOpen(prev=>!prev);
        }else{
            Router.push(`/login?from=product/${productId}`)
        }
    }
    return (
        <Box  key={eachQuestion.id} sx={{width: '100%', mb: 6}}>
            <Box sx={{borderBottom: '1px solid #f4f4f4', pb: 1}} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={1    }>
                    <Box sx={{width:'20px' , height:'20px'}}><QuestionIcon/></Box>
                    <Typography>{eachQuestion.content}</Typography>
                </Box>
                <Typography sx={{minWidth: '80px' , textAlign:'end'}} variant={'body2'} color={'text.muted'}>{date}</Typography>
            </Box>
            {eachQuestion.replys.length ?
                <Box>
                    {eachQuestion.replys.map((answer, index) => {
                        const answerDate = Intl.DateTimeFormat('fa', {
                            useGrouping: false, year: "numeric", month: "long", day: "numeric"
                        }).format(answer.created_at.timestamp * 1000);
                        const show = index < 1 || answerIsShow
                        return (
                            <Box sx={{display: show ? 'flex' : 'none', justifyContent: 'space-between' , mt:2 , alignItems:'center'  }} key={index}>
                                <Box display={'flex'} alignItems={'center'} gap={1}>
                                    {
                                        !index ? <Box sx={{width:'20px' , height:'20px'}}><AnswerIcon/></Box>
                                            :null
                                    }
                                    {
                                        true ?
                                            <Button sx={{backgroundColor:'primary.lighter' , height:'32px' , '&:hover': {backgroundColor:'primary.lighter'}}} disableRipple size={'small'} >فروشگاه</Button>:
                                            <Button disabled size={'small'} >مشتری</Button>
                                    }
                                    <Typography display={'flex'}>{answer.content}</Typography>
                                </Box>
                                <Typography sx={{minWidth: '80px' , textAlign:'end'}} variant={'body2'} color={'text.muted'}>{answerDate}</Typography>
                            </Box>
                        )
                    })}
                    {eachQuestion.replys.length >= 2 ?
                        <Box onClick={show} sx={{
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
                </Box> : null
            }
            <Box onClick={addAnswer} sx={{mt: 2, display: 'flex', alignItems: 'center' , cursor:'pointer'}}>
                <Typography color={'primary'}>ثبت پاسخ جدید</Typography>
                <LeftArrow/>
            </Box>
            <MainModal open={answerIsOpen} setOpen={setAnswerIsOpen} title={'ثبت پاسخ'}>
                <AddAnswerModal productId={productId} setClose={setAnswerIsOpen}/>
            </MainModal>
        </Box>
    )
}
export default Question;