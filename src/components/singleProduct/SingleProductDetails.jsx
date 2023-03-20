import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Tabs } from "@mui/material";
const SingleProductDetails = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "felx" }}>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                TabIndicatorProps={{
                    borderLeft :'2px solid #EEE', borderRight :'2px solid #EEE' , borderTop :'2px solid #EEE' ,
                }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab sx={{borderLeft :'2px solid #ccc', borderRight :'2px solid #ccc' , borderTop :'2px solid #ccc' , mr :2 , borderRadius :'8% 8% 0 0'}} label="مشخصات" value="1" />
                <Tab  sx={{borderLeft : '2px solid #ccc',borderRight : '2px solid #ccc', borderTop : '2px solid #ccc' ,  borderRadius :'8% 8% 0 0'}} label="معرفی محصول" value="2" />
              </TabList>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%"  , border : '2px solid #ccc', borderRadius :1.5}}
            >
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </Box>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};
export default SingleProductDetails;
