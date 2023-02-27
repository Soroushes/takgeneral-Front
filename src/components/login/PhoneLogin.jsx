import { TextField , Typography} from "@mui/material";
const PhoneLogin = ({ error, phoneNumber, setPhoneNumber }) => {
  return (
    <>
      <Typography variant={'body1'} component={'h1'} style={{ fontSize: 15 }}> شماره موبایل خود را وارد کنید</Typography>
      <TextField
        error={error}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        hiddenLabel
        sx={{ mb: 1, mt: 1 }}
        id="filled-hidden-label-normal"
        variant="filled"
        fullWidth
      />
    </>
  );
};
export default PhoneLogin;
