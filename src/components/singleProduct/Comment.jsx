import {Box, Grid, Typography} from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PersonIcon from '@mui/icons-material/Person';
import PN from "persian-number";
import {useAxios} from "src/hooks/useAxios";
import {useState} from "react";

const Comment = ({comment}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(comment.created_at.timestamp * 1000);

    //const [numLikeDislike, setNumLikeDislike] = useState({like: comment.likes_count, dislike: comment.diss_likes_count})
    //const [likeDislike, setLikeDislike] = useState({like: false, disLike: false})
    const [likeDislike , setLikeDislike] = useState('')
    const {callApi} = useAxios();
    const handlelikeDislike = (like) => {
        if((like && likeDislike === 'like')||(!like && likeDislike === 'dislike')){
            return
        }
        callApi({
            url: 'like-disslike-comment', method: 'post', token: true, data: {
                    comment: comment.id, like_vote: like, dislike_vote: !like
            }, successFunc: () => {
                // if (like && likeDislike !== 'like') {
                //     setLikeDislike('like');
                //     const newNum = {
                //         ...numLikeDislike,
                //         like: ++numLikeDislike.like,
                //         dislike: likeDislike.disLike ? --numLikeDislike.dislike : numLikeDislike.dislike
                //     };
                //     setNumLikeDislike(newNum);
                // } else if (!like && likeDislike !== 'dislike') {
                //     setLikeDislike('dislike');
                //     const newNum = {
                //         ...numLikeDislike,
                //         like: likeDislike.like ? --numLikeDislike.like : numLikeDislike.like,
                //         dislike: ++numLikeDislike.dislike
                //     };
                //     setNumLikeDislike(newNum);
                // }
                console.log(likeDislike )
                if (like) {
                    setLikeDislike('like');
                } else {
                    setLikeDislike('dislike');
                }
            }
        })


    }
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'space-between', rowGap: 3, width: '100%', px: {md: 3}}}>
            <Grid item md={10} xs={12}>
                <Typography sx={{mx: 1}} variant={'h6'}>{comment?.title}</Typography>
                <Box display={"flex"} alignItems={"center"} gap={.5} my={1} >
                    <PersonIcon fontSize={'small'} color={'gray'}/>
                    <Typography color={'text.muted'} variant="subtitle1">{comment?.user_alias_name}</Typography>
                </Box>
                {comment.suggest_me ? <Typography variant="subtitle2" sx={{color: 'primary.main', mb: 1}}>پیشنهاد می
                        کنم</Typography> :
                    <Typography variant="subtitle2" color={'error'} sx={{mb: 1}}>پیشنهاد نمیکنم</Typography>}
                <Typography lineHeight={2.5} variant="subtitle1" color={'text.muted'}>{comment.content}</Typography>
            </Grid>
            <Grid item md={2} xs={12} sx={{
                display: 'flex',
                alignItems: {xs: 'start', md: 'end'},
                flexDirection: {md: "column"},
                gap: 2,
                justifyContent: {xs: "space-between", md: 'center'}
            }}>
                <Box color={'gray.main'} display={'flex'} alignItems={'center'} gap={1}>
                    <Box onClick={handlelikeDislike.bind(this, true)} display={'flex'} gap={1} alignItems={'center'}>
                        <Typography variant="subtitle1" color={likeDislike ==='like' ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'like' ? comment.likes_count + 1 : comment.likes_count)}
                        </Typography>
                        <ThumbUpOffAltIcon color={likeDislike === 'like' ? 'primary' : 'gray'} sx={{cursor: 'pointer'}}
                                           fontSize={'10px'}/>
                    </Box>
                    <Box display={'flex'} onClick={handlelikeDislike.bind(this, false)} gap={1} alignItems={'center'}>
                        <Typography variant="subtitle1" color={likeDislike === 'dislike' ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'dislike' ? comment.diss_likes_count + 1 : comment.diss_likes_count)}
                        </Typography>
                        <ThumbDownOffAltIcon color={likeDislike === 'dislike' ? 'primary' : 'gray'} sx={{cursor: 'pointer'}}
                                             fontSize={'10px'}/>
                    </Box>
                </Box>
                <Typography variant={'subtitle2'} color={'text.muted'}>{date}</Typography>
            </Grid>
        </Grid>)
}
export default Comment;