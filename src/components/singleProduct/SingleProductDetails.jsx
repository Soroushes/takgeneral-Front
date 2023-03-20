import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {useState} from "react";
import { Typography } from "@mui/material";

const SingleProductDetails = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                <TabList
                    indicatorColor="gray"
                    onChange={handleChange}
                >
                    <Tab
                        sx={{
                            border: '2px solid #ccc',
                            borderBottom: 'none',
                            borderRadius: '8px 8px 0 0',
                            mr: 2
                        }} label="مشخصات" value="1"/>
                    <Tab sx={{
                        border: '2px solid #ccc',
                        borderBottom : "none" ,
                        borderRadius: '8px 8px 0 0'
                    }} label="معرفی محصول" value="2"/>
                </TabList>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    border: '2px solid #ccc',
                    borderRadius: 1.5,
                    minHeight: 600
                }}
            >
                <TabPanel value="1" sx={{  width : '100%' , display : 'flex' , flexDirection : 'column' , gap : 2 , pt : 10 , px : 4}}>
                  <Box sx={{display : 'flex' , justifyContent : 'start' , alignItems : 'end' , width : '100%' , gap : 5}}>
                    <Typography sx={{width : '20%' , borderBottom : '2px solid #ddd' , pb : 2}}>جنس درون</Typography>
                    <Typography sx={{width : '80%', borderBottom : '2px solid #ddd' , pb : 2}}>شیشه سیلیکات قابلیت فلنجی شدن دارد</Typography>
                  </Box>
                  <Box sx={{display : 'flex' , justifyContent : 'start' , alignItems : 'end' , width : '100%' , gap : 5}}>
                    <Typography sx={{width : '20%', borderBottom : '2px solid #ddd' , pb : 2}}>جنس درون</Typography>
                    <Typography sx={{width : '80%', borderBottom : '2px solid #ddd' , pb : 2}}>شیشه سیلیکات قابلیت فلنجی شدن دارد</Typography>
                  </Box>
                  <Box sx={{display : 'flex' , justifyContent : 'start' , alignItems : 'end' , width : '100%' , gap : 5}}>
                    <Typography sx={{width : '20%', borderBottom : '2px solid #ddd' , pb : 2}}>جنس درون</Typography>
                    <Typography sx={{width : '80%', borderBottom : '2px solid #ddd' , pb : 2}}>شیشه سیلیکات قابلیت فلنجی شدن دارد</Typography>
                  </Box>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Box>
        </TabContext>
    );
};
export default SingleProductDetails;
