'use client'
import {Box, Grid, Typography} from "@mui/material";

const ProfileComment = ()=>{
    return(
        <Box sx={{backgroundColor:'#FAFAFA'}}>
            <Typography variant={'h2'} mb={4} fontWeight={'bold'}>دیدگاه ها</Typography>
            <Grid container rowGap={2} justifyContent={'space-between'}>
            </Grid>
        </Box>
    )
}
export default ProfileComment;