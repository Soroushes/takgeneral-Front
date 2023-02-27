import { useEffect, useState } from "react";
import { Box  , Typography} from "@mui/material";

const Counter = () => {
  let [number, setNumber] = useState(5);
  useEffect(() => {
    let timeInterval = setInterval(() => {
      if (number <= 1) clearInterval(timeInterval);
      setNumber(--number);
    }, 1000);
  }, []);
  const numberConvertor = (num) => {
    if (num <= 0) num = 0;
    let min = Math.floor(num / 60);
    min = min < 10 ? `0${min}` : min;
    let sec = num % 60;
    sec = sec < 10 ? ` 0${sec} ` : sec;
    return ` ${sec} : ${min} `;
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        {number <= 0 ? (
          <Typography component={'p'} variant={'subtitle2'} style={{ fontSize: 12, color: "green", cursor: "pointer" }}>
            ارسال مجدد کد
          </Typography>
        ) : (
          <Typography component={'p'} variant={'subtitle2'} style={{ fontSize: 14 }}>
            {" "}
            مانده تا ارسال مجدد{numberConvertor(number)}
          </Typography>
        )}
      </Box>
      <Typography component={'p'} variant={'subtitle2'} style={{ fontSize: 12, color: "red", cursor: "pointer" }}>
        اصلاح شماره موبایل
      </Typography>
    </>
  );
};
export default Counter;
