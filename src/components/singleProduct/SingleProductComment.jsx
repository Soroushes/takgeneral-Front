import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Divider, Typography , Grid} from "@mui/material";
import {Fragment, useState} from "react";
import Rating from '@mui/material/Rating';
import SingleProductQuestion from "./SingleProductQuestion";
import SingleProductEachComment from "./SingleProductEachComment";
import SingleProductAddComment from "./SingleProductAddComment";
import SingleProductAddQuestion from "./SingleProductAddQuestion";
const SingleProductComment = ({comments , rate}) => {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const questions =[
        {
            question:'این چیهههههه؟',
            answers:[
                'نهههههههههههههههه' ,
                'ازههههههههه' ,
                'درستعععع'
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
                    <Box sx={{p : 2 , width : '100%'}}>
                        {
                            comments.reverse().map((comment , index)=>{
                                // if (index > 1 || commentIsShow)
                                return(
                                    <Fragment key={Math.random()*2574}>
                                        <SingleProductEachComment comment={comment} />
                                        <Divider sx={{my : 3}}/>
                                    </Fragment>
                                )
                            })
                        }
                        <SingleProductAddComment rate={rate}/>
                    </Box>
                </TabPanel>
                <TabPanel value="2" sx={{width:'100%'}}>
                    {
                        questions.map((eachQuestion)=>{
                            return(
                                <SingleProductQuestion key={eachQuestion.answers} eachQuestion={eachQuestion}/>
                            )
                        })
                    }
                    <SingleProductAddQuestion/>
                </TabPanel>
            </Box>
        </TabContext>

    )
}
export default SingleProductComment;