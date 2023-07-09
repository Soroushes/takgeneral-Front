import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {useState} from "react";
import Question from "./Question";
import Comment from "./Comment";
import AddCommentModal from "./modals/AddCommentModal";
import AddQuestion from "./AddQuestion";
import NoQuestion from '../../assets/icons/noQuestion.svg';
import NoComment from '../../assets/icons/noComment.svg';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import AverageRatingComment from "./AverageRatingComment";
import MainModal from "../share/MainModal";
const CommentQuestion = ({comments, rate, productId, questions}) => {
    const [value, setValue] = useState("1");
    const [questionIsShow, setQuestionIsShow] = useState(false);
    const [commentIsShow, setCommentIsShow] = useState(false);
    const [commentIsOpen , setCommentIsOpen] = useState(false)
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const showComment = () => {
        setCommentIsShow(prev => !prev);
    };
    const showQuestion = () => {
        setQuestionIsShow(prev => !prev)
    };

    return (
        <TabContext value={value}>
            <Box
                sx={{
                    borderColor: "divider",
                    display: "flex",
                    width: "100%",
                    mb: {xs: 2, md: 2, lg: 0},
                    borderBottom:'1px solid #eee'
                }}
            >
                <TabList indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            mr:2,
                            mb: {xs: 2, md: 0}
                        }}
                        label="دیدگاه کاربران"
                        value="1"
                    />
                    <Tab
                        sx={{
                            mb: {xs: 2, md: 0}
                        }}
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
                        comments.length ?
                            <Grid container sx={{py:3}} rowGap={5} justifyContent={'space-between'}>
                                <Grid item xs={12} md={2.6}>
                                    <AverageRatingComment openAddComment={setCommentIsOpen} average={4.5} title={'comment'}/>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
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
                                            comments.length >= 2 ?
                                                <Button
                                                    onClick={showComment}
                                                    variant="outlined"
                                                    color={'primary'}
                                                    sx={{width: {xs: '100%', md: "25%", lg:'20%'}, my: 2 , px:.5  , mx:2}}
                                                >
                                                    {
                                                        commentIsShow ? <CloseIcon sx={{px: .5}} color={'primary'}/> :
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
                                </Grid>

                            </Grid>
                            :
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                flexDirection: 'column'
                            }}>
                                <NoComment/>
                                <Typography>نظری برای این محصول ثبت نشده است</Typography>
                                <Divider sx={{width: '100%', my: 4}}/>
                            </Box>
                    }

                </TabPanel>
                <TabPanel value="2" sx={{
                    width: '100%',
                    p: {xs: 0, md: 2},
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {
                        !questions.length ? (
                            <>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    flexDirection: 'column'
                                }}>
                                    <NoQuestion/>
                                    <Typography>پرسشی برای این محصول ثبت نشده است</Typography>
                                    <Divider sx={{width: '100%', my: 4}}/>
                                </Box>
                            </>
                            ) :
                            questions.map((eachQuestion, index) => {
                                const show = index < 2 || questionIsShow;
                                return (
                                    <Box sx={{display: show ? 'block' : 'none', width: '100%'}} key={index}>
                                        <Question productId={productId} eachQuestion={eachQuestion}/>
                                        <Divider sx={{width: '100%', my: 3}}/>
                                    </Box>
                                )
                            })
                    }
                    {
                        questions.length >= 2 ? (
                            <Button
                                onClick={showQuestion}
                                variant="outlined"
                                color={'primary'}
                                sx={{width: {xs: '100%', md: "25%", lg:'20%'}, my: 2}}
                            >
                                {
                                    questionIsShow ? <CloseIcon sx={{px: .5}} color={'primary'}/> :
                                        <KeyboardArrowDownIcon color={'primary'}/>
                                }
                                {
                                    questionIsShow ? 'نشان دادن کمتر  ' : "مشاهده کامل پرسش ها"
                                }

                            </Button>
                        ) : null
                    }
                    <AddQuestion productId={productId}/>
                </TabPanel>
            </Box>
            <MainModal title={'افزودن دیدگاه'} open={commentIsOpen} setOpen={setCommentIsOpen} desktopFullScreen={true}>
                <AddCommentModal productId={productId} rate={rate}/>
            </MainModal>
        </TabContext>

    )
}
export default CommentQuestion;