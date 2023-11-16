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
import {useSelector} from "react-redux";
import NoCommentIcon from '../../assets/icons/single-product/no comment.svg';
import NoQuestion from '../../assets/icons/single-product/no question.svg'
import AverageRatingQuestion from "./AverageRatingQuestion";
import {useRouter, useSearchParams} from "next/navigation";
import PN from "persian-number";

const CommentQuestion = ({comments, rate, productId, questions , image}) => {
    const {isLoggedIn} = useSelector(state => state.userInfo)
    const [value, setValue] = useState("1");
    const [questionIsShow, setQuestionIsShow] = useState(false);
    const [commentIsShow, setCommentIsShow] = useState(false);
    const [commentIsOpen, setCommentIsOpen] = useState(false);
    const [questionIsOpen, setQuestionIsOpen] = useState(false);
    const [answerIsOpen, setAnswerIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams.get('fromSection');
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
            Router.push(`/login?from=product/${productId}?fromSection=answer`)
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
                    mb: {xs: 4, md: 4, lg: 3},
                    borderBottom: '1px solid #eee'
                }}
            >
                <TabList indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            mr: 2,
                        }}
                        label={`دیدگاه کاربران (${PN.convertEnToPe(comments?.length)})`}
                        value="1"
                    />
                    <Tab
                        label={`پرسش و پاسخ (${PN.convertEnToPe(questions?.length)})`}
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
                        <Grid container rowGap={5} justifyContent={'space-between'}>
                            <Grid item xs={12} md={2.6}>
                                <AverageRatingComment productId={productId} isLoggedIn={isLoggedIn}
                                                      openAddComment={setCommentIsOpen} average={rate?.avg_rate}
                                                      title={'comment'}/>
                            </Grid>
                            {
                                comments?.length ?
                                    <Grid item xs={12} md={9}>
                                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                            {
                                                comments?.map((comment, index) => {
                                                    const show = index < 2 || commentIsShow
                                                    return (
                                                        <Box sx={{display: show ? 'block' : 'none'}} key={index}>
                                                            <Comment productId={productId} comment={comment}/>
                                                        </Box>
                                                    )
                                                })
                                            }
                                            {
                                                comments?.length > 2 ?
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

                    <Grid container  rowGap={5} justifyContent={'space-between'}>
                        <Grid item xs={12} md={2.6}>
                            <AverageRatingQuestion productId={productId} isLoggedIn={isLoggedIn}
                                                   openAddQuestion={setQuestionIsOpen}/>
                        </Grid>
                        {
                            questions?.length ?
                                <Grid item xs={12} md={9}>
                                    {
                                        questions?.map((eachQuestion, index) => {
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
                                        questions?.length > 2 ?
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
                                </Grid> :
                                <Box sx={{
                                    margin: 'auto',
                                    mt: {xs: 1, md: 3}
                                }}>
                                    <NoQuestion/>
                                </Box>
                        }
                    </Grid>
                </TabPanel>
            </Box>
            <AddCommentModal image={image} open={commentIsOpen} setOpen={setCommentIsOpen} productId={productId} rate={rate}/>
            <AddQuestionModal question={true} title={'ثبت پرسش'} setOpen={setQuestionIsOpen} open={questionIsOpen} productId={productId}/>
            <AddQuestionModal question={false} title={'ثبت پاسخ'} productId={productId} open={answerIsOpen} setOpen={setAnswerIsOpen}/>
        </TabContext>

    )
}
export default CommentQuestion;