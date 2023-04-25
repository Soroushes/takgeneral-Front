import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Button, Divider, Typography} from "@mui/material";
import {useState} from "react";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Rating from '@mui/material/Rating';
import PN from "persian-number";
import {Grid} from "@mui/material";

const SingleProductOpinion = () => {
    const [value, setValue] = useState("1");
    const [rating , setRating] = useState(2.5);
    const [like , setLike] = useState(0);
    const [disLike , setDisLike] = useState(0);
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleLike =(like)=>{
        if(like){
            setLike(prev => ++prev)
        }else{
            setDisLike(prev => ++prev)
        }
    };
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
                            border: {xs: "none", lg: "1px solid #bbb"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px ", lg: "8px 8px 0 0"},
                            mr: 2,
                        }}
                        label="نظرات"
                        value="1"
                    />
                    <Tab
                        sx={{
                            border: {xs: "none", lg: "1px solid #bbb"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px", lg: "8px 8px 0 0"},
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
                    border: {xs: "none", lg: "1px solid #bbb"},
                    borderRadius: 1.5,
                    pt: 4,
                        px: 5,
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
                        p:0
                    }}
                >
                    <Box sx={{display:'flex' , justifyContent:'space-around' , backgroundColor :'gray.lighter' , width:'100%' , p:2 , alignItems:'center'  , borderRadius:2}}>
                        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
                            <Typography>امتیاز و دیدگاه کاربران</Typography>
                            <Box sx={{display:'flex' , gap:2}}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                                <Typography>نظر</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:1 , flexDirection:'column'}}>
                            <Box sx={{display:'flex' , gap:5 , justifyContent:'space-between' }}>
                                <Typography sx={{ color:'text.muted'}}>کیفیت و کارایی</Typography>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography sx={{ color:'text.muted'}}>ارزش خرید</Typography>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography sx={{ color:'text.muted'}}>قیمت</Typography>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                            </Box>
                        </Box>
                    </Box>
                    <Typography>عنوان نظر</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                        <Typography sx={{color: 'gray.main'}}>میانگین نظرات و امتیازات کاربران</Typography>
                        <Rating 
                            value={rating}
                            onChange={(event, newRating) => {
                            setRating(newRating);
                        }} name="half-rating" precision={0.5} />
                    </Box>
                    <Grid container sx={{display: 'flex', justifyContent: 'space-between', rowGap:5, width: '100%'}}>
                        <Grid item md={6} xs={12}>
                            <Typography color={'text.muted'}>هستی</Typography>
                            <Typography sx={{color: 'primary.main'}}>پیشنهاد می کنم</Typography>
                            <Typography color={'text.muted'}>عالی بودش شیسشسی شسی شسی شسی شی شسی شسی شسی شسزشسزصثزینثب ئصز ئوثصوئ صو</Typography>
                        </Grid>
                        <Grid item md={1} xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 ,justifyContent : "center"}}>
                            <Box color={'gray.main'} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(like)}</Typography>
                                <ThumbUpOffAltIcon sx={{cursor:'pointer'}} onClick={handleLike.bind(this , true)}  fontSize={'small'}/>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(disLike)}</Typography>
                                <ThumbDownOffAltIcon sx={{cursor:'pointer'}} onClick={handleLike.bind(this , false)}  fontSize={'small'}/>
                            </Box>
                            <Typography variant={'body2'} color={'text.muted'}>20 آذر 1400</Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value="2" sx={{width:'100%'}}>
                    <Grid container sx={{display:'flex' , justifyContent:'space-between' , px:2}}>
                        <Grid item md={2} xs={12}  sx={{ display:'flex' }}>
                            <Typography>لوزم ایپسون</Typography>
                        </Grid>
                        <Grid item md={1} xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 ,justifyContent : "center" }}>
                            <Box color={'gray.main'} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(like)}</Typography>
                                <ThumbUpOffAltIcon sx={{cursor:'pointer'}} onClick={handleLike.bind(this , true)}  fontSize={'small'}/>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(disLike)}</Typography>
                                <ThumbDownOffAltIcon sx={{cursor:'pointer'}} onClick={handleLike.bind(this , false)}  fontSize={'small'}/>
                            </Box>
                            <Typography variant={'body2'} color={'text.muted'}>20 آذر 1400</Typography>
                        </Grid>
                    </Grid>
                    <Button size="small" sx={{justifyContent:'start' , borderRadius:1.5 , p:1 , px:2}} color="gray">ثبت پاسخ </Button>
                    <Box sx={{backgroundColor : 'gray.lighter' , p:2 , borderRadius:3 , mt:2 , display:'flex'  , flexDirection:'column' ,gap:2}}>
                        <Typography variant="subtitle1" sx={{px:1 , color:'text.muted'}}>پاسخ</Typography>
                        <Typography variant="subtitle1" sx={{px:1}}>لوزم ایپسون</Typography>
                        <Button size="small" sx={{justifyContent:'start' ,width:'110px !important' , borderRadius:2}} color="gray">ثبت پاسخ جدید</Button>
                    </Box>
                </TabPanel>
            </Box>
        </TabContext>

    )
}
export default SingleProductOpinion;