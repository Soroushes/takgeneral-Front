import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Collapse, Typography} from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import HtmlDescription from "@/components/share/HtmlDescription";

const SingleProductDetails = ({details, setShowAllDetails, IsShowAllDetails, content}) => {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
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
                        p: 0,
                        pt: 2,gap:3
                    }}
                >
                    {details?.slice(0,3).map((detail) => {
                        return (
                                <Box
                                    key={detail.specification}
                                    sx={{
                                        display: "flex",
                                        width: "100%",
                                        gap: {xs: 2, md: 0},
                                        px: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: {xs: "20%", md: "15%"},
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
                                            width: {xs: "80%", md: "85%"},
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
                    <Collapse sx={{width:'100%'}} in={IsShowAllDetails}>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: 3,
                            p: 0
                        }}>
                            {details?.slice(3).map((detail) => {
                                return (
                                        <Box
                                            key={detail.specification}
                                            sx={{
                                                display: "flex",
                                                width: "100%",
                                                gap: {xs: 2, md: 0},
                                                px: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: {xs: "20%", md: "15%"},
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
                                                    width: {xs: "80%", md: "85%"},
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
                        </Box>
                    </Collapse>
                    {
                        details?.length > 3 ?
                            <Box onClick={setShowAllDetails.bind(this, prev => !prev)}
                                 sx={{display: "flex", cursor: 'pointer', alignItems: "center" , mt:IsShowAllDetails ?'none':'-20px', gap: 1}}>
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
                <TabPanel value="2" sx={{width: '100%', p: 0}}>
                    <HtmlDescription>{content}</HtmlDescription>
                </TabPanel>
            </TabContext>
        </>
    );
};
export default SingleProductDetails;
