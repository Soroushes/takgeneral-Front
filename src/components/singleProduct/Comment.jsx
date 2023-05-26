import {Grid} from "@mui/material";
import {Box, Typography} from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PersonIcon from '@mui/icons-material/Person';
import PN from "persian-number";
import { useAxios } from "src/hooks/useAxios";
import { useState } from "react";
const Comment = ({comment}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false,
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(comment.created_at.timestamp * 1000);
      
    const [numLike , setNumLike] = useState(comment.likes_count);
    const [numDislike , setNumDislike] = useState(comment.diss_likes_count);
    const [liked , setLiked] = useState(false);
    const [disliked , setDisliked] = useState(false);
    const {callApi , loading}= useAxios();
    const handlelikeDislike = (like)=>{
            callApi({
                url:'like-disslike-comment', 
                method:'post', 
                token:true,
                data:{
                    comment: comment.id, 
                    like_vote : like,
                    dislike_vote: !like
                },successFunc:(res)=>{
                    if(like && !liked){
                        setLiked(prev=>!prev);
                        if(!liked && !disliked){
                            setNumLike(++comment.likes_count);
                        }else if(disliked){
                            setDisliked(prev=>!prev);
                            setNumDislike(--comment.diss_likes_count);
                            setNumLike(++comment.likes_count);
                        }
                    }else if(!like && !disliked){
                        setDisliked(prev=>!prev);
                        if(!liked && !disliked){
                            setNumDislike(++comment.diss_likes_count);
                        }else if(liked){
                            setLiked(prev=>!prev);
                            setNumLike(--comment.likes_count);
                            setNumDislike(++comment.diss_likes_count);
                        }
                    }
                }
            })
        
        
    }
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'space-between', rowGap: 3, width: '100%', px: {md: 3}}}>
            <Grid item md={10} xs={12}>
                <Typography sx={{mx : 1}} variant={'h6'}>{comment?.title}</Typography>
                <Box sx={{display: "flex", alignItems: "center", gap: .5, my: 1}}>
                    <PersonIcon fontSize={'small'} color={'gray'}/>
                    <Typography color={'text.muted'}  variant="subtitle1" >{comment?.user_alias_name}</Typography>
                </Box>
                {
                    comment.suggest_me ?
                        <Typography variant="subtitle2" sx={{color: 'primary.main', mb: 1}}>پیشنهاد می کنم</Typography> :
                        <Typography variant="subtitle2" color={'error'} sx={{mb: 1 }}>پیشنهاد نمیکنم</Typography>
                }
                <Typography lineHeight={2.5} variant="subtitle1" color={'text.muted'}>{comment.content}</Typography>
            </Grid>
            <Grid item md={2} xs={12} sx={{
                display: 'flex',
                alignItems: {xs: 'start', md: 'end'},
                flexDirection : {md : "column"} ,
                gap: 2,
                justifyContent: {xs : "space-between",  md : 'center'}
            }}>
                <Box color={'gray.main'} display={'flex'} alignItems={'center'} gap={1}>
                    <Box onClick={handlelikeDislike.bind(this , true)} display={'flex'} gap={1} alignItems={'center'}>
                        <Typography variant="subtitle1" color={liked ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(numLike)}
                        </Typography>
                        <ThumbUpOffAltIcon color={liked ? 'primary' : 'gray'} sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                    </Box>
                    <Box display={'flex'} onClick={handlelikeDislike.bind(this , false)} gap={1} alignItems={'center'}>
                        <Typography  variant="subtitle1" color={disliked ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(numDislike)}
                        </Typography>
                        <ThumbDownOffAltIcon color={disliked ? 'primary' : 'gray'} sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                    </Box>
                </Box>
                <Typography variant={'subtitle2'} color={'text.muted'}>{date}</Typography>
            </Grid>
        </Grid>
    )
}
export default Comment;