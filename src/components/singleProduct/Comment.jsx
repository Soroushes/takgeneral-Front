import {Box, Typography} from "@mui/material";
import PN from "persian-number";
import {useAxios} from "src/hooks/useAxios";
import {useState} from "react";
import Rating from '@mui/material/Rating';
import PersonIcon from '../../assets/icons/profile-circle.svg';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const Comment = ({comment}) => {
    console.log(comment)
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(comment.created_at.timestamp * 1000);
    const [likeDislike, setLikeDislike] = useState('')
    const {callApi} = useAxios();
    const handlelikeDislike = (like) => {
        if ((like && likeDislike === 'like') || (!like && likeDislike === 'dislike')) {
            return
        }
        callApi({
            url: 'like-disslike-comment',
            method: 'post',
            token: true,
            data: {
                comment: comment.id,
                like_vote: like,
                dislike_vote: !like
            }, successFunc: () => {
                if (like) {
                    setLikeDislike('like');
                } else {
                    setLikeDislike('dislike');
                }
            } , errFunc:(err)=>{
                console.log(err);
            }
        })


    }
    return (
        <Box sx={{px: 2, mb: 4}}>
            <Box sx={{borderBottom: '1px solid #eee', pb: 1.5}} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'}><Rating readOnly size={'small'} sx={{mr: .5}} defaultValue={1}
                                                  max={1}/><Typography>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(comment.arzesh_rate)))}</Typography></Box>
                    <Box display={"flex"} alignItems={"center"} gap={.5}>
                        <PersonIcon fontSize={'small'} color={'gray'}/>
                        <Typography color={'text.muted'} variant="body2">{comment?.user_alias_name}</Typography>
                    </Box>
                    <Typography variant={'body2'} color={'text.muted'}>{date}</Typography>
                </Box>
                <Box color={'gray.main'} display={'flex'} justifyContent={'end'} alignItems={'center'} gap={1}>
                    <Box onClick={handlelikeDislike.bind(this, true)} display={'flex'} gap={1}
                         alignItems={'center'}>
                        <Typography variant="body1" color={likeDislike === 'like' ? 'success.main' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'like' ? comment.likes_count + 1 : comment.likes_count)}
                        </Typography>
                        <ThumbUpOffAltIcon color={likeDislike === 'like' ? 'success' : 'gray'} sx={{cursor: 'pointer'}}/>
                    </Box>
                    <Box display={'flex'} onClick={handlelikeDislike.bind(this, false)} gap={1}
                         alignItems={'center'}>
                        <Typography variant="body1" color={likeDislike === 'dislike' ? 'error' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'dislike' ? comment.diss_likes_count + 1 : comment.diss_likes_count)}
                        </Typography>
                        <ThumbDownOffAltIcon color={likeDislike === 'dislike' ? 'error' : 'gray'} sx={{cursor: 'pointer'}}/>
                    </Box>
                </Box>
            </Box>
            <Typography sx={{mt: 1}} lineHeight={2.5} variant="body1">{comment.content}</Typography>
        </Box>

    )
}
export default Comment;