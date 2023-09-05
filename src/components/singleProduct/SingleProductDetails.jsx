import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Typography} from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import HtmlDescription from "@/components/share/HtmlDescription";

const SingleProductDetails = ({details, setShowAllDetails, IsShowAllDetails, content}) => {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    borderBottom: '1px solid #eee'
                }}
            >
                <TabList textColor="secondary" indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            mr: 2,
                        }}
                        label="مشخصات"
                        value="1"
                    />
                    <Tab
                        label="معرفی محصول"
                        value="2"
                    />
                </TabList>
            </Box>
            <TabPanel
                value="1"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 3,
                    p:0 ,
                    pt:2
                }}
            >
                {details?.map((detail, index) => {
                    return (
                        !IsShowAllDetails && index > 2 ? null
                            :
                            <Box
                                key={Math.random()*1000}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    gap: {xs: 2, md: 5},
                                }}
                            >
                                <Box
                                    sx={{
                                        width: {xs: "40%", md: "25%"},
                                        pb: 1.5,
                                        pl: {md: 2},
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color={'text.muted'}
                                    >
                                        {detail.specification}:
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: {xs: "60%", md: "75%"},
                                        pb: 1.5,
                                        pl: 2,
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                    >
                                        {detail.value}
                                    </Typography>
                                </Box>
                            </Box>
                    );
                })}
                {
                    details?.length > 3 ?
                        <Box onClick={setShowAllDetails.bind(this, prev => !prev)}
                             sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center", gap: 1}}>
                            <Typography
                                variant={"body2"}
                                color={'primary'}
                                sx={{
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                {
                                    IsShowAllDetails ? 'مشاهده کمتر' : "مشاهده بیشتر"
                                }
                            </Typography>
                            {
                                IsShowAllDetails ? <ExpandLessRoundedIcon fontSize={'small'} color={'primary'}/> :
                                    <ExpandMoreRoundedIcon fontSize={'small'} color={'primary'}/>
                            }
                        </Box>
                        :
                        null
                }
            </TabPanel>
            <TabPanel value="2" sx={{width: '100%' , p : 0}}>
                <HtmlDescription>{content}</HtmlDescription>
            </TabPanel>
        </TabContext>
    );
};
export default SingleProductDetails;
