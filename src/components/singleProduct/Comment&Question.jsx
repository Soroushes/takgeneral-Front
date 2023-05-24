import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Divider, Typography , Grid, Button} from "@mui/material";
import {Fragment, useState} from "react";
import Rating from '@mui/material/Rating';
import Question from "./Question";
import Comment from "./Comment";
import AddComment from "./AddComment";
import AddQuestion from "./AddQuestion";
import NoQuestion from '../icons/noQuestion.svg';
import NoComment from '../icons/noComment.svg';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
const CommentQuestion = ({comments , rate , productId}) => {
    const [value, setValue] = useState("1");
    const [questionIsShow , setQuestionIsShow] = useState(false);
    const [commentIsShow , setCommentIsShow] = useState(false);
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const showComment =()=>{
        setCommentIsShow(prev=>!prev);
    };
    const showQuestion =()=>{
        setQuestionIsShow(prev => !prev)
    };
    const questions =[
        {
            question:'این چیهههههه؟',
            answers:[
                
            ]
        } , {
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
            ]
        } ,{
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
            ]
        },{
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
            ]
        },{
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
            ]
        },{
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
            ]
        }
    ]
    return (
        <TabContext value={value}>
            <Box
                sx={{
                    borderColor: "divider",
                    display: "flex",
                    width: "100%",
                    px : 2 ,
                    mb:{xs:2, md:2 , lg:0}
                }}
            >
                <TabList indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            border: {xs: "none", lg: "1px solid #d3d3d3"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px ", lg: "8px 8px 0 0"},
                            mr: 2,
                            mb : {xs : 2 , md : 0}
                        }}
                        label="نظرات"
                        value="1"
                    />
                    <Tab
                        sx={{
                            border: {xs: "none", lg: "1px solid #d3d3d3"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px", lg: "8px 8px 0 0"},
                            mb : {xs : 2 , md : 0}
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
                    border: {xs: "none", lg: "1px solid #d3d3d3"},
                    borderRadius: 1.5,
                    
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
                        p : 0
                    }}
                >
                    {
                        comments.length !== 0 ? 
                        <Grid container sx={{display:'flex' , justifyContent:'center' , backgroundColor :'gray.lighter' ,p:4, alignItems:'center'  , borderRadius:2 , gap :5}}>
                            <Grid item md={5} xs={12}>
                                <Box sx={{px : 1 , display : "flex" , gap : 3 , alignItems : "center" , justifyContent : {xs : 'center' , md : 'start'}}}>
                                    <Typography variant="body2">میانگین امتیازات کاربران</Typography>
                                    <Rating name="read-only" value={2.5} readOnly/>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12} sx={{display:'flex' , gap:1 , flexDirection:'column'}}>
                                <Box sx={{display:'flex'  , justifyContent:'space-between' , px : 1 }}>
                                    <Typography variant="subtitle1" sx={{ color:'text.muted'}}>کیفیت و کارایی</Typography>
                                    <Rating size={'small'} name="read-only" value={rate.avg_keyfiyat_rate} readOnly/>
                                </Box>
                                <Divider sx={{my:.5}}/>
                                <Box sx={{display:'flex' , justifyContent:'space-between' , px : 1}}>
                                    <Typography variant="subtitle1" sx={{ color:'text.muted'}}>ارزش خرید</Typography>
                                    <Rating size={'small'} name="read-only" value={rate.avg_arzesh_rate} readOnly/>
                                </Box>
                            </Grid>
                        </Grid>
                        :null
                    }
                    
                    <Box sx={{p : 2 , width : '100%' , display:'flex', flexDirection:'column' , alignItems:'center'}}>
                        {
                            comments.length === 0 ? 
                            <Box x={{ display:'flex', margin:'auto'}}><NoComment/></Box> : 
                            comments.reverse().map((comment , index)=>{
                                if (index < 2 || commentIsShow){
                                    return(
                                        <Fragment key={Math.random()*2574}>
                                            <Comment comment={comment} />
                                            <Divider sx={{my : 3}}/>
                                        </Fragment>
                                    )
                                }
                            })
                        }
                        {
                        comments.length >= 2 ?
                        <Button onClick={showComment}
                            variant="outlined"
                            color={'primary'}
                             sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center" , width:"100%"}}>
                            {
                                commentIsShow ? <CloseIcon color={'primary'}/> :
                                    <KeyboardArrowDownIcon color={'primary'}/>
                            }
                            
                                {
                                    commentIsShow ? 'نشان دادن کمتر' : "مشاهده کامل نظرات ها"
                                }
                            
                        </Button>
                        :
                        null
                    }
                        <AddComment productId={productId} rate={rate}/>
                    </Box>
                </TabPanel>
                <TabPanel value="2" sx={{width:'100%' , py:0 , display:'flex' , flexDirection:'column' , alignItems:'center'}}>
                    {
                        questions.length === 0 ? 
                        <NoQuestion/> :
                        questions.map((eachQuestion , index)=>{
                            if(index < 3 || questionIsShow){
                                return(
                                    <Question productId={productId} key={Math.random()*2574} eachQuestion={eachQuestion}/>
                                )
                            }
                        })
                    }
                    {
                        questions.length >= 2 ?
                        <Button onClick={showQuestion}
                            variant="outlined"
                            color={'primary'}
                             sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center" , width:"100%"}}>
                            {
                                questionIsShow ? <CloseIcon color={'primary'}/> :
                                    <KeyboardArrowDownIcon color={'primary'}/>
                            }
                            
                                {
                                    questionIsShow ? 'نشان دادن کمتر' : "مشاهده کامل پرسش ها"
                                }
                            
                        </Button>
                        :
                        null
                    }
                    <AddQuestion productId={productId}/>
                </TabPanel>
            </Box>
        </TabContext>

    )
}
export default CommentQuestion;