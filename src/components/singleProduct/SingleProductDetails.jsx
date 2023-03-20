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
                <TabPanel value="1" sx={{  width : '100%' , display : 'flex' , flexDirection : 'column' , gap : 5 , pt : 6 , px : 2}}>
                  <Box sx={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , width : '100%' , gap : {xs : 2 , md : 5} }}>
                      <Box  sx={{width : {xs : "40%" , md : "25%"} , borderBottom : '2px solid #ddd' , pb : 1.5 , pl : {md : 2} , height : '100%' , display : "flex" , alignItems : "center"}}>
                          <Typography fontWeight={'bold'} variant={'subtitle1'}> نت میانی</Typography>
                      </Box>
                      <Box  sx={{width : {xs : "60%" , md : "75%"},borderBottom : '2px solid #ddd' , pb : 1.5 , pl : 2 , height : '100%' ,  display : "flex" , alignItems : "center"}}>
                          <Typography variant={'body1'}>شیشه سیلیکات قابلیت فلنجی شدن دارد</Typography>
                      </Box>
                  </Box>

                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Box>
        </TabContext>
    );
};
export default SingleProductDetails;
