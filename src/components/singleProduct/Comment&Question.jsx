import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Button, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Question from "./Question";
import Comment from "./Comment";
import AddCommentModal from "./modals/AddCommentModal";
import AddQuestionModal from "./modals/AddQuestionModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import AverageRatingComment from "./AverageRatingComment";
import MainModal from "../share/MainModal";
import {useSelector} from "react-redux";
import NoCommentIcon from '../../assets/icons/single-product/Layer_1.svg';
import AverageRatingQuestion from "./AverageRatingQuestion";
import {useRouter, useSearchParams} from "next/navigation";
import AddAnswerModal from "./modals/AddAnswerModal";

const CommentQuestion = ({comments, rate, productId, questions}) => {
    const {isLoggedIn} = useSelector(state => state.userInfo)
    const [value, setValue] = useState("1");
    const [questionIsShow, setQuestionIsShow] = useState(false);
    const [commentIsShow, setCommentIsShow] = useState(false);
    const [commentIsOpen, setCommentIsOpen] = useState(false);
    const [questionIsOpen, setQuestionIsOpen] = useState(false);
    const [answerIsOpen, setAnswerIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams.get('from');
    const Router = useRouter();
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const showComment = () => {
        setCommentIsShow(prev => !prev);
    };
    const showQuestion = () => {
        setQuestionIsShow(prev => !prev)
    };
    const addAnswer = () => {
        if (isLoggedIn) {
            setAnswerIsOpen(prev => !prev);
        } else {
            Router.push(`/login?from=product/${productId}?from=answer`)
        }
    }
    useEffect(() => {
        if (from === 'comment') {
            setCommentIsOpen(true);
        } else if (from === 'question') {
            setQuestionIsOpen(true);
        } else if (from === 'answer') {
            setAnswerIsOpen(true)
        }
    }, [])
    return (
        <TabContext value={value}>
            <Box
                sx={{
                    borderColor: "divider",
                    display: "flex",
                    width: "100%",
                    mb: {xs: 2, md: 2, lg: 0},
                    borderBottom: '1px solid #eee'
                }}
            >
                <TabList indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            mr: 2,
                        }}
                        label="دیدگاه کاربران"
                        value="1"
                    />
                    <Tab
                        label="پرسش و پاسخ"
                        value="2"
                    />
                </TabList>
            </Box>
            <Box
                sx={{
                    transition: "all .3s",
                    justifyContent: "center",
                    width: "100%",

                }}
            >
                <TabPanel
                    value="1"
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: 2,
                        p: 0,
                    }}
                >
                    {
                        <Grid container sx={{py: 3}} rowGap={5} justifyContent={'space-between'}>
                            <Grid item xs={12} md={2.6}>
                                <AverageRatingComment productId={productId} isLoggedIn={isLoggedIn}
                                                      openAddComment={setCommentIsOpen} average={rate.avg_keyfiyat_rate}
                                                      title={'comment'}/>
                            </Grid>
                            {
                                comments.length ?
                                    <Grid item xs={12} md={9}>
                                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                            {
                                                comments.map((comment, index) => {
                                                    const show = index < 2 || commentIsShow
                                                    return (
                                                        <Box sx={{display: show ? 'block' : 'none'}} key={index}>
                                                            <Comment comment={comment}/>
                                                        </Box>
                                                    )
                                                })
                                            }
                                            {
                                                comments.length > 2 ?
                                                    <Button
                                                        onClick={showComment}
                                                        variant="outlined"
                                                        color={'primary'}
                                                        sx={{
                                                            width: {xs: '100%', md: "25%", lg: '20%'},
                                                            my: 2,
                                                            px: .5,
                                                            mx: {md: 2, xs: 0}
                                                        }}
                                                    >
                                                        {
                                                            commentIsShow ?
                                                                <CloseIcon sx={{px: .5}} color={'primary'}/> :
                                                                <KeyboardArrowDownIcon color={'primary'}/>
                                                        }
                                                        <Typography variant={'subtitle1'} color={'primary'}>
                                                            {
                                                                commentIsShow ? 'نشان دادن کمتر' : "مشاهده کامل نظرات"
                                                            }
                                                        </Typography>
                                                    </Button>
                                                    :
                                                    null
                                            }
                                        </Box>
                                    </Grid> :
                                    <Box sx={{
                                        margin: 'auto',
                                        mt: {xs: 1, md: 3}
                                    }}>
                                        <NoCommentIcon/>
                                    </Box>
                            }
                        </Grid>
                    }

                </TabPanel>
                <TabPanel value="2" sx={{
                    width: '100%',
                    p: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {
                        !questions.length ? (
                                <Box sx={{
                                    margin: 'auto',
                                    mt: {xs: 1, md: 3}
                                }}>
                                    <NoCommentIcon/>
                                </Box>
                            ) :
                            <Grid container sx={{py: 3}} rowGap={5} justifyContent={'space-between'}>
                                <Grid item xs={12} md={2.6}>
                                    <AverageRatingQuestion productId={productId} isLoggedIn={isLoggedIn}
                                                           openAddQuestion={setQuestionIsOpen}/>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {
                                        questions.map((eachQuestion, index) => {
                                            const show = index < 2 || questionIsShow;
                                            return (
                                                <Box sx={{display: show ? 'block' : 'none', width: '100%', mb: 6}}
                                                     key={index}>
                                                    <Question addAnswer={addAnswer} setAnswerIsOpen={setAnswerIsOpen}
                                                              answerIsOpen={answerIsOpen} productId={productId}
                                                              eachQuestion={eachQuestion}/>
                                                </Box>
                                            )
                                        })
                                    }
                                    {
                                        questions.length > 2 ?
                                            <Button
                                                onClick={showQuestion}
                                                variant="outlined"
                                                color={'primary'}
                                                sx={{width: {xs: '100%', md: "25%", lg: '20%'}, px: .5}}
                                            >
                                                {
                                                    questionIsShow ? <CloseIcon sx={{px: .5}} color={'primary'}/> :
                                                        <KeyboardArrowDownIcon color={'primary'}/>
                                                }
                                                <Typography variant={'subtitle1'} color={'primary'}>
                                                    {
                                                        questionIsShow ? 'نشان دادن کمتر' : "مشاهده کامل پرسش ها"
                                                    }
                                                </Typography>
                                            </Button>
                                            :
                                            null
                                    }
                                </Grid>
                            </Grid>
                    }
                </TabPanel>
            </Box>
            <MainModal title={'افزودن دیدگاه'} open={commentIsOpen} setOpen={setCommentIsOpen} desktopFullScreen={true}>
                <AddCommentModal setCloese={setCommentIsOpen} productId={productId} rate={rate}/>
            </MainModal>
            <MainModal title={'ثبت پرسش'} open={questionIsOpen} setOpen={setQuestionIsOpen}>
                <AddQuestionModal setClose={setQuestionIsOpen} productId={productId}/>
            </MainModal>
            <MainModal open={answerIsOpen} setOpen={setAnswerIsOpen} title={'ثبت پاسخ'}>
                <AddAnswerModal productId={productId} setClose={setAnswerIsOpen}/>
            </MainModal>
        </TabContext>

    )
}
export default CommentQuestion;