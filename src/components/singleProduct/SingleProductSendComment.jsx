import { Grid, Typography , Box  , Divider } from "@mui/material";
import Rating from '@mui/material/Rating';

const SingleProductSendComment = ()=>{
    return(
        <>
            <Typography>نظر شما درباره این کالا</Typography>
            <Grid container>
                <Grid item lg={4}>
                    <Box sx={{display:'flex' , gap:1 , flexDirection:'column'}}>
                            <Box sx={{display:'flex' , gap:5 , justifyContent:'space-between' }}>
                                <Typography sx={{ color:'text.muted'}}>کیفیت و کارایی</Typography>
                                <Rating name="read-only" value={2.5} readOnly/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography sx={{ color:'text.muted'}}>ارزش خرید</Typography>
                                <Rating name="read-only" value={2.5} readOnly/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography sx={{ color:'text.muted'}}>قیمت</Typography>
                                <Rating name="read-only" value={2.5} readOnly/>
                            </Box>
                    </Box>
                </Grid>
                <Grid item lg={8}>
                
                </Grid>
            </Grid>
        </>
    )
}
export default SingleProductSendComment;