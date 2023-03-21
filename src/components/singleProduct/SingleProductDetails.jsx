import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const SingleProductDetails = ({ details }) => {
  const [value, setValue] = useState("1");
  const [showAll , setShowAll] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showDetails =()=>{
    setShowAll(true)
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
        <TabList indicatorColor="gray" onChange={handleChange}>
          <Tab
            sx={{
              border: { xs: "none", md: "2px solid #ccc" },
              borderBottom: { xs: "none", md: "none" },
              borderRadius: { xs: "8px 8px 8px 8px", md: "8px 8px 0 0" },
              mr: 2,
            }}
            label="مشخصات"
            value="1"
          />
          <Tab
            sx={{
              border: { xs: "none", md: "2px solid #ccc" },
              borderBottom: { xs: "none", md: "none" },
              borderRadius: { xs: "8px 8px 8px 8px", md: "8px 8px 0 0" },
            }}
            label="معرفی محصول"
            value="2"
          />
        </TabList>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          border: { xs: "none", md: "2px solid #ccc" },
          borderRadius: 1.5,
          minHeight: 600,
        }}
      >
        <TabPanel
          value="1"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 5,
            pt: 6,
            px: 2,
          }}
        >
          {details.map((detail , index) => {
            if(!showAll){
              if(index<7){
                return (
                  <Box
                    key={detail.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: { xs: 2, md: 5 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "40%", md: "25%" },
                        borderBottom: "2px solid #ddd",
                        pb: 1.5,
                        pl: { md: 2 },
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        fontWeight={"bold"}
                        sx={{ fontSize: { xs: "12px", md: "1rem" } }}
                      >
                        {detail.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "60%", md: "75%" },
                        borderBottom: "2px solid #ddd",
                        pb: 1.5,
                        pl: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: { xs: "12px", md: "1rem" } }}
                        variant={"body1"}
                      >
                        {detail.value}
                      </Typography>
                    </Box>
                  </Box>
                );
              }
              
            }else{
              return (
                <Box
                  key={detail.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: { xs: 2, md: 5 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "40%", md: "25%" },
                      borderBottom: "2px solid #ddd",
                      pb: 1.5,
                      pl: { md: 2 },
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontWeight={"bold"}
                      sx={{ fontSize: { xs: "12px", md: "1rem" } }}
                    >
                      {detail.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "60%", md: "75%" },
                      borderBottom: "2px solid #ddd",
                      pb: 1.5,
                      pl: 2,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: { xs: "12px", md: "1rem" } }}
                      variant={"body1"}
                    >
                      {detail.value}
                    </Typography>
                  </Box>
                </Box>
              );
            }
        
          })}
          <Box onClick={showDetails} sx={{ display: "flex", mt: 2, pl: 5 , cursor : 'pointer'}}>
            <KeyboardArrowDownIcon sx={{ mt: "-3px", color: "primary.main" }} />
            <Typography
              variant={"body2"}
              sx={{
                cursor: "pointer",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              {'مشاهده کامل مشخصات '}
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </Box>
    </TabContext>
  );
};
export default SingleProductDetails;
