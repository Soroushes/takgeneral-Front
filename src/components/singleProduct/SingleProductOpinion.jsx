import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Typography} from "@mui/material";
import {useState} from "react";
import YellowStar from '../icons/StarYellow.svg';
import GrayStar from '../icons/StarGray.svg';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PN from "persian-number";

const SingleProductOpinion = () => {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
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
                    display: "flex",
                    transition: "all .3s",
                    justifyContent: "center",
                    width: "100%",
                    border: {xs: "none", lg: "1px solid #bbb"},
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
                        gap: 3,
                        pt: 4,
                        px: 5,
                    }}
                >
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                        <Typography sx={{color: 'gray.main'}}>امتیاز کاربر به محصول</Typography>
                        <Box sx={{display: 'flex', alignItems: 'cenetr'}}>
                            <YellowStar/>
                            <YellowStar/>
                            <GrayStar/>
                            <GrayStar/>
                            <GrayStar/>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2}}>
                        <Box>
                            <Typography color={'text.muted'}>هستی</Typography>
                            <Typography sx={{color: 'primary.main'}}>پیشنهاد می کنم</Typography>
                            <Typography color={'text.muted'}>عالی بودش شیسشسی شسی شسی شسی شی شسی شسی شسی شسزشسزصثزینثب ئصز ئوثصوئ صو</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 ,justifyContent : "center"}}>
                            <Box color={'gray.main'} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(0)}</Typography>
                                <ThumbUpOffAltIcon  fontSize={'small'}/>
                                <Typography color={'gray.main'}>{PN.convertEnToPe(0)}</Typography>
                                <ThumbDownOffAltIcon fontSize={'small'}/>
                            </Box>
                            <Typography variant={'body2'} color={'text.muted'}>20 آذر 1400</Typography>
                        </Box>
                    </Box>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Box>
        </TabContext>

    )
}
export default SingleProductOpinion;