import {Grid} from "@mui/material";
import {Box, Typography} from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PersonIcon from '@mui/icons-material/Person';
import PN from "persian-number";

const Comment = ({comment}) => {
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'space-between', rowGap: 3, width: '100%', px: {md: 3}}}>
            <Grid item md={10} xs={12}>
                <Typography variant="subtitle1" color={'text.muted'}
                            sx={{display: "flex", alignItems: "center", gap: .5, mb: 1}}>
                    <PersonIcon fontSize={'small'} color={'gray'}/>
                    {comment?.user_alias_name}
                </Typography>
                {
                    comment.suggest_me ?
                        <Typography variant="subtitle1" sx={{color: 'primary.main', mb: 1}}>پیشنهاد می کنم</Typography> :
                        <Typography variant="subtitle1" color={'secondary.main'} sx={{mb: 1}}>پیشنهاد نمیکنم</Typography>
                }
                <Typography lineHeight={2.5} variant="subtitle1" color={'text.muted'}>{comment.content}</Typography>
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
                                color={'gray.main'}>{PN.convertEnToPe(2)}</Typography>
                    <ThumbUpOffAltIcon sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                    <Typography variant="subtitle1"
                                color={'gray.main'}>{PN.convertEnToPe(4)}</Typography>
                    <ThumbDownOffAltIcon sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                </Box>
                <Typography variant={'subtitle2'} color={'text.muted'}>20 آذر 1400</Typography>
            </Grid>
        </Grid>
    )
}
export default Comment;