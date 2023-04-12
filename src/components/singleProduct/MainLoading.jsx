import {Box} from "@mui/system";
import {Grid, Container} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const MainLoading =()=>{
    return(
        <Box sx={{backgroundColor: '#F9F9F9', py: 3  , height:'100%'}}>
            <Container sx={{px: {md: 20, lg: 8}}} maxWidth={'xl'}>
                <Grid container rowGap={5}>
                    <Grid item sm={6} md={5} lg={3.3} xs={12}>
                        <Box sx={{display:'flex' ,width:'100%', flexDirection :'column' , gap : 3 , alignItems:'center'}}>
                            <Skeleton sx={{borderRadius :2 , width:'100%' , aspectRatio : '1/1'}}/>
                            <Box sx={{display : 'flex' , justifyContent :'space-between',alignItems:'start'  , gap :2 , width : "100%"}}>
                                <Skeleton sx={{borderRadius :2  , width : "25%" , aspectRatio : "1/1"}} />
                                <Skeleton sx={{borderRadius :2  , width : "25%" , aspectRatio : "1/1"}} />
                                <Skeleton sx={{borderRadius :2 ,  width : "25%" , aspectRatio : "1/1"}} />
                                <Skeleton sx={{borderRadius :2  , width : "25%" , aspectRatio : "1/1"}} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={{px: 3}} sm={6} md={7} lg={5.2} xs={12}>
                        <Box sx={{display:'flex' , flexDirection :'column' , alignItems :'start',px:2 , gap:2 , width:'100%'}}>
                            <Skeleton variant='text' sx={{width :'75%', height:'40px' ,pb:2, borderRadius :2}}/>
                            <Skeleton variant='text' sx={{width :'50%', height:'25px' , borderRadius :2}}/>
                            <Skeleton variant='text' sx={{width :'30%',  borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                            <Skeleton variant='text' sx={{width :'30%' , borderRadius :1}}/>
                        </Box>
                    </Grid>
                    <Grid item sm={12} lg={3.5} xs={12}>
                        <Skeleton sx={{width: '100%', transform: 'scale(1)', height: '450px', borderRadius: 1}}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default MainLoading;