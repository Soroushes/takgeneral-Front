import {Grid} from "@mui/material";
import {Box, Typography} from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {useRouter} from "next/router";
import PersonIcon from '@mui/icons-material/Person';
import {urls} from "src/data/urls";
import {useSelector} from "react-redux";
import PN from "persian-number";
import {useState} from "react";

const SingleProductEachComment = ({comment}) => {
    //const [like , setLike] = useState(0);
    //const [disLike , setDisLike] = useState(0);
    const router = useRouter('');
    const {phone_number} = useSelector(state => state.userInfo);
    // const handleLike =(like)=>{
    //     if(phone_number === ''){
    //         router.push(urls.login)
    //     }else if(like){
    //         setLike(prev => ++prev)
    //     }else if(!like){
    //         setDisLike(prev => ++prev)
    //     }
    // };
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'space-between', rowGap: 3, width: '100%', px: {md: 3}}}>
            <Grid item md={10} xs={12}>
                <Typography sx={{mb: 1}} fontWeight={'bold'} variant="body1" color={'text.muted'}>جنس خوبی
                    بود</Typography>
                <Typography variant="subtitle1" color={'text.muted'}
                            sx={{display: "flex", alignItems: "center", gap: .5, mb: 1}}>
                    <PersonIcon fontSize={'small'} color={'gray'}/>
                    {comment.name}
                </Typography>
                {
                    comment.suggest ?
                        <Typography variant="subtitle1" sx={{color: 'primary.main', mb: 1}}>پیشنهاد می کنم</Typography>
                        :
                        ''
                }
                <Typography lineHeight={2.5} variant="subtitle1" color={'text.muted'}>{comment.opinion}</Typography>
            </Grid>
            <Grid item md={2} xs={2} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {xs: 'start', md: 'end'},
                gap: 2,
                justifyContent: "center"
            }}>
                <Box color={'gray.main'} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <Typography variant="subtitle1"
                                color={'gray.main'}>{PN.convertEnToPe(comment.defaultLike)}</Typography>
                    <ThumbUpOffAltIcon sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                    <Typography variant="subtitle1"
                                color={'gray.main'}>{PN.convertEnToPe(comment.defaultDisLike)}</Typography>
                    <ThumbDownOffAltIcon sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                </Box>
                <Typography variant={'subtitle2'} color={'text.muted'}>20 آذر 1400</Typography>
            </Grid>
        </Grid>
    )
}
export default SingleProductEachComment;