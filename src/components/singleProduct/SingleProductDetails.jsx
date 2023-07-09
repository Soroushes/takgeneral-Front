import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import {Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

const SingleProductDetails = ({details, setShowAllDetails, IsShowAllDetails}) => {
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
                            mr:2,
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
            <Box
                sx={{
                    display: "flex",
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
                        gap: 3,
                        pt: 4,
                        px: 2,
                    }}
                >
                    {details?.map((detail, index) => {
                        return (
                            !IsShowAllDetails && index > 7 ? null
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
                                            borderBottom: "1px solid #d3d3d3",
                                            pb: 1.5,
                                            pl: {md: 2},
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                        >
                                            {detail.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: {xs: "60%", md: "75%"},
                                            borderBottom: "1px solid #d3d3d3",
                                            pb: 1.5,
                                            pl: 2,
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                        >
                                            {detail.value}
                                        </Typography>
                                    </Box>
                                </Box>
                        );
                    })}
                    {
                        details?.length ?
                            <Box onClick={setShowAllDetails.bind(this, prev => !prev)}
                                 sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center"}}>
                                {
                                    IsShowAllDetails ? <CloseIcon color={'primary'}/> :
                                        <KeyboardArrowDownIcon color={'primary'}/>
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
                                        IsShowAllDetails ? 'نشان دادن کمتر' : "مشاهده کامل مشخصات"
                                    }
                                </Typography>
                            </Box>
                            :
                            null
                    }
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Box>
        </TabContext>
    );
};
export default SingleProductDetails;
