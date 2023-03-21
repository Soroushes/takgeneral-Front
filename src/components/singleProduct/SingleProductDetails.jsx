import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

const SingleProductDetails = ({details}) => {
    const [value, setValue] = useState("1");
    const [showAll, setShowAll] = useState(false)
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const showDetails = () => {
        setShowAll(!showAll)
    }
    return (
        <TabContext value={value}>
            <Box
                sx={{
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <TabList indicatorColor="gray" onChange={handleTabChange}>
                    <Tab
                        sx={{
                            border: {xs: "none", lg: "1px solid #bbb"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px 8px 8px 8px", lg: "8px 8px 0 0"},
                            mr: 2,
                        }}
                        label="مشخصات"
                        value="1"
                    />
                    <Tab
                        sx={{
                            border: {xs: "none", lg: "1px solid #bbb"},
                            borderBottom: {xs: "none", lg: "none"},
                            borderRadius: {xs: "8px 8px 8px 8px", lg: "8px 8px 0 0"},
                        }}
                        label="معرفی محصول"
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
                        px: 2,
                    }}
                >
                    {details.map((detail, index) => {
                        return (
                            !showAll && index > 7 ? null
                                :
                                <Box
                                    key={detail.id}
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
                                            borderBottom: "1px solid #ddd",
                                            pb: 1.5,
                                            pl: {md: 2},
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{fontSize: {xs: "12px", md: "14px"}}}
                                        >
                                            {detail.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: {xs: "60%", md: "75%"},
                                            borderBottom: "1px solid #ddd",
                                            pb: 1.5,
                                            pl: 2,
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{fontSize: {xs: "12px", md: "14px"}}}
                                        >
                                            {detail.value}
                                        </Typography>
                                    </Box>
                                </Box>
                        );
                    })}
                    <Box onClick={showDetails} sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"}}>
                        {
                            showAll ? <CloseIcon color={'primary'}/> : <KeyboardArrowDownIcon color={'primary'}/>
                        }
                        <Typography
                            variant={"body2"}
                            color={'primary'}
                            sx={{
                                cursor: "pointer",
                                textAlign: "center",
                            }}
                        >
                            {
                                showAll ? 'نشان دادن کمتر' : "مشاهده کامل مشخصات"
                            }
                        </Typography>
                    </Box>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Box>
        </TabContext>
    );
};
export default SingleProductDetails;
